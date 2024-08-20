import { Navigation } from "./Navigation";
import { IoMdMenu } from "react-icons/io";

export const Header = () => {
  const clickButton = () => {};

  return (
    <div className=" flex justify-between items-center py-4 px-20">
      <span className="whitespace-nowrap font-bold">{"<SS/>"}</span>
      <Navigation />

      <button onClick={clickButton} className="block md:hidden">
        {toggle ? <IoMdMenu /> : <MdOutlineMenu />}
      </button>
      <AnimatePresence>{toggle && <Dropdown />}</AnimatePresence>
    </div>
  );
};
