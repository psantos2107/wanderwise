//getting information from trip advisor is a two-step process. searching for locations is the first step, and grabbing details + pictures of each location is the second. This function essentially fetches details on the locations and photos of each location and returns arrays for those to be used for rendering.

export default async function fetchDetailsAndPics(idArray) {
  const detailPromiseArray = idArray.map(async (id) => {
    const res = await fetch(
      `https://api.content.tripadvisor.com/api/v1/location/${id}/details?key=${process.env.TRIP_ADVISOR_KEY}`
    );
    return res.json();
  });
  const picPromiseArray = idArray.map(async (id) => {
    const res = await fetch(
      `https://api.content.tripadvisor.com/api/v1/location/${id}/photos?key=${process.env.TRIP_ADVISOR_KEY}&language=en`
    );
    return res.json();
  });

  const locationDetails = await Promise.all(detailPromiseArray);
  const picsArr = await Promise.allSettled(picPromiseArray);
  const pictures = picsArr.map((picture) => {
    if (!picture?.value?.data || picture.value.data.length === 0) {
      return "";
    } else {
      return picture.value.data[0]?.images?.medium?.url || "";
    }
  });
  return { locationDetails: locationDetails, pictures: pictures };
}

/* 
if (
      !picture?.value?.data?.length === 0 ||
      !picture?.value?.data?.length === undefined
    ) {
      return "";
    } else {
      return picture?.value?.data[0]?.images?.medium?.url
        ? picture?.value?.data[0]?.images?.medium?.url
        : "";
    }*/
