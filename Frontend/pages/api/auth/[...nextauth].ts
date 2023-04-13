import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { User } from "next-auth";
import { getUserData } from "../../../functions/getUserData";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, email, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as any;
        const res = await fetch("http://backend:443/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        const token = await res.json();
        console.log(token)
        const userData = await fetch("http://backend:443/getUserDataToken/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_token: token["access_token"],
          }),
        });

        const registry = await userData.json();


        const user = {
          ...token,
          ...registry,
        };
        console.log({ user });

        if (res.ok && user) {
          return user;
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/login",
    newUser: "/auth/signup",
  },
};

export default NextAuth(authOptions);
