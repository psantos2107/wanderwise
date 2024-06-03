"use server";
import { signIn, signOut } from "./auth";

//function to sign in.
export async function signInAction() {
  await signIn("google", { redirectTo: "/home" });
}

//function to sign out.
export async function signOutAction() {
  await signOut("google", { redirectTo: "/" });
}
