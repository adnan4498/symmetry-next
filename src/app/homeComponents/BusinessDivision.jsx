import React from "react";
import TextSlidingComponent from "../components/textSlidingComponent/TextSlidingComponent";
import HeadingAndSwipper from "../components/headingAndSwipperComponent/HeadingAndSwipper";

const BusinessDivision = () => {

  const heading = "business divisions"
  const sliderText = "Skillfully solvi"
  const paragraph = "we provide digital products and services that solve today’s challenges by leveraging your organization’s unique potential to create tomorrow’s opportunities and deliver real business results."

  return (
    <>
      <TextSlidingComponent heading={heading} sliderText={sliderText} paragraph={paragraph}/>
      <HeadingAndSwipper />
    </>
  );
};

export default BusinessDivision;
