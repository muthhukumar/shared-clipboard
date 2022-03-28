import { CatchBoundaryComponent } from '@remix-run/react/routeModules'
import { ErrorBoundaryComponent, json, LoaderFunction, redirect } from 'remix'
import validator from 'validator'

import { DefaultCatchBoundary, DefaultErrorBoundary } from '~/components'
import { prisma } from '~/utils/prisma.server'

export const loader: LoaderFunction = async ({ request, params }) => {
  const slug = String(params.slug)

  const shortURL = await prisma.shortURL.findUnique({ where: { slug } })

  if (!shortURL) {
    throw json(
      {
        message: 'Short URL not found.',
        description: `The Short URL ${params.slug} you're looking for doesn't exists.`,
      },
      { status: 404 },
    )
  }

  const isValidShortURL = validator.isURL(shortURL.url)

  if (!isValidShortURL) {
    throw json(
      {
        message: `Forbidden`,
        description: `The Short URL you're looking for is invalid.`,
      },
      { status: 403 },
    )
  }

  return redirect(shortURL.url)
}

export default function Redirect() {
  return <div>something</div>
}

export const CatchBoundary: CatchBoundaryComponent = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
