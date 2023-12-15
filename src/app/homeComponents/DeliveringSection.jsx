import React from "react";
// import square from "../../public/square-neon.png";
import square from "../../../public/square-neon.png";
import Image from "next/image";


const DeliveringSection = () => {
  return (
    <>
    <div className="bg-black">
      <div className="mx-3 py-14  md:mx-12">
        <div className="relative">
          <div className="md:max-w-[600px] 2xl:max-w-[800px] w-full">
            <span className="text-[#13a772] text-4xl sm:text-6xl md:text-5xl lg:text-7xl 2xl:text-8xl ">
              <span className="">
                delivering digital experiences that make the world <br></br>
                better
              </span>
            </span>
            <span className="border-l border-white text-white text-xs 2xl:text-sm leading-4 inline-block pl-4 ml-3 w-[60%]">
              <span className="w-[100%] lg:inline-block hidden ">
                we are reimagining the way business is done and product is
                consumed. we have committed ourselves to transforming business
                into an experience driven by data, technology, creativity and
                innovation
              </span>
            </span>

            <span className="w-[100%] lg:hidden block text-white text-xs sm:text-sm mt-2 ">
              we are reimagining the way business is done and product is
              consumed. we have committed ourselves to transforming business
              into an experience driven by data, technology, creativity and
              innovation
            </span>
          </div>
          <div className="absolute right-0 md:top-[20%] lg:top-[50%] md:block hidden md:w-[20vw] lg:w-[30vw] tranform rotate-[15deg]">
            <Image src={square} alt="animation square" className="" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default DeliveringSection;
