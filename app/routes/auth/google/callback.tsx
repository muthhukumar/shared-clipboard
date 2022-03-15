import { LoaderFunction } from 'remix'

import { authenticator } from '~/utils/auth.server'

export const loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate('google', request, {
    successRedirect: '/',
    failureRedirect: '/login',
  })
}
