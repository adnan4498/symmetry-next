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
import startingAnimation from "../../public/symmetryAnimations/starting-animation.riv";
import { gsap } from "gsap";
import Lottie from "react-lottie-player";
import RootLayout from "./layout";
import Rive from "@rive-app/react-canvas";

export default function Home() {
  const homeStartAnimRef = useRef(null);
  const homeRiveAnimRef = useRef(null);

  useEffect(() => {
    // Scroll to the top of the page when unmount / refresh
    window.scrollTo(0, 0);

    /* the word "the" before animationRef is used to get a reference to animationRef. to be styled below in code. 
       refs cannot be stlyled directly but after making a reference, we can style them.*/
    const theHomeStartAnimRef = homeStartAnimRef.current;
    const body = document.body;

    gsap.to(homeStartAnimRef.current, {
      y: "850px",
      delay: 2.5,
      duration: 0.9,
      // ease: "power1.inOut",
      onComplete: () => {
        theHomeStartAnimRef.style.display = "none";
        body.style.overflow = "visible";
      },
    });

    /* inside animation is the Rive animation being rendered in black animation */

    const insideAnimation = gsap.timeline({
      repeat: 1,
      repeatDelay: 0,
      yoyo: true,
    });

    insideAnimation.from(homeRiveAnimRef.current, {
      duration: 0.9,
      opacity: 0,
    });

    insideAnimation.to(homeRiveAnimRef.current, {
      duration: 0.9,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <div className="">
        <div
          ref={homeStartAnimRef}
          className="bg-black absolute w-full h-[120vh] z-50"
        >
          <div
            className="bg-black flex justify-center items-center h-[100vh]"
            // style={{ transform: "translateY(700px)" }}
          >
            <div ref={homeRiveAnimRef} className="opacity-0 w-96 h-96">
              <Rive
                src={startingAnimation}
                loop
                play
                // style={{ width: 350, height: 350 }}
              />
            </div>
          </div>
        </div>

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

        {/* <RootLayout rootProp={rootProp} /> */}
      </div>
    </>
  );
}
