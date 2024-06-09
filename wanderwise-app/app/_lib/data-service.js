//ALL CODE THAT FETCHES DATA FROM THE DATABASE OR FETCHES DATA FROM EXTERNAL APIS WILL BE FOUND HERE-----------------------.

import { supabase } from "./supabase";
import Amadeus from "amadeus";
import fetchDetailsAndPics from "./fetch-hotel-details-and-pics";
import { compare } from "bcryptjs";

//for testing the connection out.
export async function testConnection() {
  try {
    const { data, error } = await supabase.from("test").select("*").limit(1);
    if (error) {
      console.error(
        "Connection test FAILED. Here is the message: ",
        error.message
      );
    } else {
      console.log(`${data}!! Your connection to supabase was successful.`);
    }
  } catch (err) {
    console.error(
      "This connection failed. Please refer to error above and please try again."
    );
  }
}

//ALL FUNCTIONS RELATED TO USERS:---------------
export async function getUser(email) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

//if loggedin through s, this will verify if the user exists in the DB
export async function verifyUser(email, password) {
  const foundUser = await getUser(email);
  if (!foundUser) {
    throw new Error("Username or password is incorrect or not found.");
  } else if (await compare(password, foundUser.password)) {
    return {
      name: foundUser.name,
      email: foundUser.email,
      signedInFromCreds: true,
    };
  } else {
    throw new Error("Username or password is incorrect or not found.");
  }
}

//----ALL FUNCTIONS RELATED TO TRIPS ARE HERE--------
export async function getTripsByUserId(id) {
  const { data, error } = await supabase
    .from("trips")
    .select("*")
    .eq("user_id", id);

  if (error) {
    throw new Error("Unable to obtain trips.");
  }
  return data;
}

export async function getTripByTripId(id) {
  const { data, error } = await supabase
    .from("trips")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    throw new Error("Unable to obtain trip info.");
  }
  return data;
}

//ALL FUNCTIONS THAT FETCH DATA ROM EXTERNAL APIS ARE HERE
export async function searchRestaurants(location, searchTerm, price) {
  const encodedLocation = encodeURIComponent(location.trim()) || ""; //will change later
  const encodedSearchTerm = encodeURIComponent(searchTerm.trim()) || "";

  const url = `https://api.yelp.com/v3/businesses/search?location=${encodedLocation}&term=${encodedSearchTerm}&price=${price}&attributes=popular&sort_by=rating&limit=10`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  };

  const res = await fetch(url, options);
  const restaurantData = await res.json();
  return restaurantData?.businesses || [];
}

export async function searchFlights(
  iataOrigin,
  tripLocation,
  departureDate,
  returnDate,
  numAdults,
  numChildren,
  numInfants,
  travelClass,
  nonStopOnly
) {
  const amadeus = new Amadeus({
    clientId: `${process.env.AMADEUS_API_KEY}`,
    clientSecret: `${process.env.AMADEUS_API_SECRET}`,
    hostname: "production",
  });

  const res = await amadeus.shopping.flightOffersSearch.get({
    originLocationCode: iataOrigin,
    destinationLocationCode: tripLocation,
    departureDate: departureDate,
    returnDate: returnDate,
    adults: numAdults,
    children: numChildren,
    infants: numInfants,
    travelClass: travelClass,
    nonStop: nonStopOnly,
    max: "10",
  });

  const flightOffers = res.data;
  return flightOffers;
}

export async function searchHotels(location) {
  //ANTICPATED FETCH FUNCTION FOR HOTELS.
  const locationQuery = encodeURIComponent(location.trim()); //will change later

  //URL set-up
  const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${process.env.TRIP_ADVISOR_KEY}&searchQuery=${locationQuery}&category=hotels`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  //data fetching!
  const res = await fetch(url, options);
  const hotels = await res.json();
  const hotelIDs = hotels.data.map((hotel) => hotel.location_id);
  const hotelDataObject = await fetchDetailsAndPics(hotelIDs);
  return hotelDataObject;
}

export async function searchAttractions(location, searchTerm) {
  //CODE TO QUERY THE ATTRACTIONS.
  const encodedLocation = encodeURIComponent(location.trim()) || ""; //will change later
  const encodedSearchTerm = encodeURIComponent(searchTerm.trim()) || "";

  const url = `https://api.yelp.com/v3/businesses/search?location=${encodedLocation}&term=${encodedSearchTerm}&attributes=popular&sort_by=best_match&limit=10`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  };

  const res = await fetch(url, options);
  const attractionData = await res.json();
  return attractionData?.businesses || [];
}
