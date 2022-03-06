import {
  InputGroup,
  IconButton,
  InputLeftElement,
  Input,
  Button,
  HStack,
  FormControl,
  FormErrorMessage,
  VStack,
  useColorModeValue,
  StackDivider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
} from '@chakra-ui/react'
import { User, Voti } from '@prisma/client'
import { IoMdAdd } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'
import { BsThreeDotsVertical, BsArrowDown, BsArrowUp } from 'react-icons/bs'
import {
  useLoaderData,
  useSubmit,
  Form,
  json,
  LoaderFunction,
  MetaFunction,
  useActionData,
  useTransition,
  Outlet,
  ActionFunction,
  redirect,
  useNavigate,
} from 'remix'
import { NoItems, Wrapper } from '~/components'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { z } from 'zod'
import { formatFieldErrorsNew } from '~/utils'
import moment from 'moment'

export const meta: MetaFunction = () => {
  return {
    title: 'Voti',
  }
}

const VotiSchema = z.object({
  title: z.string().min(5),
})

export type ActionDataType = {
  values: z.infer<typeof VotiSchema> | Record<string, unknown>
  errors: Record<
    keyof z.infer<typeof VotiSchema>,
    {
      message: string
      isInvalid: boolean
    }
  >
}

export const action: ActionFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const formData = await request.formData()

  const actionData: ActionDataType = {
    values: {},
    errors: {
      title: { isInvalid: true, message: '' },
    },
  }

  const votiContentData = {
    title: formData.get('title'),
  }

  const votiValidationResult = VotiSchema.safeParse(votiContentData)

  if (!votiValidationResult.success) {
    actionData.values = { ...votiContentData }
    actionData.errors = {
      ...formatFieldErrorsNew(votiContentData, votiValidationResult.error.formErrors.fieldErrors),
    }

    return actionData
  }

  try {
    await prisma.voti.create({
      data: {
        title: votiValidationResult.data.title,
        userEmail: user.email,
      },
    })
    return redirect(`/voti`)
  } catch (err) {
    return redirect('/')
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  if (query) {
    const searchMatchResult = await prisma.voti.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
          mode: 'insensitive',
        },
      },
      orderBy: {
        votes: 'desc',
      },
    })

    return json(searchMatchResult)
  }

  const voties = await prisma.voti.findMany({
    where: {
      userEmail: user.email,
    },
    orderBy: {
      votes: 'desc',
    },
  })

  return json(voties)
}

export default function ClipbaordContent() {
  const voties = useLoaderData<Array<Voti>>()

  const submit = useSubmit()

  const transition = useTransition()

  const navigation = useNavigate()

  const actionData = useActionData<ActionDataType>()

  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <div className="flex w-full py-8">
      <Wrapper>
        <Form
          className="flex items-center justify-between w-full"
          method="get"
          onChange={(target) => submit(target.currentTarget)}
        >
          <InputGroup size="md">
            {/* eslint-disable-next-line react/no-children-prop*/}
            <InputLeftElement pointerEvents="none" children={<RiSearchLine color="gray.300" />} />
            <Input pr="4.5rem" type="text" name="q" placeholder="Search..." />
          </InputGroup>
        </Form>

        <div className="p-4 mt-4 border rounded-md">
          <Form
            className="flex items-center justify-between w-full mb-6"
            method="post"
            action="/voti"
            key={transition.location?.key}
          >
            <FormControl isInvalid={actionData?.errors.title.isInvalid}>
              <Input
                type="text"
                name="title"
                placeholder="Enter your Voti..."
                isInvalid={actionData?.errors.title.isInvalid}
              />
              <FormErrorMessage>{actionData?.errors.title.message}</FormErrorMessage>
            </FormControl>
            <Button leftIcon={<IoMdAdd />} ml="2" variant="solid" w="17%" size="md" type="submit">
              Add
            </Button>
          </Form>
          <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={borderColor} />}>
            {voties.map((voti) => {
              return (
                <div
                  key={voti.id}
                  className="flex flex-col items-start w-full py-2 rounded-md gap-y-1"
                >
                  <p className="text-xl">{voti.title}</p>
                  <div className="flex items-center justify-between w-full">
                    <HStack>
                      <Tag fontSize={'x-small'} colorScheme={'purple'}>
                        {voti.votes} votes
                      </Tag>
                      {voti.label ? (
                        <Tag fontSize={'x-small'} colorScheme="whatsapp">
                          {voti.label}
                        </Tag>
                      ) : null}
                    </HStack>
                    <HStack pl="2" spacing={2}>
                      <Tag ml="auto" fontSize={'x-small'} colorScheme={'linkedin'}>
                        {moment(voti.updatedAt).calendar()}
                      </Tag>
                      <Form method="post" action={`/voti/${voti.id}/upvote`}>
                        <IconButton
                          variant={'outline'}
                          aria-label="Upvote"
                          type="submit"
                          icon={<BsArrowUp />}
                          size="sm"
                        />
                      </Form>
                      <Form method="post" action={`/voti/${voti.id}/downvote`}>
                        <IconButton
                          variant={'outline'}
                          type="submit"
                          aria-label="Down vote"
                          icon={<BsArrowDown />}
                          size="sm"
                        />
                      </Form>

                      <Menu>
                        <MenuButton>
                          <BsThreeDotsVertical />
                        </MenuButton>
                        <MenuList>
                          <MenuItem onClick={() => navigation(`/voti/${voti.id}/edit`)}>
                            Edit
                          </MenuItem>
                          <MenuItem onClick={() => navigation(`/voti/${voti.id}/delete`)}>
                            Delete
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </HStack>
                  </div>
                </div>
              )
            })}
            {voties.length === 0 && <NoItems title="No Voties found. Please add some!!!" />}
          </VStack>
        </div>
      </Wrapper>
      <Outlet />
    </div>
  )
}
