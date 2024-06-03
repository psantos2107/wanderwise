import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

//google OAuth configurations.
const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return auth?.user ? true : false;
    },
    //will run before all the sign in processes happen. and so you can run database actions here.
    signIn({ user, account, profile }) {
      console.log("done before signing in. return true or false.");
    },
    session({ session, user }) {
      console.log("modify the session here");
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
