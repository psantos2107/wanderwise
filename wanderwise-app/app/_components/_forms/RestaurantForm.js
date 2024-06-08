"use client";
import { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Spinner from "../Spinner";

function RestaurantForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("1");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    //changing the URL is one of the ways to cause a re-render of server components. Thus, this block of code is used in order to change the URL with query parameters that will be derived in order to re-fetch data from the server components with those query terms
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const params = new URLSearchParams(searchParams);
      params.set("searchTerm", searchTerm);
      params.set("priceRange", priceRange);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 500);
  };

  return (
    <>
      <form
        className="p-3 flex flex-col gap-6 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm"
        onSubmit={(e) => handleSumbit(e)}
      >
        <article>
          <label>
            What type of restaurant are you looking for? Please input terms like
            "brunch", "fast-food", "fancy", etc. Only use terms that describe a
            type of restaurant, otherwise, you may not have a valid search.
          </label>
          <div className="flex justify-center mt-2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              className="px-1"
              required
            />
          </div>
        </article>
        <article>
          <label>What is your price?</label>
          <select
            className="ml-2"
            value={priceRange}
            onChange={handlePriceRangeChange}
            required
          >
            <option value="1">$: Affordable</option>
            <option value="2">$$: Pricier</option>
            <option value="3">$$$: Expensive</option>
          </select>
        </article>
        {isLoading ? <Spinner /> : ""}
        <input
          type="submit"
          value="SUBMIT"
          className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner"
        />
      </form>
    </>
  );
}

export default RestaurantForm;
