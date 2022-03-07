import { User } from '@prisma/client'
import { ActionFunction, redirect } from 'remix'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const action: ActionFunction = async ({ params, request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id ? +params.id : undefined

  const isCurrentUsers = await prisma.vote.findUnique({
    where: {
      id,
    },
  })

  if (!isCurrentUsers || isCurrentUsers.userEmail !== user.email) {
    return redirect('/vote')
  }

  try {
    await prisma.vote.update({
      where: {
        id,
      },
      data: {
        votes: {
          decrement: 1,
        },
      },
    })
    return redirect(`/vote`)
  } catch (err) {
    throw redirect('/')
  }
}
