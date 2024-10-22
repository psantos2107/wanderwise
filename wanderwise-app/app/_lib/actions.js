"use server";
//will contain all server actions specifically related to creating, deleting, and updating data, as well as to signing in and out of the application!
import { signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { hash, genSalt } from "bcryptjs";
import { getTripByTripId } from "./data-service";
import { revalidatePath } from "next/cache";

//-----SIGN IN AND OUT FUNCTIONS---------------------------
export async function googleSignIn() {
  await signIn("google", { redirectTo: "/user_page" });
}

export async function standardSignIn(formData) {
  await signIn("credentials", { ...formData, redirectTo: "/user_page" });
}

export async function standardSignOut() {
  await signOut();
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
  tripID
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
    .eq("id", tripID)
    .select();

  if (error) {
    throw new Error("Failed to update trip. Please try again");
  }
  revalidatePath("/user_page");
  return data;
}
//
export async function addRestaurantToTrip(tripID, restaurant) {
  const trip = await getTripByTripId(tripID);
  let restaurantList = trip.restaurants || [];
  restaurantList.unshift(restaurant);
  const { data, error } = await supabase
    .from("trips")
    .update({
      restaurants: restaurantList,
      updated_at: new Date().toISOString(),
    })
    .eq("id", tripID)
    .select();

  if (error) {
    throw new Error("Failed to save to recommendations. Please try again.");
  }
  revalidatePath("/user_page");
  return data;
}

export async function addAttractionToTrip(tripID, attraction) {
  const trip = await getTripByTripId(tripID);
  let activitiesList = trip.activities || [];
  activitiesList.unshift(attraction);
  const { data, error } = await supabase
    .from("trips")
    .update({
      activities: activitiesList,
      updated_at: new Date().toISOString(),
    })
    .eq("id", tripID)
    .select();

  if (error) {
    throw new Error("Failed to save to recommendations. Please try again.");
  }
  revalidatePath("/user_page");
  return data;
}

export async function addFlightOfferToTrip(tripID, flightOffer) {
  const trip = await getTripByTripId(tripID);
  let flightList = trip.flight_offers || [];
  flightList.unshift(flightOffer);
  const { data, error } = await supabase
    .from("trips")
    .update({ flight_offers: flightList, updated_at: new Date().toISOString() })
    .eq("id", tripID)
    .select();

  if (error) {
    throw new Error("Failed to save to recommendations. Please try again.");
  }
  revalidatePath("/user_page");
  return data;
}

export async function addHotelToTrip(tripID, hotel) {
  const trip = await getTripByTripId(tripID);
  let hotelList = trip.hotels || [];
  hotelList.unshift(hotel);
  const { data, error } = await supabase
    .from("trips")
    .update({ hotels: hotelList, updated_at: new Date().toISOString() })
    .eq("id", tripID)
    .select();

  if (error) {
    throw new Error("Failed to save to recommendations. Please try again.");
  }
  revalidatePath("/user_page");
  return data;
}

export async function editTripNotes(tripID, tripNotes) {
  const { data, error } = await supabase
    .from("trips")
    .update({ trip_notes: tripNotes, updated_at: new Date().toISOString() })
    .eq("id", tripID)
    .select();
  if (error) {
    throw new Error("Failed to edit notes. Please try again.");
  }
  revalidatePath("/user_page");
  return data;
}

export async function deleteTrip(tripID) {
  const { error } = await supabase.from("trips").delete().eq("id", tripID);

  if (error) {
    throw new Error("Failed to delete. Please try again.");
  }
  revalidatePath("/user_page");
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
