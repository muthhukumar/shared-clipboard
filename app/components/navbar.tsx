import {
  Avatar,
  Box,
  Button,
  chakra,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { User } from '@prisma/client'
import clsx from 'clsx'
import { useViewportScroll } from 'framer-motion'
import React from 'react'
import { BsClipboard } from 'react-icons/bs'
import { Link as RLink, useLocation } from 'remix'
import { Wrapper } from '.'

const links: Array<{ title: string; to: string }> = [
  {
    title: 'Clipboard',
    to: '/clipboard',
  },
  {
    title: 'Copy',
    to: '/quick-copy',
  },
  {
    title: 'Redirect',
    to: '/quick-redirect',
  },
  {
    title: 'Notes',
    to: '/notes',
  },
]

export default function Navbar({ user }: { user: User }) {
  return (
    <div className="border-b">
      <Wrapper>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <BsClipboard size={20} />
            <h2 className="ml-4 font-bold">Clip</h2>
          </div>
          {/* <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#"></BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">{user.email}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb> */}
          <Menu>
            <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
              <Avatar src={user?.profileUrl ?? ''} size="sm" />
            </MenuButton>
            <MenuList alignItems={'center'} p={0}>
              <MenuItem>
                <RLink to="/profile">Account settings</RLink>
              </MenuItem>
              <MenuItem>
                <RLink to="/logout">Logout</RLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Wrapper>
      <StickyHeader />
    </div>
  )
}

function StickyHeader() {
  const shadow = useColorModeValue('#0000001a', '#333')

  const ref = React.useRef<HTMLHeadingElement>(null)
  const [y, setY] = React.useState(0)
  const { height = 49 } = ref.current?.getBoundingClientRect() ?? {}

  const location = useLocation()

  const { scrollY } = useViewportScroll()

  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  const scrolledToTop = y >= 59

  return (
    <chakra.header h={`${height}px`} w="full">
      <Box
        position={scrolledToTop ? 'fixed' : 'static'}
        transform={scrolledToTop ? 'translateZ(100px)' : undefined}
        boxShadow={scrolledToTop ? `0 0 0 1px ${shadow}` : undefined}
        ref={ref}
        transition="box-shadow .2s ease"
        top="0"
        bg="gray.800"
        zIndex="3000"
        h={`${height}px`}
        left="0"
        right="0"
        width="full"
        pt="3"
      >
        <Wrapper>
          <div className="flex items-center justify-start">
            <Stack direction="row" spacing="8" overflowY="scroll">
              {links.map((link) => (
                <RLink
                  to={link.to}
                  key={link.to}
                  className={clsx('text-gray-400 pb-3 border-b-2 border-transparent', {
                    'text-black dark:text-white border-black dark:border-white':
                      location.pathname.includes(link.to),
                  })}
                >
                  {link.title}
                </RLink>
              ))}
            </Stack>
          </div>
        </Wrapper>
      </Box>
    </chakra.header>
  )
}
