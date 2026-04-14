import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        const dbUser = await db.user.findUnique({ where: { id: user.id } });
        if (dbUser) {
          token.role = dbUser.role;
          token.hasPaid = dbUser.hasPaid;
          token.stripeCustomerId = dbUser.stripeCustomerId;
        }
      }
      // Re-check hasPaid (and stripeCustomerId) on each request for unpaid users
      // so Stripe payment is reflected immediately without requiring a re-login.
      if (token.id && !token.hasPaid) {
        const dbUser = await db.user.findUnique({
          where: { id: token.id as string },
          select: { hasPaid: true, stripeCustomerId: true },
        });
        if (dbUser?.hasPaid) {
          token.hasPaid = true;
        }
        if (dbUser?.stripeCustomerId && !token.stripeCustomerId) {
          token.stripeCustomerId = dbUser.stripeCustomerId;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.hasPaid = token.hasPaid as boolean;
        session.user.stripeCustomerId = token.stripeCustomerId as string | null | undefined;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const user = await db.user.findUnique({
          where: { email: parsed.data.email },
        });

        if (!user || !user.password) return null;

        const passwordMatch = await bcrypt.compare(
          parsed.data.password,
          user.password
        );
        if (!passwordMatch) return null;

        return user;
      },
    }),
  ],
});
