// app/session.server.ts
import { createCookieSessionStorage } from 'remix'
import invariant from 'tiny-invariant'

const cookieSecret = process.env.COOKIE_SECRET

invariant(cookieSecret, 'COOKIE_SECRET must be set')

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
