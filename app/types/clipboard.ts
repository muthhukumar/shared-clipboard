import { z } from 'zod'

const ClipboardContentSchema = z.object({
  title: z.string().min(5).max(200),
  content: z.string().min(5).max(2000),
  private: z.boolean(),
})

type ClipboardContentType = z.infer<typeof ClipboardContentSchema>

export { ClipboardContentSchema, type ClipboardContentType }
