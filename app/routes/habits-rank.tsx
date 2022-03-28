import { User, Vote } from '@prisma/client'

import { VStack, useColorModeValue, StackDivider, HStack } from '@chakra-ui/react'
import {
  useLoaderData,
  json,
  LoaderFunction,
  MetaFunction,
  Outlet,
  ErrorBoundaryComponent,
} from 'remix'

import {
  VoteItem,
  NoItems,
  Wrapper,
  DefaultCatchBoundary,
  DefaultErrorBoundary,
  AddButton,
  SearchBar,
} from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { CatchBoundaryComponent } from '@remix-run/react/routeModules'

type LoaderType = {
  votes: Array<Vote>
  friendsVotes: Array<Vote>
}

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

  const friends = await prisma.friend.findMany({
    where: { status: 'Accepted', OR: [{ requestFrom: user.email }, { requestTo: user.email }] },
  })

  const allEmails = Array.from(
    new Set(friends.map((friend) => [friend.requestFrom, friend.requestTo]).flat()),
  )

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

  const friendsVotes = await prisma.vote.findMany({
    where: {
      userEmail: {
        in: allEmails,
      },
      AND: {
        NOT: {
          userEmail: user.email,
        },
      },
      shareWith: 'FRIENDS',
    },
  })

  console.log('friendsVotes', friendsVotes)

  return json({ votes, friendsVotes })
}

export default function ClipbaordContent() {
  const { votes, friendsVotes } = useLoaderData<LoaderType>()

  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <div className="flex w-full py-8">
      <Wrapper>
        <HStack>
          <SearchBar />
          <AddButton url="/habits-rank/new" />
        </HStack>
        <div className="py-4 mt-4 border rounded-md">
          <h2 className="px-4 pb-4 text-xl font-bold border-b">Personal</h2>
          <VStack
            px="4"
            alignItems={'flex-start'}
            divider={<StackDivider borderColor={borderColor} />}
          >
            {votes.map((vote) => {
              return <VoteItem {...vote} key={vote.id} editable />
            })}
            {votes.length === 0 && <NoItems title="No habits found. Please add some!!!" />}
          </VStack>
        </div>
        <div className="py-4 mt-4 border rounded-md">
          <h2 className="px-4 pb-4 text-xl font-bold border-b">Friend's Habits</h2>
          <VStack
            px="4"
            alignItems={'flex-start'}
            divider={<StackDivider borderColor={borderColor} />}
          >
            {friendsVotes.map((vote) => {
              return <VoteItem {...vote} key={vote.id} editable={false} />
            })}
            {friendsVotes.length === 0 && <NoItems title="No friends habits found." />}
          </VStack>
        </div>
      </Wrapper>
      <Outlet />
    </div>
  )
}

export const CatchBoundary: CatchBoundaryComponent = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
