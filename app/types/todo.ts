import { Priority } from '@prisma/client'

import { z } from 'zod'

export const TodoSchema = z.object({
  title: z.string().min(5).max(200),
  description: z.string().max(500).optional(),
  completed: z.boolean().optional(),
  dueDate: z.date().optional(),
  // labels: z.array(z.number()).optional(),
  priority: z.nativeEnum(Priority).optional(),
})

export type TodoType = z.infer<typeof TodoSchema>
