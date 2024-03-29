import type { Vote } from '@prisma/client'

import { VStack, useColorModeValue, StackDivider, HStack } from '@chakra-ui/react'
import type { ErrorBoundaryComponent, LoaderFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'

import {
  VoteItem,
  NoItems,
  Wrapper,
  DefaultCatchBoundary,
  DefaultErrorBoundary,
  AddButton,
  SearchBar,
} from '~/components'
import { getUser } from '~/models/user.server'
import { getUserFriendsHabits, getUserHabits } from '~/models/vote.server'

type LoaderType = {
  habits: Array<Vote>
  friendsHabits: Array<Vote>
}

export const meta: MetaFunction = () => {
  return {
    title: 'Habits Rank',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  const habits = await getUserHabits(user, query)

  const friendsHabits = await getUserFriendsHabits(user, query)

  return json({ habits, friendsHabits })
}

export default function ClipbaordContent() {
  const { habits, friendsHabits } = useLoaderData<LoaderType>()

  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const archived = habits.filter((habit) => habit.isArchived)

  return (
    <div className="flex w-full py-8">
      <Wrapper>
        <HStack>
          <SearchBar />
          <AddButton url="/habits-rank/new" />
        </HStack>
        <div className="mt-4 rounded-md border py-4">
          <h2 className="border-b px-4 pb-4 text-xl font-bold">Personal</h2>
          <VStack
            px="4"
            alignItems={'flex-start'}
            divider={<StackDivider borderColor={borderColor} />}
          >
            {habits.map((vote) => {
              if (!vote.isArchived)
                return (
                  <VoteItem
                    key={vote.id}
                    {...vote}
                    editable
                    createdAt={new Date(vote.createdAt)}
                    updatedAt={new Date(vote.updatedAt ?? '')}
                  />
                )
              return null
            })}
            {habits.length === 0 && <NoItems title="No habits found. Please add some!!!" />}
          </VStack>
        </div>
        <div className="mt-4 rounded-md border py-4">
          <h2 className="border-b px-4 pb-4 text-xl font-bold">Archived Habits</h2>
          <VStack
            px="4"
            alignItems={'flex-start'}
            divider={<StackDivider borderColor={borderColor} />}
          >
            {archived.map((vote) => {
              if (vote.isArchived)
                return (
                  <VoteItem
                    key={vote.id}
                    {...vote}
                    editable
                    createdAt={new Date(vote.createdAt)}
                    updatedAt={new Date(vote.updatedAt ?? '')}
                  />
                )
              return null
            })}
            {archived.length === 0 && <NoItems title="No Archived habits found." />}
          </VStack>
        </div>
        <div className="mt-4 rounded-md border py-4">
          <h2 className="border-b px-4 pb-4 text-xl font-bold">Friend's Habits</h2>
          <VStack
            px="4"
            alignItems={'flex-start'}
            divider={<StackDivider borderColor={borderColor} />}
          >
            {friendsHabits.map((vote) => {
              return (
                <VoteItem
                  key={vote.id}
                  {...vote}
                  editable={false}
                  createdAt={new Date(vote.createdAt)}
                  updatedAt={new Date(vote.updatedAt ?? '')}
                />
              )
            })}
            {friendsHabits.length === 0 && <NoItems title="No friends habits found." />}
          </VStack>
        </div>
      </Wrapper>
      <Outlet />
    </div>
  )
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
