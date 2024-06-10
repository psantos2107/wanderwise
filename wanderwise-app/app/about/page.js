import Link from "next/link";

function AboutPage() {
  return (
    <>
      <article className="p-3 flex flex-col gap-2 items-center text-theme-color-dark bg-gradient-white w-[90%] mx-auto rounded-sm shadow-md leading-6 text-sm sm:text-lg max-w-xl sm:mt-8 sm:p-6">
        <h2 className="text-center">
          <strong>
            <u>ABOUT THIS APPLICATION</u>
          </strong>
        </h2>
        <p className="indent-3">
          Established in 2024, WanderWise is designed for those who love to
          travel and want to have an application to make the planning process a
          little bit easier! When you sign up, you will have the ability to
          "create a trip", where you can input your destination city, desired
          travel dates, travel budgets, and more, just to get the planning
          process going. Then, utilizing the search engines provided by Yelp,
          Trip Advisor, and Amadeus, you will be able to search for restaurants,
          activities, hotels, and even flights all in one centralized place!
          Plan your dream vacation and indulge in all your wanderlust fantasies,
          now easier than ever! You may get started by either signing up or
          logging in below.
        </p>
      </article>
      <section className="flex gap-8 mb-3 md:text-2xl w-fit mx-auto mt-10">
        <Link
          href="/login"
          className=" bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer md:px-8"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className=" bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer md:px-8"
        >
          Sign Up
        </Link>
      </section>
    </>
  );
}

export default AboutPage;
