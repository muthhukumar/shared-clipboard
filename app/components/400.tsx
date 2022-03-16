import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import Wrapper from './wrapper'

export default function Page400({
  children = null,
  statusCode = 400,
  message = 'Not found.',
  description = `The thing you're looking for doesn't exsit.`,
}: {
  statusCode?: number
  children?: React.ReactNode
  message?: string
  description?: string
}) {
  const bg = useColorModeValue('gray.100', 'gray.900')
  return (
    <Wrapper>
      <Box bg={bg} my={8} p={8}>
        <VStack alignItems={'flex-start'} spacing={4}>
          <h2 className="font-bold text-7xl">{statusCode}</h2>
          <Text fontSize={'lg'} fontWeight="bold">
            Ooops!
          </Text>
          <Text fontSize={'lg'} fontWeight="bold">
            {message}
          </Text>
          <Text fontSize={'lg'} colorScheme="blackAlpha">
            {description}
          </Text>
          {children}
        </VStack>
      </Box>
    </Wrapper>
  )
}
