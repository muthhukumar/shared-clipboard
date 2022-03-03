import { User } from '.prisma/client'
import { Button, useToast, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { PageTitle, Wrapper } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { copyToClipboard } from '~/utils/browser'
import { prisma } from '~/utils/prisma.server'

type LoaderType = { content: string; title: string }

export const loader: LoaderFunction = async ({ request, params }) => {
  const clipboardContentId = params.id

  if (!clipboardContentId) {
    throw json(
      { message: `Clipboard Content you're looking for does not exist` },
      {
        status: 404,
      },
    )
  }

  if (clipboardContentId === 'latest') {
    const user = (await authenticator.isAuthenticated(request, {
      failureRedirect: '/login',
    })) as User

    const clipboardContent = await prisma.clipboardContent.findFirst({
      where: { userEmail: user.email },
      orderBy: {
        createdAt: 'desc',
      },
    })

    if (!clipboardContent) {
      throw json(
        { message: `Clipboard Content you're looking for does not exist` },
        {
          status: 404,
        },
      )
    }

    return { content: clipboardContent.content, title: clipboardContent.title }
  }

  if (clipboardContentId === 'q') {
    const user = (await authenticator.isAuthenticated(request, {
      failureRedirect: '/login',
    })) as User

    const currentUser = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (!currentUser) {
      throw json(
        { message: `Clipboard Content you're looking for does not exist` },
        {
          status: 404,
        },
      )
    }

    return { content: currentUser.quickContent, title: 'Quick Copy' }
  }

  const clipboardContent = await prisma.clipboardContent.findUnique({
    where: { id: Number(clipboardContentId) },
  })

  if (!clipboardContent) {
    throw json(
      { message: `Clipboard Content you're looking for does not exist` },
      {
        status: 404,
      },
    )
  }

  if (!clipboardContent?.private) {
    return { content: clipboardContent.content, title: clipboardContent.title }
  }

  await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  return { content: clipboardContent.content, title: clipboardContent.title }
}

export default function CopyId() {
  const content = useLoaderData<LoaderType>()

  const toast = useToast()

  React.useEffect(() => {
    copy()
  }, [])

  const copy = () => {
    copyToClipboard(content.content, () => {
      toast({
        title: 'Successfully copied to clipboard',
        status: 'success',
      })
    })
  }

  return (
    <div>
      <PageTitle>
        <div className="flex items-center">
          <h2 className="text-3xl font-bold">{content.title}</h2>
          <Button onClick={() => copy()} ml={'auto'}>
            Copy
          </Button>
        </div>
      </PageTitle>
      <Wrapper>
        <VStack alignItems={'flex-start'} py={'6'} spacing={6}>
          <p className="mt-4">The content below is automatically copied.</p>
          <p className="w-full p-4 border rounded-md">{content.content}</p>
        </VStack>
      </Wrapper>
    </div>
  )
}