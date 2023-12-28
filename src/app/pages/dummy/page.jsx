"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from 'react-lottie-player'
import aniamtion from '../../animation.json'
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const redDiv = useRef();
  
  const redDiv2 = useRef();

  useEffect(() => {
    gsap.to(redDiv.current, {
      scrollTrigger: {
        trigger: redDiv.current,
        // markers : true,
        // start : "20%"
      },
      x: 300
    });
  }, []);

  return (
    <>
<div className=" mt-5" ><Lottie
      loop
      animationData={aniamtion}
      play
      style={{ width: 350, height: 350 }}
    /></div>      
    </>
  );
};

export default Page;
