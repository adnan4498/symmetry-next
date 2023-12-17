"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import square from "../../../../public/square-neon.png";

const AnimationAndImages = ({
  aasH3,
  aasH2,
  aasP,
  aasKnowMore,
  swipperContent,
  slidesPerView,
  swipperGap,
  navigation,
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
                slidesPerView={slidesPerView}
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
                    slidesPerView: slidesPerView,
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
                          slidesPerView: slidesPerView,
                          spaceBetween: swipperGap,
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
                            <div className="h-[300px] ">
                              <div className="border border-gray-400 rounded-md">
                                <div>
                                  <Image src={item.img} />
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </>
                      ))}
                    </Swiper>
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

export default AnimationAndImages;
