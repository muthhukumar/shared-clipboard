import { User } from '@prisma/client'
import { ActionFunction, MetaFunction, redirect } from 'remix'
import { DeleteDialog } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Birthday | Delete',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id ? +params.id : undefined

  const isCurrentUsers = await prisma.birthday.findUnique({
    where: {
      id,
    },
  })

  if (isCurrentUsers && isCurrentUsers.userEmail === user.email) {
    await prisma.birthday.delete({
      where: {
        id,
      },
    })
  }

  return redirect('/birthday')
}

export default function Delete() {
  return <DeleteDialog title="Delete Birthday" message="Are you sure to delete this Birthday?" />
}
