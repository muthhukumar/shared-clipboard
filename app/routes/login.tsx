import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react'
import { Form, LoaderFunction, useTransition } from 'remix'
import { authenticator } from '~/utils/auth.server'
import { BsGithub } from 'react-icons/bs'

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, { successRedirect: '/' })
  return null
}

export default function SimpleCard() {
  const transition = useTransition()

  const isAuthenticating =
    transition.state === 'submitting' &&
    transition.type === 'actionSubmission' &&
    transition.submission.action === '/auth/github'

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Form
        className="flex items-center justify-center flex-1 p-8"
        action="/auth/github"
        method="post"
      >
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'} mb="4">
            Sign in to your account
          </Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" disabled />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" disabled />
          </FormControl>
          <Stack spacing={4}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} disabled>
              Sign in
            </Button>
            <Text textAlign="center" color="gray.300">
              Or
            </Text>
            <Button
              isLoading={isAuthenticating}
              loadingText="Authenticating"
              colorScheme={'telegram'}
              variant={'solid'}
              leftIcon={<BsGithub />}
              type="submit"
            >
              Sign In (or up) with Github
            </Button>
          </Stack>
        </Stack>
      </Form>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}
