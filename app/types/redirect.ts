import { z } from 'zod'

export const RedirectSchema = z.object({
  url: z.string(),
})

export type RedirectType = z.infer<typeof RedirectSchema>
