"use client";
import React, { useEffect } from "react";
import TextSlidingComponent from "../components/textSlidingComponent/TextSlidingComponent";
import HeadingAndSwipper from "../components/headingAndSwipperComponent/HeadingAndSwipper";
import AnimationAndSwipper from "../components/animationAndSwipperComponent/AnimationAndSwipper";
import interactiveAnimation from "../../../public/symmetryAnimations/interactive-riv-animation-3.riv";
import mobilityAnimation from "../../../public/symmetryAnimations/mobility-Rive.riv";
import gsap from "gsap";

const BusinessDivision = () => {
  useEffect(() => {
    const body = document.body;

    body.style.overflow = "hidden";
  }, []);

  {
    /******* Headings and texts *******/
  }

  const transformationTitle = "transformation";
  const transformationHeading = "reinventing digital <br /> experiences";
  const transformationText =
    "digital Technology can move mountains, shape cultures and change people’s perceptions. We envision a future that leverages the best of technology to create transformative experiences that aren't possible without it.";
  const hasKnowmore = "know more --";
  const businessMarque = true;

  const commerceTitle = "commerce";
  const commerceHeading = "empowering efficient <br /> growth";
  const commerceText =
    "digital commerce lets you sell anywhere, anytime, and on any device. we help your customers find your products regardless of whether they are at home, in the office, or in line at the grocery store";

  const mobilityTitle = "mobility";
  const mobilityHeading = "embracing the mobile <br /> advantage";
  const mobilityText =
    "mobile technologies have transformed business processes and capabilities. we operate at the crossroads of mobility, digital technology and operations to help you create value for your customers ";

  const interactiveTitle = "interactive marketing";
  const interactiveHeading = "enhancing customer <br /> relationships";
  const interactiveText =
    "our unrivaled insights, innovative thinking, strategic approach, content services and technology solutions can help you create meaningful and lasting relationships with your customers.";
  const interactiveAnima = interactiveAnimation;

  const businessTitle = "business divisions";
  const businessText =
    "we provide digital products and services that solve today’s challenges by leveraging your organization’s unique potential to create tomorrow’s opportunities and deliver real business results.";

  const swipperContent = [
    {
      id: 0,
      h2: "digital strategy",
      text: "Personalizing brand, marketing and digital experiences to build authenticity, value, convenience and choice",
    },
    {
      id: 1,
      h2: "iot devices",
      text: "Envisioning a world of possibilities where all devices seamlessly connect, learn from each other and work together",
    },
    {
      id: 2,
      h2: "digital consultancy",
      text: "Combining technology expertise, human understanding and customer experience to create impactful digital transformations",
    },
    {
      id: 3,
      h2: "data science",
      text: "Turning disparate data into the driver for insights, decisions and revenue ",
    },
    {
      id: 4,
      h2: "technology consulting",
      text: "Addressing complex technology changes to deliver innovative solutions that enhance growth",
    },
    {
      id: 5,
      h2: "web , software & application",
      text: "Leveraging technology to tell stories that capture the user's imagination across digital channels, applications and platforms",
    },
  ];

  const slidesPerView = "3";
  const swipperGap = "20";

  const transformationSwipperShow = true;
  const commerceSwipperShow = true;

  return (
    <>
      <div id="businessHomeScrollRef" className="">
        <TextSlidingComponent
          businessTitle={businessTitle}
          businessText={businessText}
          slidesPerView={slidesPerView}
          businessMarque={businessMarque}
        />
        <HeadingAndSwipper
          transformationTitle={transformationTitle}
          transformationHeading={transformationHeading}
          transformationText={transformationText}
          hasKnowmore={hasKnowmore}
          swipperContent={swipperContent}
          slidesPerView={slidesPerView}
          swipperGap={swipperGap}
          knowMoreLink={"transformation"}
          transformationSwipperShow={transformationSwipperShow}
        />
        <AnimationAndSwipper
          interactiveTitle={interactiveTitle}
          interactiveHeading={interactiveHeading}
          interactiveText={interactiveText}
          aasKnowmore={"know more"}
          swipperContent={swipperContent}
          slidesPerView={slidesPerView}
          swipperGap={swipperGap}
          animation={interactiveAnima}
        />
        {/* <HeadingAndSwipper
          commerceTitle={commerceTitle}
          commerceHeading={commerceHeading}
          commerceText={commerceText}
          hasKnowmore={hasKnowmore}
          swipperContent={swipperContent}
          slidesPerView={slidesPerView}
          swipperGap={swipperGap}
          commerceSwipperShow={commerceSwipperShow}
        /> */}
        <AnimationAndSwipper
          mobilityTitle={mobilityTitle}
          mobilityHeading={mobilityHeading}
          mobilityText={mobilityText}
          aasKnowmore={"know more"}
          swipperContent={swipperContent}
          slidesPerView={slidesPerView}
          swipperGap={swipperGap}
          animation={mobilityAnimation}
        />
      </div>
      {/* <ImageSwipper /> */}
    </>
  );
};

export default BusinessDivision;
