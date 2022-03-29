import { User } from '@prisma/client'
import { CatchBoundaryComponent } from '@remix-run/react/routeModules'

import { ActionFunction, ErrorBoundaryComponent, MetaFunction, redirect } from 'remix'

import { DefaultCatchBoundary, DefaultErrorBoundary, DeleteDialog } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/db.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Todo | Delete',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = params.id ? +params.id : undefined

  const isCurrentUsers = await prisma.vote.findUnique({
    where: {
      id,
    },
  })

  if (isCurrentUsers && isCurrentUsers.userEmail === user.email) {
    await prisma.vote.delete({
      where: {
        id,
      },
    })
  }

  return redirect('/habits-rank')
}

export default function Delete() {
  return <DeleteDialog title="Delete Habit" message="Are you sure to delete this Habit?" />
}

export const CatchBoundary: CatchBoundaryComponent = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
