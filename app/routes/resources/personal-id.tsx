import type { User } from '@prisma/client'

import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'

import { prisma } from '~/utils/prisma.server'
import { getUser } from '~/models/user.server'

export const getFriendUser = (userId: User['id']) => {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      email: true,
      profileUrl: true,
    },
  })
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)

  const url = new URL(request.url)

  const query = url.searchParams.get('personalId') ?? ''

  try {
    const uniqueReference = await prisma.uniqueReference.findUnique({
      where: { personalId: query },
    })

    if (!uniqueReference) {
      return json(null)
    }

    const friendDetail = await getFriendUser(uniqueReference.userId)

    if (friendDetail?.email === user.email) {
      return json(null)
    }

    return json(friendDetail ?? {})
  } catch {
    return ''
  }
}
