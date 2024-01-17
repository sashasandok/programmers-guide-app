import { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import dbConnect from './mongodb'
import User from './models/User'
import { isPasswordValid } from '@/utils/hash'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && account.type === 'credentials') {
        token.userId = account.providerAccountId
      }
      return token
    },
    async session({ session, token, user }: any) {
      session.user.id = token.userId
      return session
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials: any) {
        await dbConnect()

        const user = await User.findOne({ email: credentials.email })

        if (!user) return null

        if (
          typeof user.password === 'string' &&
          !(await isPasswordValid(credentials.password, user.password))
        ) {
          return null
        } else {
          delete user.password
        }

        return user
      },
      credentials: {
        username: {},
        password: {},
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
}
