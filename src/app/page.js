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
  const webStartAnimationRef = useRef(null);
  const loaderRefHome = useRef(null);
  const lottieAnimationRef = useRef(null);

  // asd

  useEffect(() => {
    const webStartAnimation = webStartAnimationRef.current;
    const body = document.body;

    const animationtl = gsap.timeline({
      repeat : 1,
      repeatDelay : 0,
      yoyo : true
    })

    gsap.to(webStartAnimationRef.current, {
      y: "700px",
      delay: 5,
      duration: 2,
      // ease: "power1.inOut",
      onComplete: () => {
        webStartAnimation.style.display = "none";
        body.style.overflow = "visible";
      },
    });

    animationtl.from(lottieAnimationRef.current ,{
      duration : 1.5,
      opacity : 0,
    })

    animationtl.to(lottieAnimationRef.current ,{
      duration : 1.5,
      opacity : 1,
    })

  }, []);

  return (
    <>
      <div className="">
        <div
          ref={webStartAnimationRef}
          className="bg-black absolute w-full h-[100vh] z-50"
        >
          <div
            className="bg-black flex justify-center items-center h-[100vh]"
            // style={{ transform: "translateY(700px)" }}
            ref={loaderRefHome}
          >
            <div ref={lottieAnimationRef} className="opacity-0 w-96 h-96">
              <Lottie
                loop
                animationData={startingAnimation}
                play
                // style={{ width: 350, height: 350 }}
              />
            </div>
          </div>{" "}
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
