import { getPrisma } from '~~/server/utils/prisma'

export default defineEventHandler(async () => {
  const prisma = getPrisma()

  const response = await prisma.blog.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    select: {
      slug: true,
      title: true,
      summary: true,
      thumbnailAlt: true,
      thumbnailUrl: true
    },
    skip: 0,
    take: 10
  })

  if (!response) {
    return { exists: false }
  }

  return response
})
