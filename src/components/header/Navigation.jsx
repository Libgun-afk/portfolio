import { CgDarkMode } from "react-icons/cg";

export const Navigation = () => {
  return (
    <div>
      <header2 className=" hidden md:flex  items-center gap-x-6 font-">
        <p className=" py-1.5">About</p>
        <p className=" py-1.5">Work</p>
        <p className=" py-1.5">Testimonials</p>
        <p className=" py-1.5">Contact</p>

        <div className="border border-l border-gray-500 h-6" />

        <div className="flex items-center gap-x-1.5">
          <button className="w-9 h-9 ">
            {" "}
            <CgDarkMode />
          </button>
          <button className="flex py-1.5 px-4 rounded-full bg-gray-300 text-slate-800 whitespace-nowrap">
            Download CV
          </button>
        </div>
      </header2>
    </div>
  );
};
