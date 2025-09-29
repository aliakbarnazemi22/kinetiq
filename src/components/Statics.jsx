import React from "react";

function Statics() {
  const items = [
    {
      id: 1,
      title: "Projects completed",
      value: "329",
      math: "+",
    },
    {
      id: 2,
      title: "Satisfied Clients",
      value: "99",
      math: "%",
    },
    {
      id: 3,
      title: "Hours of work",
      value: "6240",
      math: "+",
    },
    {
      id: 4,
      title: "Years Experience",
      value: "05",
      math: "+",
    },
  ];
  return (
    <div className="container mx-auto xl:max-w-[60%] py-12">
      <div className="mt-12 flex flex-col gap-8 xl:gap-0 xl:flex-row items-center justify-between">
        <h2 className="text-2xl md:text-3xl lg:text-6xl w-full xl:w-1/2 font-[800]">
          We make your business stand out
        </h2>
        <p className="w-full xl:w-[35%]">
          At Kinetiq, we are the architects of distinctive and memorable
          creative experiences. That align with but surpass the continually
          evolving standards of the creative landscape.
        </p>
      </div>

      <div className="flex items-center justify-start flex-col md:flex-row xl:gap-6 2xl:gap-32 xl:py-16">
        <img src="images/sec11.png" alt="" className="w-full md:w-1/2 lg:w-1/2" />
        <div className="flex flex-wrap justify-center gap-0 w-full xl:w-1/2">
          {items.map((item) => (
            <div className="card w-full md:w-1/2 my-4 md:my-9 flex flex-col gap-4 items-center justify-center" key={item.id}>
              <p className="text-3xl md:text-5xl font-[900] text-left flex gap-0 md:gap-1 items-center font2">
                {item.value}
                <p className="text-2xl md:text-4xl">{item.math}</p>
              </p>
              <p className="text-left text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statics;
