import React, { useEffect, useRef } from "react";
import square from "../../../../public/square-neon.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import logo from "../../../../public/logo.webp";
import Link from "next/link";
import hamburger from "../../../../public/hamburger-icon-3.png";
import Lottie from "react-lottie-player";
import aboutBannerAnimation from "../../../../public/symmetryAnimations/aboutBannerAnimation.json";

gsap.registerPlugin(ScrollTrigger);
const BlackBannerComponent = ({ aboutH2, aboutText }) => {
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
            }
          );
          mm.add(
            {
              isMobile: "(min-width : 300px)",
              isTablet: "(min-width : 768px)",
              isDesktop: "(min-width : 1024px)",
            },
            (context) => {
              let { isMobile, isTablet, isDesktop } = context.conditions;
              {
                console.log(context.conditions, "context contidions");
              }
              gsap.to(symmetryDiv.current, {
                width: isMobile
                  ? "35vw"
                  : isTablet
                  ? "25vw"
                  : isDesktop
                  ? "17vw"
                  : "100%", // Adjust the fallback value as needed
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
          gsap.to(pinkDiv.current, {
            marginTop: "-255px",
          });
        },
        onEnterBack: () => {
          gsap.to(blackDiv.current, {
            height: "384px",
          });
          mm.add(
            {
              isMobile: "(min-width : 300px)",
              isTablet: "(min-width : 768px)",
              isDesktop: "(min-width : 1024px)",
              is2xl: "(min-width : 1600px)",
            },
            (context) => {
              let { isMobile, isTablet, isDesktop, is2xl } = context.conditions;
              gsap.to(aboutDiv.current, {
                fontSize: is2xl ? "150px" : isDesktop ? "128px" : isTablet ? "96px" : isMobile ? "96px" : "100px",
              });
            }
          );

          gsap.to(textDiv.current, {
            opacity: "1",
            transition: "all  0.1s",
            delay: 0.1,
          });
          gsap.to(pinkDiv.current, {
            marginTop: "-100px",
          });
          mm.add(
            {
              isMobile: "(min-width : 300px)",
              isTablet: "(min-width : 768px)",
              isDesktop: "(min-width : 1024px)",
            },
            (context) => {
              let { isMobile, isTablet, isDesktop } = context.conditions;
              gsap.to(symmetryDiv.current, {
                width: isMobile
                  ? "40vw"
                  : isTablet
                  ? "30vw"
                  : isDesktop
                  ? "20vw"
                  : "100%", // Adjust the fallback value as needed
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
  return (
    <div
      ref={blackDiv}
      className="bg-black h-96 text-white pt-10 md:pl-10 pl-3 fixed w-full z-50"
    >
      <div className="">
        <div className="flex justify-between items-center gap-3">
          <Link href="/">
            <div className="ml-1" ref={symmetryDiv}>
              <Image
                src={logo}
                alt="logo"
                className="w-[45vw] md:w-[30vw] lg:w-[20vw]"
              />
            </div>
          </Link>
          <div className="lg:mr-5">
            <Image
              src={hamburger}
              alt="hamburger"
              className="w-[10vw] lg:w-[4vw]"
            />
          </div>
        </div>
      </div>
      <div
        ref={aboutDiv}
        className="text-8xl lg:text-9xl 2xl:text-[150px] pt-10 pillat-normal relative z-50"
      >
        {aboutH2}
      </div>
      <div>
        <div
          ref={animationDiv}
          className="lg:block hidden absolute w-auto right-[-100px] 2xl:right-[-40px] top-[0px] z-0"
        >
          <Lottie
            loop
            animationData={aboutBannerAnimation}
            play
            // style={{ width: 350, height: 350 }}
          />
        </div>
      </div>
      <div
        ref={textDiv}
        className=" md:w-[60%] 2xl:w-[40%] pt-5 pillat-normal text-sm md:text-base"
      >
        {aboutText}
      </div>
    </div>
  );
};

export default BlackBannerComponent;
