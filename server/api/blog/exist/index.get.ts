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

  await prisma.blog.findUnique({
    where: {
      id
    }
  })

  return { acknowledged: true }
})
