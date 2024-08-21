import React from "react";
const icon = [
  { name: "./Tech.png" },
  { name: "./Vector.png" },
  { name: "./Tech.png" },
  { name: "./Tech.png" },
  { name: "./Tech.png" },
  { name: "./Tech.png" },
  { name: "./Tech.png" },
  { name: "./Tech.png" },
  { name: "./Tech.png" },
  { name: "./Tech.png" },
  { name: "./Tech.png" },
  { name: "./Tech.png" },
  { name: "./Tech.png" },
  { name: "./Tech.png" },
  { name: "./Tech.png" },
];
export const Skills = () => {
  return (
    <skills className="flex flex-col items-center py-4 px-8 gap-6 bg-black text-white">
      <h2 className="flex rounded-full font-medium text-xs bg-slate-800 text-white px-3 py-2">
        Skills
      </h2>
      <p>The skills, tools and technologies I am really good at:</p>

      <div className="flex gap-10   justify-center flex-row py-4 px-8 flex-wrap md:gap-16 object-cover">
        {icon.map((el, index) => {
          return <img src={el.name} key={index} alt="a" />;
        })}
      </div>
    </skills>
  );
};
