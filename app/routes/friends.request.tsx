// TODO - Handle this with the Errory boundary and catch boundary

import type { FriendType } from '~/types/friend'
import { FriendSchema } from '~/types/friend'
import type { ActionType } from '~/types/common'
import type { User } from '@prisma/client'

import type {
  ActionFunction,
  ErrorBoundaryComponent,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import { json, redirect } from '@remix-run/node'

import { useFetcher, useNavigate } from '@remix-run/react'
import {
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Button,
  VStack,
  HStack,
  Avatar,
} from '@chakra-ui/react'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { Dialog, DefaultCatchBoundary, DefaultErrorBoundary, NoItems } from '~/components'
import { getFinalFormData, getFormData } from '~/utils/form'
import { getUser } from '~/models/user.server'
import { getFriendUser } from './resources/personal-id'

type FriendActionType = ActionType<FriendType>

export const meta: MetaFunction = () => {
  return {
    title: 'Friend Request',
  }
}

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const friendData = getFormData<FriendActionType>(formData, [{ key: 'requestTo' }])

  const friendValidationResult = FriendSchema.safeParse(friendData)

  if (!friendValidationResult.success) {
    return getFinalFormData<FriendActionType>(
      friendData,
      friendValidationResult.error.formErrors.fieldErrors,
    )
  }

  if (user.email === friendValidationResult.data.requestTo) {
    // TODO - Handle this
    return redirect('/friends')
  }

  const isExistingRequest = await prisma.friend.findUnique({
    where: {
      requestFrom_requestTo: {
        requestFrom: user.email,
        requestTo: friendValidationResult.data.requestTo,
      },
    },
  })

  if (isExistingRequest) {
    return redirect('/friends')
  }

  const payload = {
    requestTo: friendValidationResult.data.requestTo,
    requestFrom: user.email,
    userEmail: user.email,
  }

  try {
    await prisma.friend.create({
      data: {
        ...payload,
      },
    })
    return redirect(`/friends`)
  } catch {
    // TODO - Handle this with the Errory boundary and catch boundary
    throw json(
      {
        message: 'Something went wrong.',
        description: 'Unable to request . Please try again later.',
      },
      { status: 500 },
    )
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  await getUser(request)

  const url = new URL(request.url)

  const query = url.searchParams.get('personalId') ?? ''

  try {
    const uniqueReference = await prisma.uniqueReference.findUnique({
      where: { personalId: query },
    })

    if (!uniqueReference) {
      return json(null)
    }

    const friendDetail = await getFriendUser(uniqueReference.userId)

    return json(friendDetail ?? {})
  } catch {
    return ''
  }
}

export default function ShortURLNew() {
  const navigation = useNavigate()

  const onClose = () => navigation(-1)

  const friendFetcher = useFetcher<Awaited<ReturnType<typeof getFriendUser>>>()

  const friendRequestSubmit = useFetcher()

  const userData = friendFetcher.data

  return (
    <Dialog isOpen={true} onClose={onClose} size="md">
      <ModalHeader>Search Friend</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <friendFetcher.Form method="get" action="/resources/personal-id">
          <VStack alignItems={'flex-start'}>
            <Input
              placeholder="Enter user's Personal ID"
              type="string"
              size="md"
              name="personalId"
              required
            />
            <Button colorScheme={'twitter'} w="full" type="submit">
              Search
            </Button>
          </VStack>
        </friendFetcher.Form>

        {userData ? (
          <div className="mt-4 flex flex-col gap-y-4 rounded-md border p-4">
            <HStack>
              <Avatar src={userData.profileUrl ?? ''} size="sm" />
              <h2 className="truncate font-bold">{userData.email}</h2>
            </HStack>
            <friendRequestSubmit.Form className="w-full" method="post" action="/friends/request">
              <input type="hidden" name="requestTo" defaultValue={userData.email} />
              {/* <ButtonGroup variant="outline" isAttached w="full"> */}
              {/* TODO: Here if the user already request for friendship then show Cancel */}
              <Button colorScheme="blue" w="full" type="submit">
                Request
              </Button>
              {/* <Button w="full" colorScheme={'red'}>
                  Delete
                </Button> */}
              {/* </ButtonGroup> */}
            </friendRequestSubmit.Form>
          </div>
        ) : null}
        <div className="mt-4">{userData === null && <NoItems title="No user found." />}</div>
      </ModalBody>
    </Dialog>
  )
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
