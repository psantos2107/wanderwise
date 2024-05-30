import "./_styles/globals.css";
import Header from "./_components/Header";
import { Lato } from "next/font/google";
// import { testConnection } from "./_lib/data-service";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: {
    template: "%s - WanderWise",
    default: "Welcome to WanderWise",
  },
  description:
    "The world awaits you... create your dream travel itinerary and plan out your next travel adventure with WonderWise!",
};

export default async function RootLayout({ children }) {
  // await testConnection(); //to be removed in production.

  return (
    <html lang="en">
      <body
        className={`${lato.className} box-border m-0 p-0 min-h-screen flex flex-col bg-gradient-blue text-theme-color-light`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
