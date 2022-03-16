import { ShortURL as ShortURLType, User } from '@prisma/client'

import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  HStack,
  StackDivider,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { CatchBoundaryComponent } from '@remix-run/react/routeModules'
import { IoMdAdd } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'
import {
  ErrorBoundaryComponent,
  Form,
  json,
  LoaderFunction,
  MetaFunction,
  Outlet,
  useCatch,
  useLoaderData,
  useNavigate,
  useSubmit,
} from 'remix'

import {
  DefaultErrorBoundary,
  GoToHome,
  NoItems,
  Page400,
  Page500,
  ShortURLItem,
  Wrapper,
} from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Short URL',
  }
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
  const navigation = useNavigate()

  const shortURLs = useLoaderData<Array<ShortURLType>>()

  const borderColor = useColorModeValue('gray.200', 'gray.800')

  const submit = useSubmit()
  return (
    <div className="flex w-full py-8">
      <Wrapper>
        <Form
          className="flex items-center justify-between w-full"
          method="get"
          onChange={(target) => submit(target.currentTarget)}
        >
          <InputGroup size="md" width="81%">
            {/* eslint-disable-next-line react/no-children-prop*/}
            <InputLeftElement pointerEvents="none" children={<RiSearchLine color="gray.300" />} />
            <Input pr="4.5rem" type="text" name="q" placeholder="Search..." />
          </InputGroup>
          <Button
            leftIcon={<IoMdAdd />}
            variant="solid"
            w="17%"
            size="md"
            onClick={() => navigation('/shorturl/new')}
          >
            Add
          </Button>
        </Form>
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
            return <ShortURLItem {...shortURL} key={shortURL.id} />
          })}
        </VStack>
      </Wrapper>
      <Outlet />
    </div>
  )
}

export const CatchBoundary: CatchBoundaryComponent = () => {
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

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
