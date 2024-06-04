"use server";
//will contain all server actions.
import { signIn, signOut } from "./auth";

//function to sign in.
export async function googleSignIn() {
  await signIn("google", { redirectTo: "/user_page" });
}

//function to sign out.
export async function googleSignOut() {
  await signOut("google", { redirectTo: "/login" });
}

export async function standardSignIn(formData) {
  await signIn("credentials", { ...formData, redirectTo: "/user_page" });
}

export async function standardSignOut() {
  await signOut("credentials", { redirectTo: "/login" });
}
