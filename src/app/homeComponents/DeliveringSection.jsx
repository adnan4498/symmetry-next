"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 
import Lottie from "react-lottie-player";
import HomeBannerAnimation from "../../../public/symmetryAnimations/homeBannerAnimation.json"
import square from "../../../public/square-neon.png";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger); 

const DeliveringSection = () => {
  const heading = useRef();

  useEffect(() => {
    gsap.to(heading.current, {
      scrollTrigger: {
        trigger: heading.current,
        toggleActions: "restart restart none none",
        // start : ,
        // end : 400,
        // markers : true
      },
      duration: 4,
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <>
    <div className="bg-black overflow-hidden">
      <div className="h-[570px] sm:h-[650px] lg:h-[850px] 2xl:h-[950px] pt-16 lg:pt-28 ">
        <div className="mx-3 sm:py-12 py-8 md:mx-12">
          <div className="relative">
            <div className="md:max-w-[600px] 2xl:max-w-[800px] w-full opacity-0 rainbow-text"  ref={heading}>
              <span className="text-4xl sm:text-6xl md:text-5xl lg:text-7xl 2xl:text-8xl ">
                <span className=" heading pillat-normal">
                  delivering digital experiences that make the world <br></br>
                  better
                </span>
              </span>
              <span className="border-l border-white text-white text-xs 2xl:text-sm leading-4 inline-block pl-4 ml-3 w-[60%]">
                <span className="w-[100%] lg:inline-block hidden">
                  we are reimagining the way business is done and product is
                  consumed. we have committed ourselves to transforming business
                  into an experience driven by data, technology, creativity and
                  innovation
                </span>
              </span>

              <span className="w-[100%] lg:hidden block text-white text-xs sm:text-sm mt-2 ">
                we are reimagining the way business is done and product is
                consumed. we have committed ourselves to transforming business
                into an experience driven by data, technology, creativity and
                innovation
              </span>
            </div>
            <div className="hidden md:block absolute md:w-[30vw] lg:w-[40vw] top-0 md:right-[-50px] lg:right-[-100px]">
              {/* <Image src={square} alt="animation square" className="" /> */}
              <Lottie 
                animationData={HomeBannerAnimation}
                loop
                play
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default DeliveringSection;
