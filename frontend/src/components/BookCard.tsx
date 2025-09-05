"use client";
import { useRouter } from "next/navigation";
import { Arrow } from "./Arrow";
import { Image1 } from "./image1";

export default function BookCard() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/find-therapist");
      }}
      className="w-60 hover:shadow-lg cursor-pointer  font-bold relative h-60 rounded-4xl text-2xl p-4 bg-[#01818C] text-white shadow-sm "
    >
      <div>Book Your First Session</div>
      <Arrow />
      <Image1 className="absolute bottom-[-40px] right-[-5px] " />
    </button>
  );
}
