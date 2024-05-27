export const metadata = {
  title: "Search Restaurants",
};

export default async function RestaurantsPage() {
  const location = encodeURIComponent("Los Angeles, CA".trim()); //will change later
  const searchTerm = encodeURIComponent("Brunch restaurants".trim());
  const price = 2;

  const url = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${searchTerm}&price=${price}&attributes=popular&sort_by=rating&limit=10`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  };

  const res = await fetch(url, options);
  const restaurants = await res.json();
  console.log(restaurants);

  return <p>For restaurants..</p>;
}
