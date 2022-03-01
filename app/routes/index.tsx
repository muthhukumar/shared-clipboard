import { LoaderFunction, redirect } from 'remix'

import { authenticator } from '~/utils/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })
  return redirect('/clipboard')
}

export default function Copy() {
  return null
}
