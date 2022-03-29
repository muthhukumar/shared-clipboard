import { User } from '@prisma/client'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link, VStack } from '@chakra-ui/react'

import { ErrorBoundaryComponent, json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/db.server'
import { CatchBoundaryComponent } from '@remix-run/react/routeModules'
import { DefaultCatchBoundary, DefaultErrorBoundary } from '~/components'

export const meta: MetaFunction = () => {
  return {
    title: 'Profile | Export',
  }
}

type LoaderData = {
  clipboards: number
  votes: number
  todos: number
  user: User
}

export const enum Item {
  Clipboards = 'clipboards',
  Votes = 'votes',
  Todos = 'todos',
  User = 'todos',
  QuickRedirect = 'quickRedirect',
  QuickContent = 'quickContent',
  All = 'all',
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, { failureRedirect: '/login' })) as User

  const clipboards = await prisma.clipboardContent.count({
    where: { userEmail: user.email },
  })

  const votes = await prisma.vote.count({
    where: { userEmail: user.email },
  })

  const todos = await prisma.todo.count({
    where: { userEmail: user.email },
  })

  const userData = await prisma.user.findUnique({ where: { id: user.id } })

  const data = {
    user: userData,
    clipboards,
    todos,
    votes,
  }

  return json(data)
}

type ExportType = {
  title: string
  content: string | null
  pathname: Item
}

const ExportItem = ({ title, content, pathname }: ExportType) => {
  return (
    <div className="flex flex-col w-full p-4 border rounded-md gap-y-2">
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <p className="p-4 break-words border rounded-md">{content}</p>
      <Link href={`/export?name=${pathname}`} isExternal download={pathname}>
        Export <ExternalLinkIcon mx="2px" />
      </Link>
    </div>
  )
}

export default function General() {
  const data = useLoaderData<LoaderData>()

  const exportItems: Array<ExportType> = [
    {
      title: 'Copy',
      content: data.user.quickContent,
      pathname: Item.QuickContent,
    },
    {
      title: 'Redirect',
      content: data.user.quickRedirect,
      pathname: Item.QuickRedirect,
    },
    {
      title: 'Clipboard',
      content: `${data.clipboards} clipboard items`,
      pathname: Item.Clipboards,
    },
    {
      title: 'Todos',
      content: `${data.todos} todo items`,
      pathname: Item.Todos,
    },
    {
      title: 'Votes',
      content: `${data.votes} votes items`,
      pathname: Item.Votes,
    },
  ]

  return (
    <div className="w-full">
      <VStack alignItems={'flex-start'} w="full">
        <VStack w="full" spacing={6}>
          {exportItems.map((exportItem) => (
            <ExportItem {...exportItem} key={exportItem.title} />
          ))}
          <Link href={`/export?name=${Item.All}`} isExternal download={Item.All}>
            Export all <ExternalLinkIcon mx="2px" />
          </Link>
        </VStack>
      </VStack>
    </div>
  )
}

export const CatchBoundary: CatchBoundaryComponent = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
