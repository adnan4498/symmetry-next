"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay ,Navigation } from "swiper/modules";

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
    h3: "",
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
      <div className="md:absolute md:z-10 md:right-0 md:left-0  border border-gray-400 rounded-2xl -mt-52 lg:mt-[-300px]  bg-white lg:w-[70%] lg:mx-auto px-5 ">
        <div className=" mx-3 ">
          <div className="border-b border-green-500 pt-6">
            <p className="text-3xl lg:text-4xl mb-2 text-black pillat-normal">
              our heritage
            </p>
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

        <div className="mb-10 mt-5 md:max-w-[800px] md:mx-auto lg:max-w-[97%] cursor-grab ">
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
            modules={[Autoplay ,Navigation]}
            speed={2000}
            loop={true}
            navigation={true}
            autoplay={{
              delay : 500
            }}
            centeredSlides={true}
            className="mySwiper "
          >
            {heritageSwipperContent.map((item, index) => (
              <>
                <SwiperSlide>
                  <div className="h-[350px] relative overflow-hidden">
                    <div
                      onMouseOver={() => hoverFunc()}
                      onMouseLeave={() => hoverFuncOut()}
                      className=" border border-gray-400 rounded-lg pl-4 py-10 min-h-[300px] max-w-[px] bg-[#fafafa]"
                    >
                      {!item.img ? (
                        <>
                          <h6 className="text-[110px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                            {item.h2}{" "}
                            <span className="text-3xl ">{item.h3}</span>
                          </h6>
                          <div
                            className={`absolute top-[-120px] right-[-180px] border border-gray-300 rounded-[50px] w-72 h-72  ${borderHover} `}
                          ></div>
                          <div className={`absolute top-[-70px] right-[-240px] border border-gray-300 rounded-[50px] w-72 h-72 ${borderHover2}`}></div>
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
