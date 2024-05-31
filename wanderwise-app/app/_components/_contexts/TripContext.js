"use client";

import { createContext, useContext } from "react";
import { useState } from "react";

const TripContext = createContext();

function TripProvider({ children }) {
  const [trip, setTrip] = useState("");
  return (
    <TripContext.Provider value={{ trip, setTrip }}>
      {children}
    </TripContext.Provider>
  );
}

function useTrip() {
  const context = useContext(TripContext);
  if (context === undefined) {
    throw new Error("Context was used outside provider");
  }
  return context;
}

export { TripProvider, useTrip };
