"use client";

import FindTherapistCard from "@/components/FindTherapistCard";
import FindTherapistCard2 from "@/components/FindTherapistCard2";

export default function FindTherapist() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <div className="pt-32 px-4 md:px-12">
        {/* Title */}
        <div className="text-3xl md:text-5xl font-bold text-center text-[#E6E8D2] drop-shadow-md">
          Finding Your Right Therapist is Easy!
          <br />
          <span className="text-[#48C9B0]">Choose your path:</span>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col items-center gap-8 justify-center mt-12 pb-20">
          <FindTherapistCard
            link="/therapist-finder"
            heading="Find Your Therapist Match"
            description="Answer a few questions and let our matching engine find your ideal therapist."
            image="/find/quix.svg" // keep as-is if intentional
          />

          <FindTherapistCard2
            heading="Have A Recommendation?"
            description="Already have a particular therapist in mind? Select and proceed."
            image="/find/problem.svg"
          />

          <FindTherapistCard
            link="/therapists"
            heading="View All Available Therapists"
            description="Browse through all available therapists and choose the right one for you."
            image="/find/therapist.svg"
          />
        </div>
      </div>
    </div>
  );
}
