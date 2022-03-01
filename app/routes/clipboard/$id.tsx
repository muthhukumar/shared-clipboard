import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  IconButton,
  VStack,
  Link,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react'
import { ClipboardContent as ClipboardContentType, User } from '@prisma/client'
import {
  Link as RLink,
  json,
  LoaderFunction,
  useLoaderData,
  useParams,
  Outlet,
  useTransition,
} from 'remix'
import { BsThreeDots } from 'react-icons/bs'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

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

const OptionsPopOver = ({ id }: { id: number }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton aria-label="Search database" icon={<BsThreeDots />} variant="ghost" />
      </PopoverTrigger>
      <PopoverContent maxW="36">
        <PopoverBody p="0">
          <VStack spacing="0" textAlign="left">
            <Link as={RLink} to={`/clipboard/${id}/edit`} p="1" w="full">
              Edit
            </Link>
            <Link as={RLink} to={`/clipboard/${id}/delete`} p="1" w="full">
              Delete
            </Link>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default function Copy() {
  const clipboardContents = useLoaderData<ClipboardContentType>()
  const { id } = useParams()

  const transition = useTransition()

  return (
    <div className="w-full ">
      <div className="flex items-center p-4 px-8 py-2 border-b">
        <h2 className="mr-4 text-xl font-bold">{clipboardContents.title}</h2>
        <OptionsPopOver id={Number(id)} />
      </div>
      {/* <div className="grid grid-cols-4 gap-6 mt-2"></div> */}
      <form className="container max-w-3xl px-8 py-16 mx-auto" key={transition.location?.key}>
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
      </form>
      <Outlet />
    </div>
  )
}
