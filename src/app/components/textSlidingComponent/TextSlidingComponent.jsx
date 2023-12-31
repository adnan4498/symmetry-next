"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
gsap.registerPlugin(ScrollTrigger); 

const TextSlidingComponent = ({
  sliderheading,
  sliderText,
  sliderP,
  knowMore,
  isBorder,
  isImageSwipper,
  slidesPerView,
  swipperGap,
  swipperContent,
}) => {
  const heading2 = useRef();
  const heading3 = useRef();

  useEffect(() => {
    gsap.to(heading2.current, {
      scrollTrigger: {
        trigger: heading2.current,
        toggleActions: "restart restart none none",
      },
      duration: 4,
      opacity: 1,
      y: -20,
    });

    gsap.to(heading3.current, {
      scrollTrigger: {
        trigger: heading3.current,
        toggleActions: "restart restart none none", 
      },
      duration: 4,
      opacity: 1,
      y: -20,
    });
  }, []);

  return (
    <div>
      <div className="mx-3 mb-10 mt-36 md:mx-12">
        <div
          className={`w-full ${
            isBorder ? "border-b border-green-500 pb-1" : ""
          }  w-[40%]` }
        >
          <h2 className="text-gray-600 text-2xl lg:text-3xl opacity-0 pillat-normal" ref={heading3}>
            {sliderheading}
          </h2>
        </div>

        <div className="mt-2">
          <h2
            className="sm:text-[10vw] text-5xl my-0 rainbow-text leading-[10vw] opacity-0 pillat-normal"
            ref={heading2}
          >
            {sliderText}
          </h2>
        </div>

        <div className="sm:w-[80%] lg:max-w-[600px]">
          <p className="text-xs lg:text-sm text-gray-600 font-[300] mt-3 leading-[16px] pillat-normal">
            {sliderP}
            <span className="text-xs lg:text-sm font-bold text-black">
              {" "}
              {knowMore}{" "}
            </span>
          </p>
        </div>

        {isImageSwipper && (
          <div className="mt-9">
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
                      <div className="border border-gray-400 rounded-md">
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
        )}

        {/* <div className="flex justify-center items-center my-20">
        <h2 className="text-5xl md:text-6xl  text-[#13a772]">Swipper Here</h2>
      </div> */}
      </div>
    </div>
  );
};

export default TextSlidingComponent;
