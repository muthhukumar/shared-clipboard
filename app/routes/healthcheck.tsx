import type { LoaderFunction } from '@remix-run/node'
import { prisma } from '~/utils/prisma.server'

export const loader: LoaderFunction = async ({ request }) => {
  const host = request.headers.get('X-Forwarded-Host') ?? request.headers.get('host')

  try {
    await Promise.all([
      prisma.user.count(),
      fetch(`http://${host}`, { method: 'HEAD' }).then((r) => {
        if (!r.ok) return Promise.reject(r)
      }),
    ])
    return new Response('OK')
  } catch (error: unknown) {
    console.log('healthcheck ❌', { error })
    return new Response('ERROR', { status: 500 })
  }
}
