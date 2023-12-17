"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import square from "../../../../public/square-neon.png";

const AnimationAndSwipper = ({
  aasH3,
  aasH2,
  aasP,
  aasKnowMore,
  swipperContent,
}) => {
  return (
    <>
      <div className="md:mx-12 mx-3 lg:w-[%]">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-[62%]">
            <div className="mt-5">
              <div className="border-b border-green-500 pt-6">
                <p className="text-3xl 2xl:text-4xl mb-4 text-black">{aasH3}</p>
              </div>
              <div className=" w-full mt-4">
                <span className="text-[#13a772] text-4xl sm:text-6xl md:text-5xl lg:text-5xl 2xl:text-7xl ">
                  <span
                    className=""
                    dangerouslySetInnerHTML={{ __html: aasH2 }}
                  />
                </span>

                {/*********  Laptop  *********/}

                <span className="border-l border-gray-400 text-black text-xs 2xl:text-sm pl-4 ml-3 w-[55%] 2xl:w-[45%] xl:max-w-[600px] 2xl:leading-[15px] mt-3 lg:inline-block hidden ">
                  <span className="w-[100%] ">
                    {aasP}
                    <span className="font-bold"> {aasKnowMore}</span>
                  </span>
                </span>

                {/*********  Mobile  *********/}

                <span className="w-[100%] lg:hidden block text-black text-xs sm:text-sm mt-2">
                  {aasP}
                  <span className="font-bold"> {aasKnowMore}</span>
                </span>
              </div>
            </div>

            <div className="mb-10 mt-10 md:mx-auto">
              <Swiper
                spaceBetween={20}
                slidesPerView={1.5}
                breakpoints={{
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  768: {
                    slidesPerView: 2.9,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                speed={2000}
                loop={true}
                navigation={true}
                centeredSlides={true}
                modules={[Navigation]}
                className="mySwiper "
              >
                {swipperContent.map((item, index) => (
                  <>
                    <SwiperSlide>
                      <div className="h-[500px]  ">
                        <div className="border border-gray-400 rounded-lg flex flex-col justify-start items-start py-[35px] px-[20px] h-[300px] hover:bg-green-400">
                          <div className="">
                            <h2 className="text-3xl w-[120px] xl:w-[170px] text-[#13a772] custom-font-family flex items-end min-h-[110px] mb-2 leading-[30px]">
                              {item.h2}
                            </h2>
                            <p className="text-gray-500 text-xs leading-[17px] ">
                              {item.text}
                            </p>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </div>
          </div>
            <div className="tranform rotate-[15deg] lg:block hidden w-60">
              <Image src={square} alt="animation square" className="full" />
            </div>
        </div>
      </div>
    </>
  );
};

export default AnimationAndSwipper;
