import React from "react";
import Image from "next/image";
import square from "../../../../public/square-neon.png";
import Tabs from "@/app/components/tabs/Tabs";
import AnimationTextReversing from "@/app/components/animationTextReversing/AnimationTextReversing";
import BlackBannerComponent from "@/app/components/blackBannerComponent/BlackBannerComponent";
import ConnectWithUs from "@/app/components/connectWithUsComponent/ConnectWithUs";
import Footer from "@/app/components/footer/Footer";

const page = () => {
  const aboutH2 = "brands & products";
  const aboutText =
    "we weave technology-driven ideas into existence across a spectrum of specialized products and services within our four divisions..";

  const tabsData = [
    {
      id: 0,
      item: "symmetry digital",
    },
    {
      id: 1,
      item: "iris digital",
    },
    {
      id: 2,
      item: "symmetry trade",
    },
    {
      id: 3,
      item: "coral",
    },
    {
      id: 4,
      item: "coral performance",
    },
    {
      id: 5,
      item: "appabilities",
    },
    {
      id: 6,
      item: "survit",
    },
    {
      id: 7,
      item: "mobits",
    },
    {
      id: 8,
      item: "influense.ai",
    },
  ];

  return (
    <>
      <div>
        <BlackBannerComponent aboutH2={aboutH2} aboutText={aboutText} />
        <Tabs tabsData={tabsData} slidesPerView={5} />

        <div>
          <div>
            <AnimationTextReversing>
              <div className="vision-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    Symmetry
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p className="">
                    pakistan’s premier full service digital marketing agency,
                    symmetry digital specializes in data-driven and
                    insights-oriented strategies. they are pioneer of innovation
                    and creativity who promise to create engaging brand
                    conversations, ideas that attract more customers, and great
                    experiences across all digital channels.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
                <Image src={square} width={200} alt="animation here" />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="row-reverse">
              <div className="vision-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    iris
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p className="">
                    a fast-paced company that is powered by bright minds and big
                    ideas, iris believes in the future of digital and offers a
                    wide range of digital services. they craft strategic plans,
                    create engaging user-experiences, and deliver exceptional
                    creative to build strong brands.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
                <Image src={square} width={200} alt="animation here" />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div className="vision-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    Symmetry trade
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p className="">
                    as an authorized channel partner & gold supplier of
                    alibaba.com, they act as a bridge between pakistani brands
                    and the world's largest online marketplace. symmetry trade
                    provides consultancy, knowledge, digital marketing tools and
                    services needed to succeed on the global stage.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
                <Image src={square} width={200} alt="animation here" />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="row-reverse">
              <div className="vision-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    coral
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p className="">
                    built on the belief that good insights lead to better
                    decisions, and better decisions lead to better businesses,
                    corral’s core strength lies in harnessing the power of data
                    to solve complex business problems with a strong commitment
                    to cutting-edge technology. we use data visualization,
                    analysis, big data analytics, machine learning, ai and deep
                    learning to bring data and insights to life.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
                <Image src={square} width={200} alt="animation here" />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div className="vision-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    coral performance
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p className="">
                    corral performance is a comprehensive and insightful unified
                    analytics platform that frees advertisers from manually
                    logging into different paid advertising platforms. it
                    provides performance visualization and insights to identify
                    online advertising performance, generate multi-dimensional
                    reports from raw information for advertisers on all of their
                    advertising channels by collecting data directly from
                    multiple sources, including facebook, google adwords, google
                    display network, youtube and more.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
                <Image src={square} width={200} alt="animation here" />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="row-reverse">
              <div className="vision-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    appabilities
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p className="">
                    delivering cutting-edge user interface design (ui) and user
                    experience (ux), appabilities builds world class mobile apps
                    for businesses and startups that want to create amazing user
                    experiences.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
                <Image src={square} width={200} alt="animation here" />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div className="vision-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    survit
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p className="">
                    survit is an end-to-end saas solution that enables
                    organizations to measure satisfaction level of their
                    customers at scale. the solution is based on csat method of
                    measuring customer satisfaction levels at sales & service
                    touchpoints. the solution is suitable for both external &
                    internal customers hence can be utilized across all
                    industries, specially banking and retail. the solution is
                    based on customer metrics and parameters that differentiate
                    a satisfied customer from a dissatisfied one. the solution
                    offers following key features:
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> mobile
                      interface
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> ui/ux
                      design to maximize engagement
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> qr reader
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>{" "}
                      conversational & customizable dashboard
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> p2p
                      comparision
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>{" "}
                      comprehensive reports
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
                <Image src={square} width={200} alt="animation here" />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="row-reverse">
              <div className="vision-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    mobits
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p className="">
                    mobits is a cloud-based platform to manage mobile marketing,
                    reporting and user engagement. it enables clients to manage
                    mobile marketing campaigns, run analytics & reports in
                    real-time and deliver push notifications to users. <br></br> <br></br> the
                    platform is a unique, white label, saas on-premise solution
                    that can leverage your existing infrastructure to deliver
                    real-time alerts, information, and communication from
                    customers to enterprise. this solution will improve any
                    company's business allowing them to reach consumers with
                    targeted content, messaging, coupons and alerts regarding
                    new products or sales coupons.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
                <Image src={square} width={200} alt="animation here" />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div className="vision-div flex flex-col gap-5 lg:w-6/12">
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                    influence.ai
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] ">
                  <p className="">
                  one-stop shop ai powered influencer marketing solution for the data-driven age. a unified influencer marketing platform to make discovery, engagement, audience analysis, campaign management, real-time reporting and growth simple while giving you access to over 100 million influencers.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
                <Image src={square} width={200} alt="animation here" />
              </div>
            </AnimationTextReversing>
          </div>
        </div>

        <ConnectWithUs bgColor="bg-black" textColor="text-white" />
        <Footer />
      </div>
    </>
  );
};

export default page;
