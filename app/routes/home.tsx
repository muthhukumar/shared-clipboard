// TODO - Handle 404 and error boundary and catch boundary

import { Label, LabelsOnTodo, Todo, User, Vote } from '@prisma/client'

import { HStack, StackDivider, Tag, useColorModeValue, VStack } from '@chakra-ui/react'
import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { Card, NoItems, TodoItem, VoteItem, Wrapper } from '~/components'
import { getToday } from '~/utils'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

type LoaderType = {
  todos: Array<
    Todo & {
      labels: (LabelsOnTodo & {
        Label: Label | null
      })[]
    }
  >
  votes: Array<Vote>
}

export const meta: MetaFunction = () => {
  return {
    title: 'Home',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const todos = await prisma.todo.findMany({
    where: {
      userEmail: user.email,
      dueDate: {
        equals: getToday(),
      },
    },
    include: {
      labels: {
        include: {
          Label: true,
        },
      },
    },
    orderBy: {
      completed: 'asc',
    },
  })

  const votes = await prisma.vote.findMany({
    where: {
      userEmail: user.email,
    },
    orderBy: {
      updatedAt: 'desc',
    },
    take: 5,
  })

  return json({ todos: todos ?? [], votes: votes ?? [] })
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
              <h2 className="text-2xl font-bold">Habits Rank</h2>
            </div>
            <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={borderColor} />}>
              {data.votes.map((vote) => (
                <VoteItem {...vote} key={vote.id} />
              ))}
            </VStack>
            {data.votes.length === 0 && <NoItems title="No habit rank votes found for today!!!" />}
          </Card>
        </VStack>
      </Wrapper>
    </div>
  )
}
