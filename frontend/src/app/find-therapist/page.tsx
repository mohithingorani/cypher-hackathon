import FindTherapistCard from "@/components/FindTherapistCard";
import FindTherapistCard2 from "@/components/FindTherapistCard2";

export default function FindTherapist() {

  

  return (
    <div className="mt-30 px-4 h-full md:h-screen  ">
      <div className="text-4xl relative  flex justify-center ">
        Finding Your Right Therapist is Easy! Choose your path :
      </div>
      <div className="flex flex-col items-center gap-4 justify-center px-4 md:px-0 mt-8 mb-16 ">
        <FindTherapistCard
          link="/therapist-finder"
          heading="Find Your Therapist Match"
          description="Answer a few questions and matching engine finds your ideal therapist"
          image="quiz.svg"
        />
        <FindTherapistCard2
          heading="Have A Recommendation ?"
          description="You have a particular therapist in mind"
          image="/find/problem.svg"
        />
        <FindTherapistCard
          link="/therapists"
          heading="View All Available Therapists"
          description="View all the therapists currently present and available choose accordingly"
          image="/find/therapist.svg"
        />
      </div>
    </div>
  );
}
