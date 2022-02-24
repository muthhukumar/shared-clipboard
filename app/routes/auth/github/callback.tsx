// app/routes/auth/github/callback.tsx
import { LoaderFunction } from 'remix'
import { authenticator } from '~/utils/auth.server'

export const loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate('github', request, {
    successRedirect: '/',
    failureRedirect: '/login',
  })
}
