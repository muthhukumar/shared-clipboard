import { Modal, Spinner, ModalOverlay, ModalContent } from '@chakra-ui/react'
import { useTransition } from 'remix'

export default function TransitionModal() {
  const transition = useTransition()

  if (transition.state === 'idle') {
    return null
  }

  return (
    <Modal isOpen={true} onClose={() => null}>
      <ModalOverlay />
      <ModalContent bg="transparent" shadow="none" w="100vw" h="full" maxH="100vh" m={0}>
        <Spinner speed="0.65s" size="xl" position="fixed" bottom="8" right="8" />
      </ModalContent>
    </Modal>
  )
}
