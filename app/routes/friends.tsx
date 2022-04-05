import {
  Avatar,
  Button,
  ButtonGroup,
  HStack,
  StackDivider,
  Tag,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { Status } from '@prisma/client'
import { CatchBoundaryComponent } from '@remix-run/react/routeModules'
import { IoMdAdd } from 'react-icons/io'
import {
  ErrorBoundaryComponent,
  json,
  LoaderFunction,
  MetaFunction,
  Outlet,
  useFetcher,
  useLoaderData,
  useNavigate,
} from 'remix'

import {
  AddButton,
  DefaultCatchBoundary,
  DefaultErrorBoundary,
  GoToHome,
  NoItems,
  SearchBar,
  Wrapper,
} from '~/components'
import {
  getUserFriendRequest,
  getUserFriendRequestSend,
  getUserFriends,
} from '~/models/friends.server'
import { getUser } from '~/models/user.server'

type UserData = {
  friendId: string | undefined
  requestFrom: string | undefined
  requestTo: string | undefined
  status: Status | undefined
  email: string
  profileUrl: string | null
}

type LoaderType = {
  friends: Array<UserData>
  friendRequestSend: Array<UserData>
  friendRequests: Array<UserData>
}

export const meta: MetaFunction = () => {
  return {
    title: 'Friends',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)

  const friends = await getUserFriends(user)

  const friendRequestSend = await getUserFriendRequestSend(user)

  const friendRequests = await getUserFriendRequest(user)

  return json({ friends, friendRequestSend, friendRequests })
}

export default function Friends() {
  const { friends, friendRequestSend, friendRequests } = useLoaderData<LoaderType>()

  const navigation = useNavigate()

  const friendRequestUpdateFetcher = useFetcher()

  const borderColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <div className="flex w-full py-8">
      <Wrapper>
        {/* <HStack> */}
        <HStack>
          <SearchBar />
          <AddButton url="/friends/request" name="friend" />
        </HStack>
        <div className="flex flex-col mt-6 gap-y-6">
          <div className="py-4 border rounded-md">
            <h2 className="px-4 pb-4 mb-4 font-bold border-b">Friends</h2>
            <VStack
              alignItems={'flex-start'}
              divider={<StackDivider borderColor={borderColor} />}
              w="full"
              px="4"
            >
              {friends.map((friend) => {
                return (
                  <div key={friend.friendId} className="flex items-center justify-between w-full">
                    <HStack>
                      <Avatar src={friend.profileUrl ?? ''} size="sm" />
                      <h2 className="truncate">{friend.email}</h2>
                    </HStack>
                    <Button
                      colorScheme={'red'}
                      onClick={() => navigation(`/friends/${friend.friendId}/remove`)}
                    >
                      Remove
                    </Button>
                  </div>
                )
              })}
              {friends.length === 0 && <NoItems title="No Friends found." />}
            </VStack>
          </div>
          <div className="py-4 border rounded-md">
            <h2 className="px-4 pb-4 mb-4 font-bold border-b">Friend requests send</h2>
            <VStack
              alignItems={'flex-start'}
              divider={<StackDivider borderColor={borderColor} />}
              w="full"
              px="4"
            >
              {friendRequestSend.map((friend) => {
                return (
                  <div key={friend.friendId} className="flex items-center justify-between w-full">
                    <HStack>
                      <Avatar src={friend.profileUrl ?? ''} size="sm" />
                      <h2 className="truncate">{friend.email}</h2>
                    </HStack>
                    <HStack>
                      {friend.status === 'Rejected' && <Tag colorScheme={'red'}>Rejected</Tag>}
                      <Button
                        colorScheme={'red'}
                        onClick={() => navigation(`/friends/${friend.friendId}/remove`)}
                      >
                        {friend.status === 'Rejected' ? 'Remove' : 'Cancel'}
                      </Button>
                    </HStack>
                  </div>
                )
              })}
              {friendRequestSend.length === 0 && <NoItems title="No Friend requests send." />}
            </VStack>
          </div>
          <div className="py-4 border rounded-md">
            <h2 className="px-4 pb-4 mb-4 font-bold border-b">Friend requests </h2>
            <VStack
              alignItems={'flex-start'}
              divider={<StackDivider borderColor={borderColor} />}
              w="full"
              px="4"
            >
              {friendRequests.map((friend) => {
                return (
                  <div key={friend.friendId} className="flex items-center justify-between w-full">
                    <HStack>
                      <Avatar src={friend.profileUrl ?? ''} size="sm" />
                      <h2 className="truncate">{friend.email}</h2>
                    </HStack>
                    <ButtonGroup isAttached variant={'outline'}>
                      <Button
                        colorScheme={'green'}
                        onClick={() =>
                          friendRequestUpdateFetcher.submit(
                            { status: Status.Accepted },
                            {
                              method: 'post',
                              action: `/friends/${friend.friendId}/update`,
                            },
                          )
                        }
                      >
                        Accept
                      </Button>
                      <Button
                        colorScheme={'red'}
                        onClick={() =>
                          friendRequestUpdateFetcher.submit(
                            { status: Status.Rejected },
                            {
                              method: 'post',
                              action: `/friends/${friend.friendId}/update`,
                            },
                          )
                        }
                      >
                        Reject
                      </Button>
                    </ButtonGroup>
                  </div>
                )
              })}
              {friendRequests.length === 0 && <NoItems title="No Friend request found." />}
            </VStack>
          </div>
        </div>
      </Wrapper>
      <Outlet />
    </div>
  )
}

export const CatchBoundary: CatchBoundaryComponent = () => {
  const navigation = useNavigate()
  return (
    <DefaultCatchBoundary>
      <HStack>
        <Button
          leftIcon={<IoMdAdd />}
          onClick={() => navigation('/friends/request')}
          colorScheme="twitter"
        >
          Add Friend
        </Button>
        <GoToHome />
      </HStack>
    </DefaultCatchBoundary>
  )
}

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
