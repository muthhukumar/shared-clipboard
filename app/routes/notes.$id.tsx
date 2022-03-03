import { FormControl, FormLabel, Input, Button, HStack } from '@chakra-ui/react'
import { Note as NoteType, User } from '@prisma/client'
import {
  json,
  LoaderFunction,
  useLoaderData,
  useParams,
  Outlet,
  useTransition,
  Form,
  useNavigate,
} from 'remix'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { PageTitle, Wrapper } from '~/components'

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const note = await prisma.note.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  if (!note) {
    throw json({ message: `The note you're looking for doesn't exists` }, { status: 404 })
  }

  if (note.userEmail !== user.email) {
    throw json(
      { message: `Unauthorized access. You're not allowed to see this content` },
      { status: 401 },
    )
  }

  return json(note)
}

export default function Copy() {
  const note = useLoaderData<NoteType>()
  const { id } = useParams()

  const transition = useTransition()

  const navigation = useNavigate()

  return (
    <div className="w-full">
      <PageTitle>
        <div className="flex items-center">
          <h2 className="text-3xl font-bold">{note.title}</h2>
          <HStack ml={'auto'}>
            <Button onClick={() => navigation(`/notes/${id}/edit`)}>Edit</Button>
            <Button onClick={() => navigation(`/notes/${id}/delete`)} variant={'outline'}>
              Delete
            </Button>
          </HStack>
        </div>
      </PageTitle>

      <Wrapper>
        <Form key={transition.location?.key} className="mt-8">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              disabled
              placeholder="Title"
              type="text"
              name="title"
              defaultValue={note.title}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Note</FormLabel>
            <p className="p-4 border rounded-md">{note.note}</p>
          </FormControl>
        </Form>
        <Outlet />
      </Wrapper>
    </div>
  )
}
