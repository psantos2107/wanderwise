"use client";

import { useEffect, useState } from "react";

function RecommendationMessage({ category, tripLocation }) {
  //replace Paris, France with the name of the city via the CONTEXT API!
  return (
    <>
      <h1 className="text-center text-lg boldest tracking-wider underline">
        {category.toUpperCase()}
      </h1>
      <h2 className="p-4 leading-5 text-md">
        Searching for great {category} for your upcoming trip to {tripLocation}?
        Fill out the form below, and get instant recommendations right under
        your fingertips!!
      </h2>
    </>
  );
}

export default RecommendationMessage;
