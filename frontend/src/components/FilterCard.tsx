"use client";
import { MouseEventHandler, useState } from "react";

export default function FilterCard() {
  const [selected, setSelected] = useState(1);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const data = [
    {
      id: 1,
      name: "Session Mode",
      options: [
        { id: 1, name: "Online" },
        { id: 2, name: "In-person " },
      ],
    },
    {
      id: 2,
      name: "Type of Therapy",
      options: [
        { id: 1, name: "Individual" },
        { id: 2, name: "Psychiatry" },
        { id: 3, name: "Couples" },
        { id: 4, name: "Family" },
        { id: 5, name: "Child" },
        { id: 6, name: "Geriatric" },
      ],
    },
    {
      id: 3,
      name: "Concern",
      options: [
        { id: 1, name: "Anxiety" },
        { id: 2, name: "Depression" },
        { id: 3, name: "Trauma" },
        { id: 4, name: "Relationship" },
        { id: 5, name: "Family" },
        { id: 6, name: "Bingeing" },
        { id: 7, name: "Sleep" },
        { id: 8, name: "Identity" },
        { id: 9, name: "Psychiatry" },
        { id: 10, name: "Grief" },
        { id: 11, name: "Financial" },
        { id: 12, name: "Sexual" },
        { id: 13, name: "Parenting" },
        { id: 14, name: "Attachment" },
        { id: 15, name: "Divorce" },
        { id: 16, name: "Abuse" },
        { id: 17, name: "OCD" }
        
      ],
    },
  ];

  return (
    <>
      <div className="w-full border shadow-md rounded-2xl bg-[#E6E8D2] text-black border-black  p-4 h-[250px]">
        <h1 className="text-2xl font-bold mb-2">Apply Filters</h1>
        <div className="flex text-xs gap-1  ">
          {data.map((object) => {
            return (
              <BorderedLabels
                key={object.id}
                onClick={() => setSelected(object.id)}
                selected={selected == object.id}
                label={object.name}
              />
            );
          })}
        </div>
        <div className="mt-4 overflow-y-scroll  max-h-30">
          {data.map((object) => {
            if (object.id == selected) {
              return object.options.map((option) => {
                return (
                  <div key={option.id} className="flex flex-col items-start ">
                    <label  className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="filterOption"
                        onChange={() => setSelectedOption(option.id)}
                        checked={selectedOption === option.id}
                      />
                      {option.name}
                    </label>
                  </div>
                );
              });
            }
          })}
        </div>
 
      </div>
      
    </>
  );
}

const BorderedLabels = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick?: MouseEventHandler | undefined;
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`px-2 cursor-pointer py-1 border ${
          selected
            ? "bg-slate-800 text-white"
            : "text-slate-800 hover:bg-slate-300 bg-white"
        } rounded-full`}
      >
        {label}
      </button>
    </>
  );
};
