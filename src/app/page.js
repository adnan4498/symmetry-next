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
import startingAnimation from "../../public/symmetryAnimations/startingAnimation.json";
import { gsap } from "gsap";
import Lottie from "react-lottie-player";

export default function Home() {
  const homeStartAnimRef = useRef(null);
  const homeRiveAnimRef = useRef(null);

  useEffect(() => {
    /* the word "the" before animationRef is used to get a reference to animationRef. to be styled below in code. 
       refs cannot be stlyled directly but after making a reference, we can style them.*/
    const theHomeStartAnimRef = homeStartAnimRef.current;
    const body = document.body;

    gsap.to(homeStartAnimRef.current, {
      y: "700px",
      delay: 2.2,
      duration: 1,
      // ease: "power1.inOut",
      onComplete: () => {
        theHomeStartAnimRef.style.display = "none";
        body.style.overflow = "visible";
      },
    });

    const insideAnimation = gsap.timeline({
      repeat: 1,
      repeatDelay: 0,
      yoyo: true,
    });

    insideAnimation.from(homeRiveAnimRef.current, {
      duration: 0.7,
      opacity: 0,
    });

    insideAnimation.to(homeRiveAnimRef.current, {
      duration: 0.7,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <div className="">
        <div
          ref={homeStartAnimRef}
          className="bg-black absolute w-full h-[100vh] z-50"
        >
          <div
            className="bg-black flex justify-center items-center h-[100vh]"
            // style={{ transform: "translateY(700px)" }}
          >
            <div ref={homeRiveAnimRef} className="opacity-0 w-96 h-96">
              <Lottie
                loop
                animationData={startingAnimation}
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
      </div>
    </>
  );
}
