import Image from "next/image";
import ExpertiseCard from "./Expertise";

export default function TherapistCard({
  name,
  image,
  speciality
}: {
  name: string;
  image: string;
  speciality:string
}) {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl rounded-lg shadow-sm bg-[#E6E8D2] border-black text-black border ">
      <div className="flex flex-col items-center text-start w-full md:flex-row p-4">
        <Image
          className="object-fill w-full md:w-48 rounded-lg h-72 md:h-auto"
          src={`/people/${image}`}
          alt="Therapist Image"
          width={150}
          height={150}
        />
        <div className="flex flex-col justify-between px-4 py-4 md:py-8 leading-normal w-full">
          <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
          <h4 className="text-base sm:text-lg italic mb-2">
            {speciality}
          </h4>
          <h4 className="mb-2 text-sm sm:text-lg font-light">
            Starts <span>@ Rs. 1499</span> for 60 mins session
          </h4>
          <h4 className="text-sm sm:text-base">
            <span className="font-semibold">Speaks:</span> English, Telugu,
            Hindi, Tamil
          </h4>
          <h3 className="text-sm sm:text-base">
            <span className="font-bold">Mode:</span> Online Sessions
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center mt-2">
            <span className="font-bold">Expertise:</span>
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
      <div className="bg-slate-300 py-4 rounded-b-lg">
        <div className="mx-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="flex flex-col justify-start mb-2 sm:mb-0">
            <div className="text-xs sm:text-sm">Next Available On</div>
            <div className="underline text-sm sm:text-base">
              April 3, 2025 4:00 PM IST
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <button className="bg-white border rounded-lg px-2 py-1 text-xs sm:text-sm cursor-pointer border-black hover:drop-shadow-lg">
              Know More
            </button>
            <button className="bg-blue-600 border rounded-lg px-2 py-1 text-xs sm:text-sm cursor-pointer text-white border-black hover:drop-shadow-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
