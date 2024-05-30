"use client";

function RestaurantForm() {
  return (
    <form className="p-3 flex flex-col gap-6 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-md shadow-md leading-6">
      <div>
        <label>
          What type of restaurant are you looking for? Please input terms like
          "brunch", "fast-food", "fancy", etc.
        </label>
        <div className="flex justify-center mt-2">
          <input type="text"></input>
        </div>
      </div>
      <div>
        <label>What is your price?</label>
        <select className="ml-2">
          <option>$: Affordable</option>
          <option>$$: Pricier</option>
          <option>$$$: Expensive</option>
        </select>
      </div>
      <input
        type="submit"
        value="SUBMIT"
        className="self-center bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 text-sm boldest"
      />
    </form>
  );
}

export default RestaurantForm;
