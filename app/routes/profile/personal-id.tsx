import { Alert, AlertIcon, Button, HStack, useToast } from '@chakra-ui/react'
import type { UniqueReference } from '@prisma/client'
import { IoMdAdd } from 'react-icons/io'
import type { ActionFunction, ErrorBoundaryComponent, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { Form, useFetcher, useLoaderData } from '@remix-run/react'
import { DefaultCatchBoundary, DefaultErrorBoundary, GoToHome } from '~/components'
import { copyToClipboard } from '~/utils/browser'

import { prisma } from '~/utils/prisma.server'
import { getUser } from '~/models/user.server'

export const action: ActionFunction = async ({ request }) => {
  const user = await getUser(request)

  const userData = await prisma.user.findUnique({ where: { email: user.email } })

  if (!userData) {
    return redirect('/login')
  }

  const uniqueReference = await prisma.uniqueReference.findUnique({
    where: { userId: userData.id },
  })

  if (uniqueReference) {
    // return json({ success: false, message: 'Personal ID already exists.' })
    return redirect('/profile/personal-id')
  }

  if (!uniqueReference) {
    try {
      await prisma.uniqueReference.create({ data: { userId: userData.id } })
      return redirect('/profile/personal-id')
      // return json({ success: true, message: 'Successfully generate Personal ID' })
    } catch {
      return redirect('/profile/personal-id')
      // throw json({ message: 'Failed to Generate Personal ID' })
    }
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)

  const userData = await prisma.user.findUnique({ where: { email: user.email } })

  if (!userData) {
    return redirect('/login')
  }

  const uniqueReference = await prisma.uniqueReference.findUnique({
    where: { userId: userData.id },
  })

  if (!uniqueReference) {
    throw json(
      { message: 'It seems like you have not generated your personal id yet.' },
      { status: 404 },
    )
  }

  return json(uniqueReference)
}

export default function PersonalId() {
  const uniqueReference = useLoaderData<UniqueReference>()
  const toast = useToast()
  return (
    <div className="flex flex-col gap-y-4">
      <div className="border-b pb-2">
        <h2>Personal ID</h2>
      </div>
      <div className="rounded-lg border p-4">{uniqueReference.personalId}</div>
      <div>
        <Button
          onClick={() =>
            copyToClipboard(uniqueReference.personalId, () =>
              toast({ title: 'Copied Personal ID', status: 'success' }),
            )
          }
        >
          Copy
        </Button>
      </div>
      <div>
        <Alert status="info" rounded={'md'}>
          <AlertIcon />
          Make friends in Clipi by sharing your Personal ID with your friends
        </Alert>
      </div>
    </div>
  )
}

export const CatchBoundary = () => {
  const generatePersonalIdFetcher = useFetcher()
  const isGeneratingPersonalId =
    generatePersonalIdFetcher.state === 'submitting' ||
    (generatePersonalIdFetcher.state === 'loading' &&
      generatePersonalIdFetcher.type === 'actionReload')

  return (
    <DefaultCatchBoundary>
      <HStack>
        <Form method="post">
          <Button
            leftIcon={<IoMdAdd />}
            colorScheme="twitter"
            type="submit"
            isLoading={isGeneratingPersonalId}
            loadingText="Generating"
          >
            Generate Personal ID
          </Button>
        </Form>
        <GoToHome />
      </HStack>
    </DefaultCatchBoundary>
  )
}

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
