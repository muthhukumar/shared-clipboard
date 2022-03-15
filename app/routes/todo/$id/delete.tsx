import { User } from '@prisma/client'

import { ActionFunction, MetaFunction, redirect } from 'remix'

import { DeleteDialog } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Todo | Delete',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id

  const isCurrentUsers = await prisma.todo.findUnique({
    where: {
      id,
    },
  })

  if (isCurrentUsers && isCurrentUsers.userEmail === user.email) {
    await prisma.todo.delete({
      where: {
        id,
      },
    })
  }

  return redirect('/todo')
}

export default function Delete() {
  return <DeleteDialog title="Delete Todo" message="Are you sure to delete this Todo?" />
}
