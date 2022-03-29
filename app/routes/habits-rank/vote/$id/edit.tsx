import { Vote, User, ShareOption } from '@prisma/client'
import { ActionType } from '~/types/common'
import { VoteType, VoteSchema } from '~/types/vote'

import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useActionData,
  useNavigate,
  json,
  useLoaderData,
  ErrorBoundaryComponent,
} from 'remix'
import { ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'

import { composeNumberId } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/db.server'
import { DefaultCatchBoundary, DefaultErrorBoundary, Dialog, HabitForm } from '~/components'
import { VoteFormProps } from '~/components/forms/vote'
import { getFinalFormData, getFormData } from '~/utils/form'
import { CatchBoundaryComponent } from '@remix-run/react/routeModules'

export type VoteActionType = ActionType<VoteType>

export const action: ActionFunction = async ({ params, request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = composeNumberId(params)

  const formData = await request.formData()

  const todoData = getFormData<VoteType>(formData, [{ key: 'title' }, { key: 'shareWith' }])

  const VoteValidationResult = VoteSchema.safeParse(todoData)

  if (!VoteValidationResult.success) {
    return getFinalFormData<VoteType>(todoData, VoteValidationResult.error.formErrors.fieldErrors)
  }

  try {
    await prisma.vote.update({
      where: {
        id,
      },
      data: {
        title: VoteValidationResult.data.title,
        shareWith: VoteValidationResult.data.shareWith,
        userEmail: user.email,
      },
    })
    return redirect(`/habits-rank`)
  } catch (err) {
    // TODO - Handle this with the error and catch boundary
    return redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const vote = await prisma.vote.findUnique({
    where: {
      id: params.id ? +params.id : undefined,
    },
  })

  if (!vote) {
    // TODO - Handle this with the error and catch boundary
    throw json({ message: `The vote you're looking for doesn't exists` }, { status: 404 })
  }

  if (vote.userEmail !== user.email) {
    // TODO - Handle this with the error and catch boundary
    throw json(
      { message: `Unauthorized access. You're not allowed to see this vote` },
      { status: 401 },
    )
  }

  return json(vote)
}

export default function VoteEdit() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const actionData = useActionData<VoteActionType>()

  const vote = useLoaderData<Vote>()

  const habitFormProps: VoteFormProps = {
    title: {
      value: vote.title,
      ...actionData?.title,
    },
    shareWith: {
      value: vote.shareWith ?? ShareOption.PRIVATE,
      ...actionData?.shareWith,
    },
    submittingText: 'Saving',
    okButtonText: 'Save',
  }

  return (
    <Dialog isOpen={true} onClose={onClose}>
      <ModalHeader>Edit Habit</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <HabitForm {...habitFormProps} />
      </ModalBody>
    </Dialog>
  )
}

export const CatchBoundary: CatchBoundaryComponent = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
