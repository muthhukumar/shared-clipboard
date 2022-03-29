// TODO - Handle 404 and error boundary and catch boundary

import { Label, LabelsOnTodo, Todo, Vote } from '@prisma/client'

import { HStack, StackDivider, Tag, useColorModeValue, VStack } from '@chakra-ui/react'
import { ErrorBoundaryComponent, json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import {
  Card,
  DefaultCatchBoundary,
  DefaultErrorBoundary,
  NoItems,
  TodoItem,
  VoteItem,
  Wrapper,
} from '~/components'

import { CatchBoundaryComponent } from '@remix-run/react/routeModules'
import { getUserFriendsHabits, getUserHabits } from '~/models/vote.server'
import { getUserTodayTodos } from '~/models/todo.server'
import { getUser } from '~/models/user.server'

type LoaderType = {
  todos: Array<
    Todo & {
      labels: (LabelsOnTodo & {
        Label: Label | null
      })[]
    }
  >
  habits: Array<Vote>
  friendsHabits: Array<Vote>
}

export const meta: MetaFunction = () => {
  return {
    title: 'Home',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)

  const todos = await getUserTodayTodos(user)

  const habits = await getUserHabits(user, undefined, { take: 5 })

  const friendsHabits = await getUserFriendsHabits(user)

  return json({ todos, habits, friendsHabits })
}

export default function Index() {
  const data = useLoaderData<LoaderType>()

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
            <div className="flex items-center justify-between pb-2 mb-4 border-b">
              <h2 className="text-2xl font-bold">Todos</h2>
              <HStack>
                <Tag>{incompleteTask}</Tag>
                <span>/</span>
                <Tag colorScheme={'cyan'}>{data.todos.length} completed</Tag>
              </HStack>
            </div>
            <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={borderColor} />}>
              {data.todos.map((todo) => (
                <TodoItem {...todo} key={todo.id} />
              ))}
            </VStack>
            {data.todos.length === 0 && <NoItems title="No todos for today!!!" />}
          </Card>
          <Card>
            <div className="flex items-center justify-between pb-2 mb-4 border-b">
              <h2 className="text-2xl font-bold">Habits</h2>
            </div>
            <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={borderColor} />}>
              {data.habits.map((habit) => (
                <VoteItem {...habit} key={habit.id} editable />
              ))}
            </VStack>
            {data.habits.length === 0 && (
              <NoItems title="No habit rank habits found for today!!!" />
            )}
          </Card>
          <Card>
            <div className="flex items-center justify-between pb-2 mb-4 border-b">
              <h2 className="text-2xl font-bold">Friend's Habits</h2>
            </div>
            <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={borderColor} />}>
              {data.friendsHabits.map((habit) => (
                <VoteItem {...habit} key={habit.id} />
              ))}
            </VStack>
            {data.friendsHabits.length === 0 && <NoItems title="No friends habits found." />}
          </Card>
        </VStack>
      </Wrapper>
    </div>
  )
}

export const CatchBoundary: CatchBoundaryComponent = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
