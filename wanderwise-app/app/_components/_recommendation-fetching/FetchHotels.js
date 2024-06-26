import { searchHotels } from "@/app/_lib/data-service";
import HotelCard from "./HotelCard";
import tripAdvisorLogo from "@/public/imgs/trip_advisor_logo.png";
import Image from "next/image";

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
          <h1 className="my-4 text-center sm:text-xl sm">
            RESULTS of SEARCH- Generated by:
          </h1>
          <figure className="sm:w-md sm:h-[40px] relative w-sm h-[30px] mb-4">
            <Image
              src={tripAdvisorLogo}
              fill
              className="object-contain"
              quality={100}
              placeholder="blur"
              alt="trip advisor logo"
            />
          </figure>
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
        <article className="p-3 flex flex-col gap-3 items-center text-theme-color-dark bg-gradient-white w-[100%] mx-auto rounded-sm shadow-md leading-6 text-md mt-4 sm:text-lg">
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
