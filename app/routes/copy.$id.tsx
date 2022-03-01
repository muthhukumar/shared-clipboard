import { User } from '.prisma/client'
import { Button, Code, useToast } from '@chakra-ui/react'
import * as React from 'react'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { authenticator } from '~/utils/auth.server'
import { copyToClipboard } from '~/utils/browser'
import { prisma } from '~/utils/prisma.server'

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

    return clipboardContent.content
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
    return clipboardContent.content
  }

  await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  return clipboardContent.content
}

export default function CopyId() {
  const content = useLoaderData<string>()

  const toast = useToast()

  React.useEffect(() => {
    copyToClipboard(content, () => {
      toast({
        title: 'Successfully copied to clipboard',
        status: 'success',
      })
    })
  }, [])

  return (
    <div className="min-h-full p-4">
      <div className="flex flex-col items-center justify-center h-full py-16 gap-y-6">
        <h2 className="text-3xl font-bold">Almost done!</h2>
        <p className="mt-4">
          The content below is automatically copied. To copy manually please press the below button
        </p>
        <Code p="4">{content}</Code>
        <Button onClick={() => copyToClipboard(content)}>Copy to Clipboard</Button>
      </div>
    </div>
  )
}
