import type { User } from '@prisma/client'
import { ShareOption } from '@prisma/client'
import type { ActionType } from '~/types/common'

import type { ActionFunction, ErrorBoundaryComponent, LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { useActionData, useNavigate } from '@remix-run/react'
import { ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { DefaultCatchBoundary, DefaultErrorBoundary, Dialog, HabitForm } from '~/components'
import type { VoteFormProps } from '~/components/forms/vote'
import { getFinalFormData, getFormData } from '~/utils/form'
import type { VoteType } from '~/types/vote'
import { VoteSchema } from '~/types/vote'

interface VoteActionType extends ActionType<VoteType> {}

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const voteData = getFormData<VoteType>(formData, [
    { key: 'title', defaultValue: '' },
    { key: 'shareWith', defaultValue: ShareOption.PRIVATE },
  ])

  const voteValidationResult = VoteSchema.safeParse(voteData)

  if (!voteValidationResult.success) {
    return getFinalFormData<VoteType>(voteData, voteValidationResult.error.formErrors.fieldErrors)
  }

  try {
    await prisma.vote.create({
      data: {
        title: voteValidationResult.data.title,
        userEmail: user.email,
        shareWith: voteValidationResult.data.shareWith,
      },
    })
    // return json({ success: true, data: null, errorMessage: '' })
    return redirect('/habits-rank')
  } catch (err) {
    // TODO - Handle this with catch and error boundary
    // return json({ success: false, data: null, errorMessage: 'Something went wrong.' })
    return redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })
}

export default function VoteNew() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const actionData = useActionData<VoteActionType>()

  const habitFormProps: VoteFormProps = {
    ...actionData,
    submittingText: 'Creating',
    okButtonText: 'Create',
  }

  return (
    <Dialog isOpen={true} onClose={onClose}>
      <ModalHeader>Create new Habit</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <HabitForm {...habitFormProps} />
      </ModalBody>
    </Dialog>
  )
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
