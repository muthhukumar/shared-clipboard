import { z } from 'zod'

export const CopySchema = z.object({
  content: z.string().optional(),
})

export type CopyType = z.infer<typeof CopySchema>
