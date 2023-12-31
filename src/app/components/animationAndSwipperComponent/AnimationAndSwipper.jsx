"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Lottie from "react-lottie-player";
import square from "../../../../public/square-neon.png";

const AnimationAndSwipper = ({
  aasH3,
  aasH2,
  aasP,
  aasKnowMore,
  swipperContent,
  animation,
}) => {
  const [active, setActive] = useState(0);

  const handleActive = (swiper) => {
    setActive(swiper.realIndex);
  };

  return (
    <>
      <div className="relative mx-3 md:mx-12 lg:ml-12 lg:mr-[2px] lg:w-[%]">
        <div className=" lg:flex justify-between items-center">
          <div className="lg:w-[62%]">
            <div className="mt-5">
              <div className="border-b border-green-500 pt-6">
                <p className="text-3xl 2xl:text-4xl mb-4 text-black pillat-normal">
                  {aasH3}
                </p>
              </div>
              <div className=" w-full mt-4">
                <span className="rainbow-text text-4xl sm:text-6xl md:text-5xl lg:text-5xl 2xl:text-7xl pillat-normal">
                  <span
                    className=""
                    dangerouslySetInnerHTML={{ __html: aasH2 }}
                  />
                </span>

                {/*********  Laptop  *********/}

                <span className="border-l border-gray-400 text-black text-xs 2xl:text-sm pl-4 ml-3 w-[55%] 2xl:w-[45%] xl:max-w-[600px] 2xl:leading-[15px] mt-3 lg:inline-block hidden pillat-thin">
                  <span className="w-[100%] ">
                    {aasP}
                    <span className="font-bold"> {aasKnowMore}</span>
                  </span>
                </span>

                {/*********  Mobile  *********/}

                <span className="w-[100%] lg:hidden block text-black text-xs sm:text-sm mt-2 pillat-thin">
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
                modules={[Autoplay, Navigation]}
                speed={2000}
                loop={true}
                onSlideChange={handleActive}
                autoplay={{
                  delay: 1000,
                }}
                // navigation={true}
                centeredSlides={true}
                className="mySwiper "
              >
                {swipperContent.map((item, index) => (
                  <>
                    <SwiperSlide key={item.id}>
                      <div
                        className={`rounded-lg swipper-hover-class transition-all ease-in-out duration-300`}
                      >
                        <div
                          className={`border border-gray-400 rounded-lg flex flex-col justify-start items-start py-[35px] px-[20px] h-[300px] ${
                            active == item.id
                              ? "swipper-active-class transition-all duration-500 ease-in-out"
                              : ""
                          } `}
                        >
                          <div className="">
                            <h2 className="text-3xl w-[120px] xl:w-[170px]  flex items-end min-h-[110px] mb-2 leading-[30px] pillat-thin">
                              {item.h2}
                            </h2>
                            <p className=" text-xs leading-[17px] pillat-normal">
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
          <div className="absolute hidden lg:block lg:w-[25vw] 2xl:w-[17vw] top-0 right-0">
            {/* <Image src={square} alt="animation square" className="full" /> */}
            <Lottie
              loop
              animationData={animation}
              play
              // style={{ width: 350, height: 350 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationAndSwipper;
