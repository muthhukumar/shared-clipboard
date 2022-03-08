import { Stack, useColorModeValue, VStack } from '@chakra-ui/react'
import clsx from 'clsx'
import { Link, MetaFunction, Outlet, useLocation } from 'remix'
import { PageTitle, Wrapper } from '~/components'

const links: Array<{ title: string; to: string }> = [
  {
    title: 'General',
    to: '/profile/general',
  },
  {
    title: 'Export',
    to: '/profile/export',
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

  return (
    <div className="w-full">
      <PageTitle>
        <h2 className="text-3xl font-bold">Personal Account Settings</h2>
      </PageTitle>
      <Wrapper>
        <Stack direction={['column', 'column', 'row', 'row']} alignItems={'flex-start'} py={'10'}>
          <VStack spacing="4" w={'25%'} alignItems={'flex-start'} mb={[8, 8, 0, 0]}>
            {links.map((link) => (
              <Link
                to={link.to}
                key={link.to}
                className={clsx(textColor, {
                  [lightTextColor]: !location.pathname.includes(link.to),
                  'font-bold': location.pathname.includes(link.to),
                })}
                // [borderColor]: location.pathname.includes(link.to),
                // 'border-transparent': !location.pathname.includes(link.to),
                // })}
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