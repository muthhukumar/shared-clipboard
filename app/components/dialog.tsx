import * as React from 'react'
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react'

type DialogProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => any
}

export default function Dialog(props: DialogProps) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>{props.children}</ModalContent>
    </Modal>
  )
}
