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
  Select,
} from '@chakra-ui/react'
import { z } from 'zod'
import { User } from '@prisma/client'
import { formatFieldErrorsNew } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import moment from 'moment'

const TickListSchema = z.object({
  title: z.string().min(5).max(500),
  description: z.string().max(150).optional(),
  completed: z.boolean().optional(),
  dueDate: z.date().optional(),
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
    title: 'Tick List | New',
  }
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
    },
  }

  const tickListData: Partial<z.infer<typeof TickListSchema>> = {
    title: String(formData.get('title')),
    description: String(formData.get('description')),
    completed: formData.get('completed') === 'true' ? true : false,
    dueDate: formData.get('dueDate') ? new Date(String(formData.get('dueDate'))) : undefined,
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
    await prisma.tickList.create({
      data: { ...payload, userEmail: user.email },
    })

    return redirect(`/tick-list`)
  } catch {
    throw redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })
}

export default function TickListNew() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const initialRef = React.useRef<HTMLInputElement>()

  const transition = useTransition()

  const submitting = transition.state === 'submitting'

  const actionData = useActionData<ActionDataType>()

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
              <FormControl mt={4} isInvalid={actionData?.errors.completed.isInvalid}>
                <FormLabel>Completed</FormLabel>
                <Select
                  name="completed"
                  placeholder="Select option"
                  defaultValue="false"
                  isInvalid={actionData?.errors.completed.isInvalid}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </Select>
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
              <Button
                colorScheme="blue"
                mr={3}
                isLoading={submitting}
                loadingText={'Creating'}
                type="submit"
              >
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </Form>
        </ModalContent>
      </Modal>
    </>
  )
}
