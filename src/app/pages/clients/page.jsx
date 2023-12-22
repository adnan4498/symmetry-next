import React from "react";
import Image from "next/image";
import square from "../../../../public/square-neon.png";
import BlackBannerComponent from "../../components/blackBannerComponent/BlackBannerComponent";
import Tabs from "../../components/tabs/Tabs";
import SimpleSwipper from "../../components/simpleSwipper/SimpleSwipper";
import ConnectWithUs from "../../components/connectWithUsComponent/ConnectWithUs";
import Footer from "../../components/footer/Footer";
import jazzLogo from "../../../../public/jazz-logo.webp";
import hblLogo from "../../../../public/hbl-logo.webp";
import peekFreansLogo from "../../../../public/peek-freans-logo.webp";
import realEstateLogo from "../../../../public/real-estate-logo.webp";
import pharmaceuticalLogo from "../../../../public/pharmaceutical-logo.webp"
import othersKhaadiLogo from "../../../../public/others-khaadi-logo.webp"

const page = () => {
  const aboutH2 = "clients";
  const aboutText =
    "for organizations on the journey towards innovation, growth and digital-first thinking, we assist in building and deploying the right solutions, integrated to business needs and customized for business success.";

  const tabsData = [
    {
      id: 0,
      item: "telecom",
    },
    {
      id: 1,
      item: "banking & finance",
    },
    {
      id: 2,
      item: "fmcg",
    },
    {
      id: 3,
      item: "coral",
    },
    {
      id: 4,
      item: "real estate",
    },
    {
      id: 5,
      item: "pharmaceuical",
    },
    {
      id: 6,
      item: "others",
    },
  ];

  const telecomSwipperContent = [
    {
      id: 0,
      img: jazzLogo,
    },
    {
      id: 1,
      img: jazzLogo,
    },
    {
      id: 2,
      img: jazzLogo,
    },
    {
      id: 3,
      img: jazzLogo,
    },
    {
      id: 4,
      img: jazzLogo,
    },
    {
      id: 5,
      img: jazzLogo,
    },
    {
      id: 6,
      img: jazzLogo,
    },
    {
      id: 7,
      img: jazzLogo,
    },
    {
      id: 8,
      img: jazzLogo,
    },
  ];

  const bankingSwipperContent = [
    {
      id: 0,
      img: hblLogo,
    },
    {
      id: 1,
      img: hblLogo,
    },
    {
      id: 2,
      img: hblLogo,
    },
    {
      id: 3,
      img: hblLogo,
    },
    {
      id: 4,
      img: hblLogo,
    },
    {
      id: 5,
      img: hblLogo,
    },
    {
      id: 6,
      img: hblLogo,
    },
    {
      id: 7,
      img: hblLogo,
    },
    {
      id: 8,
      img: hblLogo,
    },
  ];

  const fmcgSwipperContent = [
    {
      id: 0,
      img: peekFreansLogo,
    },
    {
      id: 1,
      img: peekFreansLogo,
    },
    {
      id: 2,
      img: peekFreansLogo,
    },
    {
      id: 3,
      img: peekFreansLogo,
    },
    {
      id: 4,
      img: peekFreansLogo,
    },
    {
      id: 5,
      img: peekFreansLogo,
    },
    {
      id: 6,
      img: peekFreansLogo,
    },
    {
      id: 7,
      img: peekFreansLogo,
    },
    {
      id: 8,
      img: peekFreansLogo,
    },
  ];

  const realEstateContent = [
    {
      id: 0,
      img: realEstateLogo,
    },
    {
      id: 1,
      img: realEstateLogo,
    },
  ];

  const pharmaceuticalContent = [
    {
      id: 0,
      img : pharmaceuticalLogo,
    },
    {
      id: 1,
      img : pharmaceuticalLogo,
    },
    {
      id: 2,
      img : pharmaceuticalLogo,
    },
  ]

  const othersSwipperContent = [
    {
      id: 0,
      img: othersKhaadiLogo,
    },
    {
      id: 1,
      img: othersKhaadiLogo,
    },
    {
      id: 2,
      img: othersKhaadiLogo,
    },
    {
      id: 3,
      img: othersKhaadiLogo,
    },
    {
      id: 4,
      img: othersKhaadiLogo,
    },
    {
      id: 5,
      img: othersKhaadiLogo,
    },
    {
      id: 6,
      img: othersKhaadiLogo,
    },
    {
      id: 7,
      img: othersKhaadiLogo,
    },
    {
      id: 8,
      img: othersKhaadiLogo,
    },
  ];

  return (
    <>
      <div>
        <BlackBannerComponent aboutH2={aboutH2} aboutText={aboutText} />
        <Tabs tabsData={tabsData} slidesPerView={5} />

        <div className="md:mx-12 sm:ml-2 ml-2">
          <div className="mx-auto lg:mt-10 ">
            <h2 className="text-4xl lg:text-6xl mt-10">telecom</h2>
            <div className="w-[90%] mx-auto sm:mt-12 mt-3">
              <SimpleSwipper
                swipperContent={telecomSwipperContent}
                slidesPerView={7}
                swipperGap={50}
              />
            </div>
          </div>
        </div>

        <div className="md:mx-12 sm:ml-2 ml-2 mt-14">
          <div className="mx-auto">
            <h2 className="text-4xl lg:text-6xl">banking & finance</h2>
            <div className="w-[90%] mx-auto sm:mt-12 mt-3">
              <SimpleSwipper
                swipperContent={bankingSwipperContent}
                slidesPerView={7}
                swipperGap={50}
              />
            </div>
          </div>
        </div>

        <div className="md:mx-12 sm:ml-2 ml-2 mt-14">
          <div className="mx-auto lg:mt-10 ">
            <h2 className="text-4xl lg:text-6xl">fmcg</h2>
            <div className="w-[90%] mx-auto sm:mt-12 mt-3">
              <SimpleSwipper
                swipperContent={fmcgSwipperContent}
                slidesPerView={7}
                swipperGap={50}
              />
            </div>
          </div>
        </div>

        <div className="md:mx-12 sm:ml-2 ml-2 mt-14">
          <div className="mx-auto lg:mt-10 ">
            <h2 className="text-4xl lg:text-6xl">real estate</h2>
            <div className="w-[90%] mx-auto flex items-center gap-11 mt-12">
              {realEstateContent.map((item, index) => (
                <>
                  <div className="">
                  <div className="border border-gray-400 rounded-md  ">
                      <div className="flex justify-center items-center py-3 px-3 ">
                        <Image src={item.img} className="lg:w-[7vw]"/>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="md:mx-12 sm:ml-2 ml-2 mt-14 lg:mt-44">
          <div className="mx-auto lg:mt-10 ">
            <h2 className="text-4xl lg:text-6xl">pharmaceutical</h2>
            <div className="w-[90%] mx-auto flex items-center gap-11 mt-12">
              {pharmaceuticalContent.map((item, index) => (
                <>
                  <div className="">
                  <div className="border border-gray-400 rounded-md  ">
                      <div className="flex justify-center items-center py-3 px-3 ">
                        <Image src={item.img} className="lg:w-[7vw]"/>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>


        <div className="md:mx-12 sm:ml-2 ml-2 mt-14 lg:mt-44">
          <div className="mx-auto lg:mt-10 ">
            <h2 className="text-4xl lg:text-6xl">others</h2>
            <div className="w-[90%] mx-auto sm:mt-12 mt-3">
              <SimpleSwipper
                swipperContent={othersSwipperContent}
                slidesPerView={7}
                swipperGap={50}
              />
            </div>
          </div>
        </div>

        <ConnectWithUs bgColor="bg-black" textColor="text-white" />
        <Footer />
      </div>
    </>
  );
};

export default page;
