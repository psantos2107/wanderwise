import Image from "next/image";
import cityscape from "@/public/imgs/cityscape.jpg";
import airplane from "@/public/imgs/airplane.jpg";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="w-full flex flex-col max-w-screen-xl mx-auto md:justify-evenly">
      <section>
        <h2 className="text-3xl leading-8 text-left ml-4 mb-3 my-0 md:text-4xl md:py-5">
          Plan the vacation of your wildest dreams.....
        </h2>
        <figure className="w-full md:w-3/4 h-[200px] relative md:h-[300px] md:ml-14">
          <Image
            src={cityscape}
            fill
            quality={100}
            className="object-cover md:rounded-xl"
            placeholder="blur"
            alt="Image of a big city in the middle of a sunset"
          />
        </figure>
      </section>
      <section className="mb-3">
        <h2 className="text-3xl leading-8 text-right p-2 ml-8 mr-4 md:text-4xl md:py-8">
          .....and let your wanderlust take flight!
        </h2>
        <figure className="w-full h-[200px] md:w-3/4 md:h-[300px] md:ml-auto relative md:mr-14">
          <Image
            src={airplane}
            fill
            quality={100}
            className="object-cover md:rounded-xl"
            placeholder="blur"
            alt="Image of an airplane that's landed."
          />
        </figure>
      </section>
      <h2 className="text-center text-3xl md:text-5xl leading-8 ml-2 my-4 md:py-4">
        With <em>WANDERWISE</em>
      </h2>
      <section className="flex justify-evenly mb-3 md:text-2xl">
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
        <Link
          href="/about"
          className=" bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer md:px-8"
        >
          Learn More
        </Link>
      </section>
    </main>
  );
}
