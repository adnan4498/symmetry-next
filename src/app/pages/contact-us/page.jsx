"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import BlackBannerComponent from "../../components/blackBannerComponent/BlackBannerComponent";
import Tabs from "../../components/tabs/Tabs";
import AnimationTextReversing from "../../components/animationTextReversing/AnimationTextReversing";
import Image from "next/image";
import square from "../../../../public/square-neon.png";
import ConnectWithUs from "../../components/connectWithUsComponent/ConnectWithUs";
import AboutUs from "../../homeComponents/AboutUs";
import Footer from "../../components/footer/Footer";
import Lottie from "react-lottie-player";
import islamabadAnimation from "../../../../public/symmetryAnimations/islamabadAnimation.json";

const page = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      inertia: 0.5, // Adjust the inertia for smoother deceleration
      getSpeed: true, // Enable speed calculation for parallax effects
      lerp: 0.01,
      smoothMobile: true
    });

    // Clean up when the component is unmounted
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  const aboutH2 = "affiliations & partnerships";
  const aboutText =
    "through our network, we are integrating you with a world that keeps pace with technology and change, enables simplicity from complexity and shapes the future.";

  const tabsData = [
    {
      id: 0,
      item: "karachi",
    },
    {
      id: 1,
      item: "islamabad",
    },
    {
      id: 2,
      item: "lahore",
    },
    {
      id: 3,
      item: "general & media inquiries",
    },
  ];

  return (
    <>
      <div  className="h-[100vh] ">
        <div>
          <div>
            <BlackBannerComponent aboutH2={aboutH2} aboutText={aboutText} />
            <Tabs tabsData={tabsData} slidesPerView={4} />
          </div>
        </div>

        <div ref={scrollContainerRef} className="">
          <AnimationTextReversing>
            <div className="company-div flex flex-col gap-5 lg:w-6/12">
              <div className="text-black">
                <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                  karachi
                </h2>
              </div>
              <div className="text-gray-500">
                <ul className="flex flex-col gap-2 pillat-normal">
                  <li>
                    <span className="text-green-500 mr-1">O</span> Plot No.
                    56-A, Khalid Commercial, Street 2, Phase 7 Ext., D.H.A,
                    Karachi, Pakistan
                  </li>
                  <li>
                    <span className="text-green-500 mr-1">O</span> +92 21 3517
                    1991
                  </li>
                  <li>
                    <span className="text-green-500 mr-1">O</span> +92 21 3538
                    0066
                  </li>
                  <li>
                    <span className="text-green-500 mr-1">O</span>{" "}
                    info@symmetrygroup.biz
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
            <Lottie
              loop
              animationData={islamabadAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />            </div>
          </AnimationTextReversing>

          <AnimationTextReversing flexDirection="row-reverse">
            <div className="company-div flex flex-col gap-5 lg:w-6/12 pillat-normal">
              <div className="text-black">
                <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                  islamabad
                </h2>
              </div>
              <div className="text-gray-500">
                <ul className="flex flex-col gap-2">
                  <li>
                    <span className="text-green-500 mr-1">O</span> 2nd Floor,
                    Office No. 13, Shawez Centre, Plot 8-C, F-8 Markaz, Johar
                    Road, Islamabad, pakistan
                  </li>
                  <li>
                    <span className="text-green-500 mr-1">O</span> +92 21 3534
                    0689
                  </li>
                  <li>
                    <span className="text-green-500 mr-1">O</span>{" "}
                    info@symmetrygroup.biz
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
            <Lottie
              loop
              animationData={islamabadAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />             </div>
          </AnimationTextReversing>

          <AnimationTextReversing>
            <div className="company-div flex flex-col gap-5 lg:w-6/12 pillat-normal">
              <div className="text-black">
                <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                  lahore
                </h2>
              </div>
              <div className="text-gray-500">
                <ul className="flex flex-col gap-2">
                  <li>
                    <span className="text-green-500 mr-1">O</span> 2nd Floor,
                    215 FF, D.H.A, Phase 4, Lahore, pakistan
                  </li>
                  <li>
                    <span className="text-green-500 mr-1">O</span>{" "}
                    info@symmetrygroup.biz
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
            <Lottie
              loop
              animationData={islamabadAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />             </div>
          </AnimationTextReversing>

          {/* <ConnectWithUs bgColor="bg-white" textColor="text-black" /> */}
          <div className="mt-36">
            <AboutUs titleWidth="lg:w-[60%]" autoMx="mx-auto" />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
