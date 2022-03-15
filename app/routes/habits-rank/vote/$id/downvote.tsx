import { User } from '@prisma/client'

import { ActionFunction, json, redirect } from 'remix'
import { composeNumberId } from '~/utils'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const action: ActionFunction = async ({ params, request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = composeNumberId(params)

  const isCurrentUsers = await prisma.vote.findUnique({
    where: {
      id,
    },
  })

  if (!isCurrentUsers || isCurrentUsers.userEmail !== user.email) {
    // TODO - Handle this with the error and catch boundary
    return redirect('/habits-rank')
  }

  try {
    await prisma.vote.update({
      where: {
        id,
      },
      data: {
        downvotes: {
          increment: 1,
        },
      },
    })
    return json({ ok: true })
  } catch (err) {
    throw redirect('/')
  }
}
