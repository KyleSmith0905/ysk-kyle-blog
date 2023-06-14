export default defineNuxtRouteMiddleware(async (to) => {
  const blog = await $fetch('/api/blog/exist', {
    method: 'GET',
    query: { slug: to.params.blogslug }
  })

  if (blog.exists) {
    return
  }

  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
})
