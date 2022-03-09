import * as React from 'react'
import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useActionData,
  useNavigate,
  useTransition,
  Form,
  MetaFunction,
  useLoaderData,
} from 'remix'
import {
  Button,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select as CSelect,
} from '@chakra-ui/react'
import { z } from 'zod'
import { Label, Priority, User } from '@prisma/client'
import { formatFieldErrorsNew } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import Select from 'react-select'

import moment from 'moment'

const TodoSchema = z.object({
  title: z.string().min(5).max(500),
  description: z.string().max(150).optional(),
  completed: z.boolean().optional(),
  dueDate: z.date().optional(),
  labels: z.array(z.number()).optional(),
  priority: z.nativeEnum(Priority).optional(),
})

type ActionDataType = {
  values: z.infer<typeof TodoSchema> | Record<string, unknown>
  errors: Record<
    keyof z.infer<typeof TodoSchema>,
    {
      message: string
      isInvalid: boolean
    }
  >
}

export const meta: MetaFunction = () => {
  return {
    title: 'Todo | New',
  }
}

const composeLabels = (labels: unknown) => {
  if (!Array.isArray(labels)) {
    return []
  }

  return labels.filter((label) => label).map((label) => +label)
}

export const composePriority = (priority: Priority) => {
  const priorities = {
    [Priority.HIGH]: Priority.HIGH,
    [Priority.LOW]: Priority.LOW,
    [Priority.MEDIUM]: Priority.MEDIUM,
    [Priority.NORMAL]: Priority.NORMAL,
  }

  if (!priorities[priority]) {
    return Priority.NORMAL
  }

  return priorities[priority]
}

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const actionData: ActionDataType = {
    values: {},
    errors: {
      title: { isInvalid: true, message: '' },
      description: { isInvalid: true, message: '' },
      completed: { isInvalid: true, message: '' },
      dueDate: { isInvalid: true, message: '' },
      labels: { isInvalid: true, message: '' },
      priority: { isInvalid: true, message: '' },
    },
  }

  const todoData: Partial<z.infer<typeof TodoSchema>> = {
    title: String(formData.get('title')),
    description: String(formData.get('description')),
    completed: formData.get('completed') === 'true' ? true : false,
    dueDate: formData.get('dueDate') ? new Date(String(formData.get('dueDate'))) : undefined,
    labels: composeLabels(formData.getAll('labels')),
    priority: composePriority(String(formData.get('priority')) as Priority),
  }

  const todoValidationResult = TodoSchema.safeParse(todoData)

  if (!todoValidationResult.success) {
    actionData.values = { ...todoData }
    actionData.errors = {
      ...formatFieldErrorsNew(todoData, todoValidationResult.error.formErrors.fieldErrors),
    }

    return actionData
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
    const labels = todoValidationResult.data.labels?.map((label) => ({ labelId: label })) ?? []

    if (labels.length > 0) {
      await prisma.todo.create({
        data: {
          ...payload,
          userEmail: user.email,
          // labels: {
          //   createMany: {
          //     data: todoValidationResult.data.labels?.map((label) => ({ labelId: label })) ?? [],
          //   },
          // },
        },
      })
    } else {
      await prisma.todo.create({
        data: {
          ...payload,
          userEmail: user.email,
        },
      })
    }

    return redirect(`/todo`)
  } catch {
    throw redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const labels = await prisma.label.findMany({
    where: {
      userEmail: user.email,
    },
  })
  return labels
}

export default function TodoNew() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const initialRef = React.useRef<HTMLInputElement>()

  const transition = useTransition()

  const submitting = transition.state === 'submitting'

  const actionData = useActionData<ActionDataType>()

  const labels = useLoaderData<Array<Label>>()

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={true} onClose={onClose} isCentered size="3xl">
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>Create new Todo</ModalHeader>
          <ModalCloseButton />
          <Form method="post">
            <ModalBody pb={6}>
              <FormControl isInvalid={actionData?.errors.title.isInvalid}>
                <FormLabel>Title</FormLabel>
                <Input
                  ref={initialRef}
                  // isRequired
                  placeholder="Title"
                  type="text"
                  name="title"
                  isInvalid={actionData?.errors.title.isInvalid}
                />
                <FormErrorMessage>{actionData?.errors.title.message}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={actionData?.errors.description.isInvalid}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  isRequired={false}
                  name="description"
                  placeholder="Description..."
                  isInvalid={actionData?.errors.description.isInvalid}
                />
                <FormErrorMessage>{actionData?.errors.description.message}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={actionData?.errors.labels.isInvalid}>
                <FormLabel htmlFor="labels">Labels</FormLabel>

                <Select
                  isMulti
                  name="labels"
                  options={labels.map((label) => {
                    return {
                      label: label.label,
                      value: label.id,
                    }
                  })}
                />
              </FormControl>

              <FormControl mt={4} isInvalid={actionData?.errors.completed.isInvalid}>
                <FormLabel>Completed</FormLabel>
                <CSelect
                  name="completed"
                  placeholder="Select option"
                  defaultValue="false"
                  isInvalid={actionData?.errors.completed.isInvalid}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </CSelect>
                <FormErrorMessage>{actionData?.errors.completed.message}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={actionData?.errors.priority.isInvalid}>
                <FormLabel>Priority</FormLabel>
                <CSelect
                  name="priority"
                  placeholder="Select priority"
                  defaultValue={Priority.NORMAL}
                  isInvalid={actionData?.errors.priority.isInvalid}
                >
                  <option value={Priority.LOW}>Low</option>
                  <option value={Priority.NORMAL}>Normal</option>
                  <option value={Priority.MEDIUM}>Medium</option>
                  <option value={Priority.HIGH}>High</option>
                </CSelect>
                <FormErrorMessage>{actionData?.errors.completed.message}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={actionData?.errors.dueDate.isInvalid}>
                <FormLabel htmlFor="isChecked">Due date</FormLabel>

                <Input
                  name="dueDate"
                  isRequired={false}
                  type="date"
                  isInvalid={actionData?.errors.dueDate.isInvalid}
                />
                <FormErrorMessage>{actionData?.errors.dueDate.message}</FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} mr={3}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                isLoading={submitting}
                loadingText={'Creating'}
                type="submit"
              >
                Create
              </Button>
            </ModalFooter>
          </Form>
        </ModalContent>
      </Modal>
    </>
  )
}
