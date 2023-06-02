import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

const getPrisma = () => {
  if (!prisma) {
    prisma = new PrismaClient()
  }
  return prisma
}

export { getPrisma }
