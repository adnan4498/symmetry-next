"use client";
import React from "react";
import BlackBannerComponent from "../../components/blackBannerComponent/BlackBannerComponent";
import Tabs from "../../components/tabs/Tabs";
import AnimationTextReversing from "../../components/animationTextReversing/AnimationTextReversing";
import Image from "next/image";
import square from "../../../../public/square-neon.png";
import ConnectWithUs from "../../components/connectWithUsComponent/ConnectWithUs";
import Footer from "../../components/footer/Footer";
import Lottie from "react-lottie-player";
import microsoftAnimation from "../../../../public/symmetryAnimations/microsoftAnimation.json";

const page = () => {
  const aboutH2 = "affiliations & partnerships";
  const aboutText =
    "through our network, we are integrating you with a world that keeps pace with technology and change, enables simplicity from complexity and shapes the future.";

  const tabsData = [
    {
      id: 0,
      item: "google",
    },
    {
      id: 1,
      item: "microsoft",
    },
    {
      id: 2,
      item: "alibaba",
    },
    {
      id: 3,
      item: "iso 9001:2015",
    },
  ];

  return (
    <>
      <div>
        <div>
          <BlackBannerComponent aboutH2={aboutH2} aboutText={aboutText} />
          <Tabs tabsData={tabsData} slidesPerView={4} />
        </div>

        <AnimationTextReversing>
          <div className="company-div flex flex-col gap-5 lg:w-6/12">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                google
              </h2>
            </div>
            <div className="text-gray-500 text-[14px] ">
              <p>
                Symmetry Group Limited is a Google Partner with expert-level
                Google Ad products knowledge. Partners receive training,
                support, and insights that keep their skills sharp and help
                drive campaign success and deliver higher ROIs.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
            <Lottie
              loop
              animationData={microsoftAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />{" "}
          </div>
        </AnimationTextReversing>

        <AnimationTextReversing flexDirection="row-reverse">
          <div className="company-div flex flex-col gap-5 lg:w-6/12">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                microsoft
              </h2>
            </div>
            <div className="text-gray-500 text-[14px] ">
              <p>
                Symmetry Group is a Microsoft Partner. This partnership helps
                the Company in bringing efficiency to its processes and
                enhancing its capabilities by providing an access to business
                guidance along with a pool of specialized training and marketing
                products, applications and tools from the tech giant.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
            <Lottie
              loop
              animationData={microsoftAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />{" "}
          </div>
        </AnimationTextReversing>

        <AnimationTextReversing>
          <div className="company-div flex flex-col gap-5 lg:w-6/12">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                ali baba
              </h2>
            </div>
            <div className="text-gray-500 text-[14px] ">
              <p>
                symmetry Group is a channel partner of Alibaba.com. Under the
                contract the company is responsible for:
              </p>
            </div>
            <div className="text-gray-500">
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="text-green-500 mr-1">O</span> promoting and
                  marketing the Alibaba.com International Website and the
                  Memberships
                </li>
                <li>
                  <span className="text-green-500 mr-1">O</span> soliciting,
                  sourcing & selling memberships
                </li>
                <li>
                  <span className="text-green-500 mr-1">O</span> providing
                  customer support services to the members including but not
                  limited to online and onsite support, customer enquiries,
                  complaints handling and other after-sales support as required
                  under the relevant customer care programs of alibaba.com
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
            <Lottie
              loop
              animationData={microsoftAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />{" "}
          </div>
        </AnimationTextReversing>

        <AnimationTextReversing flexDirection="row-reverse">
          <div className="company-div flex flex-col gap-5 lg:w-6/12">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                iso
              </h2>
            </div>
            <div className="text-gray-500 text-[14px] ">
              <p>
                the iso 9001:2015 standard certification pertains to quality
                management system within an organization. this framework helps
                organizations to base their operating standards on a number of
                quality management principles including a strong customer focus,
                the motivation and implication of top management, the process
                approach and continual improvement to ensure the customers get
                consistent, good-quality products and services.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
            <Lottie
              loop
              animationData={microsoftAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />{" "}
          </div>
        </AnimationTextReversing>

        <ConnectWithUs bgColor="bg-black" textColor="text-white" />
        <Footer />
      </div>
    </>
  );
};

export default page;
