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
} from '@chakra-ui/react'
import { z } from 'zod'
import { User } from '@prisma/client'
import { formatFieldErrorsNew } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

const LabelSchema = z.object({
  label: z.string().min(5).max(20),
})

type ActionDataType = {
  values: z.infer<typeof LabelSchema> | Record<string, unknown>
  errors: Record<
    keyof z.infer<typeof LabelSchema>,
    {
      message: string
      isInvalid: boolean
    }
  >
}

export const meta: MetaFunction = () => {
  return {
    title: 'Label | New',
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
      label: { isInvalid: true, message: '' },
    },
  }

  const labelData: Partial<z.infer<typeof LabelSchema>> = {
    label: String(formData.get('label')),
  }

  const labelValidationResult = LabelSchema.safeParse(labelData)

  if (!labelValidationResult.success) {
    actionData.values = { ...labelData }
    actionData.errors = {
      ...formatFieldErrorsNew(labelData, labelValidationResult.error.formErrors.fieldErrors),
    }

    return actionData
  }

  try {
    await prisma.label.create({
      data: { label: labelValidationResult.data.label, userEmail: user.email },
    })

    return redirect(`/`)
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
      <Modal initialFocusRef={initialRef} isOpen={true} onClose={onClose} isCentered size="xl">
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>Create new Label</ModalHeader>
          <ModalCloseButton />
          <Form method="post">
            <ModalBody pb={6}>
              <FormControl isInvalid={actionData?.errors.label.isInvalid}>
                <FormLabel>Label</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Label"
                  type="text"
                  name="label"
                  isInvalid={actionData?.errors.label.isInvalid}
                />
                <FormErrorMessage>{actionData?.errors.label.message}</FormErrorMessage>
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
