"use client";
import { useState } from "react";
import { editTripNotes } from "@/app/_lib/actions";
import { useRouter } from "next/navigation";

function ShowAndEditTripNotes({ trip }) {
  const [isEditting, setIsEditting] = useState(false);
  const [tripNotes, setTripNotes] = useState(trip.trip_notes);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  function handleEditMode(e) {
    e.preventDefault();
    setIsEditting(true);
  }

  function handleCancel(e) {
    e.preventDefault();
    setTripNotes(trip.trip_notes);
    setIsEditting(false);
  }

  async function handleSave(e) {
    e.preventDefault();
    try {
      await editTripNotes(trip.id, tripNotes);
      setIsEditting(false);
      router.refresh();
    } catch (error) {
      console.error("Error: ", error);
      setErrorMessage(error.message);
    }
  }

  function handleTripNotes(e) {
    setTripNotes(e.target.value);
  }

  return (
    <>
      {isEditting ? (
        <article className="flex flex-col items-center">
          <label>
            Edit your trip notes below! Press "Save" to save your changes, or
            "Cancel" to edit editting mode.
          </label>
          <textarea
            className="ml-2 p-2"
            value={tripNotes}
            onChange={handleTripNotes}
            rows="8"
            cols="50"
          ></textarea>
          {errorMessage && <p className="text-red-700 bold">{errorMessage}</p>}
          <section className="w-full flex justify-around my-3">
            <button
              className="block bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer mx-auto"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="block bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer mx-auto"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </section>
        </article>
      ) : (
        <article className="flex flex-col">
          <h1>Trip Notes:</h1>
          <p className="indent-2">{trip.trip_notes}</p>
          <button
            className="block bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest w-fit transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer mx-auto"
            onClick={handleEditMode}
          >
            Edit Notes
          </button>
        </article>
      )}
    </>
  );
}

export default ShowAndEditTripNotes;
