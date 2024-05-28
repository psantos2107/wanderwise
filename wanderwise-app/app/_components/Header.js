import Image from "next/image";
import logo from "@/public/imgs/airplane_logo.jpg";

const Header = () => {
  return (
    <header className="px-4 py-2 lg:py-5 bg-slate-50 flex justify-center h-1/6 w-full border-solid border-gray-600 border-2 shadow max-w-screen-xl mx-auto">
      <div className="flex gap-4 lg:gap-12 justify-center">
        <h1 className="self-center text-3xl lg:text-6xl lg:tracking-widest">
          WANDERWISE
        </h1>
        <div className="relative w-16 md:w-24 lg:w-20">
          <Image
            src={logo}
            alt="Airplane Logo"
            className="object-cover"
            placeholder="blur"
            quality={100}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
