import React, { useState } from "react";

function Header() {
  // Menu usestate for open and close menu
  const [menu, setMenu] = useState(false);
  return (
    <header>
      {/* Header Desktop */}
      <nav className="container mx-auto py-8 hidden lg:flex items-center justify-between">
        <a href="">
          <img src="images/logo1.svg" alt="" />
        </a>
        <div className="flex items-center gap-8">
          <a href="" className="text-[16px] font-[400]">
            Home
          </a>
          <a href="" className="text-[16px] font-[400]">
            AboutUs
          </a>
          <a href="" className="text-[16px] font-[400]">
            Projects
          </a>
          <a href="" className="text-[16px] font-[400]">
            Services
          </a>
          <a href="" className="text-[16px] font-[400]">
            Testimonial
          </a>
        </div>
        <a
          href="https://aliakbarnazemi.ir"
          target="_blank"
          className="text-[16px] font-[400]"
        >
          <button className="text-[16px] font-[400] py-2 px-12 border border-white rounded-full">
            my cv
          </button>
        </a>
      </nav>
      {/* Header Desktop */}

      {/* Header Mobile */}
      <nav className="flex lg:hidden p-8 justify-between items-center">
        <a href="">
          <img src="images/logo1.svg" alt="" />
        </a>
        <button
          className="cursor-pointer"
          onClick={() => setMenu((prev) => !prev)}
        >
          {menu === false ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
              strokeWidth={10}
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
              strokeWidth={10}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          )}
        </button>
      </nav>
      {/* Header Mobile */}

      {/* Mobile Menu */}
      {menu === false ? (
        <div></div>
      ) : (
        <div className="absolute w-full h-full left-0 top-[95px] bg-black p-8 flex flex-col gap-5">
          <a href="" className="text-[20px] font-[400]">
            Home
          </a>
          <a href="" className="text-[20px] font-[400]">
            AboutUs
          </a>
          <a href="" className="text-[20px] font-[400]">
            Projects
          </a>
          <a href="" className="text-[20px] font-[400]">
            Services
          </a>
          <a href="" className="text-[20px] font-[400]">
            Testimonial
          </a>
        </div>
      )}
      {/* Mobile Menu */}
    </header>
  );
}

export default Header;
