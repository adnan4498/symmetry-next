"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.webp";
import hamburger from "../../../../public/hamburger-icon-3.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const Navbar = () => {
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

            <div className="ss lg:block hidden">
              <ul className="flex text-[#13a772] gap-3 xl:gap-5 text-[1.2vw] 2xl:text-xl">
                <li>our heritage</li>
                <li>business divisions</li>
                <li>brands & products</li>
                <li>clients</li>
                <li>affiliations & partnerships</li>
              </ul>
            </div>
            <div>
              <Image
                src={hamburger}
                alt="hamburger"
                className="w-[10vw] lg:w-[6vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
