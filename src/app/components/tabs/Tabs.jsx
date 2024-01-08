"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Tabs = ({ tabsData , slidesPerView }) => {
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
            loop={true}
            // navigation={true}
            // centeredSlides={true}
            // modules={[Navigation]}
            className="mySwiper "
          >
            <>
              {tabsData.map((item, index) => (
                <>
                  <SwiperSlide>
                    <div className="">
                      <div className="text-black text-center ">
                        <div className="">{item.item}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
