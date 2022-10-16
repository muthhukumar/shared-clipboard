import type { User } from '@prisma/client'

import { HStack } from '@chakra-ui/react'
import type { ErrorBoundaryComponent, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Link, Outlet, useLoaderData } from '@remix-run/react'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import {
  ClipboardContent as ClipboardContentComp,
  DefaultCatchBoundary,
  AddButton,
  DefaultErrorBoundary,
  NoItems,
  SearchBar,
  Wrapper,
} from '~/components'
import type { LoaderArgs } from '@remix-run/server-runtime'

export const meta: MetaFunction = () => {
  return {
    title: 'Clipboard',
  }
}

export const loader = async ({ request }: LoaderArgs) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  if (query) {
    const searchMatchResult = await prisma.clipboardContent.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
          mode: 'insensitive',
        },
      },
    })

    return json(searchMatchResult)
  }

  const clipboardContents = await prisma.clipboardContent.findMany({
    where: {
      userEmail: user.email,
    },
  })

  return json(clipboardContents)
}

export default function ClipboardContent() {
  const contents = useLoaderData<typeof loader>()

  return (
    <div className="flex w-full py-8">
      <Wrapper>
        <HStack>
          <SearchBar />
          <AddButton url="/clipboard/new" />
        </HStack>
        <div className="mt-6 flex flex-col">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contents.map((content) => {
              return (
                <Link
                  key={content.id}
                  to={`/clipboard/${content.id}`}
                  className="w-full rounded-md border transition-all hover:border-white"
                >
                  <ClipboardContentComp
                    key={content.id}
                    {...content}
                    createdAt={new Date(content.createdAt)}
                  />
                </Link>
              )
            })}
          </div>
          {contents.length === 0 && <NoItems title="No copied items found!!!" />}
        </div>
      </Wrapper>
      <Outlet />
    </div>
  )
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
