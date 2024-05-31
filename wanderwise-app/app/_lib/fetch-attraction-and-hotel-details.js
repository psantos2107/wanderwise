export default async function fetchLocationDetails(idArray) {
  const promiseArray = idArray.map(async (id) =>{
    const res = await fetch(
      `https://api.content.tripadvisor.com/api/v1/location/${id}/details?key=${process.env.TRIP_ADVISOR_KEY}`
    )
    return res.json()}
  );
  const locationArr = await Promise.all(promiseArray);
  return locationArr;
}
