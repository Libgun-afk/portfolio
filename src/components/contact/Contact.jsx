import { LuMailOpen } from "react-icons/lu";
import { LuCopy } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { PiFigmaLogoBold } from "react-icons/pi";

export const Contact = () => {
  return (
    <contact className="flex flex-col  items-center py-4 px-8 gap-6  bg-white dark:bg-black dark:text-white ">
      <h2 className="flex rounded-full font-medium text-xs bg-slate-800  text-white px-3 py-2">
        Contact
      </h2>
      <p className="py-2 px-6 gap-6">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex items-center gap-4">
        <LuMailOpen />
        <p>Bilguun040728@gmail.com</p>
        <LuCopy />
      </div>
      <div className="flex items-center gap-4">
        <IoCallOutline />
        <p>976-99012059</p>
        <LuCopy />
      </div>
      <p>You may also find me on these platforms!</p>
      <div className="flex gap-4">
        <LuGithub />
        <FiTwitter />
        <PiFigmaLogoBold />
      </div>
    </contact>
  );
};
