import Image from "next/image";
import cityscape from "@/public/imgs/cityscape.jpg";
import airplane from "@/public/imgs/airplane.jpg";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="w-full flex-grow flex flex-col">
      <section>
        <h2 className="text-3xl leading-8 text-left ml-4 mb-3 my-0">
          Plan the vacation of your wildest dreams.....
        </h2>
        <figure className="w-full h-[200px] relative">
          <Image
            src={cityscape}
            fill
            quality={100}
            className="object-cover"
            placeholder="blur"
            alt="Image of a big city in the middle of a sunset"
          />
        </figure>
      </section>
      <section className="mb-3">
        <h2 className="text-3xl leading-8 text-right p-2 ml-8 mr-4">
          .....and let your wanderlust take flight!
        </h2>
        <figure className="w-full h-[200px] relative">
          <Image
            src={airplane}
            fill
            quality={100}
            className="object-cover"
            placeholder="blur"
            alt="Image of an airplane that's landed."
          />
        </figure>
      </section>
      <h2 className="text-center text-3xl leading-8 ml-2 my-4">
        With <em>~WANDERWISE~</em>
      </h2>
      <section className="flex justify-evenly mb-3">
        <Link
          href="/login"
          className=" bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className=" bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
        >
          Sign Up
        </Link>
        <Link
          href="#"
          className=" bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer"
        >
          Learn More
        </Link>
      </section>
      <footer className="bg-gradient-orange-reverse w-full h-1/5 p-5 mt-auto"></footer>
    </main>
  );
}
