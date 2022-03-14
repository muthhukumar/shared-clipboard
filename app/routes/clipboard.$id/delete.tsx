import { User } from '@prisma/client'
import { ActionFunction, MetaFunction, redirect } from 'remix'
import { DeleteDialog } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Clipboard | Delete',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id ? +params.id : undefined

  const isCurrentUsers = await prisma.clipboardContent.findUnique({
    where: {
      id,
    },
  })

  if (isCurrentUsers && isCurrentUsers.userEmail === user.email) {
    await prisma.clipboardContent.delete({
      where: {
        id,
      },
    })
  }

  return redirect('/clipboard')
}

export default function Delete() {
  return <DeleteDialog title="Delete Content" message="Are you sure to delete this Content?" />
}
