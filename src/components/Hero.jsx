import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <section
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto px-2">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Coud Management
          </h1>
          <p className="text-2xl">This is our Tech Brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>

        <div>
          <img src={bgImg} alt="/" className="w-full" />
        </div>

        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <h3 className="md:text-2xl">Data Services</h3>

          <div className="text-slate-500 flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 gap-1 text-xs md:text-base items-center">
              <CloudUploadIcon className="h-6 text-indigo-600" />
              Icon. App Security
            </p>
            <p className="flex px-4 py-2 gap-1 text-xs md:text-base items-center">
              <DatabaseIcon className="h-6 text-indigo-600" />
              Icon. Dashboard Design
            </p>
            <p className="flex px-4 py-2 gap-1 text-xs md:text-base items-center">
              <ServerIcon className="h-6 text-indigo-600" />
              Icon. Cloud Data
            </p>
            <p className="flex px-4 py-2 gap-1 text-xs md:text-base items-center">
              <PaperAirplaneIcon className="h-6 text-indigo-600" />
              Icon. API
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
