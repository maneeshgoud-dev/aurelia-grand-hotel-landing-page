import "../App.css";

export const Hero = () => {
  return (
    <div id="hero-bg">
      <div className="h-full relative">
        <div className="flex items-center justify-center flex-col h-screen gap-3 text-center font-text">
          <p className="text-8xl font-heading">The Aurelia Grand</p>
        </div>
        <div className="w-full absolute bottom-5 left-1/2">
          <div className="w-[40px] h-[40px] glass-bg rounded-[50%] flex justify-center items-center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-sharp/24/FFFFFF/long-arrow-down.png"
              alt="long-arrow-down"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
