import React from "react";
const icon = [
  { name: "/appss/image.png" },
  { name: "/appss/image copy.png" },
  { name: "/appss/image copy 2.png" },
  { name: "/appss/image copy 3.png" },
  { name: "/appss/image copy 4.png" },
  { name: "/appss/image copy 5.png" },
  { name: "/appss/image copy 6.png" },
  { name: "/appss/image copy 7.png" },
  { name: "/appss/image copy 8.png" },
  { name: "/appss/image copy 9.png" },
  { name: "/appss/image copy 10.png" },
  { name: "/appss/image copy 11.png" },
  { name: "/appss/image copy 12.png" },
  { name: "/appss/image copy 13.png" },
  { name: "/appss/image copy 14.png" },
];
export const Skills = () => {
  return (
    <skills className="flex flex-col items-center py-4 px-8 gap-6 bg-white dark:bg-black dark:text-white">
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
