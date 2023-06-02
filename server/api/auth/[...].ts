import GithubProvider from 'next-auth/providers/github'
import { PrismaClient } from '@prisma/client'
import { Session } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { NuxtAuthHandler } from '#auth'

const prisma = new PrismaClient()

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: useRuntimeConfig().githubClientId,
      clientSecret: useRuntimeConfig().githubClientSecret
    })
  ],
  theme: {
    colorScheme: 'dark',
    logo: '/icons/logo.svg',
    brandColor: '#ffffff',
    buttonText: '#ffffff'
  },
  callbacks: {
    session: ({ session, user }: {session: Session, user: AdapterUser}) => {
      if (session) {
        session.user.id = user.id
      }
      return Promise.resolve(session)
    }
  },
  // @ts-expect-error We are certain this adapter is not undefined
  adapter: PrismaAdapter(prisma)
})
