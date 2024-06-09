import Image from "next/image";
import logo from "@/public/imgs/airplane_logo.jpg";
import { Josefin_Sans } from "next/font/google";
import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

const Header = () => {
  return (
    <header className="px-4 py-4 mb-6 lg:mb-10 lg:py-5 bg-gradient-orange flex justify-between md:justify-around h-1/6 w-full lg:rounded-3xl rounded-b-xl max-w-screen-xl mx-auto">
      <section className="flex gap-4 lg:gap-12 justify-center">
        <h1
          className={`self-center text-2xl md:text-4xl lg:text-6xl tracking-wide ${josefin.className} text-theme-color-dark`}
        >
          WANDERWISE
        </h1>
        <div className="relative w-12 md:w-20 lg:w-24">
          <Image
            src={logo}
            alt="Airplane Logo"
            className="object-cover"
            placeholder="blur"
            quality={100}
            style={{ borderRadius: "0.75rem" }}
          />
        </div>
      </section>
      <section className="flex items-center">
        <Link
          href="/user_page"
          className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200 transition"
        >
          <HomeIcon className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 text-theme-color-dark" />
        </Link>
      </section>
    </header>
  );
};

export default Header;
