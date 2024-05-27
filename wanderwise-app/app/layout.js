import "./_styles/globals.css";

export const metadata = {
  title: {
    template: "%s - WanderWise",
    default: "Welcome to WanderWise",
  },
  description:
    "The world awaits you... create your dream travel itinerary and plan out your next travel adventure with WonderWise!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>This is the root.</h1>
        {children}
      </body>
    </html>
  );
}
