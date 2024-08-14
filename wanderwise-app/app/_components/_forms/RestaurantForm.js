"use client";
import { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Spinner from "../Spinner";

function RestaurantForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    //changing the URL is one of the ways to cause a re-render of server components. Thus, this block of code is used in order to change the URL with query parameters that will be derived in order to re-fetch data from the server components with those query terms
    setIsLoading(true);
    setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      params.set("searchTerm", searchTerm);
      params.set("type", type);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      <form
        className="p-3 flex flex-col gap-6 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm sm:text-lg"
        onSubmit={(e) => handleSumbit(e)}
      >
        <article>
          <label>
            For the first term, please input what kind of restaurant you want to
            go to. Please input terms like "brunch", "Chinese", "fancy", etc.
            Any descriptive term will suffice. Second, please choose in the
            dropdown what you want to search for, whether it's "restaurant",
            "food", or "cuisine."
          </label>
          <div className="flex justify-center mt-2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              className="px-1"
              required
            />
            <select
              className="ml-2"
              value={type}
              onChange={handleTypeChange}
              required
            >
              <option value="Restaurants">Restaurants</option>
              <option value="Cuisine">Cuisine</option>
              <option value="Food">Food</option>
            </select>
          </div>
        </article>
        <p>
          Currently searching for {searchTerm || "___"} {type}
        </p>
        {isLoading ? <Spinner /> : ""}
        <input
          type="submit"
          value="SUBMIT"
          className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
        />
      </form>
    </>
  );
}

export default RestaurantForm;
