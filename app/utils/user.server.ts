import { prisma } from './prisma.server'

export const User = {
  async findOrCreate({ email }: { email: string }) {
    try {
      let user = await prisma.user.findUnique({ where: { email } })

      if (!user) {
        user = await prisma.user.create({ data: { email } })
      }

      return user
    } catch (err) {
      return null
    }
  },
}
