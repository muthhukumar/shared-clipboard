// app/session.server.ts
import { createCookieSessionStorage } from 'remix'

if (process.env.NODE_ENV === 'production' && !process.env.COOKIE_SECRET) {
  throw new Error('Add cookie secret in the env for production')
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: ['s3cr3t'],
    secure: process.env.NODE_ENV === 'production',
  },
})

export const { getSession, commitSession, destroySession } = sessionStorage
