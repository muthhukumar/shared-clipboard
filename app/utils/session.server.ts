// app/session.server.ts
import { createCookieSessionStorage } from 'remix'

const cookieSecret = process.env.COOKIE_SECRET

if (!cookieSecret) {
  throw new Error('Please add cookie secret env variable')
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 7 days,
    secrets: [cookieSecret],
    secure: process.env.NODE_ENV === 'production',
  },
})

export const { getSession, commitSession, destroySession } = sessionStorage
