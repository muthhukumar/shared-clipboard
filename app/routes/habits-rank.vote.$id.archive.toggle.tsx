import type { User } from '@prisma/client'

import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = Number(params.id)

  const vote = await prisma.vote.findUnique({ where: { id } })

  if (!vote || user.email !== vote?.userEmail) {
    return redirect(`/habits-rank`)
  }

  try {
    await prisma.vote.update({
      data: {
        isArchived: !vote.isArchived,
      },
      where: {
        id: id,
      },
    })
    return redirect('/habits-rank')
  } catch (err) {
    // TODO - Handle this with catch boundary and error boundary
    throw redirect('/')
  }
}

export default function Toggle() {
  return null
}
