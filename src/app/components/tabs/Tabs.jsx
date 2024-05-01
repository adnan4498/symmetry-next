"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { Navigation } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Tabs = ({
  tabsData,
  slidesPerView,
  customBgColor,
  customBorderColor,
  toggleBorderColor,
  toggleBorderMobilityColor,
}) => {
  const [tabRounded, setTabRounded] = useState();
  const [shownArray, setShownArray] = useState([0, 1, 2, 3]);

  const tabHovered = (id) => {  
    setTabRounded(id);
  };

  const updateShownArray = (swiper) => {
    const newShownArray = Array.from({ length: slidesPerView }, (_, i) => i);

    setShownArray(newShownArray);
  };

  return (
    <div className="text-black">
      <div className="w-[80%] mx-auto">
        {/* <div className="mt-9 border border-[#4ade80] rounded-full "*/}
        <div
          className="mt-9 border rounded-full"
          style={{ borderColor: `${customBorderColor || "#4ade80"}` }}
        >
          <Swiper
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: slidesPerView,
                spaceBetween: 0,
              },
            }}
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            speed={700}
            onSlideChange={(swiper) => updateShownArray(swiper)}
            className="mySwiper"
          >
            <>
              {tabsData.map((item, index, array) => (
                <>
                  <SwiperSlide key={index}>
                    <div
                      onClick={() =>
                        gsap.to(window, {
                          duration: 1,
                          scrollTo: { y: item.refId, offsetY: 330 },
                        })
                      }
                      onMouseOver={() => tabHovered(item.id)}
                      className={`${
                        toggleBorderColor
                          ? "tabs-interactive-custom-bg"
                          : toggleBorderMobilityColor
                          ? "tabs-mobility-custom-bg"
                          : "tabs-custom-bg"
                      } cursor-pointer ${
                        index === array.length - 1
                          ? "rounded-e-full"
                          : index === 0
                          ? "rounded-s-full"
                          : ""
                      }
                    py-[10px]`}
                    >
                      <div className="text-center">
                        <div className="">{item.item}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </>
          </Swiper>

          <div className="swiper-navigation-buttons  ">
            <button
              className={`swiper-button-prev !left-[50px] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8 2xl:!w-9 2xl:!h-9 `}
            ></button>
            <button
              className={`swiper-button-next !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8 2xl:!w-9 2xl:!h-9`}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

// tabs-mobility-custom-bg
