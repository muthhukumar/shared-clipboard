// TODO - Handle this with the Errory boundary and catch boundary

import { ActionType } from '~/types/common'
import { TodoSchema, TodoType } from '~/types/todo'
import { Priority, User } from '@prisma/client'
import { TodoFormProps } from '~/components/forms/todo'

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
import moment from 'moment'

import { composePriority } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/db.server'
import { TodoForm, Dialog, DefaultCatchBoundary, DefaultErrorBoundary } from '~/components'
import { getFinalFormData, getFormData } from '~/utils/form'
import { CatchBoundaryComponent } from '@remix-run/react/routeModules'

type TodoActionType = ActionType<TodoType>

export const meta: MetaFunction = () => {
  return {
    title: 'Todo | New',
  }
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

export const CatchBoundary: CatchBoundaryComponent = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
