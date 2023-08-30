import type { ActionType } from '~/types/common'
import type { ClipboardContent, User } from '@prisma/client'

import type { ActionFunction, LoaderFunction, V2_MetaFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'

import { useActionData, useLoaderData, useNavigate } from '@remix-run/react'
import { ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'

import { composeNumberId } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { DefaultCatchBoundary, DefaultErrorBoundary, Dialog } from '~/components'
import type { ClipboardContentType } from '~/types/clipboard'
import { ClipboardContentSchema } from '~/types/clipboard'
import { getFormData, getFinalFormData } from '~/utils/form'
import type { ClipboardFormProps } from '~/components/forms/clipboard'
import ClipboardForm from '~/components/forms/clipboard'

type ClipboardActionType = ActionType<ClipboardContentType>

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Clipboard | Edit',
    },
  ]
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = composeNumberId(params)

  const content = await prisma.clipboardContent.findUnique({ where: { id } })

  if (!content || content.userEmail !== user.email) {
    // TODO - Handle this with the Errory boundary and catch boundary
    throw redirect('/clipboard')
  }

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
    const clipboardContent = await prisma.clipboardContent.update({
      where: { id },
      data: {
        content: clipboardContentValidationResult.data.content,
        title: clipboardContentValidationResult.data.title,
        private: clipboardContentValidationResult.data.private,
      },
    })
    return redirect(`/clipboard/${clipboardContent.id}`)
  } catch (err) {
    // TODO - Handle this with the Errory boundary and catch boundary
    throw redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const clipboardContents = await prisma.clipboardContent.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  if (!clipboardContents) {
    // TODO - Handle this with the error boundary and catch boundary
    throw json(
      { message: `The Clipboard content you're looking for doesn't exists` },
      { status: 404 },
    )
  }

  if (clipboardContents.userEmail !== user.email) {
    // TODO - Handle this with the error boundary and catch boundary
    throw json(
      { message: `Unauthorized access. You're not allowed to see this content` },
      { status: 401 },
    )
  }

  return json(clipboardContents)
}

export default function ClipboardContentNew() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const actionData = useActionData<ClipboardActionType>()

  const content = useLoaderData<ClipboardContent>()

  const clipboardFormProps: ClipboardFormProps = {
    title: {
      value: content.title,
      ...actionData?.title,
    },
    content: {
      value: content.content,
      ...actionData?.content,
    },
    private: {
      value: content.private,
      ...actionData?.private,
    },
    submittingText: 'Saving',
    okButtonText: 'Save',
  }

  return (
    <Dialog isOpen={true} onClose={onClose}>
      <ModalHeader>Edit Clipboard content</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <ClipboardForm {...clipboardFormProps} />
      </ModalBody>
    </Dialog>
  )
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary = DefaultErrorBoundary
