import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react'
import { useTransition } from '@remix-run/react'
import { Spinner } from '.'

export default function TransitionModal() {
  const transition = useTransition()

  if (transition.state === 'loading' && transition.type === 'normalLoad') {
    return (
      <Modal isOpen={true} onClose={() => null}>
        <ModalOverlay />
        <ModalContent bg="transparent" shadow="none" m={0}>
          <Spinner />
        </ModalContent>
      </Modal>
    )
  }

  return null
}
