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
import { Voti, User } from '@prisma/client'
import { formatFieldErrorsNew } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

const VotiSchema = z.object({
  title: z.string().min(5),
})

export type ActionDataType = {
  values: z.infer<typeof VotiSchema> | Record<string, unknown>
  errors: Record<
    keyof z.infer<typeof VotiSchema>,
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
    },
  }

  const votiContentData = {
    title: formData.get('title'),
  }

  const votiValidationResult = VotiSchema.safeParse(votiContentData)

  if (!votiValidationResult.success) {
    actionData.values = { ...votiContentData }
    actionData.errors = {
      ...formatFieldErrorsNew(votiContentData, votiValidationResult.error.formErrors.fieldErrors),
    }

    return actionData
  }

  try {
    await prisma.voti.update({
      where: {
        id,
      },
      data: {
        title: votiValidationResult.data.title,
        userEmail: user.email,
      },
    })
    return redirect(`/voti`)
  } catch (err) {
    return redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const voti = await prisma.voti.findUnique({
    where: {
      id: params.id ? +params.id : undefined,
    },
  })

  if (!voti) {
    throw json({ message: `The voti you're looking for doesn't exists` }, { status: 404 })
  }

  if (voti.userEmail !== user.email) {
    throw json(
      { message: `Unauthorized access. You're not allowed to see this voti` },
      { status: 401 },
    )
  }

  return json(voti)
}

export default function VotiEdit() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const initialRef = React.useRef<HTMLInputElement>()

  const transition = useTransition()

  const submitting = transition.state === 'submitting'

  const actionData = useActionData<ActionDataType>()

  const voti = useLoaderData<Voti>()

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={true} onClose={onClose} isCentered size="3xl">
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>Edit Voti</ModalHeader>
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
                  defaultValue={voti.title}
                  isInvalid={actionData?.errors.title.isInvalid}
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
