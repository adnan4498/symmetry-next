"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , Navigation } from "swiper/modules";
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
            <p className="text-3xl lg:text-4xl 2xl:text-5xl mb-4 text-black pillat-normal">{hasH3}</p>
          </div>
          <div className=" w-full mt-4">
            <span className="rainbow-text text-4xl sm:text-6xl md:text-5xl lg:text-7xl 2xl:text-8xl pillat-normal">
              <span className="" dangerouslySetInnerHTML={{ __html: hasH2 }} />
            </span>

            {/*********  Laptop  *********/}

            <span className=" text-black text-sm 2xl:leading-[15px] mt-6 lg:block hidden pillat-thin">
              <span className="w-[100%] ">
                {hasP}
                <span className="font-bold"> {hasKnowMore}</span>
              </span>
            </span>

            {/*********  Mobile  *********/}

            <span className="w-[100%] lg:hidden block text-black text-xs sm:text-sm mt-2 pillat-thin">
              {hasP}
              <span className="font-bold"> {hasKnowMore}</span>
            </span>
          </div>
        </div>

        {/* <div className="flex justify-center items-center my-14">
          <h2 className="text-5xl md:text-6xl  text-[#13a772]">Swipper Here</h2>
        </div> */}

        <div className="mb-10 mt-10 md:mx-auto swipper-icons-color-toggle">
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
            // navigation={true}
            centeredSlides={true}
            modules={[Autoplay]}
            autoplay = {{
              delay : 500
            }}
            className="mySwiper "
          >
            {swipperContent.map((item, index) => (
              <>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <div className='flex justify-center items-center border border-gray-400 rounded-md'>
                        <div className=" md:w-10/12 md:h-24 flex justify-center items-center ">
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
