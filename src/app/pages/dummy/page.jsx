"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const Page = () => {
  const [isl, setIsl] = useState("");
  const [mul, setMul] = useState("");
  const router = useRouter();
  const pathName = usePathname();

  const islamabadRef = useRef(null);
  const multanRef = useRef(null);

  const togglePath = () => {
    setIsl("?islamabad");
    setMul("")
  };

  const togglePath2 = () => {
    setMul("?multan");
    setIsl("")
  };

  useEffect(() => {
    if(isl.length) {
        router.push(`${pathName}${isl}`, undefined, { shallow: true });
        console.log("isl length")
    }

    console.log(router.query,"inside")
    console.log(pathName,"path")

    if(mul.length) {
        router.push(`${pathName}${mul}`, undefined, { shallow: true });
        console.log("mul length")
    }

    if (pathName === "/pages/dummy?islamabad") {
      // Scroll down to Islamabad div
      console.log("the isl path")
      islamabadRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (pathName + mul === "/pages/dummy?multan") {
        // Scroll down to multan div
        console.log("the mul path")
        multanRef.current.scrollIntoView({ behavior: "smooth" });
      }
  }, [isl, mul]);

    
  return (
    <>
      <div>
        <div className="bg-red-500">
          <div className="py-10 px-10 flex justify-around">
            <div className="cursor-pointer">karachi</div>
            <div className="cursor-pointer">lahore</div>
            <div className="cursor-pointer" onClick={togglePath2}>multan</div>
            <div className="cursor-pointer" onClick={togglePath}>
              islamabad
            </div>
          </div>
        </div>

        <div className="bg-green-500 mt-10 h-96">karachi</div>
        <div className="bg-blue-500 mt-10 h-96">lahore</div>
        <div className="bg-orange-500 mt-10 h-96" ref={multanRef}>multan</div>
        <div className="bg-purple-500 mt-10 h-96" ref={islamabadRef}>
          islamabad
        </div>
      </div>
    </>
  );
};

export default Page;
