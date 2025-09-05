"use client";
import Image from "next/image";
import { useState } from "react";

export default function OfferingCard({
  z_axis,
  className,
  label,
  image,
}: {
  z_axis: number;
  className?: string;
  label: string;
  image: string;
}) {
  const [z_axisFinal, setZaxisFinal] = useState(z_axis);

  return (
    <div
      onMouseOver={() => setZaxisFinal(60)}
      onMouseLeave={() => setZaxisFinal(z_axis)}
      style={{ zIndex: z_axisFinal }}
      className={`w-full cursor-pointer relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-md hover:shadow-2xl h-fit sm:h-[480px] ${className}`}
    >
      {/* Title */}
      <div className="w-full text-xl sm:text-2xl text-center font-semibold text-white drop-shadow-md px-2 pt-5">
        {label}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center h-full pb-6 text-[#48C9B0]">
        <Image
          src={`/services/${image}`}
          width={150}
          height={200}
          alt={label}
          className="mt-6 drop-shadow-md"
        />

        {/* Arrow Button */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Image src={"/arrow.svg"} width={50} height={20} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
  