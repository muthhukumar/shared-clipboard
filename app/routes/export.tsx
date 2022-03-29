import { User } from '@prisma/client'

import { LoaderFunction, MetaFunction, redirect } from 'remix'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/db.server'
import { Item } from './profile/export'

export const meta: MetaFunction = () => {
  return {
    title: 'Export',
  }
}

const getData = async (name: Item | '', user: User) => {
  if (!name) {
    return {}
  }

  const config = {
    [Item.Clipboards]: await prisma.clipboardContent.findMany({ where: { userEmail: user.email } }),
    [Item.QuickContent]: user.quickContent,
    [Item.QuickRedirect]: user.quickRedirect,
    [Item.Todos]: await prisma.todo.findMany({ where: { userEmail: user.email } }),
    [Item.Votes]: await prisma.vote.findMany({ where: { userEmail: user.email } }),
  }

  if (name === Item.All) {
    return config
  }

  if (!config[name]) {
    return {}
  }

  return config[name]
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, { failureRedirect: '/login' })) as User
  const userData = await prisma.user.findUnique({ where: { id: user.id } })

  if (!userData) {
    return redirect('/login')
  }

  const url = new URL(request.url)

  const name = (String(url.searchParams.get('name')) as Item) ?? ''

  const data = await getData(name, userData)

  return new Response(JSON.stringify({ [name]: data }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
