import { Button, VStack } from '@chakra-ui/react'
import { ClipboardContent, User } from '@prisma/client'
import { IoMdAdd } from 'react-icons/io'
import { LoaderFunction, json, useLoaderData, Outlet, useNavigate, Link } from 'remix'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const clipboardContents = await prisma.clipboardContent.findMany({
    where: {
      userEmail: user.email,
    },
  })

  return json(clipboardContents)
}

export default function ClipbaordContent() {
  const contents = useLoaderData<Array<ClipboardContent>>()
  const navigation = useNavigate()
  return (
    <div className="flex w-full h-screen">
      <div className="container w-full max-w-[256px] h-full p-4 border-r">
        <h2 className="mb-6 text-2xl font-bold">Clipboard</h2>
        <div className="flex items-center justify-between w-full">
          <h3 className="font-bold text-gray-600">Copied</h3>
          <Button
            leftIcon={<IoMdAdd />}
            variant="solid"
            size="sm"
            onClick={() => navigation('/clipboard/new')}
          >
            Add
          </Button>
        </div>
        <div className="flex flex-col mt-4">
          <VStack alignItems="flex-start">
            {contents.map((content) => (
              <Link
                to={`/clipboard/${content.id}`}
                key={content.id}
                className="w-full p-2 text-sm border rounded-md"
              >
                <p>{content.title}</p>
              </Link>
            ))}
          </VStack>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
