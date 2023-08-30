import type { LoaderFunction, V2_MetaFunction } from '@remix-run/node'
import type { ShortURL as ShortURLType, User } from '@prisma/client'

import { Button, HStack, StackDivider, VStack, useColorModeValue } from '@chakra-ui/react'
import { IoMdAdd } from 'react-icons/io'
import { json } from '@remix-run/node'
import { Outlet, useCatch, useLoaderData, useNavigate } from '@remix-run/react'

import {
  AddButton,
  DefaultErrorBoundary,
  GoToHome,
  NoItems,
  Page400,
  Page500,
  SearchBar,
  ShortURLItem,
  Wrapper,
} from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Short URL',
    },
  ]
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  if (query) {
    const searchMatchResult = await prisma.shortURL.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
          mode: 'insensitive',
        },
      },
    })

    return json(searchMatchResult)
  }

  const shortURLs = await prisma.shortURL.findMany({
    where: {
      userEmail: user.email,
    },
  })

  if (shortURLs.length === 0) {
    throw json(
      {
        message: 'No Short URLs found',
        description: `It seems like you've not added any short URLs yet. Please press the below button to add some short URLs.`,
      },
      { status: 404 },
    )
  }

  return json(shortURLs)
}

export default function ShortURL() {
  const shortURLs = useLoaderData<Array<ShortURLType>>()

  const borderColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <div className="flex w-full py-8">
      <Wrapper>
        <HStack>
          <SearchBar />
          <AddButton url="/shorturl/new" />
        </HStack>
        {shortURLs.length === 0 && (
          <div className="mt-8">
            <NoItems title="No Short URLs found!!!" />
          </div>
        )}
        <VStack
          alignItems={'flex-start'}
          mt="6"
          divider={<StackDivider borderColor={borderColor} />}
        >
          {shortURLs.map((shortURL) => {
            return (
              <ShortURLItem
                key={shortURL.id}
                {...shortURL}
                createdAt={new Date(shortURL.createdAt)}
                // TODO
                updatedAt={new Date(shortURL.updatedAt ?? '')}
              />
            )
          })}
        </VStack>
      </Wrapper>
      <Outlet />
    </div>
  )
}

export const CatchBoundary = () => {
  const caught = useCatch()
  const navigation = useNavigate()

  let page = <Page500 />

  if (caught.status === 404) {
    page = (
      <Page400 statusCode={404} message={caught.data.message} description={caught.data.description}>
        <HStack>
          <Button
            leftIcon={<IoMdAdd />}
            onClick={() => navigation('/shorturl/new')}
            colorScheme="twitter"
          >
            Add Short URL
          </Button>
          <GoToHome />
        </HStack>
      </Page400>
    )
  }

  return <>{page}</>
}

export const ErrorBoundary = DefaultErrorBoundary
