import React from "react";

const ClientReviews = () => {
  return (
    <div className="w-full font-[neue] h-[40vw] bg-[#F1F1F1]">
      <div>
        <h1 className="text-6xl p-10">Cliets' reviews</h1>
        <hr />
      </div>
      <div className="flex justify-between text-lg font-extralight px-15 py-5">
        <h1 className="underline underline-offset-4 ">Karman Ventures</h1>
        <h1>Services:</h1>
        <h1>William Barnes</h1>
        <h1></h1>
        <h1 className="uppercase text-zinc-400">read</h1>
      </div>
      <div className="flex w-full pt-10  justify-between">
        <div className="w-[103vw] h-52"></div>
        <div></div>
        <div className="w-[50%] h-52 ">
          <div className="flex flex-col w-fit gap-3 ">
            <button className="uppercase border px-3 py-1 rounded-full">
              investor deck
            </button>
            <button className="uppercase border w-fit px-3 py-1 rounded-full">
              sales deck
            </button>
          </div>
        </div>
        <div className="relative w-full">
          <div className="absolute left-32 w-full">
            <img
              className="w-28 h-28 rounded-2xl object-cover "
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt=""
            />
            <p className="pt-5 w-[31vw] text-lg">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
        </div>
        <div className="w-full h-52"></div>
      </div>
    </div>
  );
};

export default ClientReviews;
