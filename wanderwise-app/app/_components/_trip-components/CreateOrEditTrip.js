"use client";
import { useState, useEffect } from "react";
import DateRangePicker from "../DateRangePicker";
import "react-day-picker/dist/style.css";
import getCountryList from "@/app/_lib/get-country-list";
import formatDate from "@/app/_lib/format-date";
import { findAirport } from "aircodes";
import { createTrip, updateTripDetails } from "@/app/_lib/actions";
import { useRouter } from "next/navigation";

function CreateOrEditTrip({ userID, trip, isCreatingNewTrip }) {
  const [destinationCity, setDestinationCity] = useState(
    trip?.destination_city || ""
  );
  const [destinationCountry, setDestinationCountry] = useState(
    trip?.destination_country || "United States"
  );
  const [airlines, setAirlines] = useState([]);
  const [iataOrigin, setIataOrigin] = useState("");
  const [budget, setBudget] = useState(trip?.budget ?? 0);
  const [tripNotes, setTripNotes] = useState(trip?.trip_notes ?? "");
  const [flightBooked, setFlightBooked] = useState(
    trip?.flight_booked ?? false
  );
  const [hotelBooked, setHotelBooked] = useState(trip?.hotelBooked ?? false);
  const [errorMessage, setErrorMessage] = useState("");
  const countries = getCountryList();
  const router = useRouter();

  //grouping variables related to the calendar
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const departureDate = range?.from ? formatDate(range?.from) : "";
  const returnDate = range?.to ? formatDate(range?.to) : "";

  // in case a user is editing, this will allow the airline menu and airline to be displayed on mount versus having the user need to access the city and country inputs initially.
  useEffect(() => {
    if (destinationCity && destinationCountry) {
      displayIataCodes();
    }
  }, []);

  //handler functions
  function handleDestinationCity(e) {
    setDestinationCity(e.target.value);
  }
  function handleDestinationCountry(e) {
    setDestinationCountry(e.target.value);
  }
  function handleIataOrigin(e) {
    setIataOrigin(e.target.value);
  }
  function handleBudget(e) {
    setBudget(parseInt(e.target.value));
  }
  function handleTripNotes(e) {
    setTripNotes(e.target.value);
  }
  function handleFlightBooked(e) {
    setFlightBooked(e.target.checked);
  }
  function handleHotelBooked(e) {
    setHotelBooked(e.target.checked);
  }
  async function handleSumbit(e) {
    e.preventDefault();
    try {
      let thisTrip;
      if (!iataOrigin) {
        throw new Error(
          "You must choose an airline before saving this particular trip."
        );
      }
      if (isCreatingNewTrip) {
        thisTrip = await createTrip(
          destinationCity,
          destinationCountry,
          iataOrigin,
          budget,
          tripNotes,
          flightBooked,
          hotelBooked,
          departureDate,
          returnDate,
          userID
        );
      } else {
        thisTrip = await updateTripDetails(
          destinationCity,
          destinationCountry,
          iataOrigin,
          budget,
          tripNotes,
          flightBooked,
          hotelBooked,
          departureDate,
          returnDate,
          userID
        );
      }
      router.push(`/trip/${thisTrip[0].id}`);
    } catch (error) {
      console.error("Error creating trip: ", error);
      setErrorMessage(
        `Failed to ${
          isCreatingNewTrip ? "create" : "edit"
        } the trip. Please try again.`
      );
    }
  }

  function displayIataCodes() {
    //find airlines related to the inputted city
    let airlineArr = findAirport(destinationCity);
    if (airlineArr.length > 0) {
      //if there are airlines found, match it to the country that was inputted.
      const filteredAirlines = airlineArr.filter(
        (airline) => destinationCountry === airline.country
      );
      //if there is a match between city and country, display all airlines related to the city and and country
      if (filteredAirlines.length > 0) {
        setAirlines(filteredAirlines);
        return;
      }
    } else {
      //if the city is not found, but the country is, display all airlines based on the country.
      airlineArr = findAirport(originCountry);
      setAirlines(airlineArr);
    }
  }

  return (
    <form
      className="p-3 flex flex-col gap-3 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm"
      onSubmit={(e) => handleSumbit(e)}
    >
      <article className="flex flex-col md:block">
        <label className="block text-center md:inline">
          Which city are you flying to?
        </label>
        <input
          type="text"
          placeholder="Input City"
          className="px-1 ml-2 block md:inline"
          value={destinationCity}
          onBlur={displayIataCodes}
          onChange={handleDestinationCity}
          required
        />
      </article>
      <article className="flex flex-col md:block">
        <label className="block text-center md:inline">
          Which country are you flying to?
        </label>
        <select
          className="ml-2 block md:inline"
          value={destinationCountry}
          onChange={handleDestinationCountry}
          onBlur={displayIataCodes}
        >
          {countries.map((country) => {
            return (
              <option key={country} value={country}>
                {country}
              </option>
            );
          })}
        </select>
      </article>
      {trip?.airline && (
        <p className="text-center underline">
          CURRENTLY CHOSEN AIRLINE: {trip?.airline}
        </p>
      )}
      {airlines.length > 0 ? (
        <article className="w-fit mx-auto flex flex-col md:block">
          <label className="block text-center md:inline">
            Based on your city and country, choose which airline you'll be
            likely to use. (You may always edit this at a later time).
          </label>
          <select
            className="max-w-[80%] md:ml-2 block self-center md:inline"
            value={iataOrigin}
            onChange={handleIataOrigin}
            required
          >
            <option value={""}>PLEASE SELECT AN OPTION</option>
            {airlines.map((airline) => {
              return (
                <option key={airline.iata} value={airline.iata}>
                  {airline.iata}: {airline.name.slice(0, 30) + "..."}
                </option>
              );
            })}
          </select>
          <p className="mt-2">
            (If you don't find the airline you're looking for, try refining the
            city name or country you inputted, or you may try finding an airport
            in the next closest city to your destination.)
          </p>
        </article>
      ) : (
        "Please input the city and country from where you are departing to see a list of airports to fly from."
      )}
      <article className="flex flex-col items-center">
        <p>
          Please use the calendar below to select your trip start dates and
          return dates. Note, that the data is formatted as year-month-day.{" "}
        </p>
        <section className="flex flex-col md:flex-row md:gap-12 md:items-center">
          <DateRangePicker range={range} setRange={setRange} />
          <div>
            <p>
              Trip Start Date: {departureDate}{" "}
              {trip?.start_date
                ? `Previous Start Date: ${trip.start_date}`
                : ""}
            </p>
            <p>
              Trip Return Date: {returnDate}{" "}
              {trip?.end_date ? `Previous Start Date: ${trip.end_date}` : ""}
            </p>
          </div>
        </section>
      </article>
      <article>
        <label>What is your budget for this trip?</label>
        <input
          type="number"
          placeholder="Budget"
          className="ml-2 w-fit"
          value={budget}
          onChange={handleBudget}
          min="0"
          step="1"
        />
      </article>
      <article className="flex items-center">
        <label htmlFor="flightBooked" className="mr-2">
          Is your flight Already Booked?
        </label>
        <input
          type="checkbox"
          id="flightBooked"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={flightBooked}
          onChange={handleFlightBooked}
        />
      </article>
      <article className="flex items-center">
        <label htmlFor="hotelBooked" className="mr-2">
          Is your hotel Already Booked?
        </label>
        <input
          type="checkbox"
          id="hotelBooked"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={hotelBooked}
          onChange={handleHotelBooked}
        />
      </article>
      <article className="flex flex-col items-center">
        <label>
          Feel free to add any additional notes that you may have about this
          trip!
        </label>
        <textarea
          className="ml-2"
          value={tripNotes}
          onChange={handleTripNotes}
          rows="8"
          cols="50"
        ></textarea>
      </article>
      {errorMessage && <p className="text-red-700 boldest">{errorMessage}</p>}
      <input
        type="submit"
        value="SUBMIT"
        className="self-center bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
      />
    </form>
  );
}

export default CreateOrEditTrip;
