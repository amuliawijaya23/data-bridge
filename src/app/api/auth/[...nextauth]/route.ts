import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@lib/firebase';

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

export const authOptions = {
  session: { maxAge: 60 * 60 },
  secret: NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            (credentials as any).email || '',
            (credentials as any).password || '',
          );

          if (userCredential.user) {
            return userCredential.user;
          }
          return null;
        } catch (error: any) {
          throw new Error(error.code);
        }
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
