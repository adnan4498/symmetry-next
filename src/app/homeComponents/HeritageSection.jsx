"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../homeComponents/HeritageSection.css";
import infinity from "../../../public/infinity-sign.webp";

const heritageSwipperContent = [
  {
    id: 0,
    h2: "100",
    h3: "s",
    text: "of brands transformed",
  },
  {
    id: 1,
    h2: "1000",
    h3: "s",
    text: "of experiences delivered",
  },
  {
    id: 2,
    h2: "100",
    h3: "s",
    text: "of posibillities transformed",
    img: infinity,
  },
  {
    id: 3,
    h2: "20",
    h3: "s",
    text: "years in business",
  },
  {
    id: 4,
    h2: "2023",
    // h3: "s",
    text: "listed on the pakistan stock exchange",
  },
];

const HeritageSection = () => {
  return (
    <>
      <div className="border border-gray-400 rounded-2xl -mt-52 lg:mt-[-300px]  bg-white lg:w-[70%] lg:mx-auto px-5 ">
        <div className=" mx-3 ">
          <div className="border-b border-green-500 pt-6">
            <p className="text-3xl mb-2 text-black">our heriage</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl mt-2 text-[#13a772]">
              legacy of unlocking possibilities
            </p>
            <p className="text-[13px] mt-5 text-black">
              limitless passion, ground-breaking innovation and boundless
              creativity allow us to create market-leading digital opportunities
              that continue to power our partners’ success.
            </p>
          </div>
        </div>

        <div className="mb-10 mt-5 md:max-w-[800px] md:mx-auto lg:max-w-[97%]">
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
            {heritageSwipperContent.map((item, index) => (
              <>
                <SwiperSlide>
                  <div className="h-[350px] ">
                    <div className="border border-gray-400 rounded-md pl-4 py-10 min-h-[300px] max-w-[px] ">
                      {!item.img ? (
                        <>
                          <h6 className="text-[110px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                            {item.h2}{" "}
                            <span className="text-3xl">{item.h3}</span>
                          </h6>
                          <p className="text- text-gray-700">{item.text}</p>
                        </>
                      ) : (
                        ""
                      )}

                      {item.img ? (
                        <>
                          <Image src={item.img} width={130} />
                          <p className="text-base  text-gray-700 -mt-[7px]">
                            {item.text}
                          </p>
                        </>
                      ) : (
                        ""
                      )}
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

export default HeritageSection;
