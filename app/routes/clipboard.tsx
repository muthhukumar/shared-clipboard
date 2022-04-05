import { ClipboardContent as ClipboardContentType, User } from '@prisma/client'

import { HStack } from '@chakra-ui/react'
import {
  LoaderFunction,
  json,
  useLoaderData,
  Link,
  Outlet,
  MetaFunction,
  ErrorBoundaryComponent,
} from 'remix'

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
import { CatchBoundaryComponent } from '@remix-run/react/routeModules'

export const meta: MetaFunction = () => {
  return {
    title: 'Clipboard',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
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
  const contents = useLoaderData<Array<ClipboardContentType>>()

  return (
    <div className="flex w-full py-8">
      <Wrapper>
        <HStack>
          <SearchBar />
          <AddButton url="/clipboard/new" />
        </HStack>
        <div className="flex flex-col mt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contents.map((content) => {
              return (
                <Link
                  to={`/clipboard/${content.id}`}
                  key={content.id}
                  className="w-full transition-all border rounded-md hover:border-white"
                >
                  <ClipboardContentComp {...content} key={content.id} />
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

export const CatchBoundary: CatchBoundaryComponent = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
