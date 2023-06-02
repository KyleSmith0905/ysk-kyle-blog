import { isUserAdmin } from '~~/utils/authentication'

export default defineNuxtRouteMiddleware((to) => {
  const { status, data, signIn } = useAuth()

  // Return immediately if user is already authenticated
  if (status.value === 'authenticated' && isUserAdmin(data.value?.user.email)) {
    return
  }

  return signIn(undefined, { callbackUrl: to.path }) as ReturnType<typeof navigateTo>
})
