import { User, Vote } from '@prisma/client'

import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  VStack,
  useColorModeValue,
  StackDivider,
} from '@chakra-ui/react'
import { IoMdAdd } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'
import {
  useLoaderData,
  useSubmit,
  Form,
  json,
  LoaderFunction,
  MetaFunction,
  Outlet,
  useNavigate,
} from 'remix'

import { VoteItem, NoItems, Wrapper } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Vote',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  if (query) {
    const searchMatchResult = await prisma.vote.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
          mode: 'insensitive',
        },
      },
      orderBy: {
        upvotes: 'desc',
      },
    })

    return json(searchMatchResult)
  }

  const votes = await prisma.vote.findMany({
    where: {
      userEmail: user.email,
    },
    orderBy: {
      upvotes: 'desc',
    },
  })

  return json(votes)
}

export default function ClipbaordContent() {
  const votes = useLoaderData<Array<Vote>>()

  const submit = useSubmit()

  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const navigation = useNavigate()

  return (
    <div className="flex w-full py-8">
      <Wrapper>
        <Form
          className="flex items-center justify-between w-full"
          method="get"
          onChange={(target) => submit(target.currentTarget)}
        >
          <InputGroup size="md" width="81%">
            {/* eslint-disable-next-line react/no-children-prop*/}
            <InputLeftElement pointerEvents="none" children={<RiSearchLine color="gray.300" />} />
            <Input pr="4.5rem" type="text" name="q" placeholder="Search..." />
          </InputGroup>
          <Button
            leftIcon={<IoMdAdd />}
            variant="solid"
            w="17%"
            size="md"
            onClick={() => navigation('/habits-rank/new')}
          >
            Add
          </Button>
        </Form>

        <div className="p-4 mt-4 border rounded-md">
          <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={borderColor} />}>
            {votes.map((vote) => {
              return <VoteItem {...vote} key={vote.id} />
            })}
            {votes.length === 0 && <NoItems title="No Votees found. Please add some!!!" />}
          </VStack>
        </div>
      </Wrapper>
      <Outlet />
    </div>
  )
}
