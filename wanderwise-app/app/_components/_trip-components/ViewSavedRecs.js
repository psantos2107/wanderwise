import ToggleRecommendations from "./ToggleRecommendations";
import HotelCard from "../_recommendation-fetching/HotelCard";
import FlightCard from "../_recommendation-fetching/FlightCard";
import RestaurantCard from "../_recommendation-fetching/RestaurantCard";
import AttractionCard from "../_recommendation-fetching/AttractionCard";

async function ViewSavedRecs({ trip, recArray, searchParamsExist, category }) {
  return (
    <>
      <ToggleRecommendations trip={trip} />
      {!searchParamsExist ||
      !["attractions", "hotels", "restaurants", "flights"].includes(
        category
      ) ? (
        <p className="mt-3">
          Please click on one of the buttons above to view your recommendations.
        </p>
      ) : recArray.length === 0 ? (
        <p className="mt-3">
          No recommendations saved yet. Please click on "find more recs" to
          search for more recommendations for your trip!
        </p>
      ) : (
        <>
          {recArray.map((recommendation, index) => {
            if (category === "attractions") {
              return (
                <AttractionCard
                  key={index}
                  attraction={recommendation}
                  index={index}
                  tripID={trip.id}
                />
              );
            } else if (category === "hotels") {
              return (
                <HotelCard
                  key={index}
                  hotel={recommendation}
                  index={index}
                  pictureURL={null}
                  tripID={trip.id}
                  savedPicURL={recommendation?.pictureURL}
                />
              );
            } else if (category === "restaurants") {
              return (
                <RestaurantCard
                  key={index}
                  restaurant={recommendation}
                  tripID={trip.id}
                  index={index}
                />
              );
            } else if (category === "flights") {
              return (
                <FlightCard
                  key={index}
                  flightOffer={recommendation}
                  index={index}
                  tripID={trip.id}
                />
              );
            }
          })}
        </>
      )}
    </>
  );
}
//
export default ViewSavedRecs;

/* 
<>
          {recArray.map((recommendation, index) => {
            if (category === "attractions") {
              return (
                <AttractionCard
                  attraction={recommendation}
                  index={index}
                  tripID={trip.id}
                />
              );
            } else if (searchParams.category === "hotels") {
              return (
                <HotelCard
                  hotel={recommendation}
                  index={index}
                  pictureURL={null}
                  tripID={trip.id}
                  savedPicURL={recommendation?.pictureURL}
                />
              );
            } else if (searchParams.category === "restaurants") {
              return (
                <RestaurantCard
                  restaurant={recommendation}
                  tripID={trip.id}
                  index={index}
                />
              );
            } else {
              return (
                <FlightCard
                  flightOffer={recommendation}
                  index={index}
                  tripID={trip.id}
                />
              );
            }
          })}
        </>
      )}
    </>
*/
