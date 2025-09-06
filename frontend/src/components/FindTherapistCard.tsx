"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FindTherapistCard({
  heading,
  image,
  description,
  link,
}: {
  heading: string;
  image: string;
  description: string;
  link: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(link)}
      className="flex flex-col md:flex-row max-w-3xl w-full overflow-hidden border border-[#2c5364] bg-[#203a43] text-[#E6E8D2] hover:bg-[#2c5364] transition-colors rounded-xl shadow-lg hover:shadow-2xl"
    >
      {/* Image */}
      <Image
        src={image}
        width={300}
        height={300}
        alt="therapist option"
        className="object-cover w-full md:w-48 h-56 md:h-auto"
      />

      {/* Content */}
      <div className="flex flex-col justify-center p-6 text-left">
        <h5 className="mb-2 text-xl md:text-2xl font-bold text-[#48C9B0]">
          {heading}
        </h5>
        <p className="text-sm md:text-base text-gray-300">{description}</p>
      </div>
    </button>
  );
}
