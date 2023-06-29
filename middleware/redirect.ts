export default defineNuxtRouteMiddleware((to) => {
  return navigateTo(`/blog/${to.params.blogslug}`)
})
