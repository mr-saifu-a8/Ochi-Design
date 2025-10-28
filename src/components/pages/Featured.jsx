import React from "react";
import About from "./About";
import { GoDotFill } from "react-icons/go";
const Featured = () => {
  return (
    <div className="w-full bg-[#F1F1F1] font-[neue] pt-15">
      <div className="">
        <h1 className="text-6xl p-15">Featured projects</h1>
        <hr />
      </div>
      <div className="flex relative justify-center items-center gap-5 pt-25 ">
        <div className="w-[45vw] h-[35vw] overflow-hidden rounded-2xl bg-red-600">
          <h1 className="absolute text-[#CDEA68] left-[32vw] top-[18vw] z-[9] text-9xl font-[founders]">
            {/* {"SALIENCE LABS".slice("").map((item, index) => (
              <span>{item}</span>
            ))} */}
          </h1>
          <h1 className="absolute top-17 left-15 uppercase flex items-center gap-1  ">
            <GoDotFill className="text-center text-2xl" />
            salience labs
          </h1>

          <img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
            alt=""
          />
        </div>
        <div className="w-[45vw] h-[35vw] overflow-hidden rounded-2xl">
          <h1 className="absolute text-[#CDEA68] left-[24vw] top-[18vw] z-[9] text-9xl font-[founders]">
            MEDALLIA EXPERIENCE
          </h1>
          <h1 className="absolute top-17  uppercase flex items-center gap-1  ">
            <GoDotFill className="text-center text-2xl" />
            salience labs
          </h1>

          <img
            className="w-full object-cover h-full"
            src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
            alt=""
          />
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};
``;

export default Featured;
