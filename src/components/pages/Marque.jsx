import { motion } from "framer-motion";
import React from "react";

function Marque() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full py-30 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] text-white overflow-hidden"
    >
      <div className="border-t-[1px] border-b-[1px] border-[]">
        <div className="flex items-center whitespace-nowrap ">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className='text-[25vw] -mb-9 -mt-20 uppercase leading-none font-["founders"] font-bold pr-20'
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className='text-[25vw] -mb-9 -mt-20 uppercase leading-none font-["founders"] font-bold pr-20'
          >
            we are ochi
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Marque;
