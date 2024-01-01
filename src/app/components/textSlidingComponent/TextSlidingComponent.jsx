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

    var colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];

    //initially colorize each box and position in a row
    // gsap.set(".heading2", {
    //   backgroundColor: (i) => colors[i % colors.length],
    //   x: (i) => i * 50,
    // });
  
    gsap.to(".heading2", {
      duration: 5,
      ease: "none",
      x: "+=500", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 500), //force x value to be between 0 and 500 using modulus
      },
      repeat: -1,
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

        <div className="mt-2 overflow-hidden">
          <h2
            className="sm:text-[8vw] text-5xl my-0 rainbow-text leading-[10vw] opacity-0 pillat-normal heading2   "
            ref={heading2}
          >
            {/* {sliderText} */}
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>16</span>
            <span>16</span>
            <span>16</span>
            <span>16</span>
            <span>16</span>
            <span>16</span>
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
