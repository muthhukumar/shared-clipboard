// TODO - If free check this again.
import { User } from '@prisma/client'

import { ActionFunction, json, LoaderFunction, redirect } from 'remix'

import { z } from 'zod'
import moment from 'moment'

import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

const DueDateSchema = z.date()

export const action: ActionFunction = async ({ request, params }) => {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })) as User

  const id = String(params.id)

  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  })

  if (!todo) {
    throw redirect('/todo')
  }

  if (todo.userEmail !== user.email) {
    // TODO - Handle this with the error boundary and catch boundary
    throw json({ message: 'You are not authorized to edit this content' }, { status: 401 })
  }

  const formData = await request.formData()

  const dueDate = formData.get('dueDate') ? new Date(String(formData.get('dueDate'))) : undefined

  const dueDateValidationResult = DueDateSchema.safeParse(dueDate)

  if (!dueDateValidationResult.success) {
    // TODO - Handle this with the error boundary and catch boundary
    return json({ success: false, message: 'Invalid due date passed. Please pass valid due date.' })
  }

  try {
    await prisma.todo.update({
      where: {
        id: String(params.id),
      },
      data: {
        dueDate: moment(dueDateValidationResult.data).format('YYYY-MM-DD'),
      },
    })

    return json({ success: true })
  } catch (err) {
    // TODO - Handle this with the error boundary and catch boundary
    return json({ success: false, message: 'Updating due date failed' })
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })
}

export default function Delete() {
  return null
}
