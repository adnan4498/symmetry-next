import React from "react";
import ImageSwipper from "../components/imageSwipper/ImageSwipper";
import irisLogo from "../../../public/iris-small-logo.webp";
import influenseLogo from "../../../public/influense-small-logo.webp";
import TextSlidingComponent from "../components/textSlidingComponent/TextSlidingComponent";
import AnimationAndImages from "../components/animationAndImagesComponent/AnimationAndImages";
import affiliationAnimation from "../../../public/symmetryAnimations/affiliation-animation-Rive-2.riv";
import symmetryImg from "../../../public/symmetry-swipper-img.webp";

const BrandsProducts = () => {
  {
    /******     Swipper Image Content     ******/
  }

  const hasH3 = "brands & products";
  const hasH2 = "specialists in your need";
  const hasP =
    "we weave technology-driven ideas into existence across a spectrum of specialized products and services within our four divisions.";
  const hasKnowMore = "explore our world --";

  const swipperContent = [
    {
      id: 0,
      img: irisLogo,
    },
    {
      id: 1,
      img: influenseLogo,
    },
    {
      id: 2,
      img: symmetryImg,
    },
    {
      id: 3,
      img: influenseLogo,
    },
    {
      id: 4,
      img: irisLogo,
    },
    {
      id: 5,
      img: influenseLogo,
    },
    {
      id: 6,
      img: symmetryImg,
    },
    {
      id: 7,
      img: influenseLogo,
    },
    {
      id: 8,
      img: irisLogo,
    },
    {
      id: 9,
      img: symmetryImg,
    },
    {
      id: 10,
      img: irisLogo,
    },
    {
      id: 11,
      img: symmetryImg,
    },
  ];

  const h3Size = "6xl";
  //   const slidesPerView = "5";
  const swipperGap = "60";

  {
    /******   Text Sliding Content   ******/
  }

  const sliderheading = "Clients";
  const sliderText = "Transformig Your";
  const sliderP =
    "for organizations on the journey towards innovation, growth and digital-first thinking, we assist in building and deploying the right solutions, integrated to business needs and customized for business success.";

  const knowMore = "see it for yourself --";

  {
    /******** Animation And Swipper Content  ********/
  }

  const aasH3 = "affiliation & partnerships";
  const aasH2 = "collaborating for <br /> growth";
  const aasP =
    "through our network, we are introducing you to a world that keeps pace with technology and change, enables simplicity from complexity and shape the future. ";
  const aasKnowmore = "know more --";

  return (
    <>
      <div id="brandsHomeScrollRef">
        <ImageSwipper
          hasH3={hasH3}
          hasH2={hasH2}
          hasP={hasP}
          hasKnowMore={hasKnowMore}
          swipperContent={swipperContent}
          h3Size={h3Size}
          slidesPerView={5}
          irisLogo={irisLogo}
          swipperGap={swipperGap}
        />
      </div>
      <div id="clientsHomeScrollRef">
        <TextSlidingComponent
          sliderheading={sliderheading}
          sliderText={sliderText}
          sliderP={sliderP}
          knowMore={knowMore}
          isBorder={true}
          isImageSwipper={true}
          slidesPerView={10}
          swipperGap={30}
          swipperContent={swipperContent}
        />
      </div>
      <div id="affiliationsHomeScrollRef">
        <AnimationAndImages
          aasH3={aasH3}
          aasH2={aasH2}
          aasP={aasP}
          aasKnowmore={aasKnowmore}
          swipperContent={swipperContent}
          slidesPerView={5}
          swipperGap={40}
          navigation={false}
          animation={affiliationAnimation}
        />
      </div>
    </>
  );
};

export default BrandsProducts;
