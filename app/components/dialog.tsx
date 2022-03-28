import * as React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useColorModeValue,
  ThemingProps,
} from '@chakra-ui/react'

type DialogProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => any
  size?: ThemingProps<'Modal'>['size']
}

export default function Dialog(props: DialogProps) {
  const bgColor = useColorModeValue('brand.lightWhite', 'brand.100')

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered size={props.size ?? 'xl'}>
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
      <ModalContent bg={bgColor}>{props.children}</ModalContent>
    </Modal>
  )
}
