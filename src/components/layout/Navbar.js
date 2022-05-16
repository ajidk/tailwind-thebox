/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IcTheBox } from "../../assets";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 xs:px-4 sm:px-4 md:px-7 lg:px-8 xl:px-9 2xl:px-10">
      <div className="flex h-10vh  justify-between items-center">
        <img src={IcTheBox} height={47} className="lg:w-32" />
        <div className="flex-row md:flex lg:flex xl:flex 2xl:flex items-center xs:hidden sm:hidden ">
          <a href="#home"  className="md:mx-2 lg:xl:2xl:ml-12 text-lg font-normal font-sans">
            Home
          </a>
          <a href="#about" className="md:mx-2 lg:xl:2xl:ml-12 text-lg font-normal font-sans">
            About Us
          </a>
          <a href="#project " className="md:mx-2 lg:xl:2xl:ml-12 text-lg font-normal font-sans">
            Projects
          </a>
          <a href="#services" className="md:mx-2 lg:xl:2xl:ml-12 text-lg font-normal font-sans">
            Services
          </a>
          <a href="#contact" className="md:mx-2 lg:xl:2xl:ml-12 text-lg font-semibold font-sans text-orange-500">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
