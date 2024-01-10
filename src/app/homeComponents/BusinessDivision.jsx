import React from "react";
import TextSlidingComponent from "../components/textSlidingComponent/TextSlidingComponent";
import HeadingAndSwipper from "../components/headingAndSwipperComponent/HeadingAndSwipper";
import AnimationAndSwipper from "../components/animationAndSwipperComponent/AnimationAndSwipper";
import interactiveAnimation from "../../../public/symmetryAnimations/interactive-riv-animation-3.riv";
import mobilityAnimation from "../../../public/symmetryAnimations/mobility-Rive.riv";
import gsap from "gsap";


const BusinessDivision = () => {

  {
    /******** Ease Slide Content  ********/
  }

  const sliderheading = "business divisions";
  const sliderText = "skillfully solving challanges";
  const sliderP =
    "we provide digital products and services that solve today’s challenges by leveraging your organization’s unique potential to create tomorrow’s opportunities and deliver real business results.";

  {
    /******** Heading And Swipper Content  ********/
  }
  {
    /******** ( has ) stands for Heading And Swipper  ********/
  }

  const hasH3 = "transformation";
  const hasH2 = "reinventing digital <br /> experiences";
  const hasP =
    "digital Technology can move mountains, shape cultures and change people’s perceptions. We envision a future that leverages the best of technology to create transformative experiences that aren't possible without it.";
  const hasKnowmore = "know more --";

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

  {
    /******** Animation And Swipper Content  ********/
  }
  {
    /******** ( aas ) stands for Animation And Swipper  ********/
  }

  const aasH3 = "interactive marketing";
  const aasH2 = "enhancing customer <br /> relationships";
  const aasP =
    "Our unrivaled insights, innovative thinking, strategic approach, content services and technology solutions can help you create meaningful and lasting relationships with your customers.";
  const aasKnowmore = "know more --";
  const interactiveAnima = interactiveAnimation;

  const slidesPerView = "3";
  const swipperGap = "20";

  return (
    <>
      <TextSlidingComponent
        sliderheading={sliderheading}
        sliderText={sliderText}
        sliderP={sliderP}
        slidesPerView={slidesPerView}
      />
      <HeadingAndSwipper
        hasH3={hasH3}
        hasH2={hasH2}
        hasP={hasP}
        hasKnowmore={hasKnowmore}
        swipperContent={swipperContent}
        slidesPerView={slidesPerView}
        swipperGap={swipperGap}
      />
      <AnimationAndSwipper
        aasH3={aasH3}
        aasH2={aasH2}
        aasP={aasP}
        aasKnowmore={aasKnowmore}
        swipperContent={swipperContent}
        slidesPerView={slidesPerView}
        swipperGap={swipperGap}
        animation={interactiveAnima}
      />
      <HeadingAndSwipper
        hasH3={hasH3}
        hasH2={hasH2}
        hasP={hasP}
        hasKnowmore={hasKnowmore}
        swipperContent={swipperContent}
        slidesPerView={slidesPerView}
        swipperGap={swipperGap}
      />
      <AnimationAndSwipper
        aasH3={"mobility"}
        aasH2={aasH2}
        aasP={aasP}
        aasKnowmore={aasKnowmore}
        swipperContent={swipperContent}
        slidesPerView={slidesPerView}
        swipperGap={swipperGap}
        animation={mobilityAnimation}
      />
      {/* <ImageSwipper /> */}
    </>
  );
};

export default BusinessDivision;
