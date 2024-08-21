import { Navigation } from "./Navigation";
import { IoMdMenu } from "react-icons/io";
import { CiLight } from "react-icons/ci";

export const Header = ({setOpen, open}) => {
 
  return (
    <div className=" flex justify-between items-center py-4 px-20">
      <span className="whitespace-nowrap font-bold">{"<SS/>"}</span>
      <Navigation />

    {open === false ? (
     <IoMdMenu 
      className="block md:hidden "
      onClick={() => setOpen(true)} 
          />
    ) : (
    <CiLight onClick={() => setOpen(false)}/>
    )}
    </div>
  );
};



