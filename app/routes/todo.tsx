// TODO - Might want to refactor stuff in this file

import {
  TodoSortByOptions,
  TodoFilterByOptions,
  getTodoSortOption,
  getTodoFilterByOptions,
  getUserTodos,
} from '~/models/todo'
import type { User } from '@prisma/client'

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
  Switch,
} from '@chakra-ui/react'
import { IoMdAdd } from 'react-icons/io'
import { RiDeleteBack2Line, RiSearchLine } from 'react-icons/ri'
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Form,
  useCatch,
  useLoaderData,
  useNavigate,
  useSearchParams,
  useSubmit,
} from '@remix-run/react'

import { Wrapper, NoItems, TodoItem, Page400, Page500, GoToHome } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { composeToBoolean } from '~/utils'

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Todo',
    },
  ]
}

export const loader = async ({ request }: LoaderArgs) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''
  const filterBy = url.searchParams.get('filterBy') ?? TodoFilterByOptions.SHOW_ALL
  const sortBy = url.searchParams.get('sortBy') ?? TodoSortByOptions.LATEST
  const show = url.searchParams.get('show') ?? 'pending'
  const showCompleted = composeToBoolean(url.searchParams.get('showCompleted') ?? 'false')

  const addiontalQuery = getTodoFilterByOptions(filterBy as TodoFilterByOptions)
  const orderBy = getTodoSortOption(sortBy as TodoSortByOptions)

  if (!showCompleted) {
    Object.assign(addiontalQuery, { completed: false })
  }

  const todos = await getUserTodos(user, query, { ...addiontalQuery }, orderBy)

  return json({ todos, filterBy, sortBy, show })
}

export default function TodoIndex() {
  const navigation = useNavigate()

  const { todos, filterBy, sortBy } = useLoaderData<typeof loader>()

  const [searchParams] = useSearchParams()

  const submit = useSubmit()

  const borderColor = useColorModeValue('gray.200', 'gray.800')

  const completedTodos = todos.filter((todo) => todo.completed)

  const hasCompletedSomeTodos = completedTodos.length > 0

  const hasPendingTodos = todos.length > completedTodos.length

  return (
    <div className="w-full py-8">
      <Wrapper>
        <Form
          className="flex w-full items-center justify-between"
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
                  <Select name="filterBy" defaultValue={filterBy ?? TodoFilterByOptions.SHOW_ALL}>
                    <option disabled value={TodoFilterByOptions.SHOW_ALL}>
                      Filter by
                    </option>
                    <option value={TodoFilterByOptions.SHOW_ALL}>Show All</option>
                    <option value={TodoFilterByOptions.TODAY}>Today</option>
                    <option value={TodoFilterByOptions.UPCOMING}>Upcoming</option>
                    <option value={TodoFilterByOptions.OVERDUE}>Overdue</option>
                  </Select>
                  <Select name="sortBy" defaultValue={sortBy ?? TodoSortByOptions.LATEST}>
                    <option disabled value={TodoSortByOptions.LATEST}>
                      Sort by
                    </option>
                    <option value={TodoSortByOptions.LATEST}>Latest</option>
                    <option value={TodoSortByOptions.TITLE}>Title</option>
                    <option value={TodoSortByOptions.PRIORITY}>Priority</option>
                    <option value={TodoSortByOptions.LAST_UPDATED}>Last updated</option>
                  </Select>
                  {/* <Menu>
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
                  </Menu> */}
                </HStack>
              </div>
            </Stack>
            <HStack w="full" justifyContent={'flex-end'}>
              <Stack align="center" direction="row">
                <p>Show completed</p>
                <Switch
                  size="lg"
                  name="showCompleted"
                  value={'true' ?? searchParams.get('showCompleted')}
                />
              </Stack>
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

        {todos.length === 0 && (
          <div className="mt-8">
            <NoItems title="No todo list items found!!!" />
          </div>
        )}
        {hasPendingTodos && <h2 className="mt-10 border-b pb-4 text-xl font-bold">Pending</h2>}
        <VStack
          alignItems={'flex-start'}
          mt="6"
          divider={<StackDivider borderColor={borderColor} />}
        >
          {hasPendingTodos &&
            todos.map((todo) => {
              if (!todo.completed) {
                return (
                  <TodoItem
                    key={todo.id}
                    {...todo}
                    createdAt={new Date(todo.createdAt)}
                    updatedAt={new Date(todo.updatedAt)}
                  />
                )
              }
              return null
            })}
        </VStack>
        {hasCompletedSomeTodos && (
          <h2 className="mt-10 border-b pb-4 text-xl font-bold">Completed</h2>
        )}
        <VStack
          alignItems={'flex-start'}
          mt="6"
          divider={<StackDivider borderColor={borderColor} />}
        >
          {todos.length > 0 &&
            todos.map((todo) => {
              if (todo.completed) {
                return (
                  <TodoItem
                    key={todo.id}
                    {...todo}
                    createdAt={new Date(todo.createdAt)}
                    updatedAt={new Date(todo.updatedAt)}
                  />
                )
              }
              return null
            })}
        </VStack>
      </Wrapper>
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
            onClick={() => navigation('/todo/new')}
            colorScheme="twitter"
          >
            Add Todo
          </Button>
          <GoToHome />
        </HStack>
      </Page400>
    )
  }

  return <>{page}</>
}

export const ErrorBoundary = () => {
  return <Page500 />
}
