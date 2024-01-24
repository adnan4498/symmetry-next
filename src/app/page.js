"use client";
import { useEffect, useRef } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./homeComponents/AboutUs";
import BrandsProducts from "./homeComponents/BrandsProducts";
import BusinessDivision from "./homeComponents/BusinessDivision";
import DeliveringSection from "./homeComponents/DeliveringSection";
import HeritageSection from "./homeComponents/HeritageSection";
import InteractiveMarketing from "./homeComponents/InteractiveMarketing";
import { gsap } from "gsap";

export default function Home() {
  const navBlackDiv = useRef(null);

  useEffect(() => {
    const theDiv = navBlackDiv.current;
    const body = document.body

    gsap.to(navBlackDiv.current, {
      y: "1000px",
      duration: 2,
      ease: "power1.inOut",
      onComplete: () => {
        theDiv.style.display = "none";
        body.style.overflow = "visible"
      },
    });
  }, []);

  return (
    <>
      <div className="">
        <div
          id="blueDivId"
          ref={navBlackDiv}
          className="bg-black absolute w-full h-[100vh] z-50"
        ></div>{" "}
        <Navbar className="" />
        <DeliveringSection />
        <HeritageSection />
        <div className="md:pt-[300px]">
          <BusinessDivision />
        </div>
        {/* <InteractiveMarketing /> */}
        <BrandsProducts />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}
