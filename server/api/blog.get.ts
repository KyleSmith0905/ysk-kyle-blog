import { PrismaClient } from '@prisma/client'

type selectQueries = 'markdown' | 'summary' | 'title' | 'slug' | 'thumbnailUrl' | 'thumbnailAlt';

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient()

  // Retrieve fields from query and validates them
  const blogSlug = getQuery(event).slug
  const selectedNames = getQuery(event).select
  if (!blogSlug || typeof blogSlug !== 'string') {
    return { exists: false }
  }

  // Selects which fields to fetch from the database
  const selectedProjection: Partial<Record<selectQueries, boolean>> = {}
  if (selectedNames && Array.isArray(selectedNames)) {
    selectedNames.forEach((name) => {
      selectedProjection[name as selectQueries] = true
    })
  } else {
    selectedProjection.thumbnailAlt = true
    selectedProjection.thumbnailUrl = true
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
