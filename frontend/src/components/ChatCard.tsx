"use client"
import Image from "next/image";
import { Arrow } from "./Arrow";
import { useRouter } from "next/navigation";


export default function ChatCard() {
  const router = useRouter()
  return (
    <button onClick={()=>router.push("/ai-chatbot")} className="w-60 cursor-pointer hover:shadow-lg  font-bold relative h-60 rounded-4xl text-2xl p-4 bg-[#FBEEE7] text-[#01818C] shadow-sm ">
      Talk With AI Chatbot
      <Arrow fill="rgb(1, 129, 140)" />
      {/* <Image1 className="absolute bottom-[-40px] right-[-5px] " /> */}
      <Image src={"/chatbot.svg"} width={"180"} height={"180"} alt="photo" className="absolute bottom-0 right-0 " />
    </button>
  );
}
