import type { User } from '@prisma/client'
import { Status } from '@prisma/client'

import type { ActionFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Friend | Remove',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id

  const formData = await request.formData()

  const status = formData.get('status')

  const finalStatus =
    status === Status.Pending
      ? Status.Pending
      : status === Status.Accepted
      ? Status.Accepted
      : Status.Rejected

  const friend = await prisma.friend.findUnique({
    where: {
      id,
    },
  })

  if (!friend) {
    return json({ success: false })
  }

  if (friend?.requestTo === user.email) {
    await prisma.friend.update({
      where: {
        id,
      },
      data: {
        status: finalStatus,
      },
    })
    return json({ success: true })
  }

  return json({ success: false })
}
