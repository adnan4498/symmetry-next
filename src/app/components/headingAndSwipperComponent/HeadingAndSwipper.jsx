"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import GsapScrollAnimationComp from "../../components/gsapComp/GsapScrollAnimationComp"

<<<<<<< HEAD
=======
import gsap from "gsap";
import GsapBottomAnimation from "../gsapComponent/GsapBottomAnimation";
>>>>>>> 1c836b79563aa1ef5bd2f03eb34d11d66c34120a
import Lottie from "react-lottie-player";
import bannerAnimation from "../../../../public/symmetryAnimations/homeBannerAnimation.json";
import Rive from "@rive-app/react-canvas";
import startingAnimation from "../../../../public/symmetryAnimations/starting-animation.riv";
import { useRouter } from "next/navigation";
<<<<<<< HEAD
import gsap from "gsap";
=======
import ScrollTrigger from "gsap/ScrollTrigger";
>>>>>>> 1c836b79563aa1ef5bd2f03eb34d11d66c34120a

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
}) => {
  const router = useRouter();

  const [active, setActive] = useState(0);
  const [isAnimating , setIsAnimating] = useState()
  const [arrowPrevActive, setArrowPrevActive] = useState(false);
  const [arrowNextActive, setArrowNextActive] = useState(false);
  const [triggerBottomAnimation, setTriggerBottomAnimation] = useState(false);

  
  // useEffect(() => {
  
  // }, []);

  const triggerBotAnimFunc = () => {
    setTriggerBottomAnimation(true);
  };

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
<<<<<<< HEAD

  const router = useRouter();
  const [linkName, setLinkName] = useState("");
  const blueDiv = useRef(null);

  useEffect(() => {
    if (isAnimating && linkName) {
      const timeoutId = setTimeout(() => {
        router.push(linkName);
      }, 1000); // 2 seconds delay

      return () => clearTimeout(timeoutId); // Clear the timeout if component unmounts
    }
  }, [isAnimating, linkName, router]);

  const lottieAnimationRef = useRef(null);
  const loaderRef = useRef(null);

  const blueAnimationFuncStart = () => {
    const lottieTl = gsap.timeline({
      repeat: 1,
      repeatDelay: 1,
      yoyo: true,
    });

    lottieTl.from(lottieAnimationRef.current, {
      duration: 2,
      opacity: 0,
    });

    lottieTl.to(lottieAnimationRef.current, {
      duration: 1.5,
      opacity: 1,
    });
  };

  const blueAnimationFuncEnd = () => {
    gsap.to(lottieAnimationRef.current, {
      duration: 1,
      opacity: 0,
    });
  };

  const loaderAnimationFunc = () => {
    const container = document.getElementById("page-loader");
    const body = document.body;
    container.style.pointerEvents = "none";

    setIsAnimating(true);

    var tl = gsap.timeline({
      repeat: 1,
      repeatDelay: 1,
      yoyo: true,
      onStart: () => {
        blueAnimationFuncStart();
        body.style.overflow = "hidden";
      },
      onComplete: () => {
        container.style.display = "none";
        blueAnimationFuncEnd();
        body.style.overflow = "visible";
        /* this is overflow visible */
        container.style.pointerEvents = "auto";
        setIsAnimating(false);
      },
    });

    tl.from("#page-loader", {
      y: "1000px",
      backgroundColor: "black",
      color: "black",
      duration: 1,
      ease: "power1",
      zIndex: 50,
      onComplete: () => {
        container.style.display = "flex";
      },
    });

    tl.to(
      "#page-loader",
      {
        y: "-100px",
        backgroundColor: "black",
        color: "black",
        duration: 1,
        ease: "power1",
        zIndex: 50,
      },
      "-=0.0"
    );
  };

  return (
    <>
      <div className="relative">
        <div className="md:mx-12 mx-3 lg:mx-auto lg:w-[55%] ">
          <div
            id="page-loader"
            className="bg-black justify-center items-center h-[110vh] w-[120%] absolute left-[-30px] top-0 hidden"
            style={{ transform: "translateY(700px)" }}
            ref={loaderRef}
          >
            <div ref={lottieAnimationRef} className="opacity-0 w-96 h-96">
              <Lottie
                loop
                animationData={bannerAnimation}
                play
                // style={{ width: 350, height: 350 }}
              />
            </div>
          </div>
          <div className="mt-5">
            <div className=" border-b border-green-500 pt-6">
              <p
                onClick={() => {
                  loaderAnimationFunc();
                  setLinkName("company");
                }}
                className="text-3xl xl:text-4xl mb-4 text-black pillat-normal"
              >
=======
  
  const animationRefs = GsapScrollAnimationComp();
  
  return (
    <>
      <div className="relative">
        {triggerBottomAnimation && <GsapBottomAnimation />}

        <div className="md:mx-12 mx-3 lg:mx-auto lg:w-[58%] ">
          <div className="mt-5">
            <div
              className="border-b border-green-500 pt-6 opacity-0 transform translate-y-[50px]"
              ref={animationRefs.fifthFadeInAnimation}
            >
              <p className="text-3xl xl:text-4xl mb-4 text-black pillat-normal">
>>>>>>> 1c836b79563aa1ef5bd2f03eb34d11d66c34120a
                {transformationTitle || commerceTitle}
              </p>
            </div>
            <div className="w-full mt-4 opacity-0 transform translate-y-[50px]" ref={animationRefs.secondFadeInAnimation}>
              <span
                className="rainbow-text text-4xl sm:text-6xl md:text-5xl lg:text-5xl 2xl:text-7xl pillat-normal"
                // ref={heading3Heading}
              >
                <span
                  ref={animationRefs.thirdFadeInAnimation}
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: transformationHeading || commerceHeading,
                  }}
                />
              </span>

              {/*********  Desktop  *********/}
              <span className="border-l border-gray-400 text-[#181818] text-xs 2xl:text-sm pl-4 ml-3 w-[55%] 2xl:w-[45%] xl:max-w-[600px] 2xl:leading-[15px] mt-3 lg:inline-block hidden pillat-thin">
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

              <span className="w-[100%] lg:hidden block text-[#181818] font-extrabold text-sm sm:text-sm mt-2 pillat-thin">
                {transformationText || commerceText}
                <Link href={`${knowMoreLink}`} class="a-arrow relative">
                  {" "}
                  <span className="text-black font-bold">know more </span>{" "}
                  <span class="arrow"></span>
                </Link>
              </span>
            </div>
          </div>

<<<<<<< HEAD
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
                <>
                  <SwiperSlide key={item.id}>
=======
          {(transformationSwipperShow || commerceSwipperShow) && (
            <div
              className="mb-10 mt-10 md:mx-auto opacity-0 transform translate-y-[50px]"
              ref={animationRefs.fourthFadeInAnimation}
            >
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
                      triggerBotAnimFunc();
                    }}
                  >
>>>>>>> 1c836b79563aa1ef5bd2f03eb34d11d66c34120a
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
                </>
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
        </div>
      </div>
    </>
  );
};

export default HeadingAndSwipper;
