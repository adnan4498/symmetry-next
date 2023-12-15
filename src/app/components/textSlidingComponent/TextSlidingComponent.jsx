import React from 'react'

const TextSlidingComponent = ({heading , sliderText , paragraph }) => {
  return (
    <div>
    <div className="mx-3 mb-10 mt-36 md:mx-12">
      <div className="">
        <h2 className="text-gray-600 text-3xl">{heading}</h2>
      </div>

      <div className="mt-2">
        <h2 className="sm:text-[10vw] text-5xl my-0 text-[#13a772] leading-[10vw]">
          {sliderText}
        </h2>
      </div>


      <div className="sm:w-[80%] lg:max-w-[550px]">
          <p className="text-xs lg:text-sm text-gray-600 font-[300] mt-3 leading-[16px]">
            {paragraph}
          </p>
        </div>

      {/* <div className="flex justify-center items-center my-20">
        <h2 className="text-5xl md:text-6xl  text-[#13a772]">Swipper Here</h2>
      </div> */}
    </div>
  </div>
  )
}

export default TextSlidingComponent