import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient()
  const blogSlug = getQuery(event).slug
  if (!blogSlug || typeof blogSlug !== 'string') {
    return { exists: false }
  }

  const response = await prisma.blog.findUnique({
    where: {
      slug: blogSlug
    },
    select: {
      slug: true
    }
  })

  if (!response) {
    return { exists: false }
  }

  return { exists: true }
})
