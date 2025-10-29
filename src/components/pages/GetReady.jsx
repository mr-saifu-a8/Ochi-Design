import React from "react";
import { GoDotFill } from "react-icons/go";
import Eyes from './../animation/Eyes';
const GetReady = () => {
  return (
    <div
    
      className="w-full flex items-center justify-center flex-col gap-10 font-[founders] h-screen bg-[#CDEA68]"
    >
      <div className="flex">
        <h1 className="text-[15vw] text-[#212121] uppercase text-center leading-[11vw]">
          ready <br /> to start <br /> the project
          <span className="font-[arial] font-bold">?</span>
        </h1>
      </div>
      <div className="flex flex-col items-center gap-5">
        <button className="px-7 text-md rounded-full uppercase font-[neue] py-4  bg-[#212121] text-white flex items-center gap-5">
          start the project <GoDotFill />
        </button>
        <h1 className="font-[neue] text-xl">OR</h1>
        <button className="px-7 text-md rounded-full uppercase font-[neue] py-4  border border-black  flex items-center gap-5">
          hello@ochi.design <GoDotFill />
        </button>
      </div>
    </div>
  );
};

export default GetReady;
