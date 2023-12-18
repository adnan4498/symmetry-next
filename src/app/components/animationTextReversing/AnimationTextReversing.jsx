import React from "react";

const AnimationTextReversing = ({ children, flexDierction }) => {
  return (
    <>
      <div className="mx-3 md:mx-12 mt-10">
        <div className={`lg:flex justify-between lg:flex-${flexDierction}`}>
            {children}
          </div>
      </div>
    </>
  );
};

export default AnimationTextReversing;
