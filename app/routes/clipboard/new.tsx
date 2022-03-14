import { ClipboardContentSchema, ClipboardFormProps } from '~/components/forms/clipboard'

import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useActionData,
  useNavigate,
  MetaFunction,
} from 'remix'
import { ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import { z } from 'zod'
import { User } from '@prisma/client'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { ClipboardForm, Dialog } from '~/components'
import { getFinalFormData, getFormData } from '~/utils/form'

type ActionType = {
  [key in keyof z.infer<typeof ClipboardContentSchema>]: {
    value: z.infer<typeof ClipboardContentSchema>[key]
    errorMessage: string | ''
    invalid: boolean
  }
}

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

  const clipboardContentData = getFormData<z.infer<typeof ClipboardContentSchema>>(formData, [
    { key: 'title' },
    { key: 'content' },
    { key: 'private', defaultValue: false },
  ])

  const clipboardContentValidationResult = ClipboardContentSchema.safeParse(clipboardContentData)

  if (!clipboardContentValidationResult.success) {
    return getFinalFormData<z.infer<typeof ClipboardContentSchema>>(
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

  const actionData = useActionData<ActionType>()

  const clipboardFormProps: ClipboardFormProps = {
    ...actionData,
    submittingText: 'Creating',
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
