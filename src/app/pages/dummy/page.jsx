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
    var colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];

    //initially colorize each box and position in a row
    gsap.set(".box", {
      backgroundColor: (i) => colors[i % colors.length],
      x: (i) => i * 50,
    });

    gsap.to(".box", {
      duration: 600,
      ease: "none",
      x: "+=500",
      modifiers: {
        x: gsap.utils.unitize((x) => x % 500),
      },
      repeat: -1,
      onUpdate: () => {
        document.querySelectorAll('.box').forEach((box, index) => {
          console.log(`Box ${index + 1}: ${gsap.getProperty(box, 'x')}`);
        });
      },
    });
    
  }, []);

  return (
    <>
      <div class="wrapper">
        <div class="boxes">
          <div class="box">1</div>
          <div class="box">2</div>
          <div class="box">3</div>
          <div class="box">4</div>
          <div class="box">5</div>
          <div class="box">6</div>
          <div class="box">7</div>
          <div class="box">8</div>
          <div class="box">9</div>
          <div class="box">10</div>
        </div>
      </div>
    </>
  );
};

export default Page;
