import sharp from 'sharp'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { blobStorage } from '~~/server/utils/blob'
import { getServerSession } from '#auth'
import { isUserAdmin } from '~~/utils/authentication'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  if (isUserAdmin(session?.user.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User is not authorized to upload thumbnail images'
    })
  }

  const form = await readMultipartFormData(event)
  const blogSlug = form?.find(f => f.name === 'blog-slug')?.data.toString('utf-8')
  const file = form?.find(f => f.name === 'file')?.data
  if (!blogSlug || !file) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Blog slug and file are required'
    })
  }

  const optimizedImage = sharp(file).removeAlpha().resize({ width: 288, height: 384, fit: 'cover' }).webp({ quality: 75 })

  const response = await blobStorage.send(
    new PutObjectCommand({
      Bucket: useRuntimeConfig().s3Bucket,
      Key: `thumbnail/${blogSlug}.webp`,
      Body: await optimizedImage.toBuffer(),
      ContentType: 'image/webp',
      ACL: 'public-read'
    })
  ).catch(() => {
    return null
  })

  if (response === null) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to upload thumbnail image'
    })
  }

  return { acknowledged: true }
})
