"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.webp";
import hamburger from "../../../../public/hamburger-icon-3.png";
import hamburgerSvg from "../../../../public/hamburger.svg";
import linkdinLogo from "../../../../public/linkdin-logo.webp";
import fbLogo from "../../../../public/fb-logo.webp";
import twitterLogo from "../../../../public/twitter-logo.webp";
import rightChevron from "../../../../public/right-chevron.png";
import "../navbar/Navbar.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
import Lottie from "react-lottie-player";
import bannerAnimation from "../../../../public/symmetryAnimations/homeBannerAnimation.json";

import Rive from "@rive-app/react-canvas";
import RiveAnimation from "../../../../public/symmetryAnimations/banner-Rive.riv";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Navbar = ({toggleRed , setToggleRed}) => {
  const router = useRouter();
  const [linkName, setLinkName] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const lottieAnimationRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const body = document.body

    body.style.overflow = "hidden"
  }, [])
  

  useEffect(() => {
    if (isAnimating && linkName) {
      const timeoutId = setTimeout(() => {
        router.push(linkName);
      }, 2000); // 2 seconds delay

      return () => clearTimeout(timeoutId); // Clear the timeout if component unmounts
    }
  }, [isAnimating, linkName, router]);

  const blueAnimationFuncStart = () => {
    const lottieTl = gsap.timeline({
      repeat: 1,
      repeatDelay: 1,
      yoyo: true,
    });

    lottieTl.from(lottieAnimationRef.current, {
      duration: 2,
      opacity: 0,
    });

    lottieTl.to(lottieAnimationRef.current, {
      duration: 1.5,
      opacity: 1,
    });
  };

  const blueAnimationFuncEnd = () => {
    gsap.to(lottieAnimationRef.current, {
      duration: 1,
      opacity: 0,
    });
  };

  // const loaderAnimationFunc = () => {
  //   const container = document.getElementById("page-loader");
  //   const body = document.body;
  //   container.style.pointerEvents = "none";

  //   setIsAnimating(true);

  //   var tl = gsap.timeline({
  //     repeat: 1,
  //     repeatDelay: 5,
  //     yoyo: true,
  //     onStart: () => {
  //       blueAnimationFuncStart();
  //       body.style.overflow = "hidden";
  //     },
  //     onComplete: () => {
  //       container.style.display = "none";
  //       blueAnimationFuncEnd();
  //       body.style.overflow = "visible";
  //       container.style.pointerEvents = "auto";
  //       setIsAnimating(false);
  //     },
  //   });

  //   tl.from("#page-loader", {
  //     y: "1000px",
  //     backgroundColor: "black",
  //     color: "black",
  //     duration: 1,
  //     ease: "power1",
  //     zIndex: 50,
  //     onComplete: () => {
  //       container.style.display = "flex";
  //     },
  //   });

  //   tl.to(
  //     "#page-loader",
  //     {
  //       y: "-10px",
  //       backgroundColor: "black",
  //       color: "black",
  //       duration: 1,
  //       ease: "power1",
  //       zIndex: 50,
  //     },
  //     "-=0.0"
  //   );
  // };

  const [activeBg, setActiveBg] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [getNavRefId, setNavRefId] = useState();
  const [toggleGsap, setToggleGsap] = useState(true);
  const navRef = useRef();
  const hamburgerLogoRef = useRef();
  const subMenuRef = useRef();
  const socialLinksRef = useRef();
  const menuAnimationRef = useRef();

  useEffect(() => {
    var actionNav = gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: navRef.current,
        start: "10px top",
        end: 99999,
        onUpdate: ({ direction }) => {
          if (direction === -1) {
            actionNav.reverse();
          } else if (direction === 1) {
            actionNav.play();
          }
        },
      },
      y: "-=100",
      duration: 0.3,
      ease: "power2.inOut",
      // paused: true,
    });
  }, []);

  const navHoverFunc = (itemId, refId) => {
    setActiveBg(itemId);
    setNavRefId(refId);
  };

  const liItems = [
    {
      id: 0,
      name: "our heritage",
      refId: "#heritageHomeScrollRef",
    },
    {
      id: 1,
      name: "business division",
      refId: "#businessHomeScrollRef",
    },
    {
      id: 2,
      name: "brands & products",
      refId: "#brandsHomeScrollRef",
    },
    {
      id: 3,
      name: "clients",
      refId: "#clientsHomeScrollRef",
    },
    {
      id: 4,
      name: "affiliations & partnerships",
      refId: "#affiliationsHomeScrollRef",
    },
    {
      id: 5,
      name: "contact us",
      refId: "#contactUsHomeScrollRef",
    },
  ];

  const investorRelationsItems = [
    {
      id: 0,
      name: "company information",
    },
    {
      id: 1,
      name: "governance",
    },
    {
      id: 2,
      name: "financial reports",
    },
    {
      id: 3,
      name: "corporate briefings",
    },
    {
      id: 4,
      name: "notices & announcements",
    },
    {
      id: 5,
      name: "important documents",
    },
    {
      id: 6,
      name: "investor contacts",
    },
  ];

  const businessDivisionsItems = [
    {
      id: 0,
      name: "transformation",
    },
    {
      id: 1,
      name: "interactive marketing",
    },
    {
      id: 2,
      name: "commerce",
    },
    {
      id: 3,
      name: "mobility",
    },
  ];

  /***********  Antd Hamburger Sub Menu Items  ***********/

  const toggleDrawer = () => {
    const myTimeout = setTimeout(() => {
      setIsOpen((prevState) => !prevState);
    }, 700);
  };

  const items = [
    getItem(
      <div className="footer-text-color-toggle pillat-normal abbo">about</div>,
      "sub1",
      [<></>]
    ),

    getItem(
      <>
        <Link href={"investorRelations"}>
          <div className="footer-text-color-toggle pillat-normal">
            investors relations{" "}
          </div>
        </Link>
      </>,
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
      <>
        <Link href={"brands-products"}>
          <div className="footer-text-color-toggle pillat-normal">
            brands & products
          </div>
        </Link>
      </>,
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
      <>
        <Link href={"clients"}>
          <div className="footer-text-color-toggle pillat-normal">clients</div>
        </Link>
      </>,
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
      <>
        <Link href={"google"}>
          <div className="footer-text-color-toggle pillat-normal abbo">
            affiliation & partnerships
          </div>
        </Link>
      </>,
      "sub1",
      [<></>]
    ),

    getItem(
      <>
        <Link href={"careers"}>
          <div className="footer-text-color-toggle pillat-normal abbo">
            careers
          </div>
        </Link>
      </>,
      "sub1",
      [<></>]
    ),

    getItem(
      <>
        <Link href={"contact-us"}>
          <div className="footer-text-color-toggle pillat-normal abbo">
            contact us
          </div>
        </Link>
      </>,
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

  /***********  Hamburger GSAP animation toggle  ***********/

  const gsapToggle = () => {
    setToggleGsap(!toggleGsap);

    gsap.to(hamburgerLogoRef.current, {
      x: toggleGsap ? 15 : -300,
      opacity: toggleGsap ? 1 : 0,
      duration: toggleGsap ? 0.2 : 0.4,
      delay: toggleGsap ? 1.3 : 0.5,
    });

    gsap.to(menuAnimationRef.current, {
      // x: toggleGsap ? 15 : -400,
      opacity: toggleGsap ? 1 : 0,
      duration: toggleGsap ? 0.5 : 0.7,
      delay: toggleGsap ? 1.7 : 0.1,
    });

    gsap.to(subMenuRef.current, {
      x: toggleGsap ? 15 : -300,
      opacity: toggleGsap ? 1 : 0,
      duration: toggleGsap ? 0.2 : 0.4,
      delay: toggleGsap ? 2 : 0.3,
    });

    gsap.to(socialLinksRef.current, {
      x: toggleGsap ? 15 : -300,
      opacity: toggleGsap ? 1 : 0,
      duration: toggleGsap ? 0.2 : 0.4,
      delay: toggleGsap ? 2.3 : 0,
    });
  };

  return (
    <>
      <div className="bg-black w-full z-50 fixed" ref={navRef}>
        <div className="py-5 mx-2 md:mx-12">
          <div className="flex justify-between items-center gap-3">
            <Link href="/">
              <div className="ml-1">
                <Image
                  src={logo}
                  alt="logo"
                  className="w-[45vw] md:w-[30vw] lg:w-[22vw]"
                />
              </div>
            </Link>
            {liItems.map((item, index) => (
                <div className="ss pillat-thin lg:block hidden">
                  <ul className="flex items-center gap-3 xl:gap-5 text-[1vw] 2xl:text-xl cursor-pointer">
                    <li
                      key={item.id}
                      onMouseOver={() => navHoverFunc(item.id, item.refId)}
                      onMouseOut={() => setActiveBg(0)}
                      className={`${
                        activeBg == index ? "rainbow-text" : "text-white"
                      } text-white`}
                    >
                      {item.name}
                      {/* {console.log(item.refId, "ref id")} */}
                      <span
                        className={`hidden lg:inline-flex ${
                          activeBg == index
                            ? "rotate-[45deg]"
                            : "rotate-[90deg]"
                        } rainbow-border transition-all duration-300 `}
                      ></span>
                  </li>
                </ul>
              </div>
            ))}
            <div className="">
              <div class="menu cross menu--1">
                <label
                  className="top-[-15px] lg:top-[0px] absolute cursor-pointer w-[50vw] h-[50vw] max-w-[90px] max-h-[150px] !right-[-20px] md:!right-[10px]"
                  style={{ zIndex: "99999" }}
                >
                  <input
                    type="checkbox"
                    onClick={() => {
                      toggleDrawer();
                      gsapToggle();
                    }}
                  />
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
                  <div
                    ref={hamburgerLogoRef}
                    className="w-[55vw] ml-1 opacity-0 translate-x-[-300px]"
                  >
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

                    {/*********  Desktop   *********/}

                    <div>
                      <div className="mt-16 hidden lg:block">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-white flex flex-col gap-2 mr-1 text-xl pillat-normal lg:gap-5 ">
                              <div
                                ref={subMenuRef}
                                className="opacity-0 translate-x-[-300px]"
                              >
                                <Menu
                                  // onClick={onClick}
                                  style={{
                                    width: 256,
                                  }}
                                  mode="vertical"
                                  items={items}
                                />
                              </div>

                              <div
                                ref={socialLinksRef}
                                className="flex gap-3 ml-2 mt-5 opacity-0 translate-x-[-300px]"
                              >
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
                          <div
                            ref={menuAnimationRef}
                            className="hidden md:block opacity-0"
                          >
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
      </div>
    </>
  );
};

export default Navbar;



{
  /* <div
id="page-loader"
className="bg-red-500 justify-center items-center h-[110vh] w-[100%] absolute top-0 hidden "
style={{ transform: "translateY(700px)" }}
ref={loaderRef}
>
<div
  ref={lottieAnimationRef}
  className="opacity-0 w-96 h-96"
>
  <Lottie
    loop
    animationData={bannerAnimation}
    play
    // style={{ width: 350, height: 350 }}
  />
</div>
</div> */
}

// onClick={() => loaderAnimationFunc()}

