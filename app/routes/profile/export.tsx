import type { User } from '@prisma/client'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link, VStack } from '@chakra-ui/react'

import type { ErrorBoundaryComponent, LoaderFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
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
    <div className="flex w-full flex-col gap-y-2 rounded-md border p-4">
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <p className="break-words rounded-md border p-4">{content}</p>
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
            <ExportItem key={exportItem.title} {...exportItem} />
          ))}
          <Link href={`/export?name=${Item.All}`} isExternal download={Item.All}>
            Export all <ExternalLinkIcon mx="2px" />
          </Link>
        </VStack>
      </VStack>
    </div>
  )
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
