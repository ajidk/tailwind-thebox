/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { IcBack, IcNext, ImgCompany } from "../../assets";
import Gap from "../Atoms/Gap";

export default function Hero() {
  return (
    <div
      className="flex justify-between items-center h-90vh  bg-cover bg-no-repeat bg-center xs:px-4  sm:pl-4 md:pl-7 lg:pl-8 xl:pl-9 2xl:pl-10"
      style={{ backgroundImage: "url(" + ImgCompany + ")" }}
    >
      <div className="lg:text-4xl xs:text-xl sm:text-3xl md:text-3xl xl:text-5xl 2xl:text-7xl font-semibold sm:w-24rem md:w-17rem lg:w-31 xl:w-30 2xl:w-40 leading-tight font-sans">
        Building things is our mission.
      </div>
      <div className="bg-blue-600 mt-auto">
        <div className="flex flex-col">
          <div className="px-52px py-7">
            <div className="text-center text-white 2xl:text-3xl font-bold">
              Feature Projects
            </div>
            <Gap height={20} />
            <div className="text-center text-white lg:w-19 xl:w-26 2xl:w-26 2xl:text-3xl font-normal">
              The National University of Architecture
            </div>
          </div>
          <div className="flex flex-row flex-end justify-between bg-black mt-auto">
            <div className="flex flex-row w-1/2 items-center justify-center  py-2 border-r">
              <img src={IcBack} />
              <div className="ml-2 text-white">Back</div>
            </div>
            <div className="flex flex-row w-1/2 items-center justify-center  py-2">
              <div className="mr-2 text-white">Next</div>
              <img src={IcNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
