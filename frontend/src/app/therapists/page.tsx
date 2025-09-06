"use client";
import FilterCard from "@/components/FilterCard";
import TherapistCard from "@/components/TherapistCard";
import { useEffect, useState } from "react";
import axios from "axios";
import TherapistCardSkeleton from "@/components/SkeletonCard";

interface Language {
  id: string;
  name: string;
  therapistId: string;
}

export interface Therapist {
  id: string;
  name: string;
  email: string;
  password?: string;
  image: string;
  speciality: string;
  experience: null | string;
  createdAt: string;
  updatedAt: string;
  languages: Language[] | null;
}

export default function Therapists() {
  const [therapists, setTherapists] = useState<Therapist[]>([]);

  async function getTherapists() {
    const response = await axios.get(
      `http://localhost:3002/therapist/alltherapists`
    );
    setTherapists(response.data);
  }

  useEffect(() => {
    getTherapists();
  }, []);

  return (
    <div className="mt-20 w-full px-4 min-h-screen bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar for Filters */}
        <div className="md:col-span-1">
          <div className="p-4 md:mt-4 w-full">
            <FilterCard />
          </div>
        </div>

        {/* Therapist Cards Section */}
        <div className="md:col-span-3 md:pl-16 text-[#E6E8D2]">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 mt-4">
            Showing Results for <span>Online | Individual Therapy</span>
          </h2>

          <div className="flex flex-col sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {therapists.length === 0 && (
              <div className="gap-4 flex flex-col">
                <TherapistCardSkeleton />
                <TherapistCardSkeleton />
                <TherapistCardSkeleton />
                <TherapistCardSkeleton />
              </div>
            )}

            {therapists.map((therapist) => (
              <TherapistCard
                key={therapist.id}
                name={therapist.name}
                speciality={therapist.speciality}
                image={therapist.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
