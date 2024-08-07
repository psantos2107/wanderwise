import { Suspense } from "react";
import Spinner from "../_components/Spinner";

//Allows for a suspense boundary to be placed for any non statically rendered route with a pathname that starts with /trip. This way, the user will know when things are laoding.
export default function SuspenseLayout({ children }) {
  // return <Suspense fallback={<Spinner />}>{children}</Suspense>;
  return <>{children}</>;
}
