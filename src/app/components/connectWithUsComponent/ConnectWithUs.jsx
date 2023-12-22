import React from "react";

const ConnectWithUs = ({bgColor , textColor}) => {
  console.log(bgColor , "bg-colorrr")
  return (
    <div className="mt-10 mb-16">
      <div className={`${textColor} ${bgColor} flex  justify-center items-center h-20 md:h-24 lg:h-28 text-center`}>
        <div className="md:w-[55%] lg:w-[100%]">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl leading-[20px]">
            connect with us today to transform your business
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
