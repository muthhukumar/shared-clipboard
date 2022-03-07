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
import { Vote, User } from '@prisma/client'
import { formatFieldErrorsNew } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

const VoteSchema = z.object({
  title: z.string().min(5),
  label: z.string().optional(),
})

export type ActionDataType = {
  values: z.infer<typeof VoteSchema> | Record<string, unknown>
  errors: Record<
    keyof z.infer<typeof VoteSchema>,
    {
      message: string
      isInvalid: boolean
    }
  >
}

export const action: ActionFunction = async ({ params, request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const id = params.id ? +params.id : undefined

  const actionData: ActionDataType = {
    values: {},
    errors: {
      title: { isInvalid: true, message: '' },
      label: { isInvalid: true, message: '' },
    },
  }

  const VoteContentData = {
    title: formData.get('title'),
    label: formData.get('label') ? formData.get('label') : '',
  }

  const VoteValidationResult = VoteSchema.safeParse(VoteContentData)

  if (!VoteValidationResult.success) {
    actionData.values = { ...VoteContentData }
    actionData.errors = {
      ...formatFieldErrorsNew(VoteContentData, VoteValidationResult.error.formErrors.fieldErrors),
    }

    return actionData
  }

  try {
    await prisma.vote.update({
      where: {
        id,
      },
      data: {
        title: VoteValidationResult.data.title,
        label: VoteValidationResult.data.label,
        userEmail: user.email,
      },
    })
    return redirect(`/habits-rank`)
  } catch (err) {
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
    throw json({ message: `The vote you're looking for doesn't exists` }, { status: 404 })
  }

  if (vote.userEmail !== user.email) {
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

  const initialRef = React.useRef<HTMLInputElement>()

  const transition = useTransition()

  const submitting = transition.state === 'submitting'

  const actionData = useActionData<ActionDataType>()

  const vote = useLoaderData<Vote>()

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={true} onClose={onClose} isCentered size="3xl">
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>Edit Vote</ModalHeader>
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
                  defaultValue={vote.title}
                  isInvalid={actionData?.errors.title.isInvalid}
                />
                <FormErrorMessage>{actionData?.errors.title.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={actionData?.errors.label.isInvalid} mt="2">
                <FormLabel>Label</FormLabel>
                <Input
                  // isRequired
                  placeholder="Label"
                  type="text"
                  name="label"
                  defaultValue={vote.label ?? ''}
                  isInvalid={actionData?.errors.label.isInvalid}
                />
                <FormErrorMessage>{actionData?.errors.title.message}</FormErrorMessage>
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
