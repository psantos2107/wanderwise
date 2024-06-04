import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { getUser, createUser } from "./data-service";

//google OAuth configurations.
const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    // Credentials({
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   authorize: async (credentials) => {
    //     let user = null;
    //     const pwHash = await hash(credentials.password, await genSalt(10));
    //   },
    // }),
  ],
  callbacks: {
    //this is ran on all protected routes to see if there is a user that is logged in.
    authorized({ auth }) {
      //if not logged in, return false, and get redirected to the signIn page (defined as /login in page below.)
      return !!auth?.user;
    },
    //this is a
    async signIn({ user }) {
      try {
        const existingUser = await getUser(user.email);
        console.log(existingUser);
        if (!existingUser) {
          await createUser(user.name, user.email, user?.password || "");
          console.log("Successfully created user!");
        }
        return true;
      } catch {
        return false;
      }
    },
    //ensures that passwords don't get stored in the session object justi n case.
    session({ session, user }) {
      if (session.user?.password) {
        delete session.user.password;
      }
      console.log(session);
      return session;
    },
  },
  //added because i kept getting an OAuth error. Found this solution on stackoverflow
  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
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
