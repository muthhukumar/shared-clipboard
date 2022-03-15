import { z } from 'zod'

const ClipboardContentSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(5),
  private: z.boolean(),
})

type ClipboardContentType = z.infer<typeof ClipboardContentSchema>

export { ClipboardContentSchema, ClipboardContentType }
