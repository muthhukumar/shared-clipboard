import { ActionFunction, LoaderFunction, redirect } from 'remix'

import { authenticator } from '~/utils/auth.server'
import { destroySession, getSession } from '~/utils/session.server'

export const action: ActionFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: '/login' })

  const session = await getSession(request.headers.get('Cookie'))

  throw redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  })
}

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: '/login' })

  const session = await getSession(request.headers.get('Cookie'))

  throw redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  })
}

export default function Logout() {
  return null
}
