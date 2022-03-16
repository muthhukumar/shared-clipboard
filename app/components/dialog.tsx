import * as React from 'react'
import { Modal, ModalOverlay, ModalContent, useColorModeValue } from '@chakra-ui/react'

type DialogProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => any
}

export default function Dialog(props: DialogProps) {
  const bgColor = useColorModeValue('brand.lightWhite', 'brand.100')

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered size="xl">
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
      <ModalContent bg={bgColor}>{props.children}</ModalContent>
    </Modal>
  )
}
