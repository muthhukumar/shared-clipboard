import * as React from 'react'
import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useActionData,
  useNavigate,
  useTransition,
  Form,
} from 'remix'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react'
import { z } from 'zod'
import { User } from '@prisma/client'
import { formatFieldErrorsNew } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import moment from 'moment'

const BirthdaySchema = z.object({
  name: z.string().min(5),
  date: z.date(),
})

export type ActionDataType = {
  values: z.infer<typeof BirthdaySchema> | Record<string, unknown>
  errors: Record<
    keyof z.infer<typeof BirthdaySchema>,
    {
      message: string
      isInvalid: boolean
    }
  >
}

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const actionData: ActionDataType = {
    values: {},
    errors: {
      name: { isInvalid: true, message: '' },
      date: { isInvalid: true, message: '' },
    },
  }

  const birthdayContentData = {
    name: formData.get('name'),
    date: new Date(String(formData.get('date'))),
  }

  const birthdayValidationResult = BirthdaySchema.safeParse(birthdayContentData)

  if (!birthdayValidationResult.success) {
    actionData.values = { ...birthdayContentData }
    actionData.errors = {
      ...formatFieldErrorsNew(
        birthdayContentData,
        birthdayValidationResult.error.formErrors.fieldErrors,
      ),
    }

    return actionData
  }

  try {
    await prisma.birthday.create({
      data: {
        name: birthdayValidationResult.data.name,
        date: moment(birthdayValidationResult.data.date).format('YYYY-MM-DD'),
        userEmail: user.email,
      },
    })
    return redirect(`/birthday`)
  } catch (err) {
    return redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })
}

export default function VoteEdit() {
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
          <ModalHeader>Add new Birthday</ModalHeader>
          <ModalCloseButton />
          <Form method="post">
            <ModalBody pb={6}>
              <FormControl isInvalid={actionData?.errors.name.isInvalid}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  defaultValue={actionData?.values.name ? String(actionData?.values.name) : ''}
                  name="name"
                  placeholder="Enter name..."
                  isInvalid={actionData?.errors.name.isInvalid}
                />
                <FormErrorMessage>{actionData?.errors.name.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={actionData?.errors.date.isInvalid} mt="2">
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  name="date"
                  placeholder="date"
                  isInvalid={actionData?.errors.date.isInvalid}
                  defaultValue={moment(String(actionData?.values.date)).format('YYYY-MM-DD')}
                />
                <FormErrorMessage>{actionData?.errors.date.message}</FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} mr={3}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                isLoading={submitting}
                loadingText={'Saving'}
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
