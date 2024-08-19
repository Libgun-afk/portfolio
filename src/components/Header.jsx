import { IoMenu } from "react-icons/io5";

export const Header = () => {
  return (
    <div className="block sm:hidden he bg-white justify-between h-0.2 w-0.2 bg-black sm:bg-yellow-400 ">
      <header className="flex ">
        <div className="flex items-center justify-between h-20 w-96">
          <h3 className="font-bold text-slate-800">BRO</h3>
          <IoMenu />
        </div>
      </header>
    </div>
  );
};
