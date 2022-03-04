import { User } from '@prisma/client'
import { ActionFunction, redirect } from 'remix'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const action: ActionFunction = async ({ params, request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id ? +params.id : undefined

  const isCurrentUsers = await prisma.voti.findUnique({
    where: {
      id,
    },
  })

  if (!isCurrentUsers || isCurrentUsers.userEmail !== user.email) {
    return redirect('/voti')
  }

  try {
    await prisma.voti.update({
      where: {
        id,
      },
      data: {
        votes: {
          decrement: 1,
        },
      },
    })
    return redirect(`/voti`)
  } catch (err) {
    throw redirect('/')
  }
}
