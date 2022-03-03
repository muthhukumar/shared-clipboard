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
} from '@chakra-ui/react'
import { z } from 'zod'
import { User } from '@prisma/client'
import { formatFieldErrorsNew } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

const NoteSchema = z.object({
  title: z.string().min(5),
  note: z.string().min(5),
})

type ActionDataType = {
  values: z.infer<typeof NoteSchema> | Record<string, unknown>
  errors: Record<
    keyof z.infer<typeof NoteSchema>,
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
      title: { isInvalid: true, message: '' },
      note: { isInvalid: true, message: '' },
    },
  }

  const notesData = {
    title: formData.get('title'),
    note: formData.get('note'),
  }

  const notesValidationResult = NoteSchema.safeParse(notesData)

  if (!notesValidationResult.success) {
    actionData.values = { ...notesData }
    actionData.errors = {
      ...formatFieldErrorsNew(notesData, notesValidationResult.error.formErrors.fieldErrors),
    }

    return actionData
  }

  try {
    const note = await prisma.note.create({
      data: {
        note: notesValidationResult.data.note,
        title: notesValidationResult.data.title,
        userEmail: user.email,
      },
    })
    return redirect(`/notes/${note.id}`)
  } catch (err) {
    throw redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })
}

export default function NoteNew() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const initialRef = React.useRef<HTMLInputElement>()

  const transition = useTransition()

  const submitting = transition.state === 'submitting'

  const actionData = useActionData<ActionDataType>()

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={true} onClose={onClose} isCentered size="2xl">
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>Create new note</ModalHeader>
          <ModalCloseButton />
          <Form method="post">
            <ModalBody pb={6}>
              <FormControl isInvalid={actionData?.errors.title.isInvalid}>
                <FormLabel>Title</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Title"
                  type="text"
                  name="title"
                  isInvalid={actionData?.errors.title.isInvalid}
                />
                <FormErrorMessage>{actionData?.errors.title.message}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={actionData?.errors.note.isInvalid}>
                <FormLabel>Note</FormLabel>
                <Textarea
                  name="note"
                  placeholder="Write your note here."
                  isInvalid={actionData?.errors.note.isInvalid}
                  noOfLines={5}
                  size="lg"
                />
                <FormErrorMessage>{actionData?.errors.note.message}</FormErrorMessage>
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
