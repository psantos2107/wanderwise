"use server";
//will contain all server actions specifically related to creating, deleting, and updating data, as well as to signing in and out of the application.
import { signIn, signOut } from "./auth";
import { supabase } from "./supabase";

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

export async function createTrip(
  destination_city,
  destination_country,
  airline,
  budget,
  trip_notes,
  flight_booked,
  hotel_booked,
  start_date,
  end_date,
  user_id
) {
  const { data, error } = await supabase
    .from("trips")
    .insert([
      {
        destination_city,
        destination_country,
        airline,
        budget,
        trip_notes,
        flight_booked,
        hotel_booked,
        start_date,
        end_date,
        user_id,
        updated_at: new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    throw new Error("Unable to insert trip.");
  }
  return data;
}

export async function getUser(email) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}
