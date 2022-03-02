import { FormControl, FormLabel, Input, Select, Textarea, Button, HStack } from '@chakra-ui/react'
import { ClipboardContent as ClipboardContentType, User } from '@prisma/client'
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

  const clipboardContents = await prisma.clipboardContent.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  if (!clipboardContents) {
    throw json(
      { message: `The Clipboard content you're looking for doesn't exists` },
      { status: 404 },
    )
  }

  if (clipboardContents.userEmail !== user.email) {
    throw json(
      { message: `Unauthorized access. You're not allowed to see this content` },
      { status: 401 },
    )
  }

  return json(clipboardContents)
}

export default function Copy() {
  const clipboardContents = useLoaderData<ClipboardContentType>()
  const { id } = useParams()

  const transition = useTransition()

  const navigation = useNavigate()

  return (
    <div className="w-full">
      <PageTitle>
        <div className="flex items-center">
          <h2 className="text-3xl font-bold">{clipboardContents.title}</h2>
          <HStack ml={'auto'}>
            <Button onClick={() => navigation(`/clipboard/${id}/edit`)}>Edit</Button>
            <Button onClick={() => navigation(`/clipboard/${id}/delete`)} variant={'outline'}>
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
              defaultValue={clipboardContents.title}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Content</FormLabel>
            <Textarea
              name="content"
              disabled
              placeholder="Content to copy"
              defaultValue={clipboardContents.content}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Is Private</FormLabel>
            <Select
              name="private"
              placeholder="Select option"
              defaultValue={`${clipboardContents.private}` ?? 'true'}
              disabled
            >
              <option value="false">Public</option>
              <option value="true">Private</option>
            </Select>
          </FormControl>
        </Form>
        <Outlet />
      </Wrapper>
    </div>
  )
}
