"use client";

import { Therapist } from "@/app/therapists/page";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FindTherapistCard2({
  heading,
  image,
  description,
}: {
  heading: string;
  image: string;
  description: string;
}) {
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function getTherapists() {
      try {
        const response = await axios.get(
          `http://localhost:3002/therapist/alltherapists`
        );
        setTherapists(response.data);
      } catch (error) {
        console.error("Failed to fetch therapists", error);
      }
    }
    getTherapists();
  }, []);

  return (
    <div
      onClick={() => setShowForm(!showForm)}
      className="flex flex-col md:flex-row max-w-3xl w-full overflow-hidden border border-[#2c5364] bg-[#203a43] text-[#E6E8D2] hover:bg-[#2c5364] transition-colors rounded-xl shadow-lg hover:shadow-2xl cursor-pointer"
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
      <div className="flex flex-col justify-center p-6 text-left w-full">
        <h5 className="mb-2 text-xl md:text-2xl font-bold text-[#48C9B0]">
          {heading}
        </h5>
        <p className="text-sm md:text-base text-gray-300">{description}</p>

        {showForm && <InputForm therapists={therapists} />}
      </div>
    </div>
  );
}

const InputForm = ({ therapists }: { therapists: Therapist[] }) => {
  const router = useRouter();

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      className="mt-4 flex flex-col gap-2"
    >
      <select
        defaultValue={"select"}
        className="bg-[#0f2027] border border-[#2c5364] text-[#E6E8D2] text-sm rounded-lg focus:ring-[#48C9B0] focus:border-[#48C9B0] block w-full p-2.5"
      >
        <option value="select" disabled>
          Select Therapist Name
        </option>
        {therapists.map((therapist, key) => (
          <option key={key} value={therapist.id}>
            {therapist.name}
          </option>
        ))}
      </select>

      <button
        onClick={() => router.push("/therapists")}
        className="bg-[#48C9B0] hover:bg-[#36a390] text-white font-medium text-sm rounded-lg py-2.5 transition-colors"
      >
        Proceed
      </button>
    </form>
  );
};
