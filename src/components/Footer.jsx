import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-24 bg-slate-900 text-gray-300 py-1 px-2">
      <div className="max-w-[1240px] m-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 xl:text-start">
        <div className="">
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul className="">
            <li className="py-1 p-[.2rem]">Marketing</li>
            <li className="py-1 p-[.2rem]">Analytics</li>
            <li className="py-1 p-[.2rem]">Commerce</li>
            <li className="py-1 p-[.2rem]">Data</li>
            <li className="py-1 p-[.2rem]">Cloud</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul className="">
            <li className="py-1 p-[.2rem]">Pricing</li>
            <li className="py-1 p-[.2rem]">Documentation</li>
            <li className="py-1 p-[.2rem]">Guides</li>
            <li className="py-1 p-[.2rem]">API Status</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul className="">
            <li className="py-1 p-[.2rem]">About</li>
            <li className="py-1 p-[.2rem]">Blogs</li>
            <li className="py-1 p-[.2rem]">Jobs</li>
            <li className="py-1 p-[.2rem]">Press</li>
            <li className="py-1 p-[.2rem]">Partners</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul className="">
            <li className="py-1 p-[.2rem]">Claims</li>
            <li className="py-1 p-[.2rem]">Privacy</li>
            <li className="py-1 p-[.2rem]">Terms</li>
            <li className="py-1 p-[.2rem]">Policies</li>
            <li className="py-1 p-[.2rem]">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form action="#" className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4 text-indigo-900"
              type="email"
              placeholder="Enter your e-mail..."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row max-w-[1240px] px-2 py-4 m-auto justify-between sm:text-center text-gray-500 items-center">
        <p>2022 Workflow, LLC. All rights reserverd</p>
        <div className="flex justify-between sm:max-w-[300px] pt-4 text-2xl gap-4">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
