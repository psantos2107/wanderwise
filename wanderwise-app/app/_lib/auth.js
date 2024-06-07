import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { getUser, createUser, verifyUser } from "./data-service";

//credentials and google OAuth configurations.
const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        let { email, password } = credentials;
        if (password === "") {
          throw new Error(
            'You cannot pass blank text as a password. If you signed up via google authentication, please click on the "Sign in through Google" button to proceed with logging in.'
          );
        }
        const user = await verifyUser(email, password);
        return user;
      },
    }),
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
        let existingUser;
        if (!user?.signedInFromCreds) {
          existingUser = await getUser(user.email);
        }
        if (!existingUser && !user?.signedInFromCreds) {
          await createUser(user.name, user.email, user?.password || "");
          console.log("Successfully created user!");
        }
        return true;
      } catch {
        return false;
      }
    },
    //ensures that passwords don't get stored in the session object just in case. also adds ID
    async session({ session }) {
      const user = await getUser(session.user.email);
      session.user.id = user.id;
      console.log(session);
      if (session.user?.password) {
        delete session.user.password;
      }
      if (session.user?.signedInFromCreds) {
        delete session.user.signedInFromCreds;
      }
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
