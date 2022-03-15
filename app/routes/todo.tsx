import { Label, LabelsOnTodo, Todo as TodoType, User } from '@prisma/client'

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
  FormControl,
  FormLabel,
  Switch,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import moment from 'moment'
import { IoMdAdd } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'
import { IoIosOptions } from 'react-icons/io'
import { RiDeleteBack2Line } from 'react-icons/ri'
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

import { Wrapper, NoItems, TodoItem } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

const enum FilterByOptions {
  SHOW_ALL = 'showall',
  TODAY = 'today',
  UPCOMING = 'upcoming',
  OVERDUE = 'overdue',
}

const enum SortByOptions {
  PRIORITY = 'priority',
  LAST_UPDATED = 'lastupdated',
  TITLE = 'title',
  LATEST = 'latest',
}

type LoaderType = {
  todo: (TodoType & {
    labels: (LabelsOnTodo & {
      Label: Label | null
    })[]
  })[]
  sortBy: SortByOptions
  filterBy: FilterByOptions
  show: 'completed' | 'pending'
}

export const meta: MetaFunction = () => {
  return {
    title: 'Todo',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''
  const filterBy = url.searchParams.get('filterBy') ?? FilterByOptions.SHOW_ALL
  const sortBy = url.searchParams.get('sortBy') ?? SortByOptions.LATEST
  const show = url.searchParams.get('show') ?? 'pending'

  // const today = moment().format('YYYY-MM-DD')
  const dueDate = moment().format('YYYY-MM-DD')

  let addiontalQuery = {}
  let orderBy = {}

  if (sortBy === SortByOptions.LATEST) {
    orderBy = {
      createdAt: 'desc',
    }
  } else if (sortBy === SortByOptions.TITLE) {
    orderBy = {
      title: 'asc',
    }
  } else if (sortBy === SortByOptions.PRIORITY) {
    orderBy = {
      priority: 'asc',
    }
  } else if (sortBy === SortByOptions.LAST_UPDATED) {
    orderBy = {
      updatedAt: 'desc',
    }
  }

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

  if (show === 'completed') {
    addiontalQuery = {
      ...addiontalQuery,
    }
  } else {
    addiontalQuery = {
      ...addiontalQuery,
      completed: false,
    }
  }

  if (query) {
    const searchMatchResult = await prisma.todo.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
          mode: 'insensitive',
        },

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
        ...orderBy,
      },
    })

    return json({ todo: searchMatchResult, filterBy, sortBy })
  }

  const todo = await prisma.todo.findMany({
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
      ...orderBy,
    },
  })

  return json({ todo, filterBy, sortBy, show })
}

export default function Todo() {
  const navigation = useNavigate()

  const { todo, filterBy, sortBy, show } = useLoaderData<LoaderType>()

  const submit = useSubmit()

  const borderColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <div className="w-full py-8">
      <Wrapper>
        <Form
          className="flex items-center justify-between w-full"
          method="get"
          onChange={(target) => submit(target.currentTarget)}
          onReset={(target) => submit(target.currentTarget)}
        >
          <VStack w="full">
            <Stack
              direction={['column', 'column', 'row', 'row']}
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
                  <Select name="sortBy" defaultValue={sortBy ?? SortByOptions.LATEST}>
                    <option disabled value={SortByOptions.LATEST}>
                      Sort by
                    </option>
                    <option value={SortByOptions.LATEST}>Latest</option>
                    <option value={SortByOptions.TITLE}>Title</option>
                    <option value={SortByOptions.PRIORITY}>Priority</option>
                    <option value={SortByOptions.LAST_UPDATED}>Last updated</option>
                  </Select>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<IoIosOptions />}
                      variant="outline"
                    />
                    <MenuList>
                      <MenuItem>
                        <FormControl display="flex" alignItems="center" width={'initial'}>
                          <FormLabel htmlFor="show-completed" mb="0">
                            Show completed
                          </FormLabel>
                          <Switch
                            id="show-completed"
                            defaultChecked={show === 'completed' ? true : false}
                            name="show"
                            value="completed"
                          />
                        </FormControl>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
              </div>
            </Stack>
            <HStack w="full" justifyContent={'flex-end'}>
              <Button
                leftIcon={<IoMdAdd />}
                variant="outline"
                colorScheme={'twitter'}
                w={['full', 'full', 'initial', 'initial']}
                size="md"
                onClick={() => navigation('/todo/new')}
              >
                Add
              </Button>
              <Button
                leftIcon={<RiDeleteBack2Line />}
                variant="outline"
                w={['full', 'full', 'initial', 'initial']}
                colorScheme="red"
                size="md"
                type="reset"
              >
                Clear
              </Button>
            </HStack>
          </VStack>
        </Form>

        {todo.length === 0 && (
          <div className="mt-8">
            <NoItems title="No todo list items found!!!" />
          </div>
        )}
        <VStack
          alignItems={'flex-start'}
          mt="8"
          divider={<StackDivider borderColor={borderColor} />}
        >
          {todo.length > 0 &&
            todo.map((todo) => {
              return <TodoItem {...todo} key={todo.id} />
            })}
        </VStack>
      </Wrapper>
      <Outlet />
    </div>
  )
}
