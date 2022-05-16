/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ImgPeople } from "../../assets";
import Gap from "../Atoms/Gap";

export default function About() {
  return (
    <div id="about" className="py-16 flex md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center md:px-7 lg:px-8 xl:px-9 2xl:px-10">
      <img src={ImgPeople} className="lg:w-8/12 xs:hidden sm:hidden md:hidden lg:block xl:block 2xl:block" />
      <div className="lg:flex xl:flex 2xl:flex flex-col bg-blue-700 lg:w-5/12 xl:w-488 2xl:w-488  lg:-ml-44  xl:-ml-44 p-12 2xl:-ml-44   rounded-lg">
        <div className="text-4xl text-white font-bold font-sans">About Us</div>
        <Gap height={36} />
        <div className="font-sans xl:text-lg 2xl:text-xl text-white">
          For more than 30 years we have been delivering world-class
          construction and we’ve built many lasting relationships along the way.
          <Gap height={20} />
          We’ve matured into an industry leader and trusted resource for those
          seeking quality, innovation and reliability when building in the U.S.
        </div>
        <div className="mt-auto ">
          <button className="bg-white xs:mt-14 sm:mt-14 md:mt-14 lg:mt-2 xl:mt-10 2xl:mt-60 self-start py-4 px-5 font-sans text-blue-700 rounded-xl">
            More on Our History
          </button>
        </div>
      </div>
    </div>
  );
}
