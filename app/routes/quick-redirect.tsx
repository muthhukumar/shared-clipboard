import { FormControl, FormLabel, Button, Input } from '@chakra-ui/react'
import { User } from '@prisma/client'
import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData, useTransition } from 'remix'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const content = String(formData.get('url')) ?? ''

  await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      quickRedirect: content,
    },
  })

  return redirect('/quick-redirect')
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const quickRedirect = await prisma.user.findUnique({
    where: { email: user.email },
    select: { quickRedirect: true },
  })

  return quickRedirect?.quickRedirect ?? ''
}

export default function QuickCopy() {
  const transition = useTransition()
  const saving = transition.state === 'submitting'

  const url = useLoaderData<string>()

  return (
    <div className="w-full p-4">
      <h2 className="mb-6 text-2xl font-bold">Quick Redirect</h2>
      <div className="container h-full max-w-5xl mx-auto">
        <Form method="post">
          <FormControl>
            <FormLabel>Quick Redirect</FormLabel>
            <Input placeholder="Url" name="url" defaultValue={url} type="url" />
          </FormControl>
          <Button type="submit" isLoading={saving} loadingText="Saving" mt="4">
            Save
          </Button>
        </Form>
      </div>
    </div>
  )
}
