import React from "react";
import Gap from "../Atoms/Gap";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center py-14 bg-gray-200 font-sans xs:px-4 sm:px-4 md:px-7 lg:px-8 xl:px-9 2xl:px-10">
      <div className="text-4xl font-bold py-12">What can us do for you?</div>
      <div className="text-xl">
        We are ready to work on a project of any complexity,
      </div>
      <div className="text-xl">whether it’s commercial or residential.</div>
      <Gap height={38} />
      <div className="w-full xs:block flex flex-row justify-center">
        <input
          className="px-2 py-3 xs:w-full sm:w-1/2 md:w-80 lg:w-80 xl:w-80 2xl:w-80 rounded-sm mb-4 xs:mx-0 sm:mr-2 md:mx-4 lg:mx-4 xl:mx-4 2xl:mx-4"
          placeholder="Your Name"
        />
        <input
          className="px-2 py-3 xs:w-full sm:w-1/2 md:w-80 lg:w-80 xl:w-80 2xl:w-80 rounded-sm mb-4 xs:mx-0 sm:ml-2 md:mx-4 lg:mx-4 xl:mx-4 2xl:mx-4"
          placeholder="Email"
        />
      </div>

      <div className="w-full xs:block flex flex-row justify-center">
        <input
          className="px-2 py-3 xs:w-full sm:w-1/2 md:w-80 lg:w-80 xl:w-80 2xl:w-80 rounded-sm mb-4 xs:mx-0 sm:mr-2 md:mx-4 lg:mx-4 xl:mx-4 2xl:mx-4"
          placeholder="Reason for Contacting*"
        />
        <input
          className="px-2 py-3 xs:w-full sm:w-1/2 md:w-80 lg:w-80 xl:w-80 2xl:w-80 rounded-sm mb-4 xs:mx-0 sm:ml-2 md:mx-4 lg:mx-4 xl:mx-4 2xl:mx-4"
          placeholder="Phone"
        />
      </div>

      <textarea
        className="xs:w-full sm:w-full md:w-42 lg:w-42 xl:w-42 2xl:w-42 h-32 p-2"
        placeholder="Message"
      ></textarea>
      <Gap height={28} />
      <button className="bg-blue-700 xs:w-full px-40 py-3 rounded-sm text-white">
        Submit
      </button>
    </div>
  );
}
