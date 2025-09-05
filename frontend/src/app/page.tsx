"use client";
import OfferingCard from "@/components/OfferingCard";

interface OfferingTypesType {
  Name: string;
  Image: string;
  Z: number;
}

export default function Home() {
  const offeringTypes: OfferingTypesType[] = [
    { Name: "Couples Therapy", Image: "couple.svg", Z: 40 },
    { Name: "Individual Therapy", Image: "personal.svg", Z: 50 },
    { Name: "Psychiatry", Image: "psychiatry.svg", Z: 30 },
    { Name: "Career Counselling", Image: "career.svg", Z: 20 },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mt-18 flex flex-col gap-4 items-center text-center pt-6">
        <h1 className="text-[#E6E8D2] text-3xl sm:text-4xl md:text-5xl font-medium">
          &quot;Healing begins with a <span className="underline">conversation</span>&quot;
        </h1>
        <h2 className="pt-6 text-[#E6E8D2] text-2xl sm:text-3xl font-medium">
          What brings you here today?
        </h2>
      </div>

      {/* Offerings Grid */}
      <div className="w-full flex justify-center  md:max-w-7xl mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-8 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 justify-center">
          {offeringTypes.map((card, key) => (
            <OfferingCard
              key={key}
              image={card.Image}
              label={card.Name}
              className="transition-transform duration-300 ease-out hover:scale-105"
              z_axis={card.Z}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
