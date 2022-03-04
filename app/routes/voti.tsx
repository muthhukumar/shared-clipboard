import {
  InputGroup,
  IconButton,
  InputLeftElement,
  Input,
  Button,
  HStack,
  FormControl,
  FormErrorMessage,
  VStack,
} from '@chakra-ui/react'
import { User, Voti } from '@prisma/client'
import { IoMdAdd } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import {
  useLoaderData,
  useSubmit,
  Form,
  json,
  LoaderFunction,
  MetaFunction,
  useActionData,
  useTransition,
} from 'remix'
import { NoItems, Wrapper } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { ActionDataType } from './voti/new'

export const meta: MetaFunction = () => {
  return {
    title: 'Voti',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  if (query) {
    const searchMatchResult = await prisma.voti.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
        },
      },
      orderBy: {
        votes: 'desc',
      },
    })

    return json(searchMatchResult)
  }

  const voties = await prisma.voti.findMany({
    where: {
      userEmail: user.email,
    },
    orderBy: {
      votes: 'desc',
    },
  })

  return json(voties)
}

export default function ClipbaordContent() {
  const voties = useLoaderData<Array<Voti>>()

  const submit = useSubmit()

  const transition = useTransition()

  const actionData = useActionData<ActionDataType>()

  return (
    <div className="flex w-full py-8">
      <Wrapper>
        <HStack>
          <Form
            className="flex items-center justify-between w-2/5"
            method="get"
            onChange={(target) => submit(target.currentTarget)}
          >
            <InputGroup size="md">
              {/* eslint-disable-next-line react/no-children-prop*/}
              <InputLeftElement pointerEvents="none" children={<RiSearchLine color="gray.300" />} />
              <Input pr="4.5rem" type="text" name="q" placeholder="Search..." />
            </InputGroup>
          </Form>
          <Form
            className="flex items-center justify-between w-full"
            method="post"
            action="/voti/new"
            key={transition.location?.key}
          >
            <FormControl isInvalid={actionData?.errors.title.isInvalid}>
              <Input
                type="text"
                name="title"
                placeholder="Enter your Voti..."
                isInvalid={actionData?.errors.title.isInvalid}
              />
              <FormErrorMessage>{actionData?.errors.title.message}</FormErrorMessage>
            </FormControl>
            <Button leftIcon={<IoMdAdd />} ml="2" variant="solid" w="17%" size="md" type="submit">
              Add
            </Button>
          </Form>
        </HStack>
        <VStack alignItems={'flex-start'} mt="8">
          {voties.map((voti, index) => {
            return (
              <div
                key={voti.id}
                className="flex items-center justify-between w-full px-4 py-2 border rounded-md"
              >
                <p className="flex items-center justify-center w-8 h-8 p-2 mr-4 font-bold border rounded-full">
                  {index + 1}
                </p>
                <p className="font-bold">{voti.title}</p>
                <HStack ml="auto" pl="2" spacing={4}>
                  <HStack>
                    <p className="flex items-center justify-center w-8 h-8 p-2 ml-2 font-bold border rounded-full">
                      {voti.votes}
                    </p>
                    <p className="mr-2 font-bold">votes</p>
                  </HStack>
                  <Form method="post" action={`/voti/${voti.id}/upvote`}>
                    <IconButton aria-label="Upvote" type="submit" icon={<BsArrowUp />} />
                  </Form>
                  <Form method="post" action={`/voti/${voti.id}/downvote`}>
                    <IconButton type="submit" aria-label="Down vote" icon={<BsArrowDown />} />
                  </Form>
                </HStack>
              </div>
            )
          })}
          {voties.length === 0 && <NoItems title="No Voties found. Please add some!!!" />}
        </VStack>
      </Wrapper>
    </div>
  )
}
