import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Note as NoteType, User } from '@prisma/client'
import { IoMdAdd } from 'react-icons/io'
import {
  LoaderFunction,
  json,
  useLoaderData,
  useNavigate,
  Link,
  Outlet,
  Form,
  useSubmit,
} from 'remix'
import { RiSearchLine } from 'react-icons/ri'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { NoItems, Note, Wrapper } from '~/components'

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  if (query) {
    const searchMatchResult = await prisma.note.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
        },
      },
    })

    return json(searchMatchResult)
  }

  const notes = await prisma.note.findMany({
    where: {
      userEmail: user.email,
    },
  })

  return json(notes)
}

export default function Notes() {
  const notes = useLoaderData<Array<NoteType>>()
  const navigation = useNavigate()

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
            onClick={() => navigation('/notes/new')}
          >
            Add
          </Button>
        </Form>
        <div className="flex flex-col mt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => {
              return (
                <Link
                  to={`/notes/${note.id}`}
                  key={note.id}
                  className="w-full transition-all border rounded-md hover:border-white"
                >
                  <Note {...note} key={note.id} />
                </Link>
              )
            })}
          </div>
          {notes.length === 0 && <NoItems title="No Notes found!!!" />}
        </div>
      </Wrapper>
      <Outlet />
    </div>
  )
}
