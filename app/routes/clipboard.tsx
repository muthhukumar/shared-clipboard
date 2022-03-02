import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ClipboardContent as ClipboardContentType, User } from '@prisma/client'
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
import { ClipboardContent, Wrapper } from '~/components'

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  if (query) {
    const searchMatchResult = await prisma.clipboardContent.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
        },
      },
    })

    return json(searchMatchResult)
  }

  const clipboardContents = await prisma.clipboardContent.findMany({
    where: {
      userEmail: user.email,
    },
  })

  return json(clipboardContents)
}

export default function ClipbaordContent() {
  const contents = useLoaderData<Array<ClipboardContentType>>()
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
            onClick={() => navigation('/clipboard/new')}
          >
            Add
          </Button>
        </Form>
        <div className="flex flex-col mt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contents.map((content) => {
              return (
                <Link
                  to={`/clipboard/${content.id}`}
                  key={content.id}
                  className="w-full transition-all border rounded-md hover:border-white"
                >
                  <ClipboardContent {...content} key={content.id} />
                </Link>
              )
            })}
          </div>
        </div>
      </Wrapper>
      <Outlet />
    </div>
  )
}
