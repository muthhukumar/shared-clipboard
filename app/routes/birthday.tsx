import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton,
  HStack,
} from '@chakra-ui/react'
import { User, Birthday } from '@prisma/client'
import { MdEdit, MdOutlineDeleteForever } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'
import {
  useLoaderData,
  useSubmit,
  Form,
  json,
  LoaderFunction,
  MetaFunction,
  Outlet,
  useNavigate,
} from 'remix'
import { NoItems, Wrapper } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import moment from 'moment'

export const meta: MetaFunction = () => {
  return {
    title: 'Birthday',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  if (query) {
    const searchMatchResult = await prisma.birthday.findMany({
      where: {
        userEmail: user.email,
        name: {
          contains: query,
        },
      },
    })

    return json(searchMatchResult)
  }

  const birthdays = await prisma.birthday.findMany({
    where: {
      userEmail: user.email,
    },
  })

  return json(birthdays)
}

export default function Birthday() {
  const birthdays = useLoaderData<Array<Birthday>>()

  const submit = useSubmit()

  const navigation = useNavigate()

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
            onClick={() => navigation('/birthday/new')}
          >
            Add
          </Button>
        </Form>

        <div className="p-4 mt-4 border rounded-md">
          {birthdays.length > 0 && (
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Birthday</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {birthdays.map((birthday) => {
                  return (
                    <Tr key={birthday.id}>
                      <Td>
                        <p className="font-bold">{birthday.name}</p>
                      </Td>
                      <Td>
                        <p className="font-bold">{moment(birthday.date).format('LL')}</p>
                      </Td>
                      <Td>
                        <HStack>
                          <IconButton
                            icon={<MdEdit />}
                            aria-label="Edit Birthday"
                            onClick={() => navigation(`/birthday/${birthday.id}/edit`)}
                          />
                          <IconButton
                            icon={<MdOutlineDeleteForever />}
                            aria-label="Delete Birthday"
                            onClick={() => navigation(`/birthday/${birthday.id}/delete`)}
                          />
                        </HStack>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          )}
          {birthdays.length === 0 && <NoItems title="No birthdays found. Please add some!!!" />}
        </div>
      </Wrapper>
      <Outlet />
    </div>
  )
}
