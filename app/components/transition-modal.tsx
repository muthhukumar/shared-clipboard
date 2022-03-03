import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react'
import { useTransition } from 'remix'

export default function TransitionModal() {
  const transition = useTransition()

  if (transition.state === 'loading' && transition.type === 'normalLoad') {
    return (
      <Modal isOpen={true} onClose={() => null}>
        <ModalOverlay />
        <ModalContent bg="transparent" shadow="none" w="100vw" h="full" maxH="100vh" m={0}>
          <div className="flex items-center justify-center h-screen">{/* <Spinner /> */}</div>
        </ModalContent>
      </Modal>
    )
  }

  return null
}
