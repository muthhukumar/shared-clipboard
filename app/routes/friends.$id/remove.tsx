import type { User } from '@prisma/client'

import type { ActionFunction, ErrorBoundaryComponent, MetaFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import { DefaultCatchBoundary, DefaultErrorBoundary, DeleteDialog } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Friend | Remove',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id

  const friend = await prisma.friend.findUnique({
    where: {
      id,
    },
  })

  if (friend?.requestFrom === user.email || friend?.requestTo === user.email) {
    await prisma.friend.delete({
      where: {
        id,
      },
    })
  }

  return redirect('/friends')
}

export default function Remove() {
  return (
    <DeleteDialog
      title="Remove Friend"
      message="Are you sure to remove friend?"
      actionLoadingText="Removing"
      actionText="Remove"
    />
  )
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
