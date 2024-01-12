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
gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const Navbar = () => {
  const [activeBg, setActiveBg] = useState(0);
  const navRef = useRef();

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
      paused: true,
    });

    // ScrollTrigger for the navigation
    // ScrollTrigger.create({

    // });

    // ScrollTrigger for the images
    // gsap.utils.toArray("img").forEach(function (elem) {
    //   ScrollTrigger.create({
    //     trigger: elem,
    //     start: "top 80%",
    //     end: "top -100px",
    //     onEnter: () =>
    //       gsap
    //         .timeline()
    //         .to(elem, { autoAlpha: 1 })
    //         .from(elem, { y: "+=50" }, 0),
    //     onEnterBack: () => gsap.timeline().to(elem, { autoAlpha: 1, y: 0 }),
    //     onLeave: () => gsap.timeline().to(elem, { autoAlpha: 0, y: "-=50" }),
    //     onLeaveBack: () => gsap.timeline().set(elem, { autoAlpha: 0, y: 0 }),
    //   });
    // });
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
                  className="w-[45vw] md:w-[30vw] lg:w-[25vw]"
                />
              </div>
            </Link>
            {liItems.map((item, index) => (
              <>
                <div className="ss pillat-thin lg:block hidden">
                  <ul className="flex items-center gap-3 xl:gap-5 text-[1.2vw] 2xl:text-xl cursor-pointer">
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
            <div>
              <div class="menu cross menu--1">
                <label>
                  <input type="checkbox" />
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="30" />
                    <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                    <path class="line--2" d="M0 50h70" />
                    <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
