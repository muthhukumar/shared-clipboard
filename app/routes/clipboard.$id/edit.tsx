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
  Select,
} from '@chakra-ui/react'
import { z } from 'zod'
import { ClipboardContent, User } from '@prisma/client'
import { formatFieldErrorsNew } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

const ClipboardContentSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(5),
  private: z.boolean(),
})

type ActionDataType = {
  values: z.infer<typeof ClipboardContentSchema> | Record<string, unknown>
  errors: Record<
    keyof z.infer<typeof ClipboardContentSchema>,
    {
      message: string
      isInvalid: boolean
    }
  >
}

export const meta: MetaFunction = () => {
  return {
    title: 'Clipboard | Edit',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id ? +params.id : undefined

  const content = await prisma.clipboardContent.findUnique({ where: { id } })

  if (!content || content.userEmail !== user.email) {
    throw redirect('/clipboard')
  }

  const formData = await request.formData()

  const actionData: ActionDataType = {
    values: {},
    errors: {
      title: { isInvalid: true, message: '' },
      content: { isInvalid: true, message: '' },
      private: { isInvalid: true, message: '' },
    },
  }

  const clipboardContentData = {
    title: formData.get('title'),
    content: formData.get('content'),
    private: formData.get('private') === 'true' ? true : false,
  }

  const clipboardContentValidationResult = ClipboardContentSchema.safeParse(clipboardContentData)

  if (!clipboardContentValidationResult.success) {
    actionData.values = { ...clipboardContentData }
    actionData.errors = {
      ...formatFieldErrorsNew(
        clipboardContentData,
        clipboardContentValidationResult.error.formErrors.fieldErrors,
      ),
    }

    return actionData
  }

  try {
    const clipboardContent = await prisma.clipboardContent.update({
      where: { id },
      data: {
        content: clipboardContentValidationResult.data.content,
        title: clipboardContentValidationResult.data.title,
        private: clipboardContentValidationResult.data.private,
      },
    })
    return redirect(`/clipboard/${clipboardContent.id}`)
  } catch (err) {
    throw redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const clipboardContents = await prisma.clipboardContent.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  if (!clipboardContents) {
    throw json(
      { message: `The Clipboard content you're looking for doesn't exists` },
      { status: 404 },
    )
  }

  if (clipboardContents.userEmail !== user.email) {
    throw json(
      { message: `Unauthorized access. You're not allowed to see this content` },
      { status: 401 },
    )
  }

  return json(clipboardContents)
}

export default function ClipboardContentNew() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const initialRef = React.useRef<HTMLInputElement>()

  const transition = useTransition()

  const submitting = transition.state === 'submitting'

  const actionData = useActionData<ActionDataType>()

  const content = useLoaderData<ClipboardContent>()

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={true} onClose={onClose} isCentered size="xl">
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>Create new Clipboard content</ModalHeader>
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
                  defaultValue={content.title}
                />
                <FormErrorMessage>{actionData?.errors.title.message}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={actionData?.errors.content.isInvalid}>
                <FormLabel>Content</FormLabel>
                <Textarea
                  name="content"
                  placeholder="Content to copy"
                  isInvalid={actionData?.errors.content.isInvalid}
                  defaultValue={content.content}
                />
                <FormErrorMessage>{actionData?.errors.content.message}</FormErrorMessage>
              </FormControl>
              <FormControl mt={4} isInvalid={actionData?.errors.private.isInvalid}>
                <FormLabel>Is Private</FormLabel>
                <Select
                  name="private"
                  placeholder="Select option"
                  defaultValue={`${content.private}` ?? 'true'}
                  isInvalid={actionData?.errors.private.isInvalid}
                >
                  <option value="false">Public</option>
                  <option value="true">Private</option>
                </Select>
                <FormErrorMessage>{actionData?.errors.private.message}</FormErrorMessage>
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
