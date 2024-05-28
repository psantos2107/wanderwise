export const metadata = {
  title: "Search Flights",
};

export default async function FlightsPage() {
  //fields to put on the flight search forms!
  const originLocation = "LAX";
  const destinationLocation = "PAR";
  const departureDate = "2024-06-01";
  const returnDate = "2024-06-10";
  const numAdults = 1;
  const numChildren = 0;
  const numInfants = 0;
  const travelClass = "ECONOMY";
  const nonStop = false;
  const limit = 10;

  const url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocation}&destinationLocationCode=${destinationLocation}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${numAdults}&children=${numChildren}&infants=${numInfants}&travelClass=${travelClass}&nonStop=${
    nonStop ? "true" : "false"
  }&max=${limit}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.AMADEUS_API_KEY}`,
    },
  };

  const res = await fetch(url, options);
  const flights = await res.json();
  console.log(flights);
  return <p>For flights.</p>;
}
