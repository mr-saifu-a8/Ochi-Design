
const Eyes = ({rotate}) => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.9"
        className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]">
          <div className="relative w-[15vw] flex items-center justify-center h-[15vw] bg-white rounded-full">
            <h1 className="absolute left-1/2 top-1/2 -translate-y-[50%] -translate-x-[50%] uppercase text-xl font-bold z-10 text-white">
              play
            </h1>
            <div className="black relative  w-[9vw] flex items-center justify-center h-[9vw] bg-black rounded-full">
              <div
                style={{ transform: `rotate(${rotate}deg)` }}
                className="line w-full  absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]"
              >
                <div className="w-7 h-7 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="relative w-[15vw] h-[15vw]  flex items-center justify-center bg-white rounded-full">
            <h1 className="absolute left-1/2 top-1/2 -translate-y-[50%] -translate-x-[50%] uppercase text-xl font-bold z-10 text-white">
              play
            </h1>
            <div className="black relative w-[9vw] h-[9vw]  flex items-center justify-center bg-black rounded-full">
              <div
                style={{ transform: `rotate(${rotate}deg)` }}
                className="line w-full  absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]"
              >
                <div className="w-7 h-7 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
