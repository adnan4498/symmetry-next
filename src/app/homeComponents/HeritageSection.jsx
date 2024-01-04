"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay ,Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../homeComponents/HeritageSection.css";
import infinity from "../../../public/infinity-sign.webp";

const HeritageSection = () => {
  const [borderHover, setBorderHover] = useState();
  const [borderHover2, setBorderHover2] = useState();
  const [borderHoverOut, setBorderHoverOut] = useState();

  const hoverFunc = () => {
    setBorderHoverOut("");
    setBorderHover("right-[-200px] transition-all ease-in-out duration-500");
    setBorderHover2("right-[-230px] transition-all ease-in-out duration-500");
  };

  const hoverFuncOut = () => {
    setBorderHoverOut("")
    setBorderHover("right-[-180px] transition-all ease-in-out duration-500")
    setBorderHover2("right-[-240px] transition-all ease-in-out duration-500")
  };

  return (
    <>
      <div className="bg-white h-[450vh] mt-24">
        <div className=" mx-3 ">
          <div className="border-b border-green-500 pt-6">
            <p className="text-3xl mb-2 text-black">our heriage</p>
          </div>
          <div className="">
            <p className="text-3xl md:text-4xl lg:text-7xl mt-2 rainbow-text pillat-normal">
              legacy of unlocking possibilities
            </p>
            <p className="text-[13px] mt-5 text-black">
              limitless passion, ground-breaking innovation and boundless
              creativity allow us to create market-leading digital opportunities
              that continue to power our partners’ success.
            </p>
          </div>
        </div>

        <div className="mb-10 mt-5 md:max-w-[800px] md:mx-auto">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.5}
            breakpoints = {{
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
                spaceBetween: 35,
              },
            }}
            speed={2000}
            loop={true}
            // navigation={true}
            autoplay={{
              delay : 500
            }}
            centeredSlides={true}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="h-[500px] ">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[340px] ">
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    100 <span className="text-3xl">s</span>
                  </h6>
                  <p className="text-  text-gray-700">
                    of brands transformed
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-[500px] ">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[340px]">
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    1000 <span className="text-3xl">s</span>
                  </h6>
                  <p className="text-base  text-gray-700">
                    of experiences delivered
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px] ">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[340px]">
                  <Image src={infinity} width={130}/>
                  <p className="text-base  text-gray-700 -mt-[7px]">
                    possibilities transformed
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px]">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[340px]">
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    20 <span className="text-3xl">+</span>
                  </h6>
                  <p className="text-base  text-gray-700">years in business</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px]">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[340px] ">
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    2023 <span className="text-3xl"></span>
                  </h6>
                  <p className="text-base  text-gray-700">
                    listed on the pakistan stock exchange
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeritageSection;
