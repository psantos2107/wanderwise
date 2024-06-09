import CreateOrEditTrip from "@/app/_components/_trip-components/CreateOrEditTrip";
import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Create New Trip!",
};

export default async function CreateTripPage() {
  const session = await auth();
  const userID = session.user.id;
  const firstName = session.user.name.split(" ")[0];

  return (
    <main>
      <h1 className="text-center mb-3 sm:text-2xl">
        Let's plan your next trip, {firstName}! ✈️
      </h1>
      <CreateOrEditTrip userID={userID} isCreatingNewTrip={true} trip={{}} />
    </main>
  );
}
