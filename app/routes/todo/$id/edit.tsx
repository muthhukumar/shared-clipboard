import { Priority, User } from '@prisma/client'
import { ActionType } from '~/types/common'
import { TodoSchema, TodoType } from '~/types/todo'

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
import moment from 'moment'

import { composePriority } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { getFinalFormData, getFormData } from '~/utils/form'
import { Dialog } from '~/components'
import TodoForm, { TodoFormProps } from '~/components/forms/todo'

type TodoActionType = ActionType<TodoType>

export const meta: MetaFunction = () => {
  return {
    title: 'Todo | Edit',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id

  const todo = await prisma.todo.findUnique({ where: { id } })

  if (!todo) {
    // TODO - Handle this with error and catch boundary
    throw redirect('/todo')
  }

  if (todo.userEmail !== user.email) {
    // TODO - Handle this with error and catch boundary
    throw json({ message: 'You are not authorized to edit this content' }, { status: 401 })
  }

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
    dueDate: todoValidationResult.data.dueDate
      ? moment(todoValidationResult.data.dueDate.toLocaleDateString()).format('YYYY-MM-DD')
      : moment().format('YYYY-MM-DD'),
    priority: todoValidationResult.data.priority,
  }

  try {
    await prisma.todo.update({
      where: {
        id: String(params.id),
      },
      data: { ...payload, userEmail: user.email },
    })

    return redirect(`/todo`)
  } catch {
    throw redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const todo = await prisma.todo.findUnique({
    where: {
      id: String(params.id),
    },
  })

  if (!todo) {
    // TODO - Handle this with the error boundary and catch boundary
    throw json({ message: `The todo you're looking for doesn't exists` }, { status: 404 })
  }

  if (todo.userEmail !== user.email) {
    // TODO - Handle this with the error boundary and catch boundary
    throw json(
      { message: `Unauthorized access. You're not allowed to see this todo` },
      { status: 401 },
    )
  }

  return json(todo)
}

export default function TodoEdit() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const actionData = useActionData<TodoActionType>()

  const todo = useLoaderData<TodoType>()

  const todoFormProps: TodoFormProps = {
    title: {
      value: todo.title,
      ...actionData?.title,
    },
    description: {
      value: todo.description,
      ...actionData?.description,
    },
    completed: {
      value: todo.completed,
      ...actionData?.completed,
    },
    dueDate: {
      value: todo.dueDate,
      ...actionData?.dueDate,
    },
    priority: {
      value: todo.priority,
      ...actionData?.priority,
    },
    submittingText: 'Saving',
    okButtonText: 'Save',
  }

  return (
    <Dialog isOpen={true} onClose={onClose}>
      <ModalHeader>Edit Todo</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <TodoForm {...todoFormProps} />
      </ModalBody>
    </Dialog>
  )
}
