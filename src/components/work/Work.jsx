import { GrShare } from "react-icons/gr";

export const Work = () => {
  return (
    <work className="flex flex-col items-center py-4 px-8 gap-6 bg-black text-white ">
      <h2 className="flex rounded-full font-medium text-xs bg-slate-800 text-white px-3 py-2">
        Work
      </h2>
      <p className="font-normal text-slate-400">
        Some of the noteworthy projects I have built:
      </p>

      <div className=" py-4 px-8 gap-3 rounded-md bg-gradient-to-r  from-gray-600 via-gray-800 ">
        <div className="p-8">
          <img src="./project.png" alt="a" />
        </div>
        <div className="font-bold text-white">Fiskil</div>
        <div className="font-normal text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </div>
        <div className="flex  items-center py-4 flex-wrap gap-4">
          <h2 className="flex rounded-full font-medium text-xs bg-slate-800 text-white px-3 py-2">
            React
          </h2>
          <h2 className="flex rounded-full font-medium text-xs bg-slate-800 text-white px-3 py-2">
            Next.js
          </h2>
          <h2 className="flex rounded-full font-medium text-xs bg-slate-800 text-white px-3 py-2">
            Typescript
          </h2>
          <h2 className="flex rounded-full font-medium text-xs bg-slate-800 text-white px-3 py-2">
            Nest.js
          </h2>
          <h2 className="flex rounded-full font-medium text-xs bg-slate-800 text-white px-3 py-2">
            PostgreSQL
          </h2>
          <h2 className="flex rounded-full font-medium text-xs bg-slate-800 text-white px-3 py-2">
            Tailwindcss
          </h2>
          <h2 className="flex rounded-full font-medium text-xs bg-slate-800 text-white px-3 py-2">
            Figma
          </h2>
          <h2 className="flex rounded-full font-medium text-xs bg-slate-800 text-white px-3 py-2">
            Cypress
          </h2>
          <h2 className="flex rounded-full font-medium text-xs bg-slate-800 text-white px-3 py-2">
            Storybook
          </h2>
          <h2 className="flex rounded-full font-medium text-xs bg-slate-800 text-white px-3 py-2">
            Git
          </h2>
        </div>
        <GrShare />
      </div>
    </work>
  );
};