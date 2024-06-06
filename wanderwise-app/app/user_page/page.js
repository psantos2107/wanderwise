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
        <figure className="w-1/5 h-[100px] relative rounded-lg">
          <Image
            className="rounded-lg object-contain"
            fill
            src={user?.image || emptyProfilePic}
          />
        </figure>
        <h1 className="text-center mt-2">
          Welcome Back, {user.name.split(" ")[0]}! We're so glad you're here.
          Are you ready to plan another trip? If so click on "Plan a New Trip"
          below!
        </h1>
      </section>
      <article className="bg-orange-200 p-2 rounded-md border-2 border-solid border-gray-300 text-sm boldest w-fit mx-auto my-3 transition-transform transform hover:bg-orange-300 active:bg-orange-400 hover:scale-105 active:scale-95 active:shadow-inner">
        <Link href="/trip/create">PLAN A NEW TRIP !</Link>
      </article>
      <h2 className="my-2 text-center">
        Or, you may choose to edit among the trips you have already saved below!
      </h2>
      <Suspense fallback={<Spinner />}>
        <FetchAllUserTrips id={user.id} />
      </Suspense>
    </main>
  );
}
