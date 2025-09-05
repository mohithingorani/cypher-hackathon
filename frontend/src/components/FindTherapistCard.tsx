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
      onClick={() => {
        router.push(link);
      }}
      className="flex text-start flex-col items-center border-black bg-[#E6E8D2] hover:bg-[#d6d8bf] border py-4  rounded-lg shadow-sm md:flex-row max-w-3xl w-full "
    >
      <Image
        className="object-cover w-full p-4 md:p-0 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        height={"300"}
        width={"300"}
        src={`${image}`}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {heading}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">{description}</p>
      </div>
    </button>
  );
}
