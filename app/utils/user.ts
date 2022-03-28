import { redirect } from 'remix'
import { User } from '@prisma/client'

import { authenticator } from './auth.server'

export const getUser = async (request: Request) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  if (!user) {
    throw redirect('/logout')
  }

  return user
}
