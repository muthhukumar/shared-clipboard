import * as React from 'react'
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  FormErrorMessage,
  VStack,
  HStack,
  useToast,
} from '@chakra-ui/react'
import { User } from '@prisma/client'
import {
  ActionFunction,
  Form,
  LoaderFunction,
  MetaFunction,
  redirect,
  useActionData,
  useLoaderData,
  useTransition,
} from 'remix'
import { PageTitle, QRCode, Wrapper } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import Validator from 'validator'
import { copyToClipboard } from '~/utils/browser'

type ActionDataType = {
  value: string
  errors: {
    message: string
    isInvalid: boolean
  }
}

export const meta: MetaFunction = () => {
  return {
    title: 'Quick Redirect',
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

  return redirect('/redirect')
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
  const [quickUrl, setQuickUrl] = React.useState<string>('')

  React.useEffect(() => {
    setQuickUrl(`${window.location.host}/r`)
  }, [])

  const transition = useTransition()
  const saving = transition.state === 'submitting'

  const actionData = useActionData<ActionDataType>()

  const url = useLoaderData<string>()

  const toast = useToast()

  const copy = () => {
    copyToClipboard(quickUrl, () => {
      toast({
        title: 'URL successfully copied to clipboard',
        status: 'success',
      })
    })
  }

  return (
    <div className="w-full">
      <PageTitle>
        <h2 className="text-3xl font-bold">Quick Redirect</h2>
      </PageTitle>
      <Wrapper>
        <VStack alignItems={'flex-start'} w="full" spacing={8} mt="8">
          <Form method="post" className="w-full">
            <FormControl isInvalid={actionData?.errors.isInvalid}>
              <FormLabel>URL</FormLabel>
              <Input
                placeholder="Url"
                name="url"
                w="full"
                defaultValue={url}
                isInvalid={actionData?.errors.isInvalid}
              />
              <FormErrorMessage>{actionData?.errors.message}</FormErrorMessage>
            </FormControl>

            <HStack mt="2">
              <Button type="submit" isLoading={saving} loadingText="Saving">
                Save
              </Button>
              <Button onClick={copy}>Copy URL</Button>
              <Button>
                <a href={url} target={'_blank'} rel="noreferrer">
                  Visit
                </a>
              </Button>
            </HStack>
          </Form>

          <VStack w="full" alignItems={'flex-start'}>
            <h2>Shareable URL</h2>
            <p className="w-full p-4 border rounded-md">{quickUrl}</p>
            <HStack>
              <Button onClick={copy}>Copy URL</Button>
              <Button>
                <a href={quickUrl} target={'_blank'} rel="noreferrer">
                  Visit
                </a>
              </Button>
            </HStack>
          </VStack>

          <VStack alignItems={'flex-start'} w="full">
            <h2 className="font-semibold">URL QR code</h2>
            <QRCode value={url} />
          </VStack>
        </VStack>
      </Wrapper>
    </div>
  )
}
