import React from "react";

function HeroSection() {
  return (
    <section className="container mx-auto md:my-6 relative flex justify-center items-center h-[80vh] md:h-[82vh]">
      <img
        src="images/header-back1.png"
        alt=""
        className="absolute w-[70%] lg:w-[40%] h-[55%] object-cover right-[0px] md:right-auto top-[-60px] md:top-24 blur-sm md:blur-none"
      />
      <div className="absolute top-0 left-0 h-full z-10 p-16 lg:p-0 lg:mx-48 lg:my-12">
        <h1 className="text-3xl leading-[1.4] md:text-6xl lg:text-5xl xl:text-5xl 2xl:text-[65px] font-bold lg:font-[900] lg:w-[65%] xl:w-[50%] w-full px-2 md:leading-[1.4] xl:leading-[1.4] mt-4">
          Emotion-Driven Design: Building Brand Loyalty
        </h1>
        <div className="md:my-20 w-full py-8 lg:flex justify-between items-center">
          <div className="relative h-[140px] w-[140px] hidden lg:flex justify-center items-center">
            <img
              src="images/header-btn1.png"
              alt=""
              className="w-[140px] animate-spin1 absolute top-0 z-0"
            />
            <img
              src="images/arrow-down1.svg"
              alt=""
              className="scale-125 mt-2"
            />
          </div>
          <div className="w-full lg:w-[50%] 2xl:w-[30%]">
            <p className="w-[100%]">
              Passionate San Francisco Team: Crafting Digital Solutions to Meet
              Your Needs. Empower Your Brand with Innovation.
            </p>
            <div className="py-2"></div>
            <a
              href="https://aliakbarnazemi.ir"
              target="_blank"
              className="text-[16px] font-[400]"
            >
              <button className="text-[16px] font-[400] py-2 px-12 border border-white rounded-full">
                my cv
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-6 absolute md:bottom-[-15px] bottom-0 flex-wrap px-4">
        <img src="images/header-brand1.svg" alt="" />
        <img src="images/header-brand2.svg" alt="" />
        <img src="images/header-brand3.svg" alt="" />
        <img src="images/header-brand4.svg" alt="" />
        <img src="images/header-brand5.svg" alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
