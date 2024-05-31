import Image from "next/image";

function RestaurantCard({ restaurant, index }) {
  return (
    <article
      className="bg-gradient-white text-theme-color-dark rounded-sm p-2 mb-4"
      data-restaurant={JSON.stringify(restaurant)}
    >
      <h2>
        {index + 1}. {restaurant.name}
      </h2>
      <figure className="w-[90%] mx-auto">
        <Image
          src={restaurant.image_url}
          width="100"
          height="100"
          layout="responsive"
          alt={`Image of ${restaurant.name}`}
          className="object-cover max-h-36 rounded-sm"
        />
        <p>
          <strong>
            <u className="text-sm">CATEGORIES:</u>{" "}
          </strong>{" "}
          {restaurant.categories.map((category) => category.title).join(", ")}
        </p>
        <p>
          <u className="text-sm">YELP RATING:</u> {restaurant.rating} (out of{" "}
          {restaurant.review_count} reviews)
        </p>
        <p>
          <u className="text-sm">ADDRESS:</u>{" "}
          {restaurant.location.display_address.join(",")}
        </p>
        <a
          href={restaurant.url}
          target="_blank"
          className="block text-center  bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 w-fit mx-auto"
        >
          View on yelp!
        </a>
      </figure>
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

export default RestaurantCard;
