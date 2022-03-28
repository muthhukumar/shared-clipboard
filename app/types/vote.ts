import { ShareOption } from '@prisma/client'

import { z } from 'zod'

export const VoteSchema = z.object({
  title: z.string().min(5).max(100),
  shareWith: z.nativeEnum(ShareOption),
})

export type VoteType = z.infer<typeof VoteSchema>
