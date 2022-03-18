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

  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <div className="flex w-full py-8">
      <Wrapper>
        <HStack>
          <SearchBar />
          <AddButton url="/habits-rank/new" />
        </HStack>
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

export const CatchBoundary: CatchBoundaryComponent = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
