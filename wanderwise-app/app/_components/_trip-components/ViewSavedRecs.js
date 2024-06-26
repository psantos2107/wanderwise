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
        <p className="mt-3 sm:text-lg">
          Please click on one of the buttons above to view your recommendations.
        </p>
      ) : recArray.length === 0 ? (
        <p className="mt-3 sm:text-lg">
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
                  isASavedRec={true}
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
                  isASavedRec={true}
                />
              );
            } else if (category === "restaurants") {
              return (
                <RestaurantCard
                  key={index}
                  restaurant={recommendation}
                  tripID={trip.id}
                  index={index}
                  isASavedRec={true}
                />
              );
            } else if (category === "flights") {
              return (
                <FlightCard
                  key={index}
                  flightOffer={recommendation}
                  index={index}
                  tripID={trip.id}
                  isASavedRec={true}
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
