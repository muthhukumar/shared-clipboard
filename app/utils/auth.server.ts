import { GoogleStrategy } from 'remix-auth-google'
import { Authenticator } from 'remix-auth'
import { GitHubStrategy } from 'remix-auth-github'

import { sessionStorage } from '~/utils/session.server'
import { User } from './user.server'

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const callbackURL = process.env.CALL_BACK_URL

const googleclientID = process.env.GOOGLE_CLIENT_ID
const googleclientSecret = process.env.GOOGLE_CLIENT_SECRET
const googlecallbackURL = process.env.GOOGLE_CALL_BACK_URL

if (!googleclientID) {
  throw new Error('Google Client id is not added')
}

if (!googleclientSecret) {
  throw new Error('Google Client secret is not added')
}

if (!googlecallbackURL) {
  throw new Error('Google Callback url is not provided')
}

if (!clientID) {
  throw new Error('Client id is not added')
}

if (!clientSecret) {
  throw new Error('Client secret is not added')
}

if (!callbackURL) {
  throw new Error('Callback url is not provided')
}

const googleStrategy = new GoogleStrategy(
  {
    clientID: googleclientID,
    clientSecret: googleclientSecret,
    callbackURL: googlecallbackURL,
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
      email: profile.emails[0].value,
      profileUrl: profile._json.avatar_url,
    })
  },
)

authenticator.use(gitHubStrategy)
authenticator.use(googleStrategy)
