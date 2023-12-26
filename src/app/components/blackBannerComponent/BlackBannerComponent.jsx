import React from "react";
import square from "../../../../public/square-neon.png";
import Image from "next/image";

const BlackBannerComponent = ({aboutH2 , aboutText}) => {
  return (
    <div className="text-gray-200 bg-black ">
      <div className="mx-3 md:mx-12 flex justify-between">
        <div>
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl text-[#13a772]">{aboutH2}</h2>
          </div>
          <div className="md:w-[70%]">
            <p className="text-xs lg:text-sm leading-5 mt-3">
              {aboutText}
            </p>
          </div>
        </div>
        <div>
          <div className="md:block hidden tranform rotate-[15deg] pr-14">
            <Image src={square} alt="animation square" width={190} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackBannerComponent;
