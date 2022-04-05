import { prisma } from './prisma.server'

export const User = {
  async findOrCreate({ email, profileUrl }: { email: string; profileUrl: string }) {
    try {
      let user = await prisma.user.findUnique({ where: { email } })

      if (!user) {
        user = await prisma.user.create({ data: { email, profileUrl } })
      }

      return user
    } catch (err) {
      return null
    }
  },
}
