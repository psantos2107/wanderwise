"use client";
import Image from "next/image";
import { addAttractionToTrip } from "@/app/_lib/actions";
import { useState } from "react";
import SpinnerMini from "../SpinnerMini";

function AttractionCard({ attraction, index, tripID }) {
  const [clientMessage, setClientMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSaveRecommendation(e) {
    e.preventDefault();
    try {
      setIsSaving(true);
      const attraction = JSON.parse(e.target.dataset.attraction);
      await addAttractionToTrip(tripID, attraction);
      setClientMessage("Successfully added recommendation to your trip.");
    } catch (error) {
      console.error("Error: ", error);
      setClientMessage(
        "Failed to save recommendation to your trip. Please try again."
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <article className="bg-gradient-white text-theme-color-dark rounded-sm p-2 mb-4">
      <h2>
        {index + 1}. {attraction.name}
      </h2>
      <figure className="w-[90%] mx-auto">
        {attraction?.image_url ? (
          <Image
            src={attraction.image_url}
            width="100"
            height="100"
            layout="responsive"
            alt={`Image of ${attraction.name}`}
            className="object-cover max-h-36 rounded-sm"
          />
        ) : (
          "No photo provided by Yelp."
        )}
        <p>
          <strong>
            <u className="text-sm">CATEGORIES:</u>{" "}
          </strong>{" "}
          {attraction.categories.map((category) => category.title).join(", ")}
        </p>
        <p>
          <u className="text-sm">YELP RATING:</u> {attraction.rating} (out of{" "}
          {attraction.review_count} reviews)
        </p>
        <p>
          <u className="text-sm">ADDRESS:</u>{" "}
          {attraction.location.display_address.join(",")}
        </p>
      </figure>
      <section className="flex flex-col gap-1 items-center mt-3">
        <a
          href={attraction.url}
          target="_blank"
          className="w-4/5 bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner text-center"
        >
          View on yelp!
        </a>
        {isSaving && <SpinnerMini />}
        {clientMessage && <p>{clientMessage}</p>}
        <button
          className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner w-4/5"
          data-attraction={JSON.stringify(attraction)}
          onClick={handleSaveRecommendation}
        >
          Save Recommendation
        </button>
      </section>
    </article>
  );
}

// function AttractionCard({ attraction, index }) {
//   return (
//     <article
//       className="bg-gradient-white text-theme-color-dark rounded-sm p-2 mb-4"
//       data-attraction={JSON.stringify(attraction)}
//     >
//       <h2>
//         {index + 1}. {attraction.name}
//       </h2>
//       <div className="w-[90%] mx-auto">
//         <figure className="w-full h-[150px] relative">
//           <Image
//             src={attractionIcon}
//             fill
//             alt={`Placeholder Image for Attractions`}
//             className="object-cover max-h-44 rounded-sm"
//           />
//         </figure>
//         <p>
//           <strong>
//             <u className="text-sm">DESCRIPTION:</u>{" "}
//           </strong>{" "}
//           {attraction?.description ? (
//             <TextExpander>{attraction.description}</TextExpander>
//           ) : (
//             "No description provided."
//           )}
//         </p>
//         <p>
//           <u className="text-sm">ADDRESS:</u>{" "}
//           {attraction?.address_obj?.address_string ||
//             attraction?.address_string ||
//             "Not available"}
//         </p>
//         <p>
//           <u className="text-sm">PHONE NUMBER:</u>{" "}
//           {attraction?.phone || "None provided."}
//         </p>
//         <p>
//           <u className="text-sm">TRIPADVISOR RATING:</u> {attraction.rating}{" "}
//           (out of {attraction.num_reviews} reviews){" "}
//         </p>
//         <figure className="w-1/2 h-10 mx-auto relative">
//           <Image
//             src={attraction.rating_image_url}
//             fill
//             alt={`Rating image for ${attraction.name}`}
//             className="object-contain"
//           />
//         </figure>

//         <a
//           href={attraction.see_all_photos}
//           target="_blank"
//           className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto"
//         >
//           See More Photos!
//         </a>
//         <a
//           href={attraction.web_url}
//           target="_blank"
//           className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto"
//         >
//           View on TripAdvisor!
//         </a>
//       </div>
//       <button className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto">
//         {/* GRAB THE JSON FROM THE DATASET OF THE PARENT NODE. */}
//         Save Recommendation
//       </button>
//       <button className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto">
//         {/* GRAB THE JSON FROM THE DATASET OF THE PARENT NODE. */}
//         Add to Itinerary
//       </button>
//     </article>
//   );
// }

export default AttractionCard;
