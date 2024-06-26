import Link from "next/link";

export default function BackToRecommendations({ tripID }) {
  return (
    <Link
      className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner ml-3 cursor-pointer sm:text-xl sm:p-2"
      href={`/trip/${tripID}/recommendations`}
    >
      Go Back
    </Link>
  );
}
