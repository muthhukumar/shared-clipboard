import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import { authenticator } from '~/utils/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })
  return redirect('/home')
}

export default function Copy() {
  return null
}
