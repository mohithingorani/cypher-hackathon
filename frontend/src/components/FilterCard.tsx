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
        { id: 2, name: "In-person" },
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
        { id: 17, name: "OCD" },
      ],
    },
  ];

  return (
    <div className="w-full rounded-xl shadow-lg border border-[#48C9B0]/30 bg-gradient-to-b from-[#1a2a33] via-[#1f3a43] to-[#2c5364] text-[#E6E8D2] p-4 h-[250px]">
      <h1 className="text-xl font-semibold mb-3 text-[#48C9B0]">
        Apply Filters
      </h1>

      {/* Category Labels */}
      <div className="flex flex-wrap gap-2 text-xs">
        {data.map((object) => (
          <BorderedLabels
            key={object.id}
            onClick={() => setSelected(object.id)}
            selected={selected === object.id}
            label={object.name}
          />
        ))}
      </div>

      {/* Options */}
      <div className="mt-4 overflow-y-auto max-h-32 pr-1">
        {data.map((object) =>
          object.id === selected
            ? object.options.map((option) => (
                <div key={option.id} className="flex flex-col items-start">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="filterOption"
                      onChange={() => setSelectedOption(option.id)}
                      checked={selectedOption === option.id}
                      className="accent-[#48C9B0]"
                    />
                    {option.name}
                  </label>
                </div>
              ))
            : null
        )}
      </div>
    </div>
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
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full border text-xs transition ${
        selected
          ? "bg-[#48C9B0] text-white border-[#48C9B0]"
          : "bg-transparent text-[#E6E8D2] border-[#48C9B0]/40 hover:bg-[#48C9B0]/10"
      }`}
    >
      {label}
    </button>
  );
};
