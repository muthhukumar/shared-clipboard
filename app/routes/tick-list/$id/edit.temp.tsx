import * as React from 'react'
import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useActionData,
  useNavigate,
  useTransition,
  Form,
  json,
  useLoaderData,
  MetaFunction,
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
import { Label, TickList, User } from '@prisma/client'
import { formatFieldErrorsNew } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import moment from 'moment'
import Select from 'react-select'

const TickListSchema = z.object({
  title: z.string().min(5).max(500),
  description: z.string().max(150).optional(),
  completed: z.boolean().optional(),
  dueDate: z.date().optional(),
  labels: z.array(z.number()).optional(),
})

type ActionDataType = {
  values: z.infer<typeof TickListSchema> | Record<string, unknown>
  errors: Record<
    keyof z.infer<typeof TickListSchema>,
    {
      message: string
      isInvalid: boolean
    }
  >
}

export const meta: MetaFunction = () => {
  return {
    title: 'Tick List | Edit',
  }
}

const composeLabels = (labels: unknown) => {
  if (!Array.isArray(labels)) {
    return []
  }

  return labels.filter((label) => label).map((label) => +label)
}

export const action: ActionFunction = async ({ request, params }) => {
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
    },
  }

  const tickListData: Partial<z.infer<typeof TickListSchema>> = {
    title: String(formData.get('title')),
    description: String(formData.get('description')),
    completed: formData.get('completed') === 'true' ? true : false,
    dueDate: formData.get('dueDate') ? new Date(String(formData.get('dueDate'))) : undefined,
    labels: composeLabels(formData.getAll('labels')),
  }

  const todoValidationResult = TickListSchema.safeParse(tickListData)

  if (!todoValidationResult.success) {
    actionData.values = { ...tickListData }
    actionData.errors = {
      ...formatFieldErrorsNew(tickListData, todoValidationResult.error.formErrors.fieldErrors),
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
  }

  try {
    await prisma.tickList.update({
      where: {
        id: String(params.id),
      },
      data: {
        ...payload,
        userEmail: user.email,
        labels: {
          createMany: {
            data: todoValidationResult.data.labels?.map((label) => ({ labelId: label })) ?? [],
          },
        },
      },
    })

    return redirect(`/tick-list`)
  } catch {
    throw redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const tickList = await prisma.tickList.findUnique({
    where: {
      id: String(params.id),
    },
  })

  const labels = await prisma.label.findMany({
    where: {
      userEmail: user.email,
    },
  })

  if (!tickList) {
    throw json({ message: `The tickList you're looking for doesn't exists` }, { status: 404 })
  }

  if (tickList.userEmail !== user.email) {
    throw json(
      { message: `Unauthorized access. You're not allowed to see this tickList` },
      { status: 401 },
    )
  }

  return json({ tickList, labels })
}

export default function TickListEdit() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const initialRef = React.useRef<HTMLInputElement>()

  const transition = useTransition()

  const submitting = transition.state === 'submitting'

  const actionData = useActionData<ActionDataType>()

  const data = useLoaderData<{ tickList: TickList; labels: Label[] }>()

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={true} onClose={onClose} isCentered size="3xl">
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>Create new Tick List</ModalHeader>
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
                  defaultValue={data.tickList.title}
                  isInvalid={actionData?.errors.title.isInvalid}
                />
                <FormErrorMessage>{actionData?.errors.title.message}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={actionData?.errors.description.isInvalid}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  isRequired={false}
                  defaultValue={String(data.tickList.description) ?? ''}
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
                  options={data.labels.map((label) => {
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
                  defaultValue={String(data.tickList.completed) ?? 'false'}
                  isInvalid={actionData?.errors.completed.isInvalid}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </CSelect>
                <FormErrorMessage>{actionData?.errors.completed.message}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={actionData?.errors.dueDate.isInvalid}>
                <FormLabel htmlFor="isChecked">Due date</FormLabel>

                <Input
                  name="dueDate"
                  isRequired={false}
                  type="date"
                  defaultValue={moment(data.tickList.dueDate).format('YYYY-MM-DD')}
                  isInvalid={actionData?.errors.dueDate.isInvalid}
                />
                <FormErrorMessage>{actionData?.errors.dueDate.message}</FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                isLoading={submitting}
                loadingText={'Saving'}
                type="submit"
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </Form>
        </ModalContent>
      </Modal>
    </>
  )
}
