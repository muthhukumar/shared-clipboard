import * as React from 'react'
import {
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
} from 'remix'
import type { LinksFunction } from 'remix'

import globalStylesUrl from '~/styles/global.css'
import tailwindStylesUrl from '~/styles/tailwind.css'
import vendorsStylesUrl from '~/styles/vendors.css'

import { Navbar, Sidebar } from '~/components'
import { Box, ChakraProvider, Heading } from '@chakra-ui/react'
import { authenticator } from './utils/auth.server'
import { User } from '@prisma/client'
import clsx from 'clsx'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStylesUrl },
    { rel: 'stylesheet', href: tailwindStylesUrl },
    { rel: 'stylesheet', href: vendorsStylesUrl },
  ]
}

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.isAuthenticated(request)
}

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <Layout>
          <Outlet />
        </Layout>
      </ChakraProvider>
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <ChakraProvider>
        <Box>
          <Heading as="h1">There was an error</Heading>
        </Box>
      </ChakraProvider>
    </Document>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider>
        <Box>
          <Heading as="h1">
            {caught.status} {caught.statusText}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  )
}

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  const user = useLoaderData<User>()
  const location = useLocation()

  const isLogin = location.pathname === '/login'

  return (
    <div className="flex flex-col h-screen md:flex-row max-h-[100vh]">
      {/* <TransitionModal /> */}
      {!isLogin && <Navbar />}
      {!isLogin && <Sidebar user={user} />}
      <main className={clsx('w-full', { '': !isLogin })}>{children}</main>
    </div>
  )
}
