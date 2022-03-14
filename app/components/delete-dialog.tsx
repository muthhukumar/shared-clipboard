import { ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import { Form, useNavigate, useTransition } from 'remix'
import Dialog from './dialog'

type DeleteDialogProps = {
  title: string
  message: string
}

export default function DeleteDialog(props: DeleteDialogProps) {
  const navigation = useNavigate()
  const onClose = () => navigation(-1)

  const transition = useTransition()

  const deleting = transition.state === 'submitting'

  return (
    <Dialog isOpen={true} onClose={onClose}>
      <ModalHeader>{props.title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{props.message}</ModalBody>

      <ModalFooter>
        <Button onClick={onClose} mr={3}>
          Cancel
        </Button>
        <Form method="delete">
          <Button colorScheme="red" isLoading={deleting} loadingText="Deleting" type="submit">
            Delete
          </Button>
        </Form>
      </ModalFooter>
    </Dialog>
  )
}
