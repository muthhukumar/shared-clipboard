import { User } from '@prisma/client'
import { CatchBoundaryComponent } from '@remix-run/react/routeModules'
import { ActionFunction, ErrorBoundaryComponent, MetaFunction, redirect } from 'remix'

import { DefaultCatchBoundary, DefaultErrorBoundary, DeleteDialog } from '~/components'
import { composeNumberId } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/db.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Clipboard | Delete',
  }
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

export const CatchBoundary: CatchBoundaryComponent = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
