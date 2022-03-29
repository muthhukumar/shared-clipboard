// TODO - Handle this with the Errory boundary and catch boundary

import { ActionType } from '~/types/common'
import { ShortURLSchema, ShortURLType } from '~/types/shorturl'
import { User } from '@prisma/client'
import { ShortURLPropsType } from '~/components/forms/shorturl'

import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useActionData,
  useNavigate,
  MetaFunction,
  ErrorBoundaryComponent,
  json,
} from 'remix'
import { ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import validator from 'validator'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/db.server'
import { ShortURLForm, Dialog, DefaultCatchBoundary, DefaultErrorBoundary } from '~/components'
import { getFinalFormData, getFormData } from '~/utils/form'
import { CatchBoundaryComponent } from '@remix-run/react/routeModules'

type ShortURLActionType = ActionType<ShortURLType>

export const meta: MetaFunction = () => {
  return {
    title: 'ShortURL | New',
  }
}

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const shortURLData = getFormData<ShortURLType>(formData, [
    { key: 'title' },
    { key: 'url' },
    { key: 'slug' },
  ])

  const shortURLValidationResult = ShortURLSchema.safeParse(shortURLData)

  if (!shortURLValidationResult.success) {
    return getFinalFormData<ShortURLType>(
      shortURLData,
      shortURLValidationResult.error.formErrors.fieldErrors,
    )
  }

  const isValidURL = validator.isURL(shortURLValidationResult.data.url)

  if (!isValidURL) {
    return getFinalFormData<ShortURLType>(shortURLData, { url: ['Please enter a valid URL'] })
  }

  const slug = shortURLValidationResult.data.slug

  const isExistingSlug = await prisma.shortURL.findUnique({ where: { slug } })

  if (isExistingSlug) {
    return getFinalFormData<ShortURLType>(shortURLData, {
      slug: [`Slug '${slug}' already exists. Please try different one.`],
    })
  }

  try {
    await prisma.shortURL.create({
      data: {
        slug,
        url: shortURLValidationResult.data.url,
        title: shortURLValidationResult.data.title,
        userEmail: user.email,
      },
    })
    return redirect(`/shorturl`)
  } catch {
    // TODO - Handle this with the Errory boundary and catch boundary
    throw json(
      {
        message: 'Something went wrong.',
        description: 'Unable to create new ShortURL. Please try again later.',
      },
      { status: 500 },
    )
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })
}

export default function ShortURLNew() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const actionData = useActionData<ShortURLActionType>()

  const shortURLFormProps: ShortURLPropsType = {
    ...actionData,
    submittingText: 'Creating',
    okButtonText: 'Create',
  }

  return (
    <Dialog isOpen={true} onClose={onClose}>
      <ModalHeader>Create new ShortURL</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <ShortURLForm {...shortURLFormProps} />
      </ModalBody>
    </Dialog>
  )
}

export const CatchBoundary: CatchBoundaryComponent = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
