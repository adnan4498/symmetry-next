"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../homeComponents/HeritageSection.css";
import infinity from "../../../public/infinity-sign.webp";

const HeritageSection = () => {
  const [activeAni, setActiveAni] = useState();
  const [arrowPrevActive, setArrowPrevActive] = useState(false);
  const [arrowNextActive, setArrowNextActive] = useState(false);

  const [borderHover, setBorderHover] = useState();
  const [borderHover2, setBorderHover2] = useState();

  const handleArrowPrevActive = () => {
    setArrowNextActive(false);
    setArrowPrevActive(true);
  };

  const handleArrowNextActive = () => {
    setArrowPrevActive(false);
    setArrowNextActive(true);
  };

  const hoverFunc = (id) => {
    setBorderHover("right-[-200px] transition-all ease-in-out duration-500");
    setBorderHover2("right-[-229px] transition-all ease-in-out duration-500");
    setActiveAni(id);
  };

  const hoverFuncOut = () => {
    setBorderHover("right-[-180px] transition-all ease-in-out duration-500");
    setBorderHover2("right-[-240px] transition-all ease-in-out duration-500");
  };

  console.log(borderHover, "b1");
  console.log(borderHover2, "b2");

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
      h3: "+",
      text: "years in business",
    },
    {
      id: 4,
      h2: "2023",
      h3: "",
      text: "listed on the pakistan stock exchange",
    },
  ];

  return (
    <>
      <div className="md:absolute md:z-10 md:right-0 md:left-0  border border-gray-400 rounded-2xl -mt-52 lg:mt-[-300px]  bg-white lg:w-[70%] lg:mx-auto px-5 lg:px-8 ">
        <div className="mt-5">
          <div className="border-b border-green-500 pt-6">
            <p className="text-3xl xl:text-4xl mb-4 text-black pillat-normal">
              our heritage
            </p>
          </div>
          <div className=" w-[90%] mt-4">
            <span className="rainbow-text text-4xl sm:text-6xl md:text-5xl lg:text-7xl 2xl:text-7xl pillat-normal">
              legacy of unlocking possibilities
            </span>

            {/*********  Laptop  *********/}

            <span className="border-l border-gray-400 text-black text-xs 2xl:text-sm pl-4 ml-3 w-[55%] 2xl:w-[45%] xl:max-w-[600px] 2xl:leading-[15px] mt-3 lg:inline-block hidden pillat-thin">
              <span className="w-[100%] ">
                limitless passion, ground-breaking innovation and boundless
                creativity allow us to create market-leading digital
                opportunities that continue to power our partners’ success.{" "}
                <span className="font-bold text-black"> know more</span>
              </span>
            </span>

            {/*********  Mobile  *********/}

            <span className="w-[100%] lg:hidden block text-black text-xs sm:text-sm mt-2 pillat-thin">
              limitless passion, ground-breaking innovation and boundless
              creativity allow us to create market-leading digital opportunities
              that continue to power our partners’ success.{" "}
              <span className="font-bold"> know more</span>
            </span>
          </div>
        </div>

        <div className="mb-10 mt-5 md:max-w-[800px] md:mx-auto lg:max-w-[97%] ">
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
            modules={[Autoplay, Navigation]}
            speed={700}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 1000,
              pauseOnMouseEnter: true,
            }}
            centeredSlides={true}
            className="mySwiper "
          >
            {heritageSwipperContent.map((item, index) => (
              <>
                <SwiperSlide>
                  <div className="h-[px] relative overflow-hidden">
                    <div
                      onMouseOver={() => hoverFunc(item.id)}
                      onMouseLeave={() => hoverFuncOut()}
                      className=" border border-gray-400 rounded-lg pl-4 py-10 min-h-[300px] max-w-[px] bg-[#fafafa]"
                    >
                      {!item.img ? (
                        <>
                          <div className="flex items-baseline absolute z-50">
                            <div className="text-[140px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family NeumaticFont -tracking-[8px] ">
                              {" "}
                              {item.h2}{" "}
                            </div>
                            <div className="text-3xl text-[#666666] NeumaticFont font-bold">
                              {item.h3}
                            </div>
                          </div>
                          {/* <h6 className="text-[140px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family NeumaticFont -tracking-[8px] ">
                            {item.h2}{" "}
                            <span className="text-3xl ">{item.h3}</span>
                          </h6> */}
                          <div
                            className={`absolute top-[-120px] right-[-180px] border border-gray-300 rounded-[50px] w-72 h-72  ${
                              activeAni == index ? borderHover : ""
                            } `}
                          ></div>
                          <div
                            className={`absolute top-[-70px] right-[-240px] border border-gray-300 rounded-[50px] w-72 h-72 ${
                              activeAni == index ? borderHover2 : ""
                            }`}
                          ></div>
                          <p className="text-gray-700 pillat-normal absolute top-[170px]">
                            {item.text}
                          </p>
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

          <div className="swiper-navigation-buttons flex justify-center gap-2 lg:gap-[10px] 2xl:gap-3 w-full mt-10">
            <button
              onClick={() => handleArrowPrevActive()}
              className={`swiper-button-prev hover:custom-arrow-border ${
                arrowPrevActive ? "arrows-bg after:!text-white " : ""
              } !static custom-arrow-border rounded-md rotate-[45deg] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8 2xl:!w-9 2xl:!h-9 `}
            ></button>
            <button
              onClick={() => handleArrowNextActive()}
              className={`swiper-button-next ${
                arrowNextActive ? "arrows-bg  after:!text-white " : ""
              } !static custom-arrow-border  rounded-md rotate-[45deg] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8 2xl:!w-9 2xl:!h-9`}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeritageSection;