import { InputGroup, InputLeftAddon, Input, VStack, Avatar } from '@chakra-ui/react'
import { User } from '@prisma/client'
import { LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { authenticator } from '~/utils/auth.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Profile | General',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.isAuthenticated(request, { failureRedirect: '/login' })
}

export default function General() {
  const user = useLoaderData<User>()
  return (
    <div>
      <VStack spacing={8}>
        {user.profileUrl && (
          <Avatar name={user.name ?? user.email[0]} src={user.profileUrl} size="2xl" />
        )}
        <InputGroup>
          {/*  eslint-disable-next-line react/no-children-prop */}
          <InputLeftAddon children="Email" />
          <Input type="text" placeholder="Your email" defaultValue={user.email} />
        </InputGroup>
      </VStack>
    </div>
  )
}
