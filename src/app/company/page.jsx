"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Tabs from "../components/tabs/Tabs";
import BlackBannerComponent from "../components/blackBannerComponent/BlackBannerComponent";
import AnimationTextReversing from "../components/animationTextReversing/AnimationTextReversing";
// import square from "../../../../public/square-neon.png";
import director1 from "../../../public/board-director-img-1.webp";
import director2 from "../../../public/board-director-img-2.webp";
import director3 from "../../../public/board-director-img-3.webp";
import director4 from "../../../public/board-director-img-4.webp";
import director5 from "../../../public/board-director-img-5.webp";
import director6 from "../../../public/board-director-img-6.webp";
import director7 from "../../../public/board-director-img-7.webp";
import ConnectWithUs from "../components/connectWithUsComponent/ConnectWithUs";
import Footer from "../components/footer/Footer";
// import companyBannerAnim from "../../../../public/symmetryAnimations/company-animation-main-rive.riv";
import companyBannerAnim from "../../../public/symmetryAnimations/company-animation-main-rive.riv";
import companyAnim2 from "../../../public/symmetryAnimations/company-animation-2-riveee.riv";
import companyAnim3 from "../../../public/symmetryAnimations/company-animation-3-riveee.riv";
import companyAnim4 from "../../../public/symmetryAnimations/company-animation-4-rive.riv";
import initiativeAnimation from "../../../public/symmetryAnimations/initiativeAnimation.json";
import dummyRiv from "../../../public/symmetryAnimations/company-animation-1-rive.riv";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Lottie from "react-lottie-player";
import Navbar2 from "../components/navbar2/Navbar2";
import Rive from "@rive-app/react-canvas";

const Company = () => {
  const blackDiv = useRef();
  const redDiv = useRef();
  const aboutDiv = useRef();
  const symmetryDiv = useRef();
  const textDiv = useRef();
  const pinkDiv = useRef();
  const animationDiv = useRef();

  const aboutH2 = "about us";
  const aboutText =
    "symmetry group is a digital technology and experiences company that specializes in digital products and services. Our prime focus is on transformation and digitalization of marketing, sales and other consumer centric functions of organizations.";

  const tabsData = [
    {
      id: 0,
      item: "company",
      refId: "#companyTabRef",
    },
    {
      id: 1,
      item: "vision",
      refId: "#visionTabRef",
    },
    {
      id: 2,
      item: "mission",
      refId: "#missionTabRef",
    },
    {
      id: 3,
      item: "board of directors",
      refId: "#boardDirectorsTabRef",
    },
    {
      id: 4,
      item: "initiatives",
      refId: "#initiativesTabRef",
    },
  ];

  const boardDirectors = [
    {
      id: 0,
      img: director1,
      name: "zaheer hussain dodhia",
      post: "chairman / independent director",
    },
    {
      id: 1,
      img: director2,
      name: "musharraf hai",
      post: "independent director",
    },
    {
      id: 2,
      img: director3,
      name: "muhammad najeeb agarwalla",
      post: "independent director",
    },
    {
      id: 3,
      img: director4,
      name: "jibran jamshad",
      post: "independent director",
    },
    {
      id: 4,
      img: director5,
      name: "syed asim zafar",
      post: "independent director",
    },
    {
      id: 5,
      img: director6,
      name: "adil ahmed",
      post: "executive director / co-founder",
    },
    {
      id: 6,
      img: director7,
      name: "sarocsh ahmed",
      post: "chief executive officer / co-founder",
    },
  ];

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

  return (
    <>
      <BlackBannerComponent aboutText={aboutText} aboutH2={aboutH2} bannerAnimation={companyBannerAnim} />
      <div ref={redDiv} className="bg-white  pt-[450px]">
        <div
          ref={pinkDiv}
          className="bg-white h-[130px] md:h-[130px] mt-[-80px] 2xl:mt-[-50px] text-black fixed w-full z-10"
        >
          <Tabs tabsData={tabsData} slidesPerView={4} />
        </div>
        <div className="bg-white h-[1800px] text-black z-0">
          <AnimationTextReversing>
            <div
              id="companyTabRef"
              className="company-div flex flex-col gap-5 lg:w-6/12"
            >
              <div className="text-black">
                <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                  company
                </h2>
              </div>
              <div className="text-gray-500 text-[14px] pillat-normal">
                <p>
                  with expertise in digital strategy, consulting,
                  transformation, digital commerce, data science, mobility,
                  retail/research & interactive marketing, the company offers a
                  complete suite assisting its clients at all stages of their
                  digital journeys to ensure our partner's success, we focus on
                  four core areas:
                </p>
              </div>
              <div className="text-gray-500 pillat-normal">
                <ul className="flex flex-col gap-2">
                  <li>
                    <span className="text-green-500 mr-1">O</span>{" "}
                    transformation
                  </li>
                  <li>
                    <span className="text-green-500 mr-1">O</span> interactive
                    marketing
                  </li>
                  <li>
                    <span className="text-green-500 mr-1">O</span> commerce
                  </li>
                  <li>
                    <span className="text-green-500 mr-1">O</span> mobility
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={dummyRiv} autoplay={true} play={true} />
            </div>
          </AnimationTextReversing>
          <AnimationTextReversing flexDirection="flex-row-reverse">
            <div
              id="visionTabRef"
              className="vision-div flex flex-col gap-5 lg:w-6/12"
            >
              <div className="text-black">
                <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                  vision
                </h2>
                <h3 className="!font-extrabold mt-3 pillat-normal">
                  we exist to integrate the world better.
                </h3>
              </div>
              <div className="text-gray-500 text-[14px] pillat-normal ">
                <p className="">
                  we believe that human possibilities can be enhanced through
                  digital experiences. whether it is finding new ways to solve
                  old problems or solving newly emerging ones, technology is
                  invariably the answer. whether its shopping at the mall or
                  online, enjoying music on the phone or at a festival, or
                  watching a glorious sunrise, our connected world demands
                  integrated experiences.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={companyAnim2} autoplay={true} play={true} />
            </div>
          </AnimationTextReversing>
          <AnimationTextReversing>
            <div
              id="missionTabRef"
              className="mission-div flex flex-col gap-5 lg:w-6/12"
            >
              <div className="text-black">
                <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                  mission
                </h2>
                <h3 className="!font-extrabold mt-3 pillat-normal">
                  create market-leading digital experiences that power our
                  partners’ success.
                </h3>
              </div>
              <div className="text-gray-500 text-[14px] pillat-normal">
                <p className="">
                  symmetry group is a digital technology and experiences company
                  that specializes in digital products and services. Our prime
                  focus is on transformation and digitalization of marketing,
                  sales and other consumer centric functions of organizations.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={companyAnim3} autoplay={true} play={true} />
            </div>
          </AnimationTextReversing>
          <AnimationTextReversing flexDirection="flex-row-reverse">
            <div
              id="boardDirectorsTabRef"
              className="board-directors-div flex flex-col gap-5 lg:w-6/12"
            >
              <div className="text-black">
                <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                  board of directors
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 mx-auto gap-10 lg:mx-0 lg:gap-5 w-[70%] mt-5">
                {boardDirectors.map((item, index) => (
                  <div key={item.id}>
                    <div className="border border-green-700 rounded-md min-w-[100px] max-w-[100px] py-[3px] px-1">
                      <Image src={item.img} />
                    </div>
                    <p className="mt-2 min-h-[40px] leading-[18px] pillat-normal">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-xs pillat-normal">
                      {item.post}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={companyAnim4} autoplay={true} play={true} />
            </div>
          </AnimationTextReversing>
          <AnimationTextReversing>
            <div
              id="initiativesTabRef"
              className="vision-div flex flex-col gap-5 lg:w-6/12"
            >
              <div className="text-black">
                <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                  initiatives
                </h2>
                <div className="flex flex-col gap-3 mt-2">
                  <div className="text-gray-500 text-[14px]  mt-2">
                    <p className="pillat-normal">
                      <span className="!font-extrabold text-black ">
                        #narrativestransformed
                      </span>{" "}
                      is a series of podcasts on prevalent themes that can
                      disrupt the digital space. The episodes follow a
                      transformative approach with industry leaders who share
                      their analysis and expertise on the topic of discussion.
                    </p>
                  </div>
                  <div className="text-gray-500 text-[14px] mt-2  pillat-normal">
                    <p className="">
                      <span className="!font-extrabold text-black">djoint</span>{" "}
                      is a flagship initiative launched by Symmetry Group and
                      has since been implemented across all our agencies. In
                      Djoint sessions, the senior most management of the Group
                      discusses the latest digital trends and broad spectrum
                      digital strategies with the audience. In-house sessions
                      are attended by both, new and existing employees, as part
                      of their training & development.
                    </p>
                  </div>
                  <div className="text-gray-500 text-[14px]  mt-2 pillat-normal">
                    <p className="">
                      <span className="!font-extrabold text-black">
                        digital minds
                      </span>{" "}
                      is a first of its kind competition, in which students from
                      leading educational institutions are encouraged to take
                      part. Digital Minds tests the participants on digital
                      strategies, 360 marketing campaigns, technology,
                      innovation and media planning.
                    </p>
                  </div>

                  <div className="text-gray-500 text-[14px]  mt-2 pillat-normal">
                    <p>
                      this program helps youth to get acquainted with digital
                      world, expand their knowledge with latest digital
                      innovations and learn how to use them effectively. It also
                      encourages them to become more competitive by offering
                      prizes and awards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
              <Lottie
                loop
                animationData={initiativeAnimation}
                play
                // style={{ width: 350, height: 350 }}
              />{" "}
            </div>
          </AnimationTextReversing>

          <ConnectWithUs bgColor="bg-black" textColor="text-white" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Company;
