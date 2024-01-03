"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Lottie from "react-lottie-player";
// import animation from "../../../symmetryAnimations/animation.json";
import "../../homeComponents/Dummy.css";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <>
      <div class="marquee">
        <ul class="marquee-content gap-10">
          <li className="!text-[160px] !2xl:text-[200px] ">skillfully</li>
          <li className="!text-[160px] !2xl:text-[200px] ">solving</li>
          <li className="!text-[160px] !2xl:text-[200px]  ">challenges</li> 
          <li className="!text-[160px] !2xl:text-[200px] ">skillfully</li>
          <li className="!text-[160px] !2xl:text-[200px] ">solving</li>
          <li className="!text-[160px] !2xl:text-[200px] ">challenges</li>
          <li className="!text-[160px] !2xl:text-[200px] ">skillfully</li>
          <li className="!text-[160px] !2xl:text-[200px] ">solving</li>
          <li className="!text-[160px] !2xl:text-[200px] ">challenges</li>
          <li className="!text-[160px] !2xl:text-[200px] ">skillfully</li>
          <li className="!text-[160px] !2xl:text-[200px] ">solving</li>
          <li className="!text-[160px] !2xl:text-[200px] ">challenges</li>
        </ul>
      </div>
    </>
  );
};

export default Page;
