import { User } from '@prisma/client'

import { FormControl, FormLabel, Switch, VStack } from '@chakra-ui/react'
import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData, useSubmit } from 'remix'

import { prisma } from '~/db.server'
import { getUser } from '~/models/user.server'

type LoaderType = {
  isHabitsRankPublic: User['isHabitsRankPublic']
  isTodoPublic: User['isTodoPublic']
}

export const action: ActionFunction = async ({ request }) => {
  return ''
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)

  const userData = await prisma.user.findUnique({ where: { email: user.email } })

  if (!userData) {
    return redirect('/login')
  }

  return {
    isHabitsRankPublic: userData.isHabitsRankPublic,
    isTodoPublic: userData.isTodoPublic,
  }
}

export default function Settings() {
  const settings = useLoaderData<LoaderType>()
  const submit = useSubmit()

  return (
    <div>
      <VStack alignItems={'flex-start'}>
        <Form method="post" onChange={(event) => submit(event.currentTarget)} className="w-full">
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="show-todo" mb="0">
              Show your Todos publicly
            </FormLabel>
            <Switch ml="auto" id="show-todo" defaultChecked={settings.isTodoPublic} />
          </FormControl>
        </Form>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="show-habit-rank" mb="0">
            Show your Habits rank publicly
          </FormLabel>
          <Switch ml="auto" id="show-habit-rank" defaultChecked={settings.isHabitsRankPublic} />
        </FormControl>
      </VStack>
    </div>
  )
}
