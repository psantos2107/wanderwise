"use server";
//will contain all server actions specifically related to creating, deleting, and updating data, as well as to signing in and out of the application.
import { signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { hash, genSalt } from "bcryptjs";
import { getTripByTripId } from "./data-service";

//-----SIGN IN AND OUT FUNCTIONS---------------------------
export async function googleSignIn() {
  await signIn("google", { redirectTo: "/user_page" });
}

export async function googleSignOut() {
  await signOut("google", { redirectTo: "/login" });
}

export async function standardSignIn(formData) {
  await signIn("credentials", { ...formData, redirectTo: "/user_page" });
}

export async function standardSignOut() {
  await signOut("credentials", { redirectTo: "/login" });
}

//-----CRUD FOR TRIPS!!-------------------------------------
//CRUD FOR TRIPS
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

export async function updateTripDetails(
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
    .update({
      destination_city,
      destination_country,
      airline,
      budget,
      trip_notes,
      flight_booked,
      hotel_booked,
      start_date,
      end_date,
      updated_at: new Date().toISOString(),
    })
    .eq("user_id", user_id)
    .select();

  if (error) {
    throw new Error("Failed to update trip. Please try again");
  }
  return data;
}
//
export async function addRestaurantToTrip(tripID, restaurant) {
  const trip = await getTripByTripId(tripID);
  let restaurantList = trip.restaurants || [];
  restaurantList.unshift(restaurant);
  const { data, error } = await supabase
    .from("trips")
    .update({ restaurants: restaurantList })
    .eq("id", tripID)
    .select();

  if (error) {
    throw new Error("Failed to save to recommendations. Please try again.");
  }
  return data;
}

export async function addAttractionToTrip(tripID, attraction) {
  const trip = await getTripByTripId(tripID);
  let activitiesList = trip.activities || [];
  activitiesList.unshift(attraction);
  const { data, error } = await supabase
    .from("trips")
    .update({ activities: activitiesList })
    .eq("id", tripID)
    .select();

  if (error) {
    throw new Error("Failed to save to recommendations. Please try again.");
  }
  return data;
}

//----------CRUD FOR USERS----------------------------------
//create user.
export async function createUser(name, email, password) {
  const existingUser = await getUser(email);
  let hashedPassword = "";
  if (existingUser) {
    throw new Error(
      "A user with that email address already exists. Please try signing up again."
    );
  }
  if (password !== "") {
    hashedPassword = await hash(password, await genSalt(10));
  }

  const newUser = { name, email, password: hashedPassword };
  const { data, error } = await supabase.from("users").insert([newUser]);
  console.log("User successfully created: ", data);

  if (error) {
    console.error(error);
    throw new Error("Failed to create user.");
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
