"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../homeComponents/Dummy.css";
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

  const [arrowPrevActive, setArrowPrevActive] = useState(false);
  const [arrowNextActive, setArrowNextActive] = useState(false);

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
      y: -5,
    });

    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  const handleArrowPrevActive = () => {
    setArrowNextActive(false);
    setArrowPrevActive(true);
  };

  const handleArrowNextActive = () => {
    setArrowPrevActive(false);
    setArrowNextActive(true);
  };
  return (
    <div className="bg-[#fafafa]">
      <div className="mx-3 mb-10 mt-36 md:mx-12 overflow-hidden">
        <div
          className={`w-full ${
            isBorder ? "border-b border-green-500 pb-1" : ""
          }  w-[40%]`}
        >
          <h2
            className="text-gray-600 text-2xl lg:text-4xl opacity-0 pillat-normal"
            ref={heading3}
          >
            {sliderheading}
          </h2>
        </div>

        <div class="marquee">
          <ul class="marquee-content gap-10">
            <li className="!text-[160px] !2xl:text-[200px]  !text-black">
              skillfully
            </li>
            <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
              solving
            </li>
            <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
              challenges
            </li>
            <li className="!text-[160px] !2xl:text-[200px]  !text-black">
              skillfully
            </li>
            <li className="!text-[160px] !2xl:text-[200px]     rainbow-text">
              solving
            </li>
            <li className="!text-[160px] !2xl:text-[200px]  rainbow-text ">
              challenges
            </li>
            <li className="!text-[160px] !2xl:text-[200px]  !text-black">
              skillfully
            </li>
            <li className="!text-[160px] !2xl:text-[200px]    rainbow-text">
              solving
            </li>
            <li className="!text-[160px] !2xl:text-[200px]  rainbow-text ">
              challenges
            </li>
            <li className="!text-[160px] !2xl:text-[200px]  !text-black">
              skillfully
            </li>
            <li className="!text-[160px] !2xl:text-[200px]   rainbow-text">
              solving
            </li>
            <li className="!text-[160px] !2xl:text-[200px]   rainbow-text">
              challenges
            </li>
          </ul>
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
          <div className="mt-9 swipper-icons-color-toggle">
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
              autoplay={{
                delay: 500,
              }}
              className="mySwiper "
            >
              {swipperContent.map((item, index) => (
                <>
                  <SwiperSlide>
                    <div className="cursor-pointer">
                      <div className="flex justify-center items-center border border-gray-400 rounded-md">
                        <div className=" md:w-10/12 md:h-24 flex justify-center items-center ">
                          <Image src={item.img} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>

            <div className="swiper-navigation-buttons flex justify-center  gap-2 lg:gap-[10px] 2xl:gap-3 w-full mt-16 mb-3">
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

        {/* <div className="flex justify-center items-center my-20">
        <h2 className="text-5xl md:text-6xl  text-[#13a772]">Swipper Here</h2>
      </div> */}
      </div>
    </div>
  );
};

export default TextSlidingComponent;
