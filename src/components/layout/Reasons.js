/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { IcDesign, IcHead } from "../../assets";

const datas = [
  {
    id: 1,
    icon: IcHead,
    name: "Best Services",
    desc: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
  },
  {
    id: 2,
    icon: IcHead,
    name: "Best Team",
    desc: "Cursus semper tellus volutpat aliquet lacus. ",
  },
  {
    id: 3,
    icon: IcDesign,
    name: "Best Designs",
    desc: "Ultricies at ipsum nunc, tristique nam lectus.",
  },
];

export default function Reasons() {
  return (
    <div className="font-sans my-14 xs:mx-4 md:px-7 lg:px-8 xl:px-9 2xl:px-10">
      <h1 className="text-4xl font-bold text-center mt-1 mb-50">
        Our Reputation
      </h1>
      <div className="flex flex-wrap justify-center mb-16">
        {datas.map((data) => {
          return (
            <div
              key={data.id}
              className="border sm:p-4 xs:w-full xs:p-10 md:p-4 lg:p-7 xl:p-7 2xl:p-7 sm:mx-2 md:mx-4 lg:mx-4 xl:mx-7 2xl:mx-10 my-4"
            >
              <img src={data.icon} />
              <div className="font-bold text-xl font-sans py-4">
                {data.name}
              </div>
              <div className="text-base font-normal font-sans w-60">
                {data.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
