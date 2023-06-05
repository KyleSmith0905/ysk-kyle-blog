import { createTransport } from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (
    !body?.message ||
    typeof body.message !== 'string' ||
    body.message.length < 5
  ) {
    throw createError({ statusCode: 404, message: 'Missing Message' })
  } else if (
    !body?.email ||
    typeof body.email !== 'string' ||
    body.email.length < 5 ||
    !body.email.includes('@') ||
    !body.email.includes('.')
  ) {
    throw createError({ statusCode: 404, message: 'Missing Email' })
  }

  const transport = createTransport({
    host: useRuntimeConfig().emailServerHost,
    port: parseInt(useRuntimeConfig().emailServerPort),
    secure: true,
    auth: {
      user: useRuntimeConfig().emailServerUser,
      pass: useRuntimeConfig().emailServerPassword
    }
  })

  const response = await transport.sendMail({
    to: 'kylesmith090502@gmail.com',
    from: `"${body.email}" <${useRuntimeConfig().emailServerFrom}>`,
    subject: 'Email Received from YSK Kyle Blog',
    text: `Email From ${body.email}\n\n${body.message}`
  })

  if (response.rejected.length > 0) {
    throw createError({
      statusCode: 500,
      message: 'Email Server Error'
    })
  }

  return {
    status: 'success'
  }
})
