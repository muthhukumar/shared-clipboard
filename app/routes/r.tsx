// TODO - Handle Error boundary and catch boundaru

import type { User } from '@prisma/client'
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const quickRedirect = await prisma.user.findUnique({
    where: { email: user.email },
    select: { quickRedirect: true },
  })

  if (quickRedirect?.quickRedirect) {
    return redirect(quickRedirect?.quickRedirect)
  }

  return redirect('/')
}

export default function Redirect() {
  return null
}
