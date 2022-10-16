import type { LoaderFunction } from '@remix-run/node'

import { authenticator } from '~/utils/auth.server'

export const loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate('github', request, {
    successRedirect: '/',
    failureRedirect: '/login',
  })
}
