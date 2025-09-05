"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function FindTherapist() {
  const [stage, setStage] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (stage === 3)
      setTimeout(() => {
        inputRef.current?.focus();
        console.log("input focus");
      }, 100);
  }, [stage]);

  return (
    <div className="mt-30 ">
      <div className="text-4xl relative  flex justify-center ">
        Welcome! Let&apos;s find the perfect therapist for you!✨
      </div>
      <div className="flex justify-start mt-8">
        <Image src={"/robot.svg"} width={"250"} height={"250"} alt="robot" />
        {stage === 1 && (
          <div className="text-white rounded-tl-4xl rounded-r-4xl max-w-xl shadow-xl  bg-green-700 py-8 px-6 h-fit text-4xl items-center">
            Hey there! I&apos;m Stefany,{" "}
            <div>
              your friendly therapist finder!
              <div className="text-2xl font-thin mt-2">
                Feeling overwhelmed about finding the right therapist? Don&apos;t
                sweat it! I&apos;m here to help you navigate the journey and find the
                perfect match
              </div>
              <button
                onClick={() => setStage(2)}
                className="text-xl text-green-700 bg-white w-fit px-4 rounded-2xl py-1 mt-4 "
              >
                Learn More
              </button>
            </div>
          </div>
        )}
        {stage === 2 && (
          <div className="text-white rounded-tl-4xl rounded-r-4xl max-w-xl shadow-xl  bg-green-700 py-8 px-6 h-fit text-3xl items-center">
            Here&apos;s how I&apos;ll support you...
            <div>
              <div className="text-xl font-thin mt-2">
                <ul>
                  <li>😊 Understand your language and lifestyle preferences</li>

                  <li>
                    {" "}
                    🧠 Find the right match from 25+ experts based on your needs{" "}
                  </li>

                  <li>
                    🤝 Free change of therapist if my recommendation doesn&apos;t
                    help
                  </li>
                </ul>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setStage(1)}
                  className="text-xl mr-4 text-green-700 bg-white w-fit px-4 rounded-2xl py-1 mt-4 "
                >
                  Back
                </button>
                <button
                  onClick={() => setStage(3)}
                  className="text-xl font-medium text-green-700 bg-white w-fit px-4 rounded-2xl py-1 mt-4 "
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {stage === 3 && (
          <div className="text-white rounded-tl-4xl rounded-r-4xl max-w-xl shadow-xl  bg-green-700 py-8 px-6 h-fit text-3xl items-center">
            What is Your Age ?
            <div>
              <input
                ref={inputRef}
                placeholder="Eg : 21"
                className="text-xl bg-white text-black font-medium px-4 py-2 rounded-xl mt-2"
              />

              <div className="flex justify-between">
                <button
                  onClick={() => setStage(3)}
                  className="text-xl  ml-4 mr-4 text-green-700 bg-white w-fit px-4 rounded-2xl py-1 mt-4 "
                >
                  Back
                </button>
                <button
                  onClick={() => setStage(4)}
                  className="text-xl font-medium text-green-700 bg-white w-fit px-4 rounded-2xl py-1 mt-4 "
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {stage === 4 && (
          <div className="text-white rounded-tl-4xl rounded-r-4xl max-w-xl shadow-xl  bg-green-700 py-8 px-6 h-fit text-3xl items-center">
            What gender identity do you most identify with?
            <div>
              <input
                ref={inputRef}
                placeholder="Eg : 21"
                className="text-xl bg-white text-black font-medium px-4 py-2 rounded-xl mt-2"
              />

              <div className="flex justify-between">
                <button
                  onClick={() => setStage(2)}
                  className="text-xl  ml-4 mr-4 text-green-700 bg-white w-fit px-4 rounded-2xl py-1 mt-4 "
                >
                  Back
                </button>
                <button
                  onClick={() => setStage(2)}
                  className="text-xl font-medium text-green-700 bg-white w-fit px-4 rounded-2xl py-1 mt-4 "
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
