"use client";
import { deleteTrip } from "../_lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "./Spinner";

function DeleteTripButton({ tripID }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  async function handleClick(e) {
    e.preventDefault();
    setIsDeleting(true);
    try {
      await deleteTrip(tripID);
      router.push("/user_page");
    } catch (error) {
      console.error("Error: ", error);
      setErrorMessage(error.message);
    } finally {
      setIsDeleting(false);
    }
  }
  return (
    <>
      {errorMessage && <p className="text-red-700 bold">{errorMessage}</p>}
      {isDeleting && <Spinner text={"Deleting your trip..."} />}
      <button
        className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner"
        onClick={handleClick}
      >
        Delete Trip
      </button>
    </>
  );
}

export default DeleteTripButton;
