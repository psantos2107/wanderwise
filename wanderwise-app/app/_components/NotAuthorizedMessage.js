import Link from "next/link";

function NotAuthorizedMessage() {
  return (
    <article>
      {" "}
      <p className="p-3 flex flex-col gap-3 items-center text-theme-color-dark bg-gradient-white w-[85%] mx-auto rounded-sm shadow-md leading-6 text-lg mb-4">
        YOU ARE NOT AUTHORIZED TO VIEW OR EDIT THIS TRIP. Please click on the
        button to return to the home page.
      </p>
      <Link
        className="bg-blue-200 p-1 rounded-md border-2 border-solid text-md border-gray-300 boldest transition-transform transform hover:bg-blue-300 active:bg-blue-400 hover:scale-105 active:scale-95 active:shadow-inner ml-3"
        href={`/`}
      >
        Back To Home Page
      </Link>
    </article>
  );
}

export default NotAuthorizedMessage;
