// TODO - Handle Error boundary and catch boundaru

import { User } from '@prisma/client'

import { LoaderFunction, redirect } from 'remix'

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
