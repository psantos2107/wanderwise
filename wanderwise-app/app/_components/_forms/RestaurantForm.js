"use client";
import { useState } from "react";

function RestaurantForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("1");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <form className="p-3 flex flex-col gap-6 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm">
      <article>
        <label>
          What type of restaurant are you looking for? Please input terms like
          "brunch", "fast-food", "fancy", etc.
        </label>
        <div className="flex justify-center mt-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="px-1"
          />
        </div>
      </article>
      <article>
        <label>What is your price?</label>
        <select
          className="ml-2"
          value={priceRange}
          onChange={handlePriceRangeChange}
        >
          <option value="1">$: Affordable</option>
          <option value="2">$$: Pricier</option>
          <option value="3">$$$: Expensive</option>
        </select>
      </article>
      <input
        type="submit"
        value="SUBMIT"
        className="self-center bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 text-sm boldest"
      />
    </form>
  );
}

export default RestaurantForm;
