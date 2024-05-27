export const metadata = {
  title: "Search Attractions",
};

export default async function AttractionsPage() {
  const location = encodeURIComponent("Los Angeles, CA".trim()); //will change later
  const searchTerm = encodeURIComponent("attractions".trim());

  const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${process.env.TRIP_ADVISOR_KEY}&searchQuery=${location}&category=${searchTerm}`;

  const options = { method: "GET", headers: { accept: "application/json" } };

  const res = await fetch(url, options);
  const attractions = await res.json();
  console.log(attractions);
  //then get all details of the attractions afterward! look at LOCATION DETAILS!

  return <p>For attractions.</p>;
}
