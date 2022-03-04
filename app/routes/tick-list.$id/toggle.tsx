import { User } from '@prisma/client'
import { ActionFunction, redirect } from 'remix'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id

  const tickList = await prisma.tickList.findUnique({
    where: {
      id: String(id),
    },
  })

  if (!tickList || user.email !== tickList?.userEmail) {
    return redirect(`/tick-list`)
  }

  try {
    await prisma.tickList.update({
      data: {
        completed: !tickList.completed,
      },
      where: {
        id: id,
      },
    })
    // return redirect(`/tick-list/${clipboardContent.id}`)
    return redirect(`/tick-list`)
  } catch (err) {
    throw redirect('/')
  }
}

export default function Toggle() {
  return null
}
