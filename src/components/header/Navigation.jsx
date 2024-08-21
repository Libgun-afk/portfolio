import { CgDarkMode } from "react-icons/cg";

export const Navigation = ({open}) => {
  const variants = {
    open: { x:0},
    closed: { x: "100%"},
    
  };
  



  return (
    
      /* <header2 className=" hidden md:flex  items-center gap-x-6 font-">
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
      </header2> */



      
      // exit={{left: "100%"}}
      // initial={{left: "100%"}}
      // animate={{right:0, left:55}}
      // transition={{duration: 0.5}}
      // className="fixed top-[68px] bottom-0 bg-red-500"
      // >
      //   Dropdown
      <motion.div

initial="closed"
animate={open ? "open" : "closed"}
  variants={variants}
style={{
position: "fixed", top: "36px", right: 0, bottom: 0, width: "80%",
background: "red",
zIndex: 1,
}}
>

<div className="md:flex items-center gap-6 ">
<a href="">About</a>
<a href="">Work</a>
<a href="">Testimonias</a>
<a href="">Contact</a> 
<a href="">Line</a>
<div className="items-center gap-4 flex-col">
<h1>Mobile Header</h1>
<button>Download CV</button>
</div>
</div>
</motion.div>




    
  );
};
