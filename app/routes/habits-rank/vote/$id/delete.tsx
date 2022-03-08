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
    title: 'Todo | Delete',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id ? +params.id : undefined

  const isCurrentUsers = await prisma.vote.findUnique({
    where: {
      id,
    },
  })

  if (isCurrentUsers && isCurrentUsers.userEmail === user.email) {
    await prisma.vote.delete({
      where: {
        id,
      },
    })
  }

  return redirect('/habits-rank')
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
        <ModalHeader>Delete Vote</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure to delete this Vote?</ModalBody>

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
