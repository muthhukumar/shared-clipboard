import { Box, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import GoToHome from './go-to-home'
import Wrapper from './wrapper'

export default function Page500() {
  const bg = useColorModeValue('gray.100', 'gray.900')
  return (
    <Wrapper>
      <Box p="8" my="8" borderRadius={'md'} bg={bg}>
        <VStack spacing={4}>
          <Heading fontWeight={'bold'} fontSize={'8xl'} color="purple.300">
            500
          </Heading>
          <Text fontSize={'3xl'} fontWeight="bold" color={'purple.600'}>
            Sorry, unexpected error occurred
          </Text>
          <Text color="gray.600">We are working on fixing the problem. Be back soon.</Text>
          <GoToHome />
        </VStack>
      </Box>
    </Wrapper>
  )
}
