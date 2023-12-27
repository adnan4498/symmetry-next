"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
      <div>
        <div className="flex justify-between px-10 py-5 bg-black text-white text-3xl">
          <div className="">LOGO</div>
          <div>Menu</div>
        </div>
        <div className="bg-black text-white h-60 px-10 py-10">
          <div className="mb-2">
            <h2 className="text-7xl">contact us</h2>
          </div>
          <div>
            <p>
              are you ready to discover for your business posbbieiek asdljaslkdj{" "}
              <br></br>
              asdasd askdasd asdas dasdkjasldk sad askdask sss.
            </p>
          </div>
        </div>
        <div>
          <div className="h-[1000px] bg-red-500 mt-5" ref={redDiv}>
            s
          </div>
          <div className="h-96 bg-blue-500 mt-5" ref={redDiv2}>s</div>
          <div className="h-96 bg-red-500 mt-5" ref={redDiv}>s</div>
          <div className="h-96 bg-red-500 mt-5" ref={redDiv}>s</div>
        </div>
      </div>
    </>
  );
};

export default Page;
