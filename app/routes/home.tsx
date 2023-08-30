// TODO - Handle 404 and error boundary and catch boundary

import { HStack, StackDivider, Tag, useColorModeValue, VStack } from '@chakra-ui/react'
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

import {
  Card,
  DefaultCatchBoundary,
  DefaultErrorBoundary,
  NoItems,
  TodoItem,
  VoteItem,
  Wrapper,
} from '~/components'

import { getUserFriendsHabits, getUserHabits } from '~/models/vote.server'
import { getUserTodayTodos } from '~/models/todo'
import { getUser } from '~/models/user.server'

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Home',
    },
  ]
}

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request)

  const todos = await getUserTodayTodos(user)

  const habits = await getUserHabits(user, undefined, { take: 5 })

  const friendsHabits = await getUserFriendsHabits(user)

  return json({ todos, habits, friendsHabits })
}

export default function Index() {
  const data = useLoaderData<typeof loader>()

  const borderColor = useColorModeValue('gray.200', 'gray.800')

  const incompleteTask = data.todos.reduce((acc, current) => {
    if (current.completed) {
      return acc + 1
    }
    return acc
  }, 0)

  return (
    <div className="w-full py-8">
      <Wrapper>
        <VStack alignItems={'flex-start'} w="full" spacing={6}>
          <Card>
            <div className="mb-4 flex items-center justify-between border-b pb-2">
              <h2 className="text-2xl font-bold">
                <Link to="/todo">Todos</Link>
              </h2>
              <HStack>
                <Tag>{incompleteTask}</Tag>
                <span>/</span>
                <Tag colorScheme={'cyan'}>{data.todos.length} completed</Tag>
              </HStack>
            </div>
            <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={borderColor} />}>
              {data.todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  {...todo}
                  createdAt={new Date(todo.createdAt)}
                  updatedAt={new Date(todo.updatedAt)}
                />
              ))}
            </VStack>
            {data.todos.length === 0 && <NoItems title="No todos for today!!!" />}
          </Card>
          <Card>
            <div className="mb-4 flex items-center justify-between border-b pb-2">
              <h2 className="text-2xl font-bold">
                <Link to="/habits-rank">Habits</Link>
              </h2>
            </div>
            <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={borderColor} />}>
              {data.habits.map((habit) => (
                <VoteItem
                  key={habit.id}
                  {...habit}
                  editable
                  createdAt={new Date(habit.createdAt)}
                  updatedAt={new Date(habit.updatedAt ?? '')}
                />
              ))}
            </VStack>
            {data.habits.length === 0 && (
              <NoItems title="No habit rank habits found for today!!!" />
            )}
          </Card>
          <Card>
            <div className="mb-4 flex items-center justify-between border-b pb-2">
              <h2 className="text-2xl font-bold">Friend's Habits</h2>
            </div>
            <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={borderColor} />}>
              {data.friendsHabits.map((habit) => (
                <VoteItem
                  key={habit.id}
                  {...habit}
                  createdAt={new Date(habit.createdAt)}
                  updatedAt={new Date(habit.updatedAt ?? '')}
                />
              ))}
            </VStack>
            {data.friendsHabits.length === 0 && <NoItems title="No friends habits found." />}
          </Card>
        </VStack>
      </Wrapper>
    </div>
  )
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary = DefaultErrorBoundary
