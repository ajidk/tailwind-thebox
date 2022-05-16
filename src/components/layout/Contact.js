/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { IcFb, IcLinkIn, IcTheBox, IcTwitter } from "../../assets";
import Gap from "../Atoms/Gap";

export default function Contact() {
  return (
    <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex py-22 font-sans xs:px-4 sm:px-4 md:px-7 lg:px-8 xl:px-9 2xl:px-10">
      <div className="w-1/2 pr-2">
        <div className="flex flex-wrap items-center">
          <label className="text-blue-700 text-xl uppercase font-medium">
            Address:
          </label>
          <Gap width={10} />
          <div className="text-xl">6391 Elgin St. Celina, Delaware 10299</div>
        </div>
        <Gap height={32} />
        <div className="flex flex-wrap items-center">
          <label className="text-blue-700 text-xl uppercase font-medium">
            Phone:
          </label>
          <Gap width={21} />
          <div className="text-xl">+62-853-7703-3185</div>
        </div>
        <Gap height={32} />
        <div className="flex flex-wrap items-center">
          <label className="text-blue-700 text-xl uppercase font-medium">
            Email:
          </label>
          <Gap width={24} />
          <div className="text-xl">Surajidk12@gmail.com</div>
        </div>
        <Gap height={32} />
        <img src={IcTheBox} className="xs:hidden" />
      </div>
      <div className="w-1/2 xs:pl-0 pl-2">
        <label className="text-blue-700 text-xl uppercase font-medium">
          NewsLetter:
        </label>
        <Gap height={20} />
        <div className="xs:block sm:block md:block flex items-center">
          <input
            className="px-2 py-3 sm:w-full md:w-80 lg:w-80 xl:w-80 2xl:w-80 rounded-sm border mr-2"
            placeholder="Your email here"
          />
          <button className="bg-orange-400 xs:mt-3 sm:mt-3 md:mt-3 px-7 py-3 rounded-sm text-white text-lg">
            Subscribe
          </button>
        </div>
        <Gap height={42} />
        <label className="text-blue-700 text-xl uppercase font-medium">
          Social:
        </label>
        <Gap height={20} />
        <div className="flex flex-row items-center">
          <button>
            <img src={IcFb} />
          </button>
          <Gap width={20} />
          <button>
            <img src={IcLinkIn} />
          </button>
          <Gap width={20} />
          <button>
            <img src={IcTwitter} />
          </button>
        </div>
      </div>
    </div>
  );
}
