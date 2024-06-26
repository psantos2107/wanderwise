import { auth } from "../_lib/auth";
import Link from "next/link";
import FetchAllUserTrips from "../_components/_trip-components/FetchAllUserTrips";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import emptyProfilePic from "@/public/imgs/empty_profile_pic.jpg";
import Image from "next/image";
import SignOutButton from "../_components/SignOutButton";

export const metadata = {
  title: "Home",
  description: "This is where the user's page will be.",
};

export default async function UserPage() {
  const { user } = await auth();

  return (
    <main className="mb-4">
      <article className="sm:text-xl sm:px-3">
        <SignOutButton />
      </article>
      <section className="flex flex-col items-center w-full">
        <figure className="w-[100px] sm:w-[100px] sm:h-[100px] h-[100px] relative rounded-lg overflow-hidden border-solid border-black border-2 sm:mt-8">
          <Image
            className="rounded-lg object-contain"
            fill
            src={user?.image || emptyProfilePic}
            alt="User Profile pic"
          />
        </figure>
        <h1 className="text-center mt-2 sm:text-2xl max-w-2xl sm:p-2 sm:mt-8">
          Welcome Back, {user.name.split(" ")[0]}! We're so glad you're here.
          Are you ready to plan another trip? If so click on "Plan a New Trip"
          below!
        </h1>
      </section>
      <article className=" bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner mx-auto my-3 sm:px-4 sm:text-3xl sm:mt-8">
        <Link href="/trip/create">PLAN A NEW TRIP !</Link>
      </article>
      <h2 className="my-2 text-center sm:text-xl sm:mt-8">
        Or, you may choose to edit among the trips you have already saved below!
      </h2>
      <section className="w-full mx-auto sm:mt-8">
        <Suspense fallback={<Spinner />}>
          <FetchAllUserTrips id={user.id} />
        </Suspense>
      </section>
    </main>
  );
}
