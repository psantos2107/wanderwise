//here to get details of the restaurant and pics.
export default async function fetchRestaurantDetails(placeIDArray) {
  //fields to include in url
  const fields = [
    "id",
    "types",
    "nationalPhoneNumber",
    "internationalPhoneNumber",
    "formattedAddress",
    "rating",
    "websiteUri",
    "userRatingCount",
    "displayName",
    "photos",
  ].join(",");
  const placeIDs = [...placeIDArray];

  //create an array of promises
  const placeIDPromises = placeIDs.map(async (id) => {
    const url = `https://places.googleapis.com/v1/places/${id}?fields=${fields}&key=${process.env.PLACES_GOOGLE_API_KEY}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(
          `Failed to fetch details for place ID ${id}: ${res.statusText}`
        );
      }
      return res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  });

  //consume all the promises at once (they have all the details)
  const placeDetailsArr = await Promise.all(placeIDPromises);
  const validPlaceDetailsArr = placeDetailsArr.filter(
    (details) => details !== null
  );
  return validPlaceDetailsArr;

  //create logic in the client side that will be able to query for the photo based on the below src.
  /* 
  https://places.googleapis.com/v1/places/ChIJ2fzCmcW7j4AR2JzfXBBoh6E/photos/AUacShh3_Dd8yvV2JZMtNjjbbSbFhSv-0VmUN-uasQ2Oj00XB63irPTks0-A_1rMNfdTunoOVZfVOExRRBNrupUf8TY4Kw5iQNQgf2rwcaM8hXNQg7KDyvMR5B-HzoCE1mwy2ba9yxvmtiJrdV-xBgO8c5iJL65BCd0slyI1/media?maxHeightPx=400&maxWidthPx=400&key=API_KEY
  */
  // return restaurantData?.businesses || [];
}
