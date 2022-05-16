/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  IcArchitecture,
  IcConstruction,
  IcElectric,
  IcRenovation,
  IcRepair,
} from "../../assets";

const datas = [
  {
    id: 1,
    icon: IcConstruction,
    name: "Construction",
  },
  {
    id: 2,
    icon: IcRenovation,
    name: "Renovation",
  },
  {
    id: 3,
    icon: IcConstruction,
    name: "Consultation",
  },
  {
    id: 4,
    icon: IcRepair,
    name: "Repair Services",
  },
  {
    id: 5,
    icon: IcArchitecture,
    name: "Architecture",
  },
  {
    id: 6,
    icon: IcElectric,
    name: "Electric",
  },
];

export default function Services() {
  return (
    <div className="py-11 bg-gray-200">
      <h1 className="text-4xl font-bold text-center py-12">Services</h1>
      <div className="flex justify-center xl:px-20  2xl:px-72  flex-wrap">
        {datas.map((data) => {
          return (
            <div
              key={data.id}
              className={
                data.id % 2 === 0
                  ? "flex flex-col rounded-md xs:w-full w-271 items-center border xs:p-10 sm:p-4 md:p-4 lg:p-7 xl:p-7 2xl:p-7 xs:mx-4 sm:mx-2 md:mx-4 lg:mx-4 xl:mx-7 2xl:mx-6 my-4 bg-blue-700"
                  : "flex flex-col rounded-md xs:w-full w-271 items-center border xs:p-10 sm:p-4 md:p-4 lg:p-7 xl:p-7 2xl:p-7 xs:mx-4 sm:mx-2 md:mx-4 lg:mx-4 xl:mx-7 2xl:mx-6 my-4 bg-white"
              }
            >
              <img src={data.icon} />
              <div
                className={
                  data.id % 2 === 0
                    ? "my-5 w-11 border border-white"
                    : "my-5 w-11 border border-gray-700"
                }
              />
              <div
                className={
                  data.id % 2 === 0
                    ? "font-bold text-xl text-white"
                    : "font-bold text-xl text-blue-700"
                }
              >
                {data.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
