import { Modal, ModalOverlay } from '@chakra-ui/react'
import { useTransition } from 'remix'
import { Spinner } from '.'

export default function TransitionModal() {
  const transition = useTransition()

  if (transition.state === 'loading' && transition.type === 'normalLoad') {
    return (
      <Modal isOpen={true} onClose={() => null}>
        <ModalOverlay />
        <Spinner />
      </Modal>
    )
  }

  return null
}
