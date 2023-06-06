import { getPrisma } from '~~/server/utils/prisma'

type selectQueries = 'markdown' | 'summary' | 'title' | 'slug' | 'thumbnailUrl' | 'thumbnailAlt';

export default defineEventHandler(async (event) => {
  const prisma = getPrisma()
  const blogSlug = getQuery(event).slug
  const selectedNames = getQuery(event).select
  if (!blogSlug || typeof blogSlug !== 'string') {
    return { exists: false }
  }

  const selectedProjection: Partial<Record<selectQueries, boolean>> = {}
  if (selectedNames && Array.isArray(selectedNames)) {
    selectedNames.forEach((name) => {
      selectedProjection[name as selectQueries] = true
    })
  } else {
    selectedProjection.markdown = true
    selectedProjection.summary = true
    selectedProjection.title = true
  }

  const response = await prisma.blog.findUnique({
    where: {
      slug: blogSlug
    },
    select: selectedProjection
  })

  if (!response) {
    return { exists: false }
  }

  return response
})
