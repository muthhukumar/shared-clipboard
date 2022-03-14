import * as React from 'react'
import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useActionData,
  useNavigate,
  json,
  useLoaderData,
  MetaFunction,
} from 'remix'
import { ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import { z } from 'zod'
import { ClipboardContent, User } from '@prisma/client'
import { formatFieldErrorsNew } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import ClipboardForm, { ClipboardFormProps } from '~/components/forms/clipboard'
import { Dialog } from '~/components'

const ClipboardContentSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(5),
  private: z.boolean(),
})

type ActionDataType = {
  values: z.infer<typeof ClipboardContentSchema> | Record<string, unknown>
  errors: Record<
    keyof z.infer<typeof ClipboardContentSchema>,
    {
      message: string
      isInvalid: boolean
    }
  >
}

export const meta: MetaFunction = () => {
  return {
    title: 'Clipboard | Edit',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id ? +params.id : undefined

  const content = await prisma.clipboardContent.findUnique({ where: { id } })

  if (!content || content.userEmail !== user.email) {
    throw redirect('/clipboard')
  }

  const formData = await request.formData()

  const actionData: ActionDataType = {
    values: {},
    errors: {
      title: { isInvalid: true, message: '' },
      content: { isInvalid: true, message: '' },
      private: { isInvalid: true, message: '' },
    },
  }

  const clipboardContentData = {
    title: formData.get('title'),
    content: formData.get('content'),
    private: formData.get('private') === 'true' ? true : false,
  }

  const clipboardContentValidationResult = ClipboardContentSchema.safeParse(clipboardContentData)

  if (!clipboardContentValidationResult.success) {
    actionData.values = { ...clipboardContentData }
    actionData.errors = {
      ...formatFieldErrorsNew(
        clipboardContentData,
        clipboardContentValidationResult.error.formErrors.fieldErrors,
      ),
    }

    return actionData
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
    throw json(
      { message: `The Clipboard content you're looking for doesn't exists` },
      { status: 404 },
    )
  }

  if (clipboardContents.userEmail !== user.email) {
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

  const actionData = useActionData<ActionDataType>()

  const content = useLoaderData<ClipboardContent>()

  const clipboardFormProps: ClipboardFormProps = {
    title: {
      invalid: actionData?.errors.title.isInvalid,
      errorMessage: actionData?.errors.title.message,
      value: content.title,
    },
    content: {
      invalid: actionData?.errors.content.isInvalid,
      errorMessage: actionData?.errors.content.message,
      value: content.content,
    },
    private: {
      invalid: actionData?.errors.private.isInvalid,
      errorMessage: actionData?.errors.private.message,
      value: content.private,
    },
    submittingText: 'Saving',
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
