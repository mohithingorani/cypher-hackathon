import { Arrow } from "./Arrow";
import { Image2 } from "./image2";

export default function TakeQuizCard() {
  return (
    <button className="w-60 font-bold relative cursor-pointer h-60 hover:shadow-lg rounded-4xl text-2xl p-4 bg-[#FFF9C8] text-[#01818C] shadow-md ">
      <div>Take A Short</div>
      <div>Quiz</div>
      <Arrow fill="rgb(1, 129, 140)" />
      <Image2 className="absolute bottom-0 right-0" />
    </button>
  );
}
