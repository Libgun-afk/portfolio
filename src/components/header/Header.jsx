import { IoInvertModeSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Navigation } from "./Navigation";

export const Home = () => {
  return (
    <header className=" sm: flex justify-between content-center ">
      <h3 className=" font-bold">BRO</h3>
      <header2 className="sm:text hidden md:flex content-center justify-center gap-8 w-96 h-10">
        <p className="menu-header">About</p>
        <p className="menu-header">About</p>
        <p className="menu-header">About</p>
        <p className="menu-header">About</p>
        <IoInvertModeSharp />
        <IoMenu />
      </header2>
      <Navigation />
    </header>
  );
};
