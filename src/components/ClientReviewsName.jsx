// import React from 'react'

// const ClientReviewsName = () => {
//   const media = [
//     {title: "Medellia", client: "Becky Chastain", action: "Read"},
//     {title: "Medellia", client: "Becky Chastain", action: "Read"},
//     {title: "Medellia", client: "Becky Chastain", action: "Read"},
//     {title: "Medellia", client: "Becky Chastain", action: "Read"},
//     {title: "Medellia", client: "Becky Chastain", action: "Read"},
//     {title: "Medellia", client: "Becky Chastain", action: "Read"},
//     {title: "Medellia", client: "Becky Chastain", action: "Read"},
//     {title: "Medellia", client: "Becky Chastain", action: "Read"},
//     {title: "Medellia", client: "Becky Chastain", action: "Read"},
    
//   ]
// return (
//   <div className='w-full font-[neue] h-screen'>
//     {media.map((item, index) => (
      
//       <div className='flex justify-between px-15 py-5 border-t  border-zinc-400 text-lg'>
//         <h2>{item.title}</h2>
//         <h2>{item.client }</h2>
//         <h2 className='underline underline-offset-6'>{item.action}</h2>
//       </div>
//     ))}
//     </div>
//   )
// }

// export default ClientReviewsName




import React from "react";

const ClientReviewsName = () => {
  const media = [
    { title: "Medellia", client: "Becky Chastain", action: "Read" },
    { title: "Medellia", client: "Becky Chastain", action: "Read" },
    { title: "Medellia", client: "Becky Chastain", action: "Read" },
    { title: "Medellia", client: "Becky Chastain", action: "Read" },
    { title: "Medellia", client: "Becky Chastain", action: "Read" },
    { title: "Medellia", client: "Becky Chastain", action: "Read" },
    { title: "Medellia", client: "Becky Chastain", action: "Read" },
    { title: "Medellia", client: "Becky Chastain", action: "Read" },
    { title: "Medellia", client: "Becky Chastain", action: "Read" },
  ];

  return (
    <div className="w-full font-[neue] h-screen">
      {media.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between px-15 py-5 border-t border-zinc-400 text-lg 
            ${index === media.length - 1 ? "border-b border-zinc-400" : ""}`}
        >
          <h2>{item.title}</h2>
          <h2>{item.client}</h2>
          <h2 className="underline underline-offset-6">{item.action}</h2>
        </div>
      ))}

      <div className="w-full flex gap-5 h-fit p-15">
        <div className="w-[45vw] flex justify-center items-center rounded-xl h-[50vh] bg-[#004D43]">
          <img
            className="h-15"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
        </div>
        <div className="w-[22.5vw] rounded-xl h-[50vh] bg-[#212121]"></div>
        <div className="w-[22.5vw] rounded-xl h-[50vh] bg-[#212121]"></div>
      </div>
    </div>
  );
};

export default ClientReviewsName;
