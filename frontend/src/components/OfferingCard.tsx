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
      onMouseOver={() => {
        setZaxisFinal(60);
      }}
      onMouseLeave={() => {
        setZaxisFinal(z_axis);
      }}
      style={{
        zIndex: z_axisFinal,
      }}
      className={`w-full sm:w-full cursor-pointer transition-transform relative duration-200 ease-out hover:scale-105 h-fit  sm:h-[500px] rounded-2xl border-2 border-black bg-[#E6E8D2]/80 ${className}`}
    >
      <div className="w-full text-2xl text-center font-bold text-slate-700 flex justify-center pt-4">
        <div>{label}</div>
      </div>

      <div className="flex flex-col justify-center items-center h-full pb-4 text-[#09615d]">
        <Image
          src={`/services/${image}`}
          width={130}
          height={180}
          alt="image"
        />
        <div className="absolute bottom-4 left-[35%]">
          <Image src={"/arrow.svg"} width={50} height={20} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
