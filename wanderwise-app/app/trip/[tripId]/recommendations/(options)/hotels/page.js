export const metadata = {
  title: "Search Hotels",
};

export default async function HotelsPage() {
  const location = encodeURIComponent("Los Angeles, CA".trim()); //will change later

  const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${process.env.TRIP_ADVISOR_KEY}&searchQuery=${location}&category=hotels`;

  //option to choose what kind of hotel is desired. (fancy, etc.)
  const options = { method: "GET", headers: { accept: "application/json" } };

  const res = await fetch(url, options);
  const hotels = await res.json();
  console.log(hotels);
  //then get all details of the hotels afterward! look at HOTEL DETAILS!
  return <p>For hotels.</p>;
}
