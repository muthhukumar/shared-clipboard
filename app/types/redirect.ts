import { z } from 'zod'

export const RedirectSchema = z.object({
  url: z.string().max(1000),
})

export type RedirectType = z.infer<typeof RedirectSchema>
