"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import infinity from "../../../../public/infinity-sign.webp";

const HeadingAndSwipper = () => {
  return (
    <>
      <div className="md:mx-12 mx-3 lg:mx-auto lg:w-[55%]">
        <div className="mt-5">
          <div className="border-b border-green-500 pt-6">
            <p className="text-3xl 2xl:text-4xl mb-4">transformation</p>
          </div>
          <div className=" w-full mt-4">
            <span className="text-[#13a772] text-4xl sm:text-6xl md:text-5xl lg:text-5xl 2xl:text-7xl ">
              <span className="">
                reinventing digital <br></br>
                experiences
              </span>
            </span>
            <span className="border-l border-gray-400 text-black text-xs 2xl:text-sm pl-4 ml-3 w-[60%] 2xl:w-[50%] xl:max-w-[600px] 2xl:leading-[15px] mt-3 lg:inline-block hidden ">
              <span className="w-[100%] ">
                digital Technology can move mountains, shape cultures and change
                people’s perceptions. We envision a future that leverages the
                best of technology to create transformative experiences that
                aren't possible without it.
                <span className="font-bold"> know more --</span>
              </span>
            </span>

            <span className="w-[100%] lg:hidden block text-black text-xs sm:text-sm mt-2">
              we are reimagining the way business is done and product is
              consumed. we have committed ourselves to transforming business
              into an experience driven by data, technology, creativity and
              innovation
            </span>
          </div>
        </div>

        {/* <div className="flex justify-center items-center my-14">
          <h2 className="text-5xl md:text-6xl  text-[#13a772]">Swipper Here</h2>
        </div> */}

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
                spaceBetween: 35,
              },
            }}
            speed={2000}
            loop={true}
            navigation={true}
            centeredSlides={true}
            modules={[Navigation]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="h-[500px] ">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[440px] ">
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    100 <span className="text-3xl">s</span>
                  </h6>
                  <p className="text-  text-gray-700">of brands transformed</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-[500px] ">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[440px]">
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
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[440px]">
                  <Image src={infinity} width={130} />
                  <p className="text-base  text-gray-700 -mt-[7px]">
                    possibilities transformed
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px]">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[440px]">
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    20 <span className="text-3xl">+</span>
                  </h6>
                  <p className="text-base  text-gray-700">years in business</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px]">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[440px] ">
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

export default HeadingAndSwipper;
