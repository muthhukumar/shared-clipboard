import { ClipboardContentSchema, ClipboardContentType } from '~/types/clipboard'
import { ActionType } from '~/types/common'
import { User } from '@prisma/client'

import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useActionData,
  useNavigate,
  MetaFunction,
  ErrorBoundaryComponent,
} from 'remix'
import { ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'

import { ClipboardFormProps } from '~/components/forms/clipboard'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/db.server'
import { ClipboardForm, DefaultCatchBoundary, DefaultErrorBoundary, Dialog } from '~/components'
import { getFinalFormData, getFormData } from '~/utils/form'
import { CatchBoundaryComponent } from '@remix-run/react/routeModules'

type ClipboardActionType = ActionType<ClipboardContentType>

export const meta: MetaFunction = () => {
  return {
    title: 'Clipboard | New',
  }
}

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const clipboardContentData = getFormData<ClipboardContentType>(formData, [
    { key: 'title' },
    { key: 'content' },
    { key: 'private', defaultValue: false },
  ])

  const clipboardContentValidationResult = ClipboardContentSchema.safeParse(clipboardContentData)

  if (!clipboardContentValidationResult.success) {
    return getFinalFormData<ClipboardContentType>(
      clipboardContentData,
      clipboardContentValidationResult.error.formErrors.fieldErrors,
    )
  }

  try {
    const clipboardContent = await prisma.clipboardContent.create({
      data: {
        content: clipboardContentValidationResult.data.content,
        title: clipboardContentValidationResult.data.title,
        private: clipboardContentValidationResult.data.private,
        userEmail: user.email,
      },
    })
    return redirect(`/clipboard/${clipboardContent.id}`)
  } catch (err) {
    // TODO - Handle this with the Errory boundary and catch boundary
    throw redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })
}

export default function ClipboardContentNew() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const actionData = useActionData<ClipboardActionType>()

  const clipboardFormProps: ClipboardFormProps = {
    ...actionData,
    submittingText: 'Creating',
    okButtonText: 'Create',
  }

  return (
    <Dialog isOpen={true} onClose={onClose}>
      <ModalHeader>Create new Clipboard content</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <ClipboardForm {...clipboardFormProps} />
      </ModalBody>
    </Dialog>
  )
}

export const CatchBoundary: CatchBoundaryComponent = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
