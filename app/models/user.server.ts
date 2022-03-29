import type { User } from '@prisma/client'

import { redirect } from 'remix'
import { prisma } from '~/utils/prisma.server'

import { authenticator } from '../utils/auth.server'

export const getUser = async (request: Request) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const finalUser = await prisma.user.findUnique({ where: { email: user.email } })

  if (!finalUser) {
    throw redirect('/logout')
  }

  return finalUser
}
