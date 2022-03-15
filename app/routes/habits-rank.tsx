import { ActionType } from '~/types/common'
import { User, Vote } from '@prisma/client'
import { VoteSchema, VoteType } from '~/types/vote'

import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  VStack,
  useColorModeValue,
  StackDivider,
} from '@chakra-ui/react'
import { IoMdAdd } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'
import {
  useLoaderData,
  useSubmit,
  Form,
  json,
  LoaderFunction,
  MetaFunction,
  useTransition,
  Outlet,
  ActionFunction,
  useFetcher,
} from 'remix'

import { VoteItem, NoItems, Wrapper } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { getFormData, getFinalFormData } from '~/utils/form'

export const meta: MetaFunction = () => {
  return {
    title: 'Vote',
  }
}

interface VoteActionType {
  data: ActionType<VoteType> | undefined | null
  success: boolean
  errorMessage: string | ''
}

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const voteData = getFormData<VoteType>(formData, [{ key: 'title', defaultValue: '' }])

  const voteValidationResult = VoteSchema.safeParse(voteData)

  if (!voteValidationResult.success) {
    const result = getFinalFormData<VoteType>(
      voteData,
      voteValidationResult.error.formErrors.fieldErrors,
    )
    return {
      success: false,
      data: result,
      errorMessage: result.title?.errorMessage,
    }
  }

  try {
    await prisma.vote.create({
      data: {
        title: voteValidationResult.data.title,
        userEmail: user.email,
      },
    })
    return json({ success: true, data: null, errorMessage: '' })
  } catch (err) {
    // TODO - Handle this with catch and error boundary
    return json({ success: false, data: null, errorMessage: 'Something went wrong.' })
    // return redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  if (query) {
    const searchMatchResult = await prisma.vote.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
          mode: 'insensitive',
        },
      },
      orderBy: {
        upvotes: 'desc',
      },
    })

    return json(searchMatchResult)
  }

  const votes = await prisma.vote.findMany({
    where: {
      userEmail: user.email,
    },
    orderBy: {
      upvotes: 'desc',
    },
  })

  return json(votes)
}

export default function ClipbaordContent() {
  const votes = useLoaderData<Array<Vote>>()

  const submit = useSubmit()

  const transition = useTransition()

  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const addVoteFetcher = useFetcher()

  const actionData = addVoteFetcher.data as VoteActionType

  const isAdding = addVoteFetcher.state === 'submitting'

  return (
    <div className="flex w-full py-8">
      <Wrapper>
        <Form
          className="flex items-center justify-between w-full"
          method="get"
          onChange={(target) => submit(target.currentTarget)}
        >
          <InputGroup size="md">
            {/* eslint-disable-next-line react/no-children-prop*/}
            <InputLeftElement pointerEvents="none" children={<RiSearchLine color="gray.300" />} />
            <Input pr="4.5rem" type="text" name="q" placeholder="Search..." />
          </InputGroup>
        </Form>

        <div className="p-4 mt-4 border rounded-md">
          <addVoteFetcher.Form
            className="flex items-center justify-between w-full mb-6"
            method="post"
            action="/habits-rank"
            key={transition.location?.key}
          >
            <FormControl isInvalid={actionData?.data?.title?.invalid}>
              <Input
                type="text"
                name="title"
                placeholder="Enter your Habit..."
                isInvalid={actionData?.data?.title?.invalid}
              />
              <FormErrorMessage>{actionData?.data?.title?.errorMessage}</FormErrorMessage>
            </FormControl>
            <Button
              leftIcon={<IoMdAdd />}
              ml="2"
              variant="solid"
              w="17%"
              size="md"
              type="submit"
              isLoading={isAdding}
              loadingText="Adding"
            >
              Add
            </Button>
          </addVoteFetcher.Form>
          <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={borderColor} />}>
            {votes.map((vote) => {
              return <VoteItem {...vote} key={vote.id} />
            })}
            {votes.length === 0 && <NoItems title="No Votees found. Please add some!!!" />}
          </VStack>
        </div>
      </Wrapper>
      <Outlet />
    </div>
  )
}
