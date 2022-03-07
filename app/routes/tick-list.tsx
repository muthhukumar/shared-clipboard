import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  VStack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react'
import { TickList, User } from '@prisma/client'
import { IoMdAdd } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'
import {
  Form,
  json,
  LoaderFunction,
  MetaFunction,
  Outlet,
  useLoaderData,
  useNavigate,
  useSubmit,
} from 'remix'
import { Wrapper, NoItems, TickItem } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Tick list',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  if (query) {
    const searchMatchResult = await prisma.tickList.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
          mode: 'insensitive',
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return json(searchMatchResult)
  }

  const tickList = await prisma.tickList.findMany({
    where: {
      userEmail: user.email,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return json(tickList)
}

export default function TickList() {
  const navigation = useNavigate()

  const tickLists = useLoaderData<Array<TickList>>()

  const submit = useSubmit()

  const borderColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <div className="w-full py-8">
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
            onClick={() => navigation('/tick-list/new')}
          >
            Add
          </Button>
        </Form>
        {tickLists.length === 0 && (
          <div className="mt-8">
            <NoItems title="No tick list items found!!!" />
          </div>
        )}
        <VStack
          alignItems={'flex-start'}
          mt="8"
          divider={<StackDivider borderColor={borderColor} />}
        >
          {tickLists.length > 0 &&
            tickLists.map((tickList) => {
              // const today = moment().format('YYYY-MM-DD')
              // const dueDate = moment(tickList.dueDate).format('YYYY-MM-DD')

              // if (moment(today).isSame(dueDate)) {
              return <TickItem {...tickList} key={tickList.id} />
              // }
            })}
        </VStack>
      </Wrapper>
      <Outlet />
    </div>
  )
}
