import { getServerSession } from '#auth'
import { getPrisma } from '~~/server/utils/prisma'
import { isUserAdmin } from '~~/utils/authentication'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  if (isUserAdmin(session?.user.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User is not authorized to upload thumbnail images'
    })
  }

  const prisma = getPrisma()
  const body = await readBody(event)

  prisma.blog.create({
    data: {
      slug: body.slug,
      title: body.title,
      summary: body.summary,
      markdown: body.markdown,
      thumbnailUrl: body.thumbnailUrl,
      thumbnailAlt: body.thumbnailAlt
    }
  })

  return { acknowledged: true }
})
