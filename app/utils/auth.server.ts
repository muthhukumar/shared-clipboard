import { Authenticator } from 'remix-auth'
import { GitHubStrategy } from 'remix-auth-github'

import { sessionStorage } from '~/utils/session.server'
import { User } from './user.server'

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const callbackURL = process.env.CALL_BACK_URL

if (!clientID) {
  throw new Error('Client id is not added')
}

if (!clientSecret) {
  throw new Error('Client secret is not added')
}

if (!callbackURL) {
  throw new Error('Callback url is not provided')
}

export const authenticator = new Authenticator(sessionStorage)

export const gitHubStrategy = new GitHubStrategy(
  {
    clientID,
    clientSecret,
    callbackURL,
  },
  async ({ profile }) => {
    return User.findOrCreate({
      email: profile.emails[0].value,
      profileUrl: profile._json.avatar_url,
    })
  },
)

authenticator.use(gitHubStrategy)
