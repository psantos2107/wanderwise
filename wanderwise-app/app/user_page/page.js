import { auth } from "../_lib/auth";
import Link from "next/link";
import FetchAllUserTrips from "../_components/_trip-components/FetchAllUserTrips";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import emptyProfilePic from "@/public/imgs/empty_profile_pic.jpg";
import Image from "next/image";

export const metadata = {
  title: "Home",
  description: "This is where the user's page will be.",
};

export default async function UserPage() {
  const { user } = await auth();

  return (
    <main>
      <section className="flex flex-col items-center w-full">
        <figure className="w-[100px] h-[100px] relative rounded-lg overflow-hidden border-solid border-black border-1">
          <Image
            className="rounded-lg object-cover"
            fill
            src={user?.image || emptyProfilePic}
            alt="User Profile pic"
          />
        </figure>
        <h1 className="text-center mt-2">
          Welcome Back, {user.name.split(" ")[0]}! We're so glad you're here.
          Are you ready to plan another trip? If so click on "Plan a New Trip"
          below!
        </h1>
      </section>
      <article className=" bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner mx-auto my-3">
        <Link href="/trip/create">PLAN A NEW TRIP !</Link>
      </article>
      <h2 className="my-2 text-center">
        Or, you may choose to edit among the trips you have already saved below!
      </h2>
      <section className="w-[90%] mx-auto border-black border border-solid rounded-lg">
        <Suspense fallback={<Spinner />}>
          <FetchAllUserTrips id={user.id} />
        </Suspense>
      </section>
    </main>
  );
}
