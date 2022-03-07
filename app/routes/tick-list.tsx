import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  VStack,
  StackDivider,
  useColorModeValue,
  HStack,
  Select,
  Stack,
} from '@chakra-ui/react'
import { Label, LabelsOnTickList, TickList, User } from '@prisma/client'
import moment from 'moment'
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

const enum FilterByOptions {
  SHOW_ALL = 'showall',
  TODAY = 'today',
  UPCOMING = 'upcoming',
  OVERDUE = 'overdue',
}

// const enum SortByOptions {
//   PRIORITY = 'priority',
//   LAST_UPDATED = 'lastupdated',
//   TITLE = 'title',
// }

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
  const filterBy = url.searchParams.get('filterBy') ?? FilterByOptions.SHOW_ALL
  const sortBy = url.searchParams.get('sortBy') ?? ''

  // const today = moment().format('YYYY-MM-DD')
  const dueDate = moment().format('YYYY-MM-DD')

  let addiontalQuery = {}

  if (filterBy === FilterByOptions.UPCOMING) {
    addiontalQuery = {
      dueDate: {
        gt: dueDate,
      },
    }
  } else if (filterBy === FilterByOptions.OVERDUE) {
    addiontalQuery = {
      dueDate: {
        lt: dueDate,
      },
    }
  } else if (filterBy === FilterByOptions.TODAY) {
    addiontalQuery = {
      dueDate: {
        equals: dueDate,
      },
    }
  } else if (filterBy === FilterByOptions.SHOW_ALL) {
    addiontalQuery = {}
  }

  if (query) {
    const searchMatchResult = await prisma.tickList.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
          mode: 'insensitive',
        },
        // dueDate : {
        //   eq
        // },
        ...addiontalQuery,
      },
      include: {
        labels: {
          include: {
            Label: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return json({ tickList: searchMatchResult, filterBy, sortBy })
  }

  const tickList = await prisma.tickList.findMany({
    where: {
      userEmail: user.email,
      ...addiontalQuery,
    },
    include: {
      labels: {
        include: {
          Label: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return json({ tickList, filterBy, sortBy })
}

export default function TickList() {
  const navigation = useNavigate()

  const { tickList, filterBy, sortBy } = useLoaderData<{
    tickList: (TickList & {
      labels: (LabelsOnTickList & {
        Label: Label | null
      })[]
    })[]
    sortBy: string
    filterBy: FilterByOptions
  }>()

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
          <VStack w="full">
            <Stack
              direction={['column', 'row', 'row', 'row']}
              justifyContent={['flex-start']}
              className="w-full"
            >
              <InputGroup size="md">
                <InputLeftElement
                  pointerEvents="none"
                  //  eslint-disable-next-line react/no-children-prop
                  children={<RiSearchLine color="gray.300" />}
                />
                <Input pr="4.5rem" type="text" name="q" placeholder="Search..." />
              </InputGroup>

              <div className="w-full">
                <HStack flex={'2'} justifyContent="flex-start" w="100%">
                  <Select name="filterBy" defaultValue={filterBy ?? FilterByOptions.SHOW_ALL}>
                    <option disabled value={FilterByOptions.SHOW_ALL}>
                      Filter by
                    </option>
                    <option value={FilterByOptions.SHOW_ALL}>Show All</option>
                    <option value={FilterByOptions.TODAY}>Today</option>
                    <option value={FilterByOptions.UPCOMING}>Upcoming</option>
                    <option value={FilterByOptions.OVERDUE}>Overdue</option>
                  </Select>
                  <Select placeholder="Sort by" defaultValue={sortBy ?? ''}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </HStack>
              </div>
            </Stack>
            <div className="flex items-center justify-end w-full">
              <Button
                leftIcon={<IoMdAdd />}
                variant="solid"
                ml={'auto'}
                w={['full', 'initial', 'initial', 'initial']}
                size="md"
                onClick={() => navigation('/tick-list/new')}
              >
                Add
              </Button>
            </div>
          </VStack>
        </Form>

        {tickList.length === 0 && (
          <div className="mt-8">
            <NoItems title="No tick list items found!!!" />
          </div>
        )}
        <VStack
          alignItems={'flex-start'}
          mt="8"
          divider={<StackDivider borderColor={borderColor} />}
        >
          {tickList.length > 0 &&
            tickList.map((tickList) => {
              return <TickItem {...tickList} key={tickList.id} />
            })}
        </VStack>
      </Wrapper>
      <Outlet />
    </div>
  )
}
