"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Tabs = ({ tabsData, slidesPerView }) => {
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
        <div className="mt-9 border border-green-400 rounded-full ">
          <Swiper
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
                spaceBetween: 0,
              },
            }}
            speed={2000}
            onSlideChange={(swiper) => updateShownArray(swiper)}
            className="mySwiper"
          >
            <>
              {tabsData.map((item, index, array) => (
                <SwiperSlide key={index}>
                  <div
                    onMouseOver={() => tabHovered(item.id)}
                    // className={`tabs-custom-bg ${shownArray[0] ? "!bg-red-500" : !shownArray ? "!bg-blue-500" : ""} py-[10px]`}
                    className={`tabs-custom-bg ${index === array.length - 1 ? "rounded-e-full" : index === 0 ?   "rounded-s-full" : ""}
                    py-[10px]`}
                  >
                    <div className="text-center">
                      <div className="">{item.item}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
