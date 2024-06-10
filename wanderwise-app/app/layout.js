import "./_styles/globals.css";
import Header from "./_components/Header";
import { Josefin_Sans } from "next/font/google";
// import { testConnection } from "./_lib/data-service";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s - WanderWise",
    default: "Welcome to WanderWise",
  },
  description:
    "The world awaits you... create your dream travel itinerary and plan out your next travel adventure with WonderWise!",
};

export default function RootLayout({ children }) {
  // await testConnection(); //to be removed in production.

  return (
    <html lang="en">
      <body
        className={`${josefin.className} box-border m-0 p-0 min-h-screen flex flex-col text-slate-950 bg-white max-w-screen-xl sm:mx-auto`}
      >
        <Header />
        {children}
        <footer className="bg-gradient-orange-reverse w-full h-1/5 md:h-[50px] p-5 mt-auto"></footer>
      </body>
    </html>
  );
}
