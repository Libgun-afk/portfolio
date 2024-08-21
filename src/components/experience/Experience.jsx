import { FaUpwork } from "react-icons/fa6";
import { BsCircleFill } from "react-icons/bs";

export const Experience = () => {
  return (
    <experience className="flex flex-col  items-center py-4 px-8 gap-6  bg-black text-white ">
      <h2 className="flex rounded-full font-medium text-xs bg-slate-800  text-white px-3 py-2">
        Experience
      </h2>
      <p className="py-2 px-6 gap-6">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex flex-col  gap-16 ">
        <div className="flex flex-col md:flex-row justify-center md:justify-between md:pt-8 w-80 h-96 md:w-[896px] md:h-[288px] rounded-md bg-gradient-to-r gap-2 px-4 from-gray-600 via-gray-800  ">
          <h1>Up Work</h1>
          <div>
            <li className=" font-bold ">Sr. Frontend Developer</li>
            <li className=" font-normal text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className=" font-normal text-slate-400">
              Ut pretium arcu et massa semper, id fringilla leo semper.
            </li>
            <li className=" font-normal text-slate-400">
              Sed quis justo ac magna.
            </li>
            <li className=" font-normal text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </div>
          <li className=" font-normal text-slate-400">Nov 2021 - Present</li>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between md:pt-8 w-80 h-96 md:w-[896px] md:h-[288px] rounded-md bg-gradient-to-r :gap-2 px-4 from-gray-600 via-gray-800  ">
          <h1>Up Work</h1>
          <div>
            <li className=" font-bold ">Sr. Frontend Developer</li>
            <li className=" font-normal text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className=" font-normal text-slate-400">
              Ut pretium arcu et massa semper, id fringilla leo semper.
            </li>
            <li className=" font-normal text-slate-400">
              Sed quis justo ac magna.
            </li>
            <li className=" font-normal text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </div>
          <li className=" font-normal text-slate-400">Nov 2021 - Present</li>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between md:pt-8 w-80 h-96 md:w-[896px] md:h-[288px] rounded-md bg-gradient-to-r gap-2 px-4 from-gray-600 via-gray-800  ">
          <h1>Up Work</h1>
          <div>
            <li className=" font-bold ">Sr. Frontend Developer</li>
            <li className=" font-normal text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className=" font-normal text-slate-400">
              Ut pretium arcu et massa semper, id fringilla leo semper.
            </li>
            <li className=" font-normal text-slate-400">
              Sed quis justo ac magna.
            </li>
            <li className=" font-normal text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </div>
          <li className=" font-normal text-slate-400">Nov 2021 - Present</li>
        </div>
      </div>
    </experience>
  );
};