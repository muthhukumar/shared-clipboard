// TODO - Handle this with the Errory boundary and catch boundary

import type { ActionType } from '~/types/common'
import type { ShortURLType } from '~/types/shorturl'
import { ShortURLSchema } from '~/types/shorturl'
import type { ShortURL, User } from '@prisma/client'
import type { ShortURLPropsType } from '~/components/forms/shorturl'

import type {
  ActionFunction,
  ErrorBoundaryComponent,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import { json, redirect } from '@remix-run/node'

import { useActionData, useLoaderData, useNavigate } from '@remix-run/react'
import { ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import validator from 'validator'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { ShortURLForm, Dialog, DefaultCatchBoundary, DefaultErrorBoundary } from '~/components'
import { getFinalFormData, getFormData } from '~/utils/form'
import { composeNumberId } from '~/utils'

type ShortURLActionType = ActionType<ShortURLType>

export const meta: MetaFunction = () => {
  return {
    title: 'ShortURL | Edit',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = composeNumberId(params)

  const currentShortURL = await prisma.shortURL.findUnique({ where: { id } })

  if (!currentShortURL) {
    // TODO - Handle this with error and catch boundary
    throw json({ message: `The shortURL you're looking for doesn't exists` }, { status: 404 })
  }

  if (currentShortURL.userEmail !== user.email) {
    // TODO - Handle this with error and catch boundary
    throw json({ message: 'You are not authorized to edit this content' }, { status: 401 })
  }

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

  if (isExistingSlug && currentShortURL.slug !== slug && isExistingSlug.userEmail !== user.email) {
    return getFinalFormData<ShortURLType>(shortURLData, {
      slug: [`Slug '${slug}' already exists. Please try different one.`],
    })
  }

  try {
    await prisma.shortURL.update({
      where: { id },
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
        description: 'Unable to edit ShortURL. Please try again later.',
      },
      { status: 500 },
    )
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const shortURL = await prisma.shortURL.findUnique({
    where: {
      id: composeNumberId(params),
    },
  })

  if (!shortURL) {
    // TODO - Handle this with the error boundary and catch boundary
    throw json({ message: `The shortURL you're looking for doesn't exists` }, { status: 404 })
  }

  if (shortURL.userEmail !== user.email) {
    // TODO - Handle this with the error boundary and catch boundary
    throw json(
      { message: `Unauthorized access. You're not allowed to see this shortURL` },
      { status: 401 },
    )
  }

  return json(shortURL)
}

export default function ShortURLNew() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const actionData = useActionData<ShortURLActionType>()

  const shortURL = useLoaderData<ShortURL>()

  const shortURLFormProps: ShortURLPropsType = {
    title: {
      value: shortURL.title,
      ...actionData?.title,
    },
    url: {
      value: shortURL.url,
      ...actionData?.url,
    },
    slug: {
      value: shortURL.slug,
      ...actionData?.slug,
    },
    submittingText: 'Saving',
    okButtonText: 'Save',
  }

  return (
    <Dialog isOpen={true} onClose={onClose}>
      <ModalHeader>Edit ShortURL</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <ShortURLForm {...shortURLFormProps} />
      </ModalBody>
    </Dialog>
  )
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
