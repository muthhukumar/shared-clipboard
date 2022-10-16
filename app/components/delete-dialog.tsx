import { ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import { Form, useNavigate, useTransition } from '@remix-run/react'
import Dialog from './dialog'

type DeleteDialogProps = {
  title: string
  message: string
  actionText?: string
  actionLoadingText?: string
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
          <Button
            colorScheme="red"
            isLoading={deleting}
            loadingText={props.actionLoadingText ? props.actionLoadingText : 'Deleting'}
            type="submit"
          >
            {props.actionText ? props.actionText : 'Delete'}
          </Button>
        </Form>
      </ModalFooter>
    </Dialog>
  )
}
