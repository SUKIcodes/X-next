import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/github";

export const handler = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
};

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
