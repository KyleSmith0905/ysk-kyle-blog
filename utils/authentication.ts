const admins = ['kylesmith090502@gmail.com']

const isUserAdmin = (email?: string | null) => {
  if (!email || typeof email !== 'string') {
    return false
  }

  return admins.includes(email)
}

export { admins, isUserAdmin }
