import type { User } from '@prisma/client'

import type { ActionFunction, ErrorBoundaryComponent, MetaFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import { DefaultCatchBoundary, DefaultErrorBoundary, DeleteDialog } from '~/components'
import { composeNumberId } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Short URL | Delete',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = composeNumberId(params)

  const isCurrentUsers = await prisma.shortURL.findUnique({ where: { id } })

  if (isCurrentUsers && isCurrentUsers.userEmail === user.email) {
    await prisma.shortURL.delete({
      where: {
        id,
      },
    })
  }

  return redirect('/shorturl')
}

export default function Delete() {
  return <DeleteDialog title="Delete Short URL" message="Are you sure to delete this Short URL?" />
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
