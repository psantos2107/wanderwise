import AttractionCard from "./AttractionCard";
import { searchAttractions } from "@/app/_lib/data-service";

async function FetchAttractions({ searchTerm, tripLocation, tripID }) {
  let attractions = [];
  if (searchTerm) {
    attractions = await searchAttractions(tripLocation, searchTerm);
  }

  return (
    <section className="flex flex-col">
      <h1 className="my-2 text-center">RESULTS of SEARCH:</h1>
      {attractions.length > 0 ? (
        <>
          {attractions.map((attraction, index) => {
            return (
              <AttractionCard
                attraction={attraction}
                index={index}
                key={attraction.location_id}
                tripID={tripID}
              />
            );
          })}{" "}
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

export default FetchAttractions;
