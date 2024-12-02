import { FaLocationDot } from "react-icons/fa6";
import { CgShapeCircle } from "react-icons/cg";

export const About = () => {
  return (
    <div
      className=" flex flex-col justify-center md:  
   md:flex-row  md:py-4 md:px-8 gap-12 w-60% h-60% bg-[#F9FAFB] dark:bg-[#111827] dark:text-white md:h-[992px]"
    >
      <div className="flex flex-col  items-center gap-4 flex-1">
        <h2 className=" rounded-full font-medium text-xs dark:bg-slate-800  dark:text-white bg-[#E5E7EB] text-[#4B5563] px-3 py-2 md:hidden">
          About me
        </h2>
        <div className="md:flex justify-center items-center py-4 px-8 flex-1 gap-5">
          <div>
            <div className="z-10 py-1 bg-white"></div>
            <img
              className="flex w-[400px] h-[480px] object-cover z-0"
              src="/untitled-3.jpg"
              alt="hack"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#111827] dark:text-white flex-1">
        <h2 className="font-bold w{344px} h-16 flex py-4 px-8 ">
          Curious about me? Here you have it:
        </h2>

        <div className="flex flex-col gap-y-3.5 py-4 px-8 ">
          <p className="flex font-normal text-slate-400">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="flex font-normal text-slate-400">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="flex font-normal text-slate-400">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="flex font-normal text-slate-400">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="flex font-normal text-slate-400">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="flex font-normal text-slate-400">
            Finally, some quick bits about me.
          </p>
          <a href="" className="flex font-normal text-slate-400">
            B.E. in Computer Engineering
          </a>
          <a href="" className="flex font-normal text-slate-400">
            Full time freelancer
          </a>
          <a href="" className="flex font-normal text-slate-400">
            Avid learner
          </a>
          <a href="" className="flex font-normal text-slate-400">
            Aspiring indie hacker
          </a>
          <p className="flex font-normal text-slate-400">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
