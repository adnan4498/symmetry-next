import React, { useEffect, useRef, useState } from "react";
// import square from "../../../../public/square-neon.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import logo from "../../../../public/logo.webp";
import Link from "next/link";
import hamburger from "../../../../public/hamburger-icon-3.png";
import linkdinLogo from "../../../../public/linkdin-logo.webp";
import fbLogo from "../../../../public/fb-logo.webp";
import twitterLogo from "../../../../public/twitter-logo.webp";
import Lottie from "react-lottie-player";
import aboutBannerAnimation from "../../../../public/symmetryAnimations/aboutBannerAnimation.json";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Menu } from "antd";
import Rive from "@rive-app/react-canvas";
import RiveAnimation from "../../../../public/symmetryAnimations/banner-Rive.riv";
import startingAnimation from "../../../../public/symmetryAnimations/startingAnimation.json";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);
const BlackBannerComponent = ({ aboutH2, aboutText }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const blackDiv = useRef();
  const redDiv = useRef();
  const aboutDiv = useRef();
  const symmetryDiv = useRef();
  const textDiv = useRef();
  const pinkDiv = useRef();
  const animationDiv = useRef();

  const innerNavBlackRef = useRef(null);
  const innerNavAnimRef = useRef(null);

  const endingBlackRef = useRef(null);
  const endingBlackRivAnimRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  /******  toggeling drawer code and antd sub menu items  *******/

  const toggleDrawer = () => {
    const myInterval = setInterval(() => {
      setIsOpen((prevState) => !prevState);
    }, 400);

    const killMyInterval = setInterval(() => {
      clearInterval(myInterval);
    }, 400);

    setInterval(() => {
      clearInterval(killMyInterval);
    }, 20000);
  };

  const items = [
    getItem(
      <div className="footer-text-color-toggle pillat-normal abbo">about</div>,
      "sub1",
      [<></>]
    ),

    getItem(
      <div className="footer-text-color-toggle pillat-normal">
        investors relations{" "}
      </div>,
      "sub2",
      [
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              {" "}
              company information{" "}
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              {" "}
              governance{" "}
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              financial reports
            </div>
          </>
        ),

        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              corporate briefings
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              notices & announcements
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              important documents
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              investor contacts
            </div>
          </>
        ),
      ]
    ),

    getItem(
      <div className="footer-text-color-toggle pillat-normal">
        business divisions{" "}
      </div>,
      "sub3",
      [
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              transformation
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              interactive marketing
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              commerce
            </div>
          </>
        ),

        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              mobility
            </div>
          </>
        ),
      ]
    ),

    getItem(
      <div className="footer-text-color-toggle pillat-normal">
        brands & products
      </div>,
      "sub4",
      [
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              symmetry digital
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              iris digital
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              symmetry trade
            </div>
          </>
        ),

        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              coral
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              coral performance
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              appabilities
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              survit
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              mobit
            </div>
          </>
        ),
      ]
    ),

    getItem(
      <div className="footer-text-color-toggle pillat-normal">clients</div>,
      "sub5",
      [
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              telecom
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              banking & finance
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              fmcg
            </div>
          </>
        ),

        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              real estate
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              pharmaceutical
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              others
            </div>
          </>
        ),
      ]
    ),

    getItem(
      <div className="footer-text-color-toggle pillat-normal abbo">
        affiliation & partnerships
      </div>,
      "sub1",
      [<></>]
    ),

    getItem(
      <div className="footer-text-color-toggle pillat-normal abbo">
        careers
      </div>,
      "sub1",
      [<></>]
    ),

    getItem(
      <div className="footer-text-color-toggle pillat-normal abbo">
        contact us
      </div>,
      "sub1",
      [<></>]
    ),
  ];

  function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  }

  /* This useEffect Enables Locomotive Scroll for this page */

  useEffect(() => {
    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        console.log("locomotive useEffect enabled transformation");
        locomotiveScrollRef.current = new LocomotiveScroll({
          lenisOptions: {
            easing: (t) => t * (2 - t),
            lerp: 0.1,
            smoothTouch: true,
            smoothWheel: true,
            duration: 1,
          },
        });
      } catch (error) {
        console.error("Error loading Locomotive Scroll:", error);
      }
    };

    initLocomotiveScroll();
  }, []);

  /******   scrolling animations effect that moves navbar up and down  ******/

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
              is2xl: "(min-width : 1600px)",
              isDesktop: "(min-width : 1024px)",
              isTablet: "(min-width : 768px)",
              isMobile: "(min-width : 300px)",
            },
            (context) => {
              let { is2xl, isDesktop, isTablet, isMobile } = context.conditions;
              gsap.to(blackDiv.current, {
                height: "220px",
              });
              gsap.to(symmetryDiv.current, {
                width: is2xl
                  ? "12vw"
                  : isDesktop
                  ? "15vw"
                  : isTablet
                  ? "25vw"
                  : isMobile
                  ? "35vw"
                  : "0%",
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
            marginTop: "-234px",
          });
        },

        /******* On Enter Back  ********/

        onEnterBack: () => {
          gsap.to(blackDiv.current, {
            height: "360px",
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
              gsap.to(aboutDiv.current, {
                fontSize: is2xl
                  ? "130px"
                  : isDesktop
                  ? "100px"
                  : isTablet
                  ? "96px"
                  : isMobile
                  ? "96px"
                  : "100px",
              });
              gsap.to(symmetryDiv.current, {
                width: is2xl
                  ? "17vw"
                  : isDesktop
                  ? "20vw"
                  : isTablet
                  ? "30vw"
                  : isMobile
                  ? "45vw"
                  : "0%",
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

  /******  this is the starting black animation , when entering the page   ******/

  useEffect(() => {
    /* the word "the" before animationRef is used to get a reference to animationRef. to be styled below in code. 
       refs cannot be stlyled directly but after making a reference, we can style them.*/
    const theInnerNavBlackRef = innerNavBlackRef.current;
    const body = document.body;

    gsap.to(innerNavBlackRef.current, {
      y: "700px",
      delay: 1.5,
      duration: 1,
      // ease: "power1.inOut",
      onComplete: () => {
        theInnerNavBlackRef.style.display = "none";
        body.style.overflow = "visible";
      },
    });

    const insideAnimation = gsap.timeline({
      repeat: 1,
      repeatDelay: 0,
      yoyo: true,
    });

    insideAnimation.from(innerNavAnimRef.current, {
      duration: 1.5,
      opacity: 0,
    });

    insideAnimation.to(innerNavAnimRef.current, {
      duration: 1.5,
      opacity: 1,
    });
  }, []);

  /******  this function will take back to home with black animation  ******/

  const toHomeAnimFunc = () => {
    // const container = document.getElementById("page-loader");
    const container = endingBlackRef.current;
    const body = document.body;
    container.style.pointerEvents = "none";

    setIsAnimating(true);

    var tl = gsap.timeline({
      repeat: 1,
      repeatDelay: 5,
      yoyo: true,
      onStart: () => {
        blueAnimationFuncStart();
        body.style.overflow = "hidden";
        if (locomotiveScrollRef.current) {
          console.log("locomotive destroyed in black banner");
          locomotiveScrollRef.current.destroy();
        }
      },
      onComplete: () => {
        container.style.display = "none";
        blueAnimationFuncEnd();
        body.style.overflow = "visible";
        container.style.pointerEvents = "auto";
        setIsAnimating(false);
      },
    });

    tl.from(endingBlackRef.current, {
      y: "800px",
      backgroundColor: "black",
      color: "black",
      duration: 3,
      // ease: "power1.inOut",
      zIndex: 50,
      onComplete: () => {
        container.style.display = "flex";
      },
    });

    tl.to(
      endingBlackRef.current,
      {
        y: "-180px",
        backgroundColor: "black",
        color: "black",
        duration: 3,
        // ease: "power1.inOut",
        zIndex: 50,
        onComplete: () => {
          router.push("/");
        },
      },
      "-=0.0"
    );

    const blueAnimationFuncStart = () => {
      const lottieTl = gsap.timeline({
        repeat: 1,
        repeatDelay: 0,
        yoyo: true,
      });

      lottieTl.from(endingBlackRivAnimRef.current, {
        duration: 1,
        opacity: 0,
      });

      lottieTl.to(endingBlackRivAnimRef.current, {
        duration: 1,
        opacity: 1,
        // onComplete : ()=>{
        //   router.push("/")
        // }
      });
    };

    const blueAnimationFuncEnd = () => {
      gsap.to(endingBlackRivAnimRef.current, {
        duration: 1,
        opacity: 0,
      });
    };

    // startNavigationTimer();
  };

  // const startNavigationTimer = () => {
  //   const intervalId = setInterval(() => {
  //     // Code to be executed every second
  //     // You can update a timer state if needed
  //   }, 1000);

  //   // Clear the interval after 3 seconds
  //   setTimeout(() => {
  //     clearInterval(intervalId);

  //     // Navigate to "/"
  //     window.location.href = "/";
  //   }, 1000);

  //   router
  // };

  return (
    <>
      <div
        ref={blackDiv}
        className="bg-black h-[350px] lg:h-[370px] text-white pt-10 md:pl-10 pl-3 fixed w-full z-30"
      >
        {/******  Starting Black Animation Div  ******/}
        <div
          ref={innerNavBlackRef}
          className="bg-black absolute w-full h-[100vh] z-50 hidden"
        >
          <div
            className="bg-black flex justify-center items-center h-[100vh]"
            // style={{ transform: "translateY(700px)" }}
          >
            <div ref={innerNavAnimRef} className="opacity-0 w-96 h-96">
              <Lottie
                loop
                animationData={startingAnimation}
                play
                // style={{ width: 350, height: 350 }}
              />
            </div>
          </div>
        </div>
        <div
          // id="page-loader"
          className="bg-black justify-center items-center h-[200vh] w-[200%] absolute hidden top-0 left-[-50px] z-50"
          style={{ transform: "translateY(800px)" ,  }}
          ref={endingBlackRef}
        >
          <div
            ref={endingBlackRivAnimRef}
            className="opacity-0 w-96 h-96 flex justify-center items-center"
          >
            <Lottie
              loop
              // animationData={bannerAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center gap-3">
            {/* <Link href="/"> */}
            <div
              onClick={() => {
                toHomeAnimFunc();
              }}
              className="ml-1"
            >
              <Image
                src={logo}
                alt="logo"
                className="w-[45vw] md:w-[30vw] lg:w-[20vw]"
                ref={symmetryDiv}
              />
            </div>
            {/* </Link> */}
            {/* Ending black animation */}
            <div className="">
              <div class="menu cross menu--1">
                <label
                  className="top-[-15px] lg:top-[0px] absolute cursor-pointer w-[50vw] h-[50vw] max-w-[90px] max-h-[150px] !right-[-20px] md:!right-[10px]"
                  style={{ zIndex: "99999" }}
                >
                  <input type="checkbox" onClick={toggleDrawer} />
                  <svg
                    viewBox="0 0 100 100"
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="0" cy="0" r="0" />
                    <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                    <path class="line--2" d="M0 50h70" />
                    <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
                  </svg>
                </label>
              </div>
            </div>

            {/* <button >Show</button> */}
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="!bg-black"
              size="100vw"
              style={{ height: "130vh" }}
            >
              <>
                <div className="ml-2 mt-4 md:mx-10">
                  <div className="w-[55vw] ml-1">
                    <Image src={logo} />
                  </div>

                  <div>
                    {/*********  Mobile   *********/}

                    <div>
                      <div className="mt-16 lg:hidden">
                        <div className="text-white flex flex-col gap-2 mr-1 text-2xl pillat-normal">
                          <div className="flex justify-between mx-2 ">
                            <div>about us</div>
                          </div>
                          <div className="flex justify-between mx-2 text-2xl">
                            <div>investor relations</div>
                            <div className="text-2xl font-bold">+</div>
                          </div>
                          <div className="flex justify-between mx-2">
                            <div>business divisions</div>
                            <div className="text-2xl font-bold">+</div>
                          </div>
                          <div className="flex justify-between mx-2">
                            <div>brands & products</div>
                            <div className="text-2xl font-bold">+</div>
                          </div>
                          <div className="flex justify-between mx-2">
                            <div>clients</div>
                            <div className="text-2xl font-bold">+</div>
                          </div>
                          <div className="flex justify-between mx-2">
                            <div>affiliation & partnerships</div>
                          </div>
                          <div className="flex justify-between mx-2">
                            <div>careers</div>
                          </div>
                          <div className="flex justify-between mx-2">
                            <div>contact us</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*********  Laptop   *********/}

                    <div>
                      <div className="mt-16 hidden lg:block">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-white flex flex-col gap-2 mr-1 text-xl pillat-normal lg:gap-5 ">
                              <div className="">
                                <Menu
                                  // onClick={onClick}
                                  style={{
                                    width: 256,
                                  }}
                                  mode="vertical"
                                  items={items}
                                />
                              </div>

                              <div className="flex gap-3 ml-2 mt-5  ">
                                <div className="border border-green-400 rounded-lg my-auto px-1 py-1 cursor-pointer hamburger-social-icons-div">
                                  <Image
                                    src={linkdinLogo}
                                    width={28}
                                    className="hamburger-social-icon"
                                  />
                                </div>
                                <div className="border border-green-400 rounded-lg my-auto px-1 py-1 cursor-pointer hamburger-social-icons-div">
                                  <Image
                                    src={fbLogo}
                                    width={28}
                                    className="hamburger-social-icon"
                                  />
                                </div>
                                <div className="border border-green-400 rounded-lg my-auto px-1 py-1 cursor-pointer hamburger-social-icons-div">
                                  <Image
                                    src={twitterLogo}
                                    width={28}
                                    className="hamburger-social-icon"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hidden md:block ">
                            <Rive
                              src={RiveAnimation}
                              autoplay={true}
                              play={true}
                              className="lg:w-96 h-96"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </Drawer>
          </div>
        </div>
        <div
          ref={aboutDiv}
          className="text-7xl lg:text-8xl 2xl:text-[150px] pt-10 pillat-normal relative z-30"
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
    </>
  );
};

export default BlackBannerComponent;
