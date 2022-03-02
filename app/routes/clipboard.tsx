import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ClipboardContent as ClipboardContentType, User } from '@prisma/client'
import { IoMdAdd } from 'react-icons/io'
import { LoaderFunction, json, useLoaderData, useNavigate, Link, Outlet } from 'remix'
import { RiSearchLine } from 'react-icons/ri'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { ClipboardContent, Wrapper } from '~/components'

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
  const contents = useLoaderData<Array<ClipboardContentType>>()
  const navigation = useNavigate()

  return (
    <div className="flex w-full py-8">
      <Wrapper>
        <div className="flex items-center justify-between w-full">
          <InputGroup size="md" width="83%">
            {/* eslint-disable-next-line react/no-children-prop*/}
            <InputLeftElement pointerEvents="none" children={<RiSearchLine color="gray.300" />} />
            <Input pr="4.5rem" type={'text'} placeholder="Search..." />
          </InputGroup>
          <Button
            leftIcon={<IoMdAdd />}
            variant="solid"
            w="15%"
            size="md"
            onClick={() => navigation('/clipboard/new')}
          >
            Add
          </Button>
        </div>
        <div className="flex flex-col mt-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contents.map((content) => {
              return (
                <Link to={`/clipboard/${content.id}`} key={content.id} className="w-full">
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
