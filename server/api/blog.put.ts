import { PrismaClient } from '@prisma/client'
import { getServerSession } from '#auth'
import { isUserAdmin } from '~~/utils/authentication'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  if (!isUserAdmin(session?.user.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User is not authorized to update blog'
    })
  }

  const prisma = new PrismaClient()
  const body = await readBody(event)
  const blogSlug = getQuery(event).slug
  if (!blogSlug || typeof blogSlug !== 'string') {
    return { exists: false }
  }

  const response = await prisma.blog.update({
    where: {
      slug: blogSlug
    },
    data: body
  })

  if (!response) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    })
  }

  return { acknowledged: true }
})
