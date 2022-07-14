import React from "react";

import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";

import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <section name="support" className="w-full h-[90%] mt-24 2xl:mb-[12rem]">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-width-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300 text-center xl:w-[50rem] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            voluptates, atque fugit, quidem animi mollitia, aperiam quae quam
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black max-w-[1240px] m-auto">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, recusandae! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Labore?
              </p>
            </div>

            <div className="bg-slate-100 pl-8 py-5">
              <p className="font-bold flex items-center text-indigo-600 gap-2">
                Contact Us <ArrowSmRightIcon className="h-7" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, recusandae! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Labore?
              </p>
            </div>

            <div className="bg-slate-100 pl-8 py-5">
              <p className="font-bold flex items-center text-indigo-600 gap-2">
                Contact Us <ArrowSmRightIcon className="h-7" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, recusandae! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Labore?
              </p>
            </div>

            <div className="bg-slate-100 pl-8 py-5">
              <p className="font-bold flex items-center gap-1 text-indigo-600">
                Contact Us <ArrowSmRightIcon className="h-7" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
