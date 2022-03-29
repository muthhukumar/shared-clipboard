import type { ErrorBoundaryComponent, LinksFunction } from 'remix'

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
import clsx from 'clsx'

import globalStylesUrl from '~/styles/global.css'
import tailwindStylesUrl from '~/styles/tailwind.css'
import vendorsStylesUrl from '~/styles/vendors.css'

import { Navbar, Page500, TransitionModal } from '~/components'
import { Box, ChakraProvider, Heading, useColorModeValue } from '@chakra-ui/react'
import { authenticator } from './utils/auth.server'
import { User } from '@prisma/client'
import { theme } from './others/theme'
import * as gtag from '~/utils/gtags.client'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStylesUrl },
    { rel: 'stylesheet', href: tailwindStylesUrl },
    { rel: 'stylesheet', href: vendorsStylesUrl },
    { rel: 'icon', href: 'assets/images/favicon.svg', type: 'image/svg+xml' },
    { rel: 'icon', href: 'assets/images/favicon.png', type: 'image/png' },
  ]
}

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.isAuthenticated(request)
}

export default function App() {
  const location = useLocation()

  React.useEffect(() => {
    gtag.pageview(location.pathname)
  }, [location])
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Layout>
          <Outlet />
        </Layout>
      </ChakraProvider>
    </Document>
  )
}

export const ErrorBoundary: ErrorBoundaryComponent = () => {
  return <Page500 />
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider theme={theme}>
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
        {process.env.NODE_ENV === 'development' ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
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

  const bgColor = useColorModeValue(
    'bg-[color:var(--chakra-colors-brand-lightWhite)]',
    'bg-[color:var(--chakra-colors-brand-100)]',
  )

  return (
    <div className="min-h-screen relative max-h-[100vh]">
      <TransitionModal />
      {!isLogin && <Navbar user={user} />}
      <main className={clsx('h-full w-full pb-24', bgColor)}>{children}</main>
    </div>
  )
}
