import { Stack, StackDivider, useColorModeValue, VStack } from '@chakra-ui/react'
import type { ErrorBoundaryComponent, MetaFunction } from '@remix-run/node'
import { Link, Outlet, useLocation } from '@remix-run/react'
import clsx from 'clsx'

import { DefaultCatchBoundary, DefaultErrorBoundary, PageTitle, Wrapper } from '~/components'

const links: Array<{ title: string; to: string }> = [
  {
    title: 'General',
    to: '/profile/general',
  },
  {
    title: 'Export',
    to: '/profile/export',
  },
  {
    title: 'Settings',
    to: '/profile/settings',
  },
  {
    title: 'Personal ID',
    to: '/profile/personal-id',
  },
]

export const meta: MetaFunction = () => {
  return {
    title: 'Profile',
  }
}

export default function Profile() {
  const location = useLocation()

  const textColor = useColorModeValue('text-black', 'text-white')
  const lightTextColor = useColorModeValue('text-gray-400', 'text-gray-600')

  const borderColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <div className="w-full">
      <PageTitle>
        <h2 className="text-3xl font-bold">Personal Account Settings</h2>
      </PageTitle>
      <Wrapper>
        <Stack
          direction={['column', 'column', 'row', 'row']}
          alignItems={'flex-start'}
          py={'10'}
          spacing={6}
        >
          <VStack
            divider={<StackDivider borderColor={borderColor} />}
            spacing="4"
            w={'25%'}
            alignItems={'flex-start'}
            mb={[8, 8, 0, 0]}
            border="1px"
            borderColor={borderColor}
            borderRadius="md"
            py="4"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={clsx('ml-4', textColor, {
                  [lightTextColor]: !location.pathname.includes(link.to),
                  'font-bold': location.pathname.includes(link.to),
                })}
              >
                {link.title}
              </Link>
            ))}
          </VStack>
          <div className="w-full lg:w-3/4">
            <Outlet />
          </div>
        </Stack>
      </Wrapper>
    </div>
  )
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
