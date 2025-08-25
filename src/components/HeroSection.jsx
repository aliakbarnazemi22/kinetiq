import React from "react";

function HeroSection() {
  return (
    <section className="container mx-auto my-6 relative flex justify-center items-center h-[82vh]">
      <img
        src="images/header-back1.png"
        alt=""
        className="absolute w-[40%] h-[55%] object-cover top-24"
      />
      <div className="absolute top-0 left-0 h-full z-10 mx-48 my-12">
        <h1 className="text-[65px] font-[900] w-[50%] leading-[1.4] mt-4">
          Emotion-Driven Design: Building Brand Loyalty
        </h1>
        <div className="my-20 w-full py-8 flex justify-between items-center">
          <div className="relative h-[140px] w-[140px] flex justify-center items-center">
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
          <div className="w-[30%]">
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
      <div className="w-full flex items-center justify-center gap-6 absolute bottom-[-15px]">
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
