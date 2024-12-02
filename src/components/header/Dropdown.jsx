// import {motion} from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { PiFigmaLogoBold } from "react-icons/pi";

export const Dropdown = () => {
  return (
    <div className="flex-col-reverse px-4 py-16 items-center  justify-between md:flex-row flex  md:py-4 md:px-8 gap-12 bg-white dark:bg-black dark:text-white md:h-[552px] ">
      <div className="flex gap-12 flex-col md:w-[768px] py-4 px-8">
        <div className="flex flex-col gap-y-5">
          <h2 className="whitespace-nowrap font-semibold md:font-bold md:text-5xl text-2xl">
            Hi, I’m Bilguun 👋{" "}
          </h2>
          <p className="flex font-normal text-slate-400">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>

        <div className="flex gap-10 justify-center content-center flex-col">
          <div className="flex flex-col gap-2">
            <div className="flex font-bold content-center items-center gap-2 ">
              <IoLocationOutline />
              <a className="font-bold flex" href="">
                UlaanBaatar, Mongolia
              </a>
            </div>
            <div className="flex font-bold content-center items-center gap-2 pl-1">
              <div className="flex h-2 w-2 bg-green-500 rounded-full "></div>
              <p>Available for new projects</p>
            </div>
          </div>

          <div className="flex gap-2">
            <LuGithub />
            <FiTwitter />
            <PiFigmaLogoBold />
          </div>
        </div>
      </div>
      <div className="md:flex justify-center items-center content-center w-72 h-80">
        <img
          className="md:flex justify-center items-center content-center w-72 h-80 object-cover"
          src="/untitled-3.jpg"
          alt="as"
        />
      </div>
    </div>
  );
};
