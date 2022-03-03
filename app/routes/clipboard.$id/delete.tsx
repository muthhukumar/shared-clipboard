import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react'
import { User } from '@prisma/client'
import { ActionFunction, Form, MetaFunction, redirect, useNavigate, useTransition } from 'remix'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Clipboard | Delete',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id ? +params.id : undefined

  const isCurrentUsers = await prisma.clipboardContent.findUnique({
    where: {
      id,
    },
  })

  if (isCurrentUsers && isCurrentUsers.userEmail === user.email) {
    await prisma.clipboardContent.delete({
      where: {
        id,
      },
    })
  }

  return redirect('/clipboard')
}

export default function Delete() {
  const navigation = useNavigate()
  const onClose = () => navigation(-1)

  const transition = useTransition()

  const deleting = transition.state === 'submitting'

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Content</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure to delete this clipboard?</ModalBody>

        <ModalFooter>
          <Form method="delete">
            <Button
              mr={3}
              colorScheme="red"
              isLoading={deleting}
              loadingText="Deleting"
              type="submit"
            >
              Delete
            </Button>
          </Form>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
