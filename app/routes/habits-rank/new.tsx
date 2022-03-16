import { User } from '@prisma/client'
import { ActionType } from '~/types/common'

import { ActionFunction, LoaderFunction, redirect, useActionData, useNavigate } from 'remix'
import { ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { Dialog, HabitForm } from '~/components'
import { VoteFormProps } from '~/components/forms/vote'
import { getFinalFormData, getFormData } from '~/utils/form'
import { VoteSchema, VoteType } from '~/types/vote'

interface VoteActionType extends ActionType<VoteType> {}

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const voteData = getFormData<VoteType>(formData, [{ key: 'title', defaultValue: '' }])

  const voteValidationResult = VoteSchema.safeParse(voteData)

  if (!voteValidationResult.success) {
    return getFinalFormData<VoteType>(voteData, voteValidationResult.error.formErrors.fieldErrors)
  }

  try {
    await prisma.vote.create({
      data: {
        title: voteValidationResult.data.title,
        userEmail: user.email,
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

export default function VoteEdit() {
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
