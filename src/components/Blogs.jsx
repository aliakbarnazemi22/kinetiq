import React from "react";

function Blogs() {
  const items = [
    {
      id: 1,
      title: "Wayflyer Dashboard",
      category: "UI/UX Design",
      imgUrl: "images/sec21.avif",
    },
    {
      id: 2,
      title: "Dynamotion",
      category: "Branding & Logo",
      imgUrl: "images/sec22.avif",
    },
    {
      id: 3,
      title: "Solaria Marketing",
      category: "Digital Branding",
      imgUrl: "images/sec23.avif",
    },
    {
      id: 4,
      title: "Elevate Fitness App",
      category: "Mobile App Design",
      imgUrl: "images/sec24.avif",
    },
  ];
  return (
    <section className="container mx-auto xl:max-w-[60%] py-12">
      <div className="mt-12 flex flex-col gap-8 xl:gap-0 xl:flex-row items-center justify-between">
        <h2 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl w-full xl:w-[35%] font-[800]">
          Impact We Created
        </h2>
        <div className="w-full xl:w-1/2 2xl:w-[35%]">
          <p>
            At Kinetiq, we specialize in offering a full range of creative
            branding, strategy, design and development services tailored to
            bring your ideas to life.
          </p>
          <a
            href="https://aliakbarnazemi.ir"
            target="_blank"
            className="text-[16px] font-[400] mt-4"
          >
            <button className="mt-8 text-[16px] font-[400] py-2 px-12 border border-white rounded-full bg-transparent transition hover:bg-white hover:text-black">
              <p className="mt-[-2px]">my cv</p>
            </button>
          </a>
        </div>
      </div>

      <div className="flex w-full py-6 flex-wrap justify-center">
        {items.map((item) => (
          <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/2 p-3" key={item.id}>
            <div className="w-full h-[300px] md:h-[480px] img-hover-zoom rounded-xl">
              <img
                src={item.imgUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 mt-4 text-white hover:text-[#2d29ec] transition-2">
                <p>
                    {item.category}
                </p>
                <h2 className="cursor-pointer font-[800] text-3xl">
                    {item.title}
                </h2>
                <br />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
