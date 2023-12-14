"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../homeComponents/HeritageSection.css";

const HeritageSection = () => {
  return (
    <>
      <div className="bg-white h-[150vh]">
        <div className=" mx-3 ">
          <div className="border-b border-green-500 pt-6">
            <p className="text-3xl mb-2">our heriage</p>
          </div>
          <div>
            <p className="text-4xl mt-2 text-[#13a772]">
              legacy of unlocking possibilities
            </p>
            <p className="text-[13px] mt-5">
              limitless passion, ground-breaking innovation and boundless
              creativity allow us to create market-leading digital opportunities
              that continue to power our partners’ success.
            </p>
          </div>
        </div>

        {/* <Swiper
          spaceBetween={50}
          slidesPerView={1}
          speed={2200}
          navigation={true}
          modules={Navigation}
          className="mySwiper"
        >
          <SwiperSlide>
            <p className="bg-red-500">asd</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="bg-blue-500">asd</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="bg-pink-500">asd</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="bg-orange-500">asd</p>
          </SwiperSlide>
        </Swiper> */}

        <div className="mt-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.5}
            // speed={500}
            loop={true}
            navigation={true}
            centeredSlides={true}
            modules={[Navigation]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="border border-gray-400 rounded-md pl-4 flex items-center py-14  ">
                <div>
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    100 <span className="text-3xl">s</span>
                  </h6>
                  <p className="text-xl  text-gray-700">
                    of brands transformed
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-gray-400 rounded-md pl-4 flex items-center py-14  ">
                <div>
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    1000 <span className="text-3xl">s</span>
                  </h6>
                  <p className="text-xl  text-gray-700">
                    of experiences delivered
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-gray-400 rounded-md pl-4 flex items-center py-14  ">
                <div>
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    00 <span className="text-3xl">s</span>
                  </h6>
                  <p className="text-xl  text-gray-700">
                    possibilities transformed
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-gray-400 rounded-md pl-4 flex items-center py-14  ">
                <div>
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    20 <span className="text-3xl">+</span>
                  </h6>
                  <p className="text-xl  text-gray-700">
                    years in business
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-gray-400 rounded-md pl-4 flex items-center py-14  ">
                <div>
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    2023 <span className="text-3xl"></span>
                  </h6>
                  <p className="text-xl  text-gray-700">
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
