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
  const [active, setActive] = useState(0);
  const [arrowPrevActive, setArrowPrevActive] = useState(false);
  const [arrowNextActive, setArrowNextActive] = useState(false);

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

  const router = useRouter();
  const lottieAnimationCompanyRef = useRef(null);
  const loaderRefCompany = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [linkName, setLinkName] = useState("");
  const blueDiv = useRef(null);


  useEffect(() => {
    if (isAnimating) {
      const timeoutId = setTimeout(() => {
        router.push("transformation");
      }, 1500); // 2 seconds delay

      return () => clearTimeout(timeoutId); // Clear the timeout if component unmounts
    }
  }, [isAnimating, linkName, router]);


  const blueAnimationFuncStart = () => {
    console.log("hello");

    const lottieTl = gsap.timeline({
      repeat: 1,
      repeatDelay: 1,
      yoyo: true,
    });

    lottieTl.from(lottieAnimationCompanyRef.current, {
      duration: 2,
      opacity: 0, // Check this value
    });

    lottieTl.to(lottieAnimationCompanyRef.current, {
      duration: 2.5,
      opacity: 1, // Check this value
    });
  };

  const blueAnimationFuncEnd = () => {
    gsap.to(lottieAnimationCompanyRef.current, {
      duration: 1,
      opacity: 0,
    });
  };

  const loaderAnimationFunc = () => {
    console.log("hello");
    // const container = document.getElementById("page-loader");
    const container = loaderRefCompany.current;
    const body = document.body;
    container.style.pointerEvents = "none";

    setIsAnimating(true);

    var tl = gsap.timeline({
      repeat: 1,
      repeatDelay: 3,
      yoyo: true,
      onStart: () => {
        blueAnimationFuncStart();
        body.style.overflow = "hidden";
      },
      onComplete: () => {
        container.style.display = "none";
        blueAnimationFuncEnd();
        body.style.overflow = "visible";
        container.style.pointerEvents = "auto";
        setIsAnimating(false);
      },
    });

    tl.from(loaderRefCompany.current, {
      y: "800px",
      backgroundColor: "black",
      color: "black",
      duration: 1,
      ease: "power1.inOut",
      zIndex: 50,
      onComplete: () => {
        container.style.display = "flex";
      },
    });

    tl.to(
      loaderRefCompany.current,
      {
        y: "-180px",
        backgroundColor: "black",
        color: "black",
        duration: 1,
        ease: "power1.inOut",
        zIndex: 50,
      },
      "-=0.0"
    );
  };

  return (
    <>
      <div className="relative">
        <div
          // id="page-loader"
          className="bg-black justify-center items-center h-[200vh] w-[100%] absolute hidden top-0  z-50"
          style={{ transform: "translateY(800px)" }}
          ref={loaderRefCompany}
        >
          <div
            ref={lottieAnimationCompanyRef}
            className="opacity-0 w-96 h-96 flex justify-center items-center"
          >
            <Lottie
              loop
              // animationData={bannerAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />
          </div>
        </div>
        <div className="md:mx-12 mx-3 lg:mx-auto lg:w-[55%] ">
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
                          <h2 className="text-3xl w-[120px] xl:w-[170px]  flex items-end min-h-[110px] mb-2 leading-[30px] pillat-thin">
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
