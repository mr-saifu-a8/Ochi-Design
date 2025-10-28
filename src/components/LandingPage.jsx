import { motion } from "framer-motion";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import RightBadge from "./RightBadge";

function LandingPage() {
  
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.7"
      className="w-full h-screen pt-1 "
    >
      <div className="textstructure mt-40 px-14">
        {["We Create", "Eye-Opening", "Presentataion"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" w-[9vw] h-[5.8vw] rounded-sm mr-4 mt-4 bg-[url('/ochi-img1.jpg')] bg-center bg-cover"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[8.8vw] font-semibold font-['Founders'] leading-[6vw] text-[#212121]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] flex justify-between items-center border-zinc-400 mt-44 pt-4 pl-14 pr-14">
        {[
          "Presentation and storytelling agency",
          "For innovation teams and global brands",
        ].map((elem, index) => (
          <p
            key={index}
            className="text-[1.1vw] font-normal tracking-tight leading-none"
          >
            {elem}
          </p>
        ))}
        <div className="start flex items-center justify-center text-center gap-1">
          <div className="px-4 py-1  border-1 rounded-full">
            START THE PROJECT
          </div>
          <div className="w-9 h-9 flex items-center justify-center border-1 rounded-full">
            <span className="rotate-[-45deg] text-[20px] font-extralight">
              <IoArrowForwardSharp />
            </span>
          </div>
        </div>
      </div>
      <RightBadge/>
    </div>
  );
}

export default LandingPage;
