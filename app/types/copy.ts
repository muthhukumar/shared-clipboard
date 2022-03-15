import { z } from 'zod'

export const CopySchema = z.object({
  content: z.string().max(2000).optional(),
})

export type CopyType = z.infer<typeof CopySchema>
