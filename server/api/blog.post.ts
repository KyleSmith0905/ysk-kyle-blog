import { PrismaClient } from '@prisma/client'
import { getServerSession } from '#auth'
import { isUserAdmin } from '~~/utils/authentication'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  if (!isUserAdmin(session?.user.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User is not authorized to upload blog'
    })
  }

  const prisma = new PrismaClient()
  const body = await readBody(event)

  const response = await prisma.blog.create({
    data: {
      slug: body.slug,
      title: body.title,
      summary: body.summary,
      markdown: body.markdown,
      thumbnailUrl: body.thumbnailUrl,
      thumbnailAlt: body.thumbnailAlt
    }
  })

  if (!response) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    })
  }

  return { acknowledged: true }
})
