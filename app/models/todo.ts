import type { User } from '@prisma/client'

import moment from 'moment'
import { getToday } from '~/utils'

import { prisma } from '../utils/prisma.server'

const enum TodoFilterByOptions {
  SHOW_ALL = 'showall',
  TODAY = 'today',
  UPCOMING = 'upcoming',
  OVERDUE = 'overdue',
}

const enum TodoSortByOptions {
  PRIORITY = 'priority',
  LAST_UPDATED = 'lastupdated',
  TITLE = 'title',
  LATEST = 'latest',
}

const getTodoFilterByOptions = (filterByOption: TodoFilterByOptions) => {
  const dueDate = moment().format('YYYY-MM-DD')

  const config = {
    [TodoFilterByOptions.UPCOMING]: {
      dueDate: {
        gt: dueDate,
      },
    },
    [TodoFilterByOptions.OVERDUE]: {
      dueDate: {
        lt: dueDate,
      },
    },
    [TodoFilterByOptions.TODAY]: {
      dueDate: {
        equals: dueDate,
      },
    },
    [TodoFilterByOptions.SHOW_ALL]: {},
  }

  if (!config[filterByOption]) {
    return {}
  }

  return config[filterByOption]
}

const getTodoSortOption = (sortOption: TodoSortByOptions) => {
  const config = {
    [TodoSortByOptions.LATEST]: {
      createdAt: 'desc',
    },
    [TodoSortByOptions.TITLE]: {
      title: 'asc',
    },
    [TodoSortByOptions.PRIORITY]: {
      priority: 'asc',
    },
    [TodoSortByOptions.LAST_UPDATED]: {
      updatedAt: 'desc',
    },
  }

  if (!config[sortOption]) {
    return {}
  }

  return config[sortOption]
}

const getUserTodos = async (
  user: User,
  query: string,
  addiontalQuery: ReturnType<typeof getTodoSortOption>,
  orderBy: ReturnType<typeof getTodoFilterByOptions>,
) => {
  if (query) {
    const searchMatchResult = await prisma.todo.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
          mode: 'insensitive',
        },
        ...addiontalQuery,
      },
      include: {
        labels: {
          include: {
            Label: true,
          },
        },
      },
      orderBy: {
        ...orderBy,
      },
    })

    return searchMatchResult
  }

  return prisma.todo.findMany({
    where: {
      userEmail: user.email,
      ...addiontalQuery,
    },
    include: {
      labels: {
        include: {
          Label: true,
        },
      },
    },
    orderBy: {
      ...orderBy,
    },
  })
}

const getUserTodayTodos = async (user: User) => {
  return prisma.todo.findMany({
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
}

export {
  getUserTodos,
  getTodoFilterByOptions,
  getTodoSortOption,
  TodoFilterByOptions,
  TodoSortByOptions,
  getUserTodayTodos,
}
