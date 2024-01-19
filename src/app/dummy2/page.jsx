"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const Page = () => {
  const [toggleGsap, setToggleGsap] = useState(true);
  const redDivRef = useRef(null);

  // const toggleState = () => {};
  // useEffect(() => {
  // }, [setToggleGsap]);
  console.log(toggleGsap, "Outsite toggling");
  
  const gsapToggleFunc = () => {
    console.log(toggleGsap,"insert");
    setToggleGsap(!toggleGsap); 
    
    gsap.to(redDivRef.current, {
      x: toggleGsap ? 200 : 0,
      duration: 1,
      opacity: toggleGsap ? 0 : 1,
    });
    
    console.log(toggleGsap,"insert2");
  };

  return (
    <>
      <div className="mt-20 ml-20">
        <div
          ref={redDivRef}
          onClick={() => {
            gsapToggleFunc();
            // toggleState();
          }}
          className="bg-red-500 w-20 h-20"
        >
          1
        </div>
      </div>
    </>
  );
};

export default Page;
