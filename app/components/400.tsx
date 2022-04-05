import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import Wrapper from './wrapper'

export default function Page400({
  children = null,
  statusCode = 400,
  message = 'Not found.',
  description,
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
        <VStack spacing={4}>
          <h2 className="text-7xl font-bold" color="purple.300">
            {statusCode}
          </h2>
          <Text fontSize={'lg'} fontWeight="bold" color={'purple.600'}>
            Ooops!
          </Text>
          <Text fontSize={'lg'} fontWeight="bold" color="purple.600">
            {message}
          </Text>
          {description ? (
            <Text fontSize={'lg'} color="gray.600">
              {description}
            </Text>
          ) : null}
          {children}
        </VStack>
      </Box>
    </Wrapper>
  )
}
