"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.webp";
import hamburger from "../../../../public/hamburger-icon-3.png";
import hamburgerSvg from "../../../../public/hamburger.svg";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import "../navbar/Navbar.css";

import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const Navbar = () => {
  const [activeBg, setActiveBg] = useState(0);
  const navRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    const myInterval = setInterval(() => {
      setIsOpen((prevState) => !prevState);
    }, 400);

    const killMyInterval = setInterval(() => {
      clearInterval(myInterval);
    }, 400);

    setInterval(() => {
      clearInterval(killMyInterval);
      console.log("all intervals");
    }, 20000);
  };

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

  const navHoverFunc = (id) => {
    setActiveBg(id);
  };

  const liItems = [
    {
      id: 0,
      name: "our heritage",
    },
    {
      id: 1,
      name: "business division",
    },
    {
      id: 2,
      name: "brands & products",
    },
    {
      id: 3,
      name: "clients",
    },
    {
      id: 4,
      name: "affiliations & partnerships",
    },
  ];

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
              <>
                <div className="ss pillat-thin lg:block hidden">
                  <ul className="flex items-center gap-3 xl:gap-5 text-[1vw] 2xl:text-xl cursor-pointer">
                    <li
                      key={item.id}
                      onMouseOver={() => navHoverFunc(item.id)}
                      onMouseOut={() => setActiveBg(0)}
                      className={`${
                        activeBg == index ? "rainbow-text" : "text-white"
                      } text-white`}
                    >
                      {item.name}
                      <span
                        className={`hidden lg:inline-flex ${
                          activeBg == index
                            ? "rotate-[90deg]"
                            : "rotate-[45deg]"
                        } rainbow-border transition-all duration-300 `}
                      ></span>
                    </li>
                  </ul>
                </div>
              </>
            ))}
            <div className="">
              <div class="menu cross menu--1">
                <label
                  className="top-[-15px] lg:top-[0px] absolute cursor-pointer w-[50vw] h-[50vw] max-w-[90px] max-h-[150px] !right-[-20px]"
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
                <div className="ml-2 mt-4">
                  <div className="w-[55vw] ml-1">
                    <Image src={logo} />
                  </div>

                  <div>
                    <div>
                      <div className="mt-10 md:mx-16 lg:hidden">
                        <div className="text-white flex flex-col gap-2 mr-1 text-2xl pillat-normal">
                          <div className="flex justify-between mx-2 ">
                            <div>about us</div>
                            {/* <div className="text-lg font-bold">+</div> */}
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
                            <div className="text-2xl font-bold">+</div>
                          </div>
                          <div className="flex justify-between mx-2">
                            <div>contact us</div>
                            <div className="text-2xl font-bold">+</div>
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
