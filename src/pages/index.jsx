import { Header, About, Navigation, Dropdown} from "@/components";
import { useState } from "react";

export default function Home () {
const [open, setOpen] =useState(false)

  return (
    <div className="max-w-8xl mx-auto">
      <Header setOpen={setOpen} open={open}/>
      <About />
      <Navigation open={open}/>
      <Dropdown />
    </div>
  );
  }

