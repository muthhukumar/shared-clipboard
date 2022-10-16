import { GoogleStrategy } from 'remix-auth-google'
import { Authenticator } from 'remix-auth'
import { GitHubStrategy } from 'remix-auth-github'

import { sessionStorage } from '~/utils/session.server'
import { User } from './user.server'
import invariant from 'tiny-invariant'

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const callbackURL = process.env.CALL_BACK_URL

const googleClientID = process.env.GOOGLE_CLIENT_ID
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET
const googleCallbackURL = process.env.GOOGLE_CALL_BACK_URL

invariant(clientID, 'Github CLIENT_ID must be set')

invariant(clientSecret, 'Github CLIENT_SECRET must be set')

invariant(callbackURL, 'Github CALL_BACK_URL must be set')

invariant(googleClientID, 'GOOGLE_CLIENT_ID must be set')

invariant(googleClientSecret, 'GOOGLE_CLIENT_SECRET must be set')

invariant(googleCallbackURL, 'GOOGLE_CALL_BACK_URL must be set')

const googleStrategy = new GoogleStrategy(
  {
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: googleCallbackURL,
  },
  async ({ profile }) => {
    const email = profile.emails[0].value

    if (!email) {
      return null
    }
    return User.findOrCreate({ email: profile.emails[0].value, profileUrl: profile._json.picture })
  },
)

export const authenticator = new Authenticator(sessionStorage)

export const gitHubStrategy = new GitHubStrategy(
  {
    clientID,
    clientSecret,
    callbackURL,
  },
  async ({ profile }) => {
    return User.findOrCreate({
      email: (profile && profile.emails && profile.emails[0].value) ?? '',
      profileUrl: profile._json.avatar_url,
    })
  },
)

authenticator.use(gitHubStrategy)
authenticator.use(googleStrategy)
