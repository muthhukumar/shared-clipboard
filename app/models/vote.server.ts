import type { User } from '@prisma/client'
import { prisma } from '~/utils/prisma.server'
import { getUserFriendsMetaData, getFriendsEmail } from './friends.server'

const getUserHabits = async (user: User, query?: string, customFilters = {}) => {
  const filters: Partial<{ [key: string]: any }> = { userEmail: user.email }

  if (query) {
    filters.title = {
      contains: query,
      mode: 'insensitive',
    }
  }

  return prisma.vote.findMany({
    where: { ...filters },
    orderBy: {
      upvotes: 'desc',
    },
    ...customFilters,
  })
}

const getUserFriendsHabits = async (user: User, query?: string) => {
  const friends = await getUserFriendsMetaData(user)

  const allEmails = getFriendsEmail(friends, user)

  const filters: Partial<{ [key: string]: any }> = {
    userEmail: { in: allEmails },
    AND: { NOT: { userEmail: user.email } },
    shareWith: 'FRIENDS',
  }

  if (query) {
    filters.title = {
      contains: query,
      mode: 'insensitive',
    }
  }

  return prisma.vote.findMany({ where: { ...filters } })
}

export { getUserHabits, getUserFriendsHabits }
