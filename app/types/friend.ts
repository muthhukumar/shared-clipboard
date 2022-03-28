import { z } from 'zod'

export const FriendSchema = z.object({
  requestTo: z.string(),
})

export type FriendType = z.infer<typeof FriendSchema>
