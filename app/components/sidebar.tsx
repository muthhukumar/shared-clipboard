import {
  Avatar,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from '@chakra-ui/react'
import { User } from '@prisma/client'
import { BsClipboard } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { HiClipboardCopy } from 'react-icons/hi'
import { IconType } from 'react-icons/lib'
import { TiArrowShuffle } from 'react-icons/ti'
import { Link as RLink } from 'remix'

const links: Array<{ icon: IconType; to: string }> = [
  {
    icon: FaHome,
    to: '/clipboard',
  },
  {
    icon: HiClipboardCopy,
    to: '/quick-copy',
  },
  {
    icon: TiArrowShuffle,
    to: '/quick-redirect',
  },
]

const OptionsPopOver = ({ user }: { user: User }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar src={user?.profileUrl ?? ''} size="sm" />
      </PopoverTrigger>
      <PopoverContent maxW="36">
        <PopoverBody p="0">
          <VStack spacing="0" textAlign="left">
            <RLink to="/logout" className="w-full p-2">
              Logout
            </RLink>
            <RLink to="/profile" className="w-full p-2">
              Profile
            </RLink>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default function Sidebar({ user }: { user: User }) {
  return (
    <div className="fixed top-0 left-0 z-50 flex flex-col items-center w-16 h-full border-r max-h-[100vh]">
      <div className="flex items-center justify-center h-16 mb-6">
        <BsClipboard size={25} />
      </div>
      <VStack spacing={8}>
        {links.map((Link) => (
          <RLink to={Link.to} key={Link.to}>
            <Link.icon size={20} />
          </RLink>
        ))}
        {/* <FaHome size={20} />
        <HiClipboardCopy size={20} /> */}
      </VStack>
      <div className="pb-4 mt-auto">
        <OptionsPopOver user={user} />
      </div>
    </div>
  )
}
