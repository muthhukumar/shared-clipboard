// TODO - Handle this with the Errory boundary and catch boundary

import type { ActionType } from '~/types/common'
import type { TodoType } from '~/types/todo'
import { TodoSchema } from '~/types/todo'
import type { Priority, User } from '@prisma/client'
import type { TodoFormProps } from '~/components/forms/todo'

import type { ActionFunction, LoaderFunction, V2_MetaFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'

import { useActionData, useNavigate } from '@remix-run/react'
import { ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import moment from 'moment'

import { composePriority } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { TodoForm, Dialog, DefaultCatchBoundary, DefaultErrorBoundary } from '~/components'
import { getFinalFormData, getFormData } from '~/utils/form'

type TodoActionType = ActionType<TodoType>

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Todo | New',
    },
  ]
}

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const todoData = getFormData<TodoType>(formData, [
    { key: 'title' },
    { key: 'description' },
    { key: 'completed', defaultValue: false },
    { key: 'dueDate', compose: (value) => (value ? new Date(String(value)) : undefined) },
    { key: 'priority', compose: (value) => composePriority(String(value) as Priority) },
  ])

  const todoValidationResult = TodoSchema.safeParse(todoData)

  if (!todoValidationResult.success) {
    return getFinalFormData<TodoType>(todoData, todoValidationResult.error.formErrors.fieldErrors)
  }

  const payload = {
    description: todoValidationResult.data.description,
    title: todoValidationResult.data.title,
    completed: todoValidationResult.data.completed,
    // TODO - Find a way to fix this :(
    dueDate: todoValidationResult.data.dueDate
      ? moment(todoValidationResult.data.dueDate.toLocaleDateString()).format('YYYY-MM-DD')
      : moment().format('YYYY-MM-DD'),
    priority: todoValidationResult.data.priority,
  }

  try {
    await prisma.todo.create({
      data: {
        ...payload,
        userEmail: user.email,
      },
    })
    return redirect(`/todo`)
  } catch {
    // TODO - Handle this with the Errory boundary and catch boundary
    throw json(
      {
        message: 'Something went wrong.',
        description: 'Unable to create new Todo please try again later.',
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

export default function TodoNew() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const actionData = useActionData<TodoActionType>()

  const todoFormProps: TodoFormProps = {
    ...actionData,
    dueDate: {
      ...actionData?.dueDate,
      value: actionData?.dueDate ? new Date(actionData.dueDate.value ?? '') : undefined,
    },
    submittingText: 'Creating',
    okButtonText: 'Create',
  }

  return (
    <Dialog isOpen={true} onClose={onClose}>
      <ModalHeader>Create new Todo</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <TodoForm {...todoFormProps} />
      </ModalBody>
    </Dialog>
  )
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary = DefaultErrorBoundary
