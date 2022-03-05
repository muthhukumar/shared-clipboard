import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
} from '@chakra-ui/react'
import { User, Birthday } from '@prisma/client'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'
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
    title: 'Birthday',
  }
}

const BirthdaySchema = z.object({
  name: z.string().min(5),
  date: z.date(),
})

export type ActionDataType = {
  values: z.infer<typeof BirthdaySchema> | Record<string, unknown>
  errors: Record<
    keyof z.infer<typeof BirthdaySchema>,
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
      name: { isInvalid: true, message: '' },
      date: { isInvalid: true, message: '' },
    },
  }

  const birthdayContentData = {
    name: formData.get('name'),
    date: new Date(String(formData.get('date'))),
  }

  const birthdayValidationResult = BirthdaySchema.safeParse(birthdayContentData)

  if (!birthdayValidationResult.success) {
    actionData.values = { ...birthdayContentData }
    actionData.errors = {
      ...formatFieldErrorsNew(
        birthdayContentData,
        birthdayValidationResult.error.formErrors.fieldErrors,
      ),
    }

    return actionData
  }

  try {
    await prisma.birthday.create({
      data: {
        name: birthdayValidationResult.data.name,
        date: moment(birthdayValidationResult.data.date).format('YYYY-MM-DD'),
        userEmail: user.email,
      },
    })
    return redirect(`/birthday`)
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
    const searchMatchResult = await prisma.birthday.findMany({
      where: {
        userEmail: user.email,
        name: {
          contains: query,
        },
      },
    })

    return json(searchMatchResult)
  }

  const birthdays = await prisma.birthday.findMany({
    where: {
      userEmail: user.email,
    },
  })

  return json(birthdays)
}

export default function Birthday() {
  const birthdays = useLoaderData<Array<Birthday>>()

  const submit = useSubmit()

  const transition = useTransition()

  const navigation = useNavigate()

  const actionData = useActionData<ActionDataType>()

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
            className="flex flex-col items-center justify-between w-full mb-8 gap-y-2 md:gap-y-0 md:gap-x-2 md:flex-row"
            method="post"
            action="/birthday"
            key={transition.location?.key}
          >
            <FormControl isInvalid={actionData?.errors.name.isInvalid}>
              <Input
                type="text"
                defaultValue={actionData?.values.name ? String(actionData?.values.name) : ''}
                name="name"
                placeholder="Enter name..."
                isInvalid={actionData?.errors.name.isInvalid}
              />
              <FormErrorMessage>{actionData?.errors.name.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={actionData?.errors.date.isInvalid}>
              <Input
                type="date"
                name="date"
                placeholder="date"
                isInvalid={actionData?.errors.date.isInvalid}
              />
              <FormErrorMessage>{actionData?.errors.date.message}</FormErrorMessage>
            </FormControl>
            <Button
              leftIcon={<IoMdAdd />}
              variant="solid"
              minW={['100%', '100%', '17%', '17%']}
              size="md"
              type="submit"
            >
              Add
            </Button>
          </Form>
          {birthdays.length > 0 && (
            <Table variant="simple">
              <TableCaption>Birthdays</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Birthday</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {birthdays.map((birthday) => {
                  return (
                    <Tr key={birthday.id}>
                      <Td>
                        <Form>
                          <Editable defaultValue={birthday.name} onSubmit={() => null}>
                            <EditablePreview />
                            <EditableInput />
                          </Editable>
                        </Form>
                      </Td>
                      <Td>
                        <Form>
                          <Editable
                            defaultValue={moment(birthday.date).format('LL')}
                            onSubmit={() => null}
                          >
                            <EditablePreview />
                            <EditableInput type="date" />
                          </Editable>
                        </Form>
                      </Td>
                      <Td>
                        <IconButton
                          icon={<MdOutlineDeleteForever />}
                          aria-label="Delete Birthday"
                          onClick={() => navigation(`/birthday/${birthday.id}/delete`)}
                        />
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          )}
          {birthdays.length === 0 && <NoItems title="No birthdays found. Please add some!!!" />}
        </div>
      </Wrapper>
      <Outlet />
    </div>
  )
}
