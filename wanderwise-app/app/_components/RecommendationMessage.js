"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function RecommendationMessage() {
  const pathname = usePathname();
  const [recCategory, setRecCategory] = useState("");

  useEffect(() => {
    const segments = pathname.split("/");
    const category = segments.at(-1);
    setRecCategory(category);
  }, [pathname]);

  //replace Paris, France with the name of the city via the CONTEXT API!
  return (
    <h1 className="p-4 leading-5">
      Searching for great {recCategory} to visit for your upcoming trip to
      Paris, France? Fill out the form below, and get instant recommendations
      right under your fingertips!!
    </h1>
  );
}

export default RecommendationMessage;
