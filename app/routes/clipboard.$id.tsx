// TODO - Might want to refactor this... Especially the form

import type { ClipboardContent as ClipboardContentType, User } from '@prisma/client'

import * as React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  useToast,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import type { ErrorBoundaryComponent, LoaderFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Form,
  Outlet,
  useLoaderData,
  useNavigate,
  useParams,
  useTransition,
} from '@remix-run/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import {
  DefaultCatchBoundary,
  DefaultErrorBoundary,
  PageTitle,
  QRCode,
  Wrapper,
} from '~/components'
import { copyToClipboard } from '~/utils/browser'
import { composeUrl } from '~/utils'

export const meta: MetaFunction = () => {
  return {
    title: 'Clipboard',
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const clipboardContents = await prisma.clipboardContent.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  if (!clipboardContents) {
    // TODO - Handle this with the error boundary and catch boundary
    throw json(
      { message: `The Clipboard content you're looking for doesn't exists` },
      { status: 404 },
    )
  }

  if (clipboardContents.userEmail !== user.email) {
    // TODO - Handle this with the error boundary and catch boundary
    throw json(
      { message: `Unauthorized access. You're not allowed to see this content` },
      { status: 401 },
    )
  }

  return json(clipboardContents)
}

export default function Copy() {
  const [url, setUrl] = React.useState<string>('')
  const clipboardContents = useLoaderData<ClipboardContentType>()
  const { id } = useParams()

  const transition = useTransition()

  const navigation = useNavigate()

  const toast = useToast()

  React.useEffect(() => {
    const url = new URL(`${window.location.href}`)
    setUrl(`${composeUrl(url)}/c/${id}`)
  }, [id])

  const copy = () => {
    copyToClipboard(clipboardContents.content, () => {
      toast({
        title: 'Successfully copied to clipboard',
        status: 'success',
      })
    })
  }

  const share = () => {
    copyToClipboard(url, () => {
      toast({
        title: 'URL copied to clipboard',
        status: 'success',
      })
      toast({
        title:
          'If you want to share this content to other please make sure to update the content private field to public.',
        status: 'info',
      })
    })
  }

  return (
    <div className="w-full">
      <PageTitle>
        <div className="flex items-center">
          <h2 className="text-3xl font-bold">{clipboardContents.title}</h2>
          <Box ml={'auto'}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Options
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => share()}>Share</MenuItem>
                <MenuItem onClick={() => copy()}>Copy</MenuItem>
                <MenuItem onClick={() => navigation(`/clipboard/${id}/edit`)}>Edit</MenuItem>
                <MenuItem onClick={() => navigation(`/clipboard/${id}/delete`)}>Delete</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </div>
      </PageTitle>

      <Wrapper>
        <Form key={transition.location?.key} className="mt-8">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              disabled
              placeholder="Title"
              type="text"
              name="title"
              defaultValue={clipboardContents.title}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Content</FormLabel>
            <Textarea
              name="content"
              disabled
              placeholder="Content to copy"
              defaultValue={clipboardContents.content}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Is Private</FormLabel>
            <Select
              name="private"
              placeholder="Select option"
              defaultValue={`${clipboardContents.private}` ?? 'true'}
              disabled
            >
              <option value="false">Public</option>
              <option value="true">Private</option>
            </Select>
          </FormControl>
        </Form>
        <Tabs mt={'4'}>
          <TabList>
            <Tab>Content QR code</Tab>
            <Tab>Shareable link QR code</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <QRCode value={clipboardContents.content} />
            </TabPanel>
            <TabPanel>
              <QRCode value={url} />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Outlet />
      </Wrapper>
    </div>
  )
}

export const CatchBoundary = DefaultCatchBoundary

export const ErrorBoundary: ErrorBoundaryComponent = DefaultErrorBoundary
