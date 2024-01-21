import React from "react";

const AboutUs = ({titleWidth , autoMx}) => {
  return (
    <div>
      <div id="contactUsHomeScrollRef" className="pb-10 border-b border-green-400 ">
        <div className="text-black">
          <div className={`text-xl sm:text-6xl lg:text-5xl text-center w-[100%] pillat-normal ${titleWidth} ${autoMx}`}>
            <h2>connect with us today to transform your business</h2>
          </div>
          <div className="text-center text-gray-600 sm:mt-12 mt-4 sm:text-lg lg:text-2xl lg:flex justify-center items-center gap-10 lg:gap-[12vw] pillat-normal ">
            <div>
              <h3>+92 21 3517 1991</h3>
              <p>phone</p>
            </div>
            <div className="">
              <h3>info@symmetrygroup.biz</h3>
              <p>email</p>
            </div>
          </div>
        </div>

        <div className="text-black my-10 mx-5 flex flex-col lg:flex-row lg:justify-center gap-5 lg:mt-16 lg:gap-[15vw] pillat-normal">
          <div className="flex flex-col gap-5 lg:w-[20%]">
            <div className="border-b border-gray-300 px-3 pb-1">
              <div>
                <h2>first name</h2>
              </div>
              <div className=" mt-3">
                <input placeholder="enter your first name" />
              </div>
            </div>
            <div className="border-b border-gray-300 px-3 pb-1">
              <div>
                <h2>last name</h2>
              </div>
              <div className=" mt-3">
                <input placeholder="enter your first name" />
              </div>
            </div>
            <div className="border-b border-gray-300 px-3 pb-1">
              <div>
                <h2>email</h2>
              </div>
              <div className="mt-3">
                <input placeholder="enter your first name" />
              </div>
            </div>

            <div className="border-b border-gray-300 px-3 pb-1">
              <div>
                <h2>mobile</h2>
              </div>
              <div className="mt-3">
                <input placeholder="+123 enter your mobile number" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:w-[20%]">
            <div className="border-b border-gray-300 px-3 pb-1">
              <div>
                <h2>company</h2>
              </div>
              <div className="mt-3">
                <input placeholder="enter your first name" />
              </div>
            </div>

            <div className="border-b border-gray-300 px-3 pb-1">
              <div>
                <h2>country</h2>
              </div>
              <div className="mt-3">
                <input placeholder="select your country" />
              </div>
            </div>

            <div className="border-b border-gray-300 px-3 pb-1">
              <div>
                <h2>message</h2>
              </div>
              <div className="mt-3">
                <input placeholder="type your message" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 ">
          <div className="border border-gray-400 rounded-lg w-40 flex justify-center items-center pillat-normal cursor-pointer lets-discuss-btn">
            <button className="py-2">let's discuss</button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs;
