"use client";

/*
const city = "Juneau"; //note: has to be a single string!
const iata = findAirport(city);
console.log(iata); 

const originCity = Los Angeles
const originCountry = United States
const destinationLocation = "PAR";
const departureDate = "2024-06-01";
const returnDate = "2024-06-10";
const numAdults = 1;
const numChildren = 0;
const numInfants = 0;
const travelClass = "ECONOMY";
const nonStop = false;
const limit = 10;

*/

import { useState } from "react";
import DateRangePicker from "../DateRangePicker";
import "react-day-picker/dist/style.css";
import getCountryList from "@/app/_lib/get-country-list";
import formatDate from "@/app/_lib/format-date";
import { findAirport } from "aircodes";

function FlightForm() {
  //setting state
  const [originCity, setOriginCity] = useState("");
  const [originCountry, setOriginCountry] = useState("United States");
  const [airlines, setAirlines] = useState([]);
  const [iataOrigin, setIataOrigin] = useState("");
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numInfants, setNumInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("ECONOMY");
  const [nonStopOnly, setNonStopOnly] = useState(true);

  //grouping variables related to the calendar
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const departureDate = range?.from ? formatDate(range?.from) : "";
  const returnDate = range?.to ? formatDate(range?.to) : "";

  //helper functions
  function handleOriginCity(e) {
    setOriginCity(e.target.value);
  }
  function handleOriginCountry(e) {
    setOriginCountry(e.target.value);
  }
  function handleNumAdults(e) {
    setNumAdults(e.target.value);
  }
  function handleNumChildren(e) {
    setNumChildren(e.target.value);
  }
  function handleNumInfants(e) {
    setNumInfants(e.target.value);
  }
  function handleTravelClass(e) {
    setTravelClass(e.target.value);
  }
  function handleNonStopOnly(e) {
    setNonStopOnly(e.target.value);
  }
  function handleIataOrigin(e) {
    setIataOrigin(e.target.value);
  }

  //used to find relevant airlines based on the city and country
  function displayIataCodes(e) {
    //find airlines related to the inputted city
    let airlineArr = findAirport(originCity);
    if (airlineArr.length > 0) {
      //if there are airlines found, match it to the country that was inputted.
      const filteredAirlines = airlineArr.filter(
        (airline) => originCountry === airline.country
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

  const countries = getCountryList();
  const numArray = [...Array(51).keys()]; //creates an array with elements that contain strings/numbers.

  return (
    <form className="p-3 flex flex-col gap-3 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm">
      <article className="flex flex-col md:block">
        <label className="block text-center md:inline">
          Which city are you flying from?
        </label>
        <input
          type="text"
          placeholder="Input City"
          className="px-1 ml-2 block md:inline"
          value={originCity}
          onChange={handleOriginCity}
          onBlur={displayIataCodes}
        />
      </article>
      <article className="flex flex-col md:block">
        <label className="block text-center md:inline">
          Which country are you flying from?
        </label>
        <select
          className="ml-2 block md:inline"
          value={originCountry}
          onChange={handleOriginCountry}
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
      {airlines.length > 0 ? (
        <article className="w-full flex flex-col md:block">
          <label className="block text-center md:inline">
            Please choose which airline you want to go to.
          </label>
          <select
            className="max-w-[80%] md:ml-2 block self-center md:inline"
            value={iataOrigin}
            onChange={handleIataOrigin}
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
            (If you cannot find your desired airport, please try inputting the
            city and country again.)
          </p>
        </article>
      ) : (
        "Please input the city and country from where you are departing to see a list of airports to fly from."
      )}
      <article className="flex flex-col items-center">
        <p>
          Please use the calendar below to select your departure and return
          dates. Note, that the data is formatted as year-month-day.{" "}
        </p>
        <section className="flex flex-col md:flex-row md:gap-12 md:items-center">
          <DateRangePicker range={range} setRange={setRange} />
          <div>
            <p>Departure Date: {departureDate}</p>
            <p>Return Date: {returnDate}</p>
          </div>
        </section>
      </article>
      <article>
        <label>How many adults are flying?</label>
        <select
          className="ml-2 w-fit"
          value={numAdults}
          onChange={handleNumAdults}
        >
          {numArray.map((num) => {
            return (
              <option key={num + " adult"} value={num}>
                {num}
              </option>
            );
          })}
        </select>
      </article>
      <article>
        <label>How many children will be on the flight?</label>
        <select
          className="ml-2"
          value={numChildren}
          onChange={handleNumChildren}
        >
          {numArray.map((num) => {
            return (
              <option key={num + " children"} value={num}>
                {num}
              </option>
            );
          })}
        </select>
      </article>
      <article>
        <label>How many infants will be on the flight?</label>
        <select
          className="ml-2 w-fit"
          value={numInfants}
          onChange={handleNumInfants}
        >
          {numArray.map((num) => {
            return (
              <option key={num + " infant"} value={num} className="w-fit">
                {num}
              </option>
            );
          })}
        </select>
      </article>
      <article className="flex flex-col md:block">
        <label className="block text-center md:inline">
          What travel class would you like to be in?
        </label>
        <select
          className="md:ml-2 block self-center md:inline w-fit"
          value={travelClass}
          onChange={handleTravelClass}
        >
          <option value={"ECONOMY"}>Economy</option>
          <option value={"PREMIUM_ECONOMY"}>Premium Economy</option>
          <option value={"BUSINESS"}>Business Class</option>
          <option value={"FIRST"}>First Class</option>
        </select>
      </article>
      <article className="flex items-center">
        <label htmlFor="nonStopCheckbox" className="mr-2">
          Search non-stop flights only
        </label>
        <input
          type="checkbox"
          id="nonStopCheckbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={nonStopOnly}
          onChange={handleNonStopOnly}
        />
      </article>
      <input
        type="submit"
        value="SUBMIT"
        className="self-center bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 text-sm boldest"
      />
    </form>
  );
}

export default FlightForm;
