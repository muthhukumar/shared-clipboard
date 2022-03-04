import { User } from '@prisma/client'
import { ActionFunction, redirect } from 'remix'
import { z } from 'zod'
import { formatFieldErrorsNew } from '~/utils'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'

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
    throw redirect('/')
  }
}
