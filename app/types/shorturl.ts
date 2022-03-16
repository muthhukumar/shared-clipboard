import { z } from 'zod'

export const ShortURLSchema = z.object({
  title: z.string().min(5).max(200),
  url: z.string().min(5).max(2000),
  slug: z.string().min(1).max(20),
})

export type ShortURLType = z.infer<typeof ShortURLSchema>
