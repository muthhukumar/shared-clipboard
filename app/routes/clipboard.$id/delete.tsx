import type { User } from '@prisma/client'
import type { ActionFunction, V2_MetaFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import { DefaultCatchBoundary, DefaultErrorBoundary, DeleteDialog } from '~/components'
import { composeNumberId } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Clipboard | Delete',
    },
  ]
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = composeNumberId(params)

  const isCurrentUsers = await prisma.clipboardContent.findUnique({
    where: {
      id,
    },
  })

  if (isCurrentUsers && isCurrentUsers.userEmail === user.email) {
    // TODO - Handle this with the error boundary and catch boundary
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

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary = DefaultErrorBoundary
