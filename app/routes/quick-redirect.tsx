import { FormControl, FormLabel, Button, Input, FormErrorMessage, VStack } from '@chakra-ui/react'
import { User } from '@prisma/client'
import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  useActionData,
  useLoaderData,
  useTransition,
} from 'remix'
import { PageTitle, QRCode, Wrapper } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import Validator from 'validator'

type ActionDataType = {
  value: string
  errors: {
    message: string
    isInvalid: boolean
  }
}

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const url = String(formData.get('url')) ?? ''

  const urlValidationResult = Validator.isURL(url)

  const actionData: ActionDataType = {
    value: '',
    errors: { isInvalid: true, message: '' },
  }

  if (!urlValidationResult) {
    actionData.value = url
    actionData.errors = {
      isInvalid: true,
      message: 'Please enter valid URL.',
    }

    return actionData
  }

  await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      quickRedirect: url,
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

  const actionData = useActionData<ActionDataType>()

  const url = useLoaderData<string>()

  return (
    <div className="w-full">
      <PageTitle>
        <h2 className="text-3xl font-bold">Quick Redirect</h2>
      </PageTitle>
      <Wrapper>
        <Form method="post" className="py-6">
          <FormControl isInvalid={actionData?.errors.isInvalid}>
            <FormLabel>URL</FormLabel>
            <Input
              placeholder="Url"
              name="url"
              defaultValue={url}
              isInvalid={actionData?.errors.isInvalid}
            />
            <FormErrorMessage>{actionData?.errors.message}</FormErrorMessage>
          </FormControl>
          <Button type="submit" isLoading={saving} loadingText="Saving" mt="4">
            Save
          </Button>
        </Form>
        <VStack mt={'4'} alignItems={'flex-start'} w="full">
          <h2 className="font-semibold">URL QR code</h2>
          <QRCode value={url} />
        </VStack>
      </Wrapper>
    </div>
  )
}
