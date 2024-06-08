"use client";
import { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

function AttractionForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    //changing the URL is one of the ways to cause a re-render of server components. Thus, this block of code is used in order to change the URL with query parameters that will be derived in order to re-fetch data from the server components with those query terms
    const params = new URLSearchParams(searchParams);
    params.set("searchTerm", searchTerm);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <form
      className="p-3 flex flex-col gap-6 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm"
      onSubmit={(e) => handleSumbit(e)}
    >
      <article>
        <label>
          What type of attractions are you looking for? Please input terms like
          "hiking", "movie", "comedy", "landmarks" etc.
        </label>
        <div className="flex justify-center mt-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className="px-1"
            required
          />
        </div>
      </article>
      <input
        type="submit"
        value="SUBMIT"
        className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner ml-3"
      />
    </form>
  );
}

//add handleSubmit later.

//   return (
//     <form className="p-3 flex flex-col gap-6 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm">
//       <article>
//         <label>
//           Any particular city you are looking for attractions in? Fill out the
//           form below and press submit if you do! Otherwise, just press submit to
//           find some cool places to go to!
//         </label>
//         <div className="flex justify-center mt-2">
//           <input
//             type="text"
//             className="px-1"
//             value={searchTerm}
//             onChange={handleSearchTermChange}
//           />
//         </div>
//       </article>
//       <input
//         type="submit"
//         value="SUBMIT"
//         className="self-center bg-green-300 p-1 rounded-md border-2 border-solid border-gray-300 text-sm boldest"
//       />
//     </form>
//   );
// }

export default AttractionForm;
