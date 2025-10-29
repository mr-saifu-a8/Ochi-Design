import React from "react";

const ClientReviewsName = () => {
  const media = [
    { title: "Medellia", client: "Becky Chastain", action: "Read" },
    { title: "Planetly", client: "Nina Walloch", action: "Read" },
    { title: "Workiz Easy", client: "Tomer Levy", action: "Read" },
    { title: "Premium Blend", client: "Ellen Kim", action: "Read" },
    { title: "Hypercare Systems", client: "Brendan Goss", action: "Read" },
    { title: "Officevibe", client: "Raff Labrie", action: "Read" },
    { title: "Orderlion", client: "Stefan Strohmer", action: "Read" },
    { title: "Black Book", client: "Jaci Smith", action: "Read" },
    { title: "Trawa Energy", client: "David Budde", action: "Read" },
  ];

  const cardimg = [
    { image: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg" },
    { image: "https://ochi.design/wp-content/uploads/2022/04/logo003.png" },
  ];
  return (
    <div className="w-full  font-[neue] ">
      {media.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between  px-15 py-5 border-t border-zinc-400 text-lg 
            ${index === media.length - 1 ? "border-b border-zinc-400" : ""}`}
        >
          <h2 className="underline underline-offset-4">{item.title}</h2>
          <h2 className="">{item.client}</h2>
          <h2 className="underline underline-offset-6">{item.action}</h2>
        </div>
      ))}

      <div className="w-full flex gap-5 h-fit px-15 py-30">
        <div className="w-[45vw] flex justify-center items-center rounded-xl h-[50vh] bg-[#004D43]">
          <img
            className="h-15"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
        </div>
        {cardimg.map((index, item) => (
          <div key={item} className="w-[22.5vw] flex justify-center items-center rounded-xl h-[50vh] bg-[#212121]">
            <img className="h-20" src={index.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviewsName;
