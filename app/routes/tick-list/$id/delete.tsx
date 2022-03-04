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
    title: 'Tick List | Delete',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = String(params.id)

  const isCurrentUsers = await prisma.tickList.findUnique({
    where: {
      id,
    },
  })

  if (isCurrentUsers && isCurrentUsers.userEmail === user.email) {
    await prisma.tickList.delete({
      where: {
        id,
      },
    })
  }

  return redirect('/tick-list')
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
        <ModalHeader>Delete Tick List</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure to delete this Tick List?</ModalBody>

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
