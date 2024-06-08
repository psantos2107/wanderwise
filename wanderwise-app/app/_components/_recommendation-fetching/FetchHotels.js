import { searchHotels } from "@/app/_lib/data-service";
import HotelCard from "./HotelCard";

async function FetchHotels({ location, tripID }) {
  let hotelDetails = [];
  let hotelPictures = [];
  if (location) {
    const { locationDetails, pictures } = await searchHotels(location);
    hotelDetails = [...locationDetails];
    hotelPictures = [...pictures];
  }

  return (
    <section>
      {hotelDetails.length > 0 ? (
        <>
          <h1 className="my-2 text-center">RESULTS of SEARCH:</h1>
          {hotelDetails.map((hotel, index) => (
            <HotelCard
              hotel={hotel}
              index={index}
              pictureURL={hotelPictures[index]}
              key={hotel.location_id}
              tripID={tripID}
            />
          ))}
        </>
      ) : (
        <article className="p-3 flex flex-col gap-3 items-center text-theme-color-dark bg-gradient-white w-[100%] mx-auto rounded-sm shadow-md leading-6 text-md mt-4">
          <h2>
            No results to display. Either no search has been conducted yet or no
            results have come out of your search. If it is the latter, please
            refine your search and try again.
          </h2>
        </article>
      )}
    </section>
  );
}

export default FetchHotels;
