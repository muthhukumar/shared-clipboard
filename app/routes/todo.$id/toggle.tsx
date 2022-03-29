import { User } from '@prisma/client'

import { ActionFunction, json, redirect } from 'remix'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/db.server'

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id

  const todo = await prisma.todo.findUnique({
    where: {
      id: String(id),
    },
  })

  if (!todo || user.email !== todo?.userEmail) {
    return redirect(`/todo`)
  }

  try {
    await prisma.todo.update({
      data: {
        completed: !todo.completed,
      },
      where: {
        id: id,
      },
    })
    return json({ ok: true })
  } catch (err) {
    // TODO - Handle this with catch boundary and error boundary
    throw redirect('/')
  }
}

export default function Toggle() {
  return null
}
