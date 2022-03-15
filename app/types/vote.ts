import { z } from 'zod'

export const VoteSchema = z.object({
  title: z.string().min(5).max(100),
})

export type VoteType = z.infer<typeof VoteSchema>
