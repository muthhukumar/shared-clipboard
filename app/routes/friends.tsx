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
import { prisma } from '~/utils/prisma.server'
import { getUser } from '~/utils/user'

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

  const allQuery = await prisma.friend.findMany({
    where: { OR: [{ requestFrom: user.email }, { requestTo: user.email }] },
  })

  const allEmails = allQuery.length
    ? Array.from(
        new Set(
          allQuery
            .map((query) => {
              return [query.requestFrom, query.requestTo]
            })
            .flat(),
        ),
      ).filter((currentUser) => currentUser !== user.email)
    : []

  const usersOfAllQuery = (
    await prisma.user.findMany({
      where: { email: { in: allEmails } },
      select: { email: true, profileUrl: true },
    })
  ).map((user) => {
    const result = allQuery.find(
      (friend) => friend.requestFrom === user.email || friend.requestTo === user.email,
    )
    return {
      ...user,
      friendId: result?.id,
      requestFrom: result?.requestFrom,
      requestTo: result?.requestTo,
      status: result?.status,
    }
  })

  const friendsDub = usersOfAllQuery.filter(
    (currentUser) => currentUser.status === 'Accepted' && currentUser.email !== user.email,
  )

  const friendRequestSendDub = usersOfAllQuery.filter(
    (currentUser) =>
      (currentUser.status === 'Pending' || currentUser.status === 'Rejected') &&
      currentUser.requestFrom === user.email,
  )

  const friendRequests = usersOfAllQuery.filter(
    (currentUser) => currentUser.status === 'Pending' && currentUser.requestTo === user.email,
  )

  return json({ friends: friendsDub, friendRequestSend: friendRequestSendDub, friendRequests })
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
