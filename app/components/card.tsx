import type { FlexboxProps } from '@chakra-ui/react'
import { Flex, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export default function Card({ children, ...props }: { children: React.ReactNode } & FlexboxProps) {
  const bg = useColorModeValue('white', 'black')
  return (
    <Flex
      flexDir="column"
      w="full"
      bg={bg}
      rounded="md"
      shadow="md"
      borderColor="whiteAlpha"
      borderWidth="0.5px"
      overflow="hidden"
      p="4"
      {...props}
    >
      {children}
    </Flex>
  )
}
