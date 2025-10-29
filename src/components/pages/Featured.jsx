import React from "react";
import About from "./About";
import { GoDotFill } from "react-icons/go";
import { motion, useAnimate, useAnimation } from "framer-motion";
const Featured = () => {
  const cards = [useAnimation(), useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full bg-[#F1F1F1] font-[neue] pt-15">
      <div className="">
        <h1 className="text-6xl p-15">Featured projects</h1>
        <hr />
      </div>
      <div className="flex relative justify-center items-center gap-5 pt-25 ">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="w-[45vw] h-[35vw] overflow-hidden rounded-2xl"
        >
          <h1 className="absolute text-[#CDEA68] overflow-hidden  left-[32vw] top-[16vw] z-[9] text-[9vw] font-[founders]">
            {"SALIENCE LABS".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.02 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <h1 className="absolute top-17 left-15 uppercase flex items-center gap-1  ">
            <GoDotFill className="text-center text-2xl" />
            salience labs
          </h1>

          <motion.img
            whileHover={{ scale: 0.96 }} // hover par scale chhota
            transition={{ ease: "linear", stiffness: 300 }}
            className="w-full rounded-2xl h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
            alt=""
          />
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="w-[45vw] h-[35vw] overflow-hidden rounded-2xl"
        >
          <h1 className="absolute overflow-hidden text-[#CDEA68] left-[50%] whitespace-nowrap top-[55%] -translate-x-[50%] -translate-y-[50%] z-[9] text-[9vw] font-[founders]">
            {"MEDALLIA EXPERIENCE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.02 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <h1 className="absolute top-17  uppercase flex items-center gap-1  ">
            <GoDotFill className="text-center text-2xl" />
            MEDALLIA EXPERIENCE
          </h1>

          <motion.img
            whileHover={{ scale: 0.96 }} // hover par scale chhota
            transition={{ ease: "linear", stiffness: 300 }}
            className="w-full rounded-2xl h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="flex relative justify-center items-center gap-5 pt-25 ">
        <motion.div
          onHoverStart={() => handleHover(2)}
          onHoverEnd={() => handleHoverEnd(2)}
          className="w-[45vw] h-[35vw] overflow-hidden rounded-2xl"
        >
          <h1 className="absolute text-[#CDEA68] overflow-hidden  left-[32vw] top-[16vw] z-[9] text-[9vw] font-[founders]">
            {"AH2 & MATT HORN".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[2]}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.02 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <h1 className="absolute top-17 left-15 uppercase flex items-center gap-1  ">
            <GoDotFill className="text-center text-2xl" />
            AH2 & Matt Horn
          </h1>

          <motion.img
            whileHover={{ scale: 0.96 }} // hover par scale chhota
            transition={{ ease: "linear", stiffness: 300 }}
            className="w-full rounded-2xl h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
            alt=""
          />
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="w-[45vw] h-[35vw] overflow-hidden rounded-2xl"
        >
          <h1 className="absolute overflow-hidden text-[#CDEA68] left-[50%] whitespace-nowrap top-[55%] -translate-x-[50%] -translate-y-[50%] z-[9] text-[9vw] font-[founders]">
            {"MEDALLIA EXPERIENCE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.02 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <h1 className="absolute top-17  uppercase flex items-center gap-1  ">
            <GoDotFill className="text-center text-2xl" />
            Vise
          </h1>

          <motion.img
            whileHover={{ scale: 0.96 }} // hover par scale chhota
            transition={{ ease: "linear", stiffness: 300 }}
            className="w-full rounded-2xl h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="flex relative justify-center items-center gap-5 pt-25 ">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="w-[45vw] h-[35vw] overflow-hidden rounded-2xl"
        >
          <h1 className="absolute text-[#CDEA68] overflow-hidden  left-[32vw] top-[16vw] z-[9] text-[9vw] font-[founders]">
            {"SOFTSTART".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.02 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <h1 className="absolute top-17 left-15 uppercase flex items-center gap-1  ">
            <GoDotFill className="text-center text-2xl" />
            softstart
          </h1>

          <motion.img
            whileHover={{ scale: 0.96 }} // hover par scale chhota
            transition={{ ease: "linear", stiffness: 300 }}
            className="w-full rounded-2xl h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg"
            alt=""
          />
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="w-[45vw] h-[35vw] overflow-hidden rounded-2xl"
        >
          <h1 className="absolute overflow-hidden text-[#CDEA68] left-[50%] whitespace-nowrap top-[55%] -translate-x-[50%] -translate-y-[50%] z-[9] text-[9vw] font-[founders]">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.02 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <h1 className="absolute top-17  uppercase flex items-center gap-1  ">
            <GoDotFill className="text-center text-2xl" />
            fyde
          </h1>

          <motion.img
            whileHover={{ scale: 0.96 }} // hover par scale chhota
            transition={{ ease: "linear", stiffness: 300 }}
            className="w-full rounded-2xl h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="flex relative justify-center items-center gap-5 pt-25 ">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="w-[45vw] h-[35vw] overflow-hidden rounded-2xl"
        >
          <h1 className="absolute text-[#CDEA68] overflow-hidden  left-[32vw] top-[16vw] z-[9] text-[9vw] font-[founders]">
            {"ALL THINGS GO".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.02 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <h1 className="absolute top-17 left-15 uppercase flex items-center gap-1  ">
            <GoDotFill className="text-center text-2xl" />
            all things go
          </h1>

          <motion.img
            whileHover={{ scale: 0.96 }} // hover par scale chhota
            transition={{ ease: "linear", stiffness: 300 }}
            className="w-full rounded-2xl h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png"
            alt=""
          />
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="w-[45vw] h-[35vw] overflow-hidden rounded-2xl"
        >
          <h1 className="absolute overflow-hidden text-[#CDEA68] left-[50%] whitespace-nowrap top-[55%] -translate-x-[50%] -translate-y-[50%] z-[9] text-[9vw] font-[founders]">
            {"TRAWA".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.02 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <h1 className="absolute top-17  uppercase flex items-center gap-1  ">
            <GoDotFill className="text-center text-2xl" />
            trawa
          </h1>

          <motion.img
            whileHover={{ scale: 0.96 }} // hover par scale chhota
            transition={{ ease: "linear", stiffness: 300 }}
            className="w-full rounded-2xl h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
            alt=""
          />
        </motion.div>
      </div>
      <div className="flex relative justify-center items-center gap-5 pt-25 ">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="w-[45vw] h-[35vw] overflow-hidden rounded-2xl"
        >
          <h1 className="absolute text-[#CDEA68] overflow-hidden uppercase left-[32vw] top-[16vw] z-[9] text-[9vw] font-[founders]">
            {"Cardboard".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.02 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <h1 className="absolute top-17 left-15 uppercase flex items-center gap-1  ">
            <GoDotFill className="text-center text-2xl" />
            Cardboard Spaceship
          </h1>

          <motion.img
            whileHover={{ scale: 0.96 }} // hover par scale chhota
            transition={{ ease: "linear", stiffness: 300 }}
            className="w-full rounded-2xl h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
            alt=""
          />
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="w-[45vw] h-[35vw] overflow-hidden rounded-2xl"
        >
          <h1 className="absolute overflow-hidden text-[#CDEA68] uppercase left-[50%] whitespace-nowrap top-[55%] -translate-x-[50%] -translate-y-[50%] z-[9] text-[9vw] font-[founders]">
            {"Premium Blend".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.02 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <h1 className="absolute top-17  uppercase flex items-center gap-1  ">
            <GoDotFill className="text-center text-2xl" />
            Premium Blend
          </h1>

          <motion.img
            whileHover={{ scale: 0.96 }} // hover par scale chhota
            transition={{ ease: "linear", stiffness: 300 }}
            className="w-full rounded-2xl h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};
``;

export default Featured;
