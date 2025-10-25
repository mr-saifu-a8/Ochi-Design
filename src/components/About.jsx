import React from "react";

function About() {
  return (
    <div>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.01"
        className="w-full bg-[#CDEA68] py-20 rounded-tr-3xl rounded-tl-3xl font-['Neue'] text-black"
      >
        <h1 className="text-[3.6vw] p-20 w-[95%] leading-[3.8vw]">
          We craft category-defining presentations, brand identities, and
          digital experiences that drive funding, sales, and market leadership.
        </h1>
        <div className="w-full border-[0.1px] border-black"></div>
        <div></div>
        <div className="flex gap-20">
          <h1 className="w-[50%] text-[1.2vw] py-5 px-10">
            What you can expect:
          </h1>
          <div className="flex flex-col w-[18%] py-5 text-[1vw] gap-10">
            <p>
              We don't just make slides. We shape strategy, storytelling, design
              scalable brand systems, and build presentations that make people
              say: "I want in!"
            </p>

            <p>
              Our clients make the world go round – from deep tech, aerospace
              and robotics to music festivals and Michelin-starred restaurants.
            </p>

            <p>
              Since 2019, we've been the go-to partner for Yahoo, Medallia,
              Uber, Lexus, Salience Labs, Trawa and AllThingsGo.
            </p>
          </div>
          <div className="flex items-end px-20">
            <div>
              <div>
                <h1 className="pb-5">S:</h1>
              </div>
              <ul className="underline text-lg">
                <li>Instagram</li>
                <li>Behance</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      <div className="w-full h-[40vw] pt-15 bg-[#CDEA68] ">
        {/* <div className="w-full border-[0.1px] border-black"></div> */}
        <div className="flex justify-between px-15 py-5">
          <div>
            <h1 className="text-6xl pb-5">How we can help:</h1>
            <button className="bg-zinc-900 flex items-center justify-center gap-10 px-7 font-[neue] rounded-full py-4 text-lg uppercase text-white">
              read more
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </button>
          </div>
          <div className="w-[47vw] overflow-hidden rounded-2xl h-[34vw]">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
