import Image from "next/image";
import logo from "@/public/imgs/airplane_logo.jpg";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

const Header = () => {
  return (
    <header className="px-4 py-2 mb-6 lg:mb-10 lg:py-5 bg-gradient-white flex justify-center h-1/6 w-full lg:rounded-3xl rounded-b-xl shadow max-w-screen-xl mx-auto border-solid border-grey border-4">
      <div className="flex gap-4 lg:gap-12 justify-center">
        <h1
          className={`self-center text-xl md:text-4xl lg:text-6xl tracking-wide ${lato.className} text-theme-color-dark`}
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
      </div>
    </header>
  );
};

export default Header;
