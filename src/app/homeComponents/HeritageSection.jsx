"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../homeComponents/HeritageSection.css";
import infinity from "../../../public/infinity-sign.webp";

<<<<<<< HEAD
<<<<<<< HEAD
=======
const heritageSwipperContent = [
  {
    id: 0,
    h2: "100",
    h3: "",
    text: "of brands transformed",
  },
  {
    id: 1,
    h2: "1000",
    h3: "",
    text: "of experiences delivered",
  },
  {
    id: 2,
    h2: "100",
    h3: "s",
    text: "of posibillities transformed",
    img: infinity,
  },
  {
    id: 3,
    h2: "20",
    h3: "s",
    text: "years in business",
  },
  {
    id: 4,
    h2: "2023",
    // h3: "s",
    text: "listed on the pakistan stock exchange",
  },
];

>>>>>>> dev
=======
>>>>>>> dev
const HeritageSection = () => {
  const [activeAni , setActiveAni] = useState()
  const [arrowPrevActive, setArrowPrevActive] = useState(false);
  const [arrowNextActive, setArrowNextActive] = useState(false);

  const [borderHover, setBorderHover] = useState();
  const [borderHover2, setBorderHover2] = useState();

  const handleArrowPrevActive = () => {
    setArrowNextActive(false);
    setArrowPrevActive(true);
  };

  const handleArrowNextActive = () => {
    setArrowPrevActive(false);
    setArrowNextActive(true);
  };

  const hoverFunc = (id) => {
    setBorderHover("right-[-200px] transition-all ease-in-out duration-500");
    setBorderHover2("right-[-229px] transition-all ease-in-out duration-500");
    setActiveAni(id)
  };

  const hoverFuncOut = () => {
    setBorderHover("right-[-180px] transition-all ease-in-out duration-500");
    setBorderHover2("right-[-240px] transition-all ease-in-out duration-500");
  };

  console.log(borderHover , "b1")
  console.log(borderHover2 , "b2")

  const heritageSwipperContent = [
    {
      id: 0,
      h2: "100",
      h3: "",
      text: "of brands transformed",
    },
    {
      id: 1,
      h2: "1000",
      h3: "",
      text: "of experiences delivered",
    },
    {
      id: 2,
      h2: "100",
      h3: "s",
      text: "of posibillities transformed",
      img: infinity,
    },
    {
      id: 3,
      h2: "20",
      h3: "s",
      text: "years in business",
    },
    {
      id: 4,
      h2: "2023",
      // h3: "s",
      text: "listed on the pakistan stock exchange",
    },
  ];

  return (
    <>
      <div className="bg-white h-[450vh] mt-24">
        <div className=" mx-3 ">
          <div className="border-b border-green-500 pt-6">
            <p className="text-3xl mb-2 text-black">our heriage</p>
          </div>
          <div className="">
            <p className="text-3xl md:text-4xl lg:text-7xl mt-2 rainbow-text pillat-normal">
              legacy of unlocking possibilities
            </p>
            <p className="text-[13px] mt-5 text-black">
              limitless passion, ground-breaking innovation and boundless
              creativity allow us to create market-leading digital opportunities
              that continue to power our partners’ success.
            </p>
          </div>
        </div>

<<<<<<< HEAD
        <div className="mb-10 mt-5 md:max-w-[800px] md:mx-auto">
=======
        <div className="mb-10 mt-5 md:max-w-[800px] md:mx-auto lg:max-w-[97%] ">
>>>>>>> dev
          <Swiper
            spaceBetween={20}
            slidesPerView={1.5}
            breakpoints = {{
              500: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2.9,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
            }}
<<<<<<< HEAD
=======
            modules={[Autoplay , Navigation]}
>>>>>>> dev
            speed={2000}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}            
            autoplay={{
              delay: 2000000,
            }}
            centeredSlides={true}
            className="mySwiper "
          >
<<<<<<< HEAD
            <SwiperSlide>
              <div className="h-[500px] ">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[340px] ">
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    100 <span className="text-3xl">s</span>
                  </h6>
                  <p className="text-  text-gray-700">
                    of brands transformed
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-[500px] ">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[340px]">
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    1000 <span className="text-3xl">s</span>
                  </h6>
                  <p className="text-base  text-gray-700">
                    of experiences delivered
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px] ">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[340px]">
                  <Image src={infinity} width={130}/>
                  <p className="text-base  text-gray-700 -mt-[7px]">
                    possibilities transformed
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px]">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[340px]">
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    20 <span className="text-3xl">+</span>
                  </h6>
                  <p className="text-base  text-gray-700">years in business</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px]">
                <div className="border border-gray-400 rounded-md pl-4 py-14 h-[60%] max-w-[340px] ">
                  <h6 className="text-[130px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                    2023 <span className="text-3xl"></span>
                  </h6>
                  <p className="text-base  text-gray-700">
                    listed on the pakistan stock exchange
                  </p>
                </div>
              </div>
            </SwiperSlide>
=======
            {heritageSwipperContent.map((item, index) => (
              <>
                <SwiperSlide>
                  <div className="h-[px] relative overflow-hidden">
                    <div
                      onMouseOver={() => hoverFunc(item.id)}
                      onMouseLeave={() => hoverFuncOut()}
                      className=" border border-gray-400 rounded-lg pl-4 py-10 min-h-[300px] max-w-[px] bg-[#fafafa]"
                    >
                      {!item.img ? (
                        <>
                          <h6 className="text-[110px] m-0 p-0 leading-[120px] text-[#666666] custom-font-family -tracking-[8px]">
                            {item.h2}{" "}
                            <span className="text-3xl ">{item.h3}</span>
                          </h6>
                          <div
                            className={`absolute top-[-120px] right-[-180px] border border-gray-300 rounded-[50px] w-72 h-72  ${activeAni == index ? borderHover : ""} `}
                          ></div>
                          <div
                            className={`absolute top-[-70px] right-[-240px] border border-gray-300 rounded-[50px] w-72 h-72 ${activeAni == index ? borderHover2 : ""}`}
                          ></div>
                          <p className="text- text-gray-700">{item.text}</p>
                        </>
                      ) : (
                        ""
                      )}

                      {item.img ? (
                        <>
                          <Image src={item.img} width={130} />
                          <p className="text-base  text-gray-700 -mt-[7px]">
                            {item.text}
                          </p>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
>>>>>>> dev
          </Swiper>

          <div className="swiper-navigation-buttons flex justify-center gap-2 lg:gap-[10px] 2xl:gap-3 w-full mt-10">
            <button
              onClick={() => handleArrowPrevActive()}
              className={`swiper-button-prev ${
                arrowPrevActive ? "arrows-bg after:!text-white " : ""
              } !static custom-arrow-border rounded-md rotate-[45deg] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8 2xl:!w-9 2xl:!h-9 `}
            ></button>
            <button
              onClick={() => handleArrowNextActive()}
              className={`swiper-button-next ${
                arrowNextActive ? "arrows-bg  after:!text-white " : ""
              } !static custom-arrow-border  rounded-md rotate-[45deg] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8 2xl:!w-9 2xl:!h-9`}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeritageSection;
