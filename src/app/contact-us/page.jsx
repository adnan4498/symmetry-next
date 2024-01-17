"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import BlackBannerComponent from "../components/blackBannerComponent/BlackBannerComponent";
import Tabs from "../components/tabs/Tabs";
import AnimationTextReversing from "../components/animationTextReversing/AnimationTextReversing";
import Image from "next/image";
// import square from "../../../../public/square-neon.png";
import ConnectWithUs from "../components/connectWithUsComponent/ConnectWithUs";
import AboutUs from "../homeComponents/AboutUs";
import Footer from "../components/footer/Footer";
import Lottie from "react-lottie-player";
import islamabadAnimation from "../../../public/symmetryAnimations/islamabadAnimation.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const page = () => {
  const scrollContainerRef = useRef(null);

  const blackDiv = useRef();
  const redDiv = useRef();
  const aboutDiv = useRef();
  const symmetryDiv = useRef();
  const textDiv = useRef();
  const pinkDiv = useRef();
  const animationDiv = useRef();

  useEffect(() => {
    let mm = gsap.matchMedia();

    gsap.to(blackDiv.current, {
      scrollTrigger: {
        trigger: blackDiv.current,
        // markers: true,
        start: "80px",
        end: "82px",
        onEnter: () => {
          mm.add(
            {
              isMobile: "(min-width : 300px)",
              isTablet: "(min-width : 768px)",
              isDesktop: "(min-width : 1024px)",
              is2xl: "(min-width : 1600px)",
            },
            (context) => {
              let { isMobile, isTablet, isDesktop, is2xl } = context.conditions;
              gsap.to(blackDiv.current, {
                height: ((isMobile = "200px"), (isTablet = "220px")),
              });
              gsap.to(pinkDiv.current, {
                marginTop: "-234px",
              });
            }
          );
          gsap.to(animationDiv.current, {
            opacity: "0",
            transition: "all  0.1s",
            delay: 0.1,
          });
          gsap.to(aboutDiv.current, {
            fontSize: "60px",
          });
          gsap.to(textDiv.current, {
            opacity: "0",
            transition: "all  0.1s",
            delay: 0.1,
          });
        },
        onEnterBack: () => {
          gsap.to(blackDiv.current, {
            height: "384px",
          });
          // gsap.to(symmetryDiv.current, {
          //   fontSize: "60px",
          // });
          gsap.to(aboutDiv.current, {
            fontSize: "96px",
          });
          gsap.to(textDiv.current, {
            opacity: "1",
            transition: "all  0.1s",
            delay: 0.1,
          });
          mm.add(
            {
              is2xl: "(min-width : 1600px)",
              isDesktop: "(min-width : 1024px)",
              isTablet: "(min-width : 768px)",
              isMobile: "(min-width : 300px)",
            },
            (context) => {
              let { is2xl, isDesktop, isTablet, isMobile } = context.conditions;
              gsap.to(pinkDiv.current, {
                marginTop: is2xl ? "-80px" : "-100px",
              });
            }
          );
          gsap.to(animationDiv.current, {
            opacity: "1",
            transition: "all  0.1s",
            delay: 0.1,
          });
        },
      },
    });

    gsap.to(redDiv.current, {
      scrollTrigger: {
        trigger: redDiv.current,
        // markers: true,
        start: "400px",
        end: "620px",
        onEnter: () => {
          gsap.to(pinkDiv.current, {
            scrollTrigger: {
              pin: true,
            },
          });
        },
      },
    });

    mm.revert();
  }, []);

  const aboutH2 = "Contact Us";
  const aboutText =
    "are you ready to discover the possibilities for your business in an integrated world? begin your transformation today by connecting with our experts";

  const tabsData = [
    {
      id: 0,
      item: "karachi",
      refId: "#karachiTabRef",
    },
    {
      id: 1,
      item: "islamabad",
      refId: "#islamabadTabRef",
    },
    {
      id: 2,
      item: "lahore",
      refId: "#lahoreTabRef",
    },
    {
      id: 3,
      item: "general & media inquiries",
      refId: "#generalMediaTabRef",
    },
  ];

  return (
    <>
      <BlackBannerComponent aboutText={aboutText} aboutH2={aboutH2} />
      <div ref={redDiv} className="bg-white  pt-[450px]">
        <div
          ref={pinkDiv}
          className="bg-white h-[130px] md:h-[130px] mt-[-80px] 2xl:mt-[-50px] text-black fixed w-full z-10"
        >
          <Tabs tabsData={tabsData} slidesPerView={4} />
        </div>

        <div ref={scrollContainerRef} className="">
          <AnimationTextReversing>
            <div id="karachiTabRef" className="company-div flex flex-col gap-5 lg:w-6/12">
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
              />{" "}
            </div>
          </AnimationTextReversing>

          <AnimationTextReversing flexDirection="row-reverse">
            <div id="islamabadTabRef" className="company-div flex flex-col gap-5 lg:w-6/12 pillat-normal">
              <div className="text-black">
                <h2 className="text-5xl lg:text-6xl 2xl:text-7xl font-light">
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
              />{" "}
            </div>
          </AnimationTextReversing>

          <AnimationTextReversing>
            <div id="lahoreTabRef" className="company-div flex flex-col gap-5 lg:w-6/12 pillat-normal">
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
              />{" "}
            </div>
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