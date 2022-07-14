import React from "react";
import { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <header className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>

          <ul className="hidden md:flex gap-3">
            <li className="cursor-pointer hover:text-indigo-600">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-indigo-600">
              <Link to="about" smooth={true} offset={-170} duration={500}>
                About
              </Link>
            </li>
            <li className="cursor-pointer hover:text-indigo-600">
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li className="cursor-pointer hover:text-indigo-600">
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="p-8 py-3">Sign Up</button>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-6 cursor-pointer" />
          ) : (
            <XIcon className="w-6 cursor-pointer" />
          )}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer hover:text-indigo-600">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer hover:text-indigo-600">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-170}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer hover:text-indigo-600">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer hover:text-indigo-600">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sing In
          </button>
          <button className="px-8 py-3">Sing Up</button>
        </div>
      </ul>
    </header>
  );
};

export default NavBar;
