"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ImageSwipper = ({
  hasH3,
  hasH2,
  hasP,
  hasKnowMore,
  swipperContent,
  slidesPerView,
  irisLogo,
  swipperGap
}) => {
  return (
    <>
      <div className="md:mx-12 mx-3 lg:mx-auto lg:w-[55%]">
        <div className="mt-5">
          <div className="border-b border-green-500 pt-6">
            <p className="text-3xl 2xl:text-4xl mb-4 text-black">{hasH3}</p>
          </div>
          <div className=" w-full mt-4">
            <span className="text-[#13a772] text-4xl sm:text-6xl md:text-5xl lg:text-5xl 2xl:text-7xl ">
              <span className="" dangerouslySetInnerHTML={{ __html: hasH2 }} />
            </span>

            {/*********  Laptop  *********/}

            <span className=" text-black text-xs 2xl:text-sm 2xl:leading-[15px] mt-6 lg:block hidden ">
              <span className="w-[100%] ">
                {hasP}
                <span className="font-bold"> {hasKnowMore}</span>
              </span>
            </span>

            {/*********  Mobile  *********/}

            <span className="w-[100%] lg:hidden block text-black text-xs sm:text-sm mt-2">
              {hasP}
              <span className="font-bold"> {hasKnowMore}</span>
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
                    <div className='border border-gray-400 rounded-md'>
                        <div>
                            <Image src={item.img} />
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ImageSwipper;
