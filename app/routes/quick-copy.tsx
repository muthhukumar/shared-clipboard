import * as React from 'react'
import {
  FormControl,
  Button,
  Textarea,
  FormLabel,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { User } from '@prisma/client'
import {
  ActionFunction,
  Form,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
  useTransition,
} from 'remix'
import { PageTitle, QRCode, Wrapper } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Quick Copy',
  }
}

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const content = String(formData.get('content')) ?? ''

  await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      quickContent: content,
    },
  })

  return redirect('/quick-copy')
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const quickContent = await prisma.user.findUnique({
    where: { email: user.email },
    select: { quickContent: true },
  })

  return quickContent?.quickContent ?? ''
}

export default function QuickCopy() {
  const [url, setUrl] = React.useState<string>('')
  const transition = useTransition()
  const saving = transition.state === 'submitting'

  React.useEffect(() => {
    setUrl(`${window.location.host}/c/q`)
  }, [])

  const content = useLoaderData<string>()

  return (
    <div className="w-full">
      <PageTitle>
        <h2 className="text-3xl font-bold">Quick Copy</h2>
      </PageTitle>
      <Wrapper>
        <Form method="post" className="py-6">
          <FormControl>
            <FormLabel>Content</FormLabel>
            <Textarea placeholder="Title" name="content" defaultValue={content} />
          </FormControl>
          <Button type="submit" isLoading={saving} loadingText="Saving" mt="4">
            Save
          </Button>
        </Form>
        <Tabs mt={'4'}>
          <TabList>
            <Tab>Content QR code</Tab>
            <Tab>Shareable link QR code</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <QRCode value={content} />
            </TabPanel>
            <TabPanel>
              <QRCode value={url} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Wrapper>
    </div>
  )
}
