import { HStack, StackDivider, Tag, useColorModeValue, VStack } from '@chakra-ui/react'
import { Birthday, Label, LabelsOnTodo, Todo, User, Vote } from '@prisma/client'
import moment from 'moment'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { Card, TodoItem, VoteItem, Wrapper } from '~/components'
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
  birthdays: Array<Birthday>
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

  const birthdays = await prisma.birthday.findMany({
    where: {
      userEmail: user.email,
      date: getToday(),
    },
  })

  return json({ todos: todos ?? [], votes: votes ?? [], birthdays: birthdays ?? [] })
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
              <h2 className="text-2xl font-bold">Today&apos;s Birthday</h2>
            </div>
            <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={borderColor} />}>
              {data.birthdays.map((birthday) => (
                <div key={birthday.id} className="flex items-center justify-between w-full">
                  <h2>{birthday.name}</h2>
                  <Tag>
                    <p>{moment(birthday.date).format('LL')}</p>
                  </Tag>
                </div>
              ))}
            </VStack>
          </Card>
          <Card>
            <div className="flex items-center justify-between pb-2 mb-4 border-b">
              <h2 className="text-2xl font-bold">Todos</h2>
              <HStack>
                <Tag>{incompleteTask}</Tag>
                <span>/</span>
                <Tag colorScheme={'cyan'}>{data.todos.length}</Tag>
                <p>completed</p>
              </HStack>
            </div>
            <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={borderColor} />}>
              {data.todos.map((todo) => (
                <TodoItem {...todo} key={todo.id} />
              ))}
            </VStack>
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
          </Card>
        </VStack>
      </Wrapper>
    </div>
  )
}
