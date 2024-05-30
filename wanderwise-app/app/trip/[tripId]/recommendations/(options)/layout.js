//CONTEXT API- TO SEARCH FOR THE LOCATION
//GET THE PATH TO GET THE TYPE OF THING WE'
import RecommendationMessage from "@/app/_components/RecommendationMessage";

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-screen-2xl flex flex-col">
      <RecommendationMessage />
      {children}
    </div>
  );
}
