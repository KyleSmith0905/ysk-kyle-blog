import { getPrisma } from '~~/server/utils/prisma'
import { getServerSession } from '#auth'
import { isUserAdmin } from '~~/utils/authentication'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  if (!isUserAdmin(session?.user.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User is not authorized to upload thumbnail images'
    })
  }

  const prisma = getPrisma()
  const blogSlug = getQuery(event).slug
  if (!blogSlug || typeof blogSlug !== 'string') {
    return { exists: false }
  }

  const response = await prisma.blog.delete({
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
