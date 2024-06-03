import attractionIcon from "@/public/imgs/attraction_icon.jpg";
import Image from "next/image";
import TextExpander from "../TextExpander";

function AttractionCard({ attraction, index }) {
  return (
    <article
      className="bg-gradient-white text-theme-color-dark rounded-sm p-2 mb-4"
      data-attraction={JSON.stringify(attraction)}
    >
      <h2>
        {index + 1}. {attraction.name}
      </h2>
      <div className="w-[90%] mx-auto">
        <figure className="w-full h-[150px] relative">
          <Image
            src={attractionIcon}
            fill
            alt={`Placeholder Image for Attractions`}
            className="object-cover max-h-44 rounded-sm"
          />
        </figure>
        <p>
          <strong>
            <u className="text-sm">DESCRIPTION:</u>{" "}
          </strong>{" "}
          {attraction?.description ? (
            <TextExpander>{attraction.description}</TextExpander>
          ) : (
            "No description provided."
          )}
        </p>
        <p>
          <u className="text-sm">ADDRESS:</u>{" "}
          {attraction?.address_obj?.address_string ||
            attraction?.address_string ||
            "Not available"}
        </p>
        <p>
          <u className="text-sm">PHONE NUMBER:</u>{" "}
          {attraction?.phone || "None provided."}
        </p>
        <p>
          <u className="text-sm">TRIPADVISOR RATING:</u> {attraction.rating}{" "}
          (out of {attraction.num_reviews} reviews){" "}
        </p>
        <figure className="w-1/2 h-10 mx-auto relative">
          <Image
            src={attraction.rating_image_url}
            fill
            alt={`Rating image for ${attraction.name}`}
            className="object-contain"
          />
        </figure>

        <a
          href={attraction.see_all_photos}
          target="_blank"
          className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto"
        >
          See More Photos!
        </a>
        <a
          href={attraction.web_url}
          target="_blank"
          className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto"
        >
          View on TripAdvisor!
        </a>
      </div>
      <button className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto">
        {/* GRAB THE JSON FROM THE DATASET OF THE PARENT NODE. */}
        Save Recommendation
      </button>
      <button className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto">
        {/* GRAB THE JSON FROM THE DATASET OF THE PARENT NODE. */}
        Add to Itinerary
      </button>
    </article>
  );
}

export default AttractionCard;
