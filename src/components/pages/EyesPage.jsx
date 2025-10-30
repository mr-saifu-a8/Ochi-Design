import EyeAnimation from "../animation/EyeAnimation";
import Eyes from "../animation/Eyes";

const EyesPage = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.9"
        className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'
      >
        <EyeAnimation/>
      </div>
    </div>
  );
};

export default EyesPage;
