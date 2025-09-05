"use client";
import { Therapist } from "@/app/therapists/page";
import axios from "axios";
import Image from "next/image";
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
  const [therapists, setTherapists] = useState<Therapist[] | []>([]);

  const [showForm, setShowForm] = useState<boolean>(false);
  async function getTherapists() {
    const response =  await axios.get(`https://wellnest.api.mohit-hingorani.tech/user/alltherapists`)
    console.log(response);
    setTherapists(response.data);
  }
  useEffect(() => {
    getTherapists();
  }, []);
  return (
    <div
      onClick={() => {
        console.log("Button Clicked");
        setShowForm(!showForm);
      }}
      className="flex text-start flex-col border-black items-center hover:bg-[#d6d8bf] bg-[#E6E8D2] border py-4  rounded-lg shadow-sm md:flex-row max-w-3xl w-full "
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
        {showForm && <InputForm therapists={therapists} />}
      </div>
    </div>
  );
}

const InputForm = ({ therapists }: { therapists: Therapist[] }) => {
  return (
    <form onClick={(e)=>{
        e.stopPropagation();
    }} className="max-w-full ">
      <select
        
        defaultValue={"select"}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option value={"select"} disabled>
          Select Therapist Name
        </option>
        {therapists.map((therapist, key) => {
          return (
            <option key={key} value={therapist.id}>
              {therapist.name}
            </option>
          );
        })}
      </select>
        <button
          className="bg-blue-700 hover:bg-blue-800 border w-full border-gray-300 text-white mt-2 text-sm rounded-lg   p-2.5 "
        >
          Proceed
        </button>
    </form>
  );
};
