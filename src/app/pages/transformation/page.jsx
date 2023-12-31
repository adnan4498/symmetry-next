"use client"
import React from "react";
import Image from "next/image";
import square from "../../../../public/square-neon.png";
import Tabs from "../../components/tabs/Tabs";
import AnimationTextReversing from "../../components/animationTextReversing/AnimationTextReversing";
import BlackBannerComponent from "../../components/blackBannerComponent/BlackBannerComponent";
import ConnectWithUs from "../../components/connectWithUsComponent/ConnectWithUs";
import Footer from "../../components/footer/Footer";
import Lottie from "react-lottie-player";
import dataScienceAnimation from "../../../../public/symmetryAnimations/dataScienceAnimation.json";
import webSoftwareAnimation from "../../../../public/symmetryAnimations/webSoftwareAnimation.json";
import iotAnimation from "../../../../public/symmetryAnimations/iotAnimation.json";
import digitalAnimation from "../../../../public/symmetryAnimations/digitalStrategy.json";
import techConsultingAnimation from "../../../../public/symmetryAnimations/techConsultingAnimation.json";
import consultancyAnimation from "../../../../public/symmetryAnimations/consultancyAnimation.json";

const page = () => {
  const aboutH2 = "transformation";
  const aboutText =
    "Digital Technology can move mountains, shape culture, and change people’s perceptions. We envision a future that leverages the best of technology to transformative experiences that aren't possible without it.";

  const tabsData = [
    {
      id: 0,
      item: "data science",
    },
    {
      id: 1,
      item: "web,software & application",
    },
    {
      id: 2,
      item: "iot devices",
    },
    {
      id: 3,
      item: "digital strategy",
    },
    {
      id: 4,
      item: "technology consulting",
    },
    {
      id: 5,
      item: "digital consultancy",
    },
    {
      id: 6,
      item: "investor contacts",
    },
  ];

  return (
    <>
      <div>
        <div className="">
          <BlackBannerComponent aboutH2={aboutH2} aboutText={aboutText} />
          <Tabs tabsData={tabsData} slidesPerView={5} />

          <div className="my-10">
            <AnimationTextReversing>
              <div className="company-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    data science
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p>
                    data makes insight actionable. your data is often scattered
                    across multiple sources and formats. we help you make sense
                    of disparate data, turning it into the key driver for
                    insights, decisions and revenue.
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> data
                      organization
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> data
                      management architecture
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> business &
                      analytics
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> business
                      intelligence dashboards
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> automation
                      & artificial intelligence
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
                <Lottie
                  loop
                  animationData={dataScienceAnimation}
                  play
                  // style={{ width: 350, height: 350 }}
                />{" "}
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="row-reverse">
              <div className="company-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    web, software & application
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p>
                    we love leveraging technology to tell stories that capture
                    user's imagination and help brands succeed. we create out of
                    the box interactive solutions that keep your audience
                    engaged across channels, applications and platforms.
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> needs
                      assessment & advising
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> application
                      modernization & upgradation
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> social &
                      hyper gaming
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> ux/ui
                      design
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> ar/vr
                      implementation & integration
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>{" "}
                      development, deployment & maintenance
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
              <Lottie
                  loop
                  animationData={webSoftwareAnimation}
                  play
                  // style={{ width: 350, height: 350 }}
                />              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div className="company-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    iot devices
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p>
                    we envision a world where all our devices seamlessly
                    connect, learn from each other, and work together. a world
                    where more is possible
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> commerce
                      devices
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> connected
                      technology consulting
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
              <Lottie
                  loop
                  animationData={iotAnimation}
                  play
                  // style={{ width: 350, height: 350 }}
                />               </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="row-reverse">
              <div className="company-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    digital strategy
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p>
                    technology and data are the bridges between new media and
                    how consumers live their lives. with insights, we can
                    personalize your brand, marketing and digital experiences
                    for physical, digital and virtual worlds, to empower your
                    customers with authenticity, value, convenience and choice.
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> brand
                      strategy
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> digital
                      marketing strategy
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> digital
                      customer engagement strategy
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> ux/ui
                      design
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> ar/vr
                      implementation & integration
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>{" "}
                      development, deployment & maintenance
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
              <Lottie
                  loop
                  animationData={digitalAnimation}
                  play
                  // style={{ width: 350, height: 350 }}
                />                </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div className="company-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    technology consulting
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p>
                    blockchain, metaverse, cryptocurrency and nfts are more than
                    just buzz words for us. we address complex technology
                    changes and navigate you to greater success, helping you to
                    look beyond the obvious and deliver innovative,
                    information-based solutions that enhance your growth.
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> new &
                      emerging technology
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> technology
                      training
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> tech
                      management
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
              <Lottie
                  loop
                  animationData={techConsultingAnimation}
                  play
                  // style={{ width: 350, height: 350 }}
                />                 </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="row-reverse">
              <div className="company-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    digital consulting
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p>
                    as the world shifts to a digital economy and virtual social
                    networks, we help your business adapt quickly and stay ahead
                    of the game. we combine technology expertise with a deep
                    understanding of human behavior and customer experience to
                    ensure your digital transformations are impactful and
                    successful in meeting business goals.
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> new &
                      emerging technology
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> technology
                      training
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> tech
                      management
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
              <Lottie
                  loop
                  animationData={consultancyAnimation}
                  play
                  // style={{ width: 350, height: 350 }}
                />                 </div>
            </AnimationTextReversing>
          </div>

          <ConnectWithUs bgColor="bg-black" textColor="text-white" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
