"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

import { gsap } from "gsap";
import Lottie from "react-lottie-player";
import bannerAnimation from "../../../../public/symmetryAnimations/homeBannerAnimation.json";
import Rive from "@rive-app/react-canvas";
import startingAnimation from "../../../../public/symmetryAnimations/starting-animation.riv";
import { useRouter } from "next/navigation";

const HeadingAndSwipper = ({
  transformationTitle,
  transformationHeading,
  transformationText,
  commerceTitle,
  commerceHeading,
  commerceText,
  hasKnowMore,
  swipperContent,
  slidesPerView,
  knowMoreLink,
  transformationSwipperShow,
  commerceSwipperShow,
}) => {
  const router = useRouter();

  /****  Use States ****/

  const [active, setActive] = useState(0);
  const [arrowPrevActive, setArrowPrevActive] = useState(false);
  const [arrowNextActive, setArrowNextActive] = useState(false);

  /****  Use Refs ****/

  const toTransformationBlackRef = useRef(null);
  const toTransformationRiveAnimRef = useRef(null);


  /****  Use Effect ****/

  /**** Gsap Funcions ****/

  const loaderAnimationFunc = () => {
    // Scroll to the top of the page when unmount / refresh
    // window.scrollTo(0, 1610);

    const theToTransformationBlack = toTransformationBlackRef.current;
    const body = document.body;

    gsap.from(toTransformationBlackRef.current, {
      y: "800px",
      duration: 0.7,
      onStart: () => {
        theToTransformationBlack.style.display = "block";
        body.style.overflow = "hidden";
      },
    });

    gsap.to(toTransformationBlackRef.current, {
      y: "-50px",
      duration: 0.7,
      onStart: () => {
        theToTransformationBlack.style.display = "block";
        body.style.overflow = "hidden";
      },
      onComplete: () => {
        router.push("transformation")
      },
    });
  };

  /**** Other Funcions ****/

  const handleActive = (swiper) => {
    setActive(swiper.realIndex);
  };

  const handleArrowPrevActive = () => {
    setArrowNextActive(false);
    setArrowPrevActive(true);
  };

  const handleArrowNextActive = () => {
    setArrowPrevActive(false);
    setArrowNextActive(true);
  };

  return (
    <>
      <div className="relative">
        <div
          ref={toTransformationBlackRef}
          className="bg-black w-full h-[200vh] absolute z-50 top-0 hidden"
          style={{ transform: "translateY(800px)" }}
        >
        </div>

        <div className="md:mx-12 mx-3 lg:mx-auto lg:w-[58%] ">
          <div className="mt-5">
            <div className=" border-b border-green-500 pt-6">
              <p className="text-3xl xl:text-4xl mb-4 text-black pillat-normal">
                {transformationTitle || commerceTitle}
              </p>
            </div>
            <div className=" w-full mt-4">
              <span className="rainbow-text text-4xl sm:text-6xl md:text-5xl lg:text-5xl 2xl:text-7xl pillat-normal">
                <span
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: transformationHeading || commerceHeading,
                  }}
                />
              </span>

              {/*********  Laptop  *********/}
              <span className="border-l border-gray-400 text-black text-xs 2xl:text-sm pl-4 ml-3 w-[55%] 2xl:w-[45%] xl:max-w-[600px] 2xl:leading-[15px] mt-3 lg:inline-block hidden pillat-thin">
                <span className="w-[100%] relative ">
                  {transformationText || commerceText}
                  <Link href={`${knowMoreLink}`} class="a-arrow">
                    {" "}
                    <span className="text-black font-bold">
                      know more{" "}
                    </span>{" "}
                    <span class="arrow"></span>
                  </Link>{" "}
                </span>
              </span>

              {/*********  Mobile  *********/}

              <span className="w-[100%] lg:hidden block text-black text-xs sm:text-sm mt-2 pillat-thin">
                {transformationText || commerceText}
                <Link href={`${knowMoreLink}`} class="a-arrow relative">
                  {" "}
                  <span className="text-black font-bold">know more </span>{" "}
                  <span class="arrow"></span>
                </Link>
              </span>
            </div>
          </div>

          {(transformationSwipperShow || commerceSwipperShow) && (
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
                    spaceBetween: 20,
                  },
                }}
                modules={[Autoplay, Navigation]}
                speed={700}
                loop={true}
                onSlideChange={handleActive}
                autoplay={{
                  delay: 1000,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                centeredSlides={true}
                className="mySwiper "
              >
                {swipperContent.map((item, index) => (
                  <SwiperSlide
                    key={item.id}
                    onClick={() => {
                      loaderAnimationFunc();
                    }}
                  >
                    <div
                      className={` rounded-lg swipper-hover-class transition-all ease-in-out duration-300 `}
                    >
                      <div
                        className={`border border-gray-400 rounded-lg flex flex-col justify-start items-start py-[35px] px-[20px] h-[300px]   ${
                          active == item.id
                            ? "swipper-active-class transition-all duration-500 ease-in-out"
                            : ""
                        } `}
                      >
                        <div className="">
                          <h2 className="text-3xl w-[120px] xl:w-[170px] flex items-end min-h-[110px] mb-2 leading-[30px] pillat-thin">
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
                ))}
              </Swiper>

              <div className="swiper-navigation-buttons flex justify-center gap-2 lg:gap-[10px] 2xl:gap-3 w-full mt-10">
                <button
                  onClick={() => handleArrowPrevActive()}
                  className={`swiper-button-prev ${
                    arrowPrevActive ? "arrows-bg after:!text-white " : ""
                  } !static custom-arrow-border rounded-md rotate-[45deg] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8 `}
                ></button>
                <button
                  onClick={() => handleArrowNextActive()}
                  className={`swiper-button-next ${
                    arrowNextActive ? "arrows-bg  after:!text-white " : ""
                  } !static custom-arrow-border  rounded-md rotate-[45deg] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8`}
                ></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeadingAndSwipper;
