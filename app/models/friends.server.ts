import type { Friend, User } from '@prisma/client'

import { prisma } from '~/utils/prisma.server'

const getUserFriendsMetaData = async (user: User) => {
  return prisma.friend.findMany({
    where: { OR: [{ requestFrom: user.email }, { requestTo: user.email }] },
  })
}

const getFriendsEmail = (friends: Array<Friend>, user: User) => {
  return (
    friends.length
      ? Array.from(
          new Set(
            friends
              .map((query) => {
                return [query.requestFrom, query.requestTo]
              })
              .flat(),
          ),
        ).filter((currentUser) => currentUser !== user.email)
      : []
  ) as Array<User['email']>
}

const getFriendsDetails = async (user: User) => {
  const friends = await getUserFriendsMetaData(user)

  const allFriendsEmail = getFriendsEmail(friends, user)

  return (
    await prisma.user.findMany({
      where: { email: { in: allFriendsEmail } },
      select: { email: true, profileUrl: true },
    })
  ).map((user) => {
    const result = friends.find(
      (friend) => friend.requestFrom === user.email || friend.requestTo === user.email,
    )
    return {
      ...user,
      friendId: result?.id,
      requestFrom: result?.requestFrom,
      requestTo: result?.requestTo,
      status: result?.status,
    }
  })
}

const getUserFriends = async (user: User) => {
  const friends = await getFriendsDetails(user)

  return friends.filter(
    (currentUser) => currentUser.status === 'Accepted' && currentUser.email !== user.email,
  )
}

const getUserFriendRequestSend = async (user: User) => {
  const friends = await getFriendsDetails(user)
  return friends.filter(
    (currentUser) =>
      (currentUser.status === 'Pending' || currentUser.status === 'Rejected') &&
      currentUser.requestFrom === user.email,
  )
}

const getUserFriendRequest = async (user: User) => {
  const friends = await getFriendsDetails(user)
  return friends.filter(
    (currentUser) => currentUser.status === 'Pending' && currentUser.requestTo === user.email,
  )
}

export {
  getUserFriends,
  getUserFriendRequestSend,
  getUserFriendsMetaData,
  getFriendsDetails,
  getFriendsEmail,
  getUserFriendRequest,
}
