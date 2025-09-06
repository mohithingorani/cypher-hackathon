import Image from "next/image";
import ExpertiseCard from "./Expertise";

export default function TherapistCard({
  name,
  image,
  speciality,
}: {
  name: string;
  image: string;
  speciality: string;
}) {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl rounded-lg shadow-md border border-gray-700 bg-[#1c2a30] text-[#E6E8D2]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center w-full p-4">
        <Image
          className="object-cover w-full md:w-44 rounded-md h-64 md:h-auto"
          src={`/people/${image}`}
          alt="Therapist Image"
          width={150}
          height={150}
        />
        <div className="flex flex-col justify-between px-4 py-4 md:py-6 w-full">
          <h5 className="text-lg sm:text-xl font-semibold">{name}</h5>
          <h4 className="text-sm sm:text-base italic mb-2 text-[#E6E8D2]/80">
            {speciality}
          </h4>
          <h4 className="mb-2 text-sm sm:text-base font-light">
            Starts <span className="font-medium text-[#48C9B0]">@ Rs. 1499</span>{" "}
            for 60 mins session
          </h4>
          <h4 className="text-sm sm:text-base">
            <span className="font-medium">Speaks:</span> English, Telugu, Hindi,
            Tamil
          </h4>
          <h3 className="text-sm sm:text-base">
            <span className="font-medium">Mode:</span> Online Sessions
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center mt-2">
            <span className="font-medium">Expertise:</span>
            <div className="flex flex-wrap justify-start items-center gap-2 mx-2">
              <ExpertiseCard label="Anxiety" />
              <ExpertiseCard label="Depression" />
              <ExpertiseCard label="Relationship" />
              <ExpertiseCard label="Trauma" />
              <ExpertiseCard label="Sleep" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#24353d] py-3 rounded-b-lg border-t border-gray-600">
        <div className="mx-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="flex flex-col justify-start mb-2 sm:mb-0">
            <div className="text-xs sm:text-sm text-[#E6E8D2]/70">
              Next Available On
            </div>
            <div className="underline text-sm sm:text-base text-[#48C9B0]">
              April 3, 2025 4:00 PM IST
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button className="bg-transparent border rounded-md px-3 py-1 text-xs sm:text-sm cursor-pointer border-gray-500 text-[#E6E8D2] hover:bg-gray-700/30 transition">
              Know More
            </button>
            <button className="bg-[#48C9B0] border rounded-md px-3 py-1 text-xs sm:text-sm cursor-pointer text-white border-[#48C9B0] hover:bg-[#3ba996] transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
