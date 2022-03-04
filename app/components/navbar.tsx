import {
  Avatar,
  Box,
  Button,
  chakra,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { User } from '@prisma/client'
import clsx from 'clsx'
import { useViewportScroll } from 'framer-motion'
import React from 'react'
import { Link as RLink, useLocation } from 'remix'
import { Wrapper } from '.'
import { FaMoon, FaSun } from 'react-icons/fa'
import { AiOutlineAliwangwang } from 'react-icons/ai'

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
  {
    title: 'TickList',
    to: '/tick-list',
  },
  {
    title: 'Voti',
    to: '/voti',
  },
]

export default function Navbar({ user }: { user: User }) {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  const bgColor = useColorModeValue('bg-white', 'bg-[color:var(--chakra-colors-brand-900)]')

  return (
    <div className={clsx('border-b', bgColor)}>
      <Wrapper>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <AiOutlineAliwangwang size={30} />
            <h2 className="ml-2 font-bold">Clipi</h2>
          </div>
          <HStack spacing={4}>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: '0', md: '3' }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
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
          </HStack>
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

  const textColor = useColorModeValue('text-black', 'text-white')
  const borderColor = useColorModeValue('border-black', 'border-white')
  const bgColor = useColorModeValue('white', 'brand.900')

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
        bg={bgColor}
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
                  className={clsx('pb-3 border-b-2', {
                    [borderColor]: location.pathname.includes(link.to),
                    'border-transparent': !location.pathname.includes(link.to),
                    [textColor]: location.pathname.includes(link.to),
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
