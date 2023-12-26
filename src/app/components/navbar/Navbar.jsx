"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.webp";
import hamburger from "../../../../public/hamburger-icon-3.png";
import gsap from 'gsap';

const Navbar = () => {

  return (
    <>
      <div className="bg-black fixed w-full z-50">
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
