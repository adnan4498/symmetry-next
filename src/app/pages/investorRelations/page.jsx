"use client";
import AnimationTextReversing from "../../components/animationTextReversing/AnimationTextReversing";
import BlackBannerComponent from "../../components/blackBannerComponent/BlackBannerComponent";
import Tabs from "../../components/tabs/Tabs";
import React from "react";
import Image from "next/image";
import CollapsibleComp from "../../components/collapsibleComponent/Collapsible";
import square from "../../../../public/square-neon.png";
import pdfImg from "../../../../public/pdf-img.png";
import disclaimerImg from "../../../../public/disclaimer-img.png"
import ConnectWithUs from "../../components/connectWithUsComponent/ConnectWithUs";
import Lottie from "react-lottie-player";
import Footer from "../../components/footer/Footer";
import investorinformationAnimation from "../../../../public/symmetryAnimations/investorInformationAnimation.json"
import governanceAnimation from "../../../../public/symmetryAnimations/governanceAnimation.json"
import financialAnimation from "../../../../public/symmetryAnimations/financialAnimation.json"
import corporateAnimation from "../../../../public/symmetryAnimations/corporateBriefings.json"
import noticesAnimation from "../../../../public/symmetryAnimations/noticesAnimation.json"
import importantAnimation from "../../../../public/symmetryAnimations/importantAnimation.json"
import contactAnimation from "../../../../public/symmetryAnimations/contactsAnimation.json"

const page = () => {
  const aboutH2 = "investors relations";
  const aboutText ="we are dedicated to providing timely and accurate information about our company's performance, financial health, and strategic initiatives. explore the resources here to stay informed and connected as we navigate the journey of growth together.";

  const bgColor = "bg-black"
  const textColor = "text-white"

  const tabsData = [
    {
      id: 0,
      item: "copy information",
    },
    {
      id: 1,
      item: "governance",
    },
    {
      id: 2,
      item: "financial reports",
    },
    {
      id: 3,
      item: "corporate briefings",
    },
    {
      id: 4,
      item: "notices & annoucements",
    },
    {
      id: 5,
      item: "important documents",
    },
    {
      id: 6,
      item: "investor contacts",
    },
  ];

  const invesorsInfo = [
    {
      id: 0,
      title: "status of company",
      desc: "public limited company",
    },
    {
      id: 1,
      title: "company registration",
      desc: "0078443",
    },
    {
      id: 2,
      title: "company national tax number",
      desc: "3935931",
    },
    {
      id: 3,
      title: "symbol at psx",
      desc: "sym",
    },
    {
      id: 4,
      title: "head office",
      desc: "56-A, Street 2, Khalid Commercial Area, Phase 7 Ext., DHA, Karachi",
    },
    {
      id: 5,
      //   title: "other offices",
      title: (
        <div className="flex justify-between flex-col h-[95%]">
          <div>other offices</div>
          <div>auditors</div>
        </div>
      ),
      desc: (
        <div className="text-gray-500 font-[400]">
          islamabad:{" "}
          <b>
            <span className="text-black">
              {" "}
              Shahwaiz Center Plot No.8-C Sector F-8 Markaz, Islamabad{" "}
            </span>{" "}
          </b>
          <br />
          lahore:{" "}
          <b>
            {" "}
            <span className="text-black">
              {" "}
              2nd Floor, 215 FF, DHA, Phase 4, Lahore, 54000.{" "}
            </span>
          </b>
          <div className="font-semibold text-black mt-10">
            KPMG Taseer Hadi & Company Chartered Accountants
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "legal counsel",
      desc: "pinjani & vadria lawyers",
    },
    {
      id: 7,
      title: "share register",
      desc: "m/s. f d registrar (pvt) limited, saima trade tower, suit 1705 – a. 17th floor, i.i chundrigar rd, karachi",
    },
    {
      id: 8,
      title: "bankers",
      desc: "bank al habib limited js bank limited mcb bank limited",
    },
  ];

  const boardMembers = [
    {
      id: 0,
      name: "mr.zaheer h.dodhia",
      post: "chairman",
    },
    {
      id: 1,
      name: "ms.musharaf hai",
      post: "independent & non-executive director",
    },
    {
      id: 2,
      name: "mr.najeeb agarwalla",
      post: "independent & non-executive director",
    },
    {
      id: 3,
      name: "mr.asim zafar",
      post: "independent & non-executive director",
    },
    {
      id: 4,
      name: "mr.jibran jamshad",
      post: "independent & non-executive director",
    },
    {
      id: 5,
      name: "mr.adil ahmed",
      post: "chairman",
    },
    {
      id: 6,
      name: "mr.sarocsh ahmed",
      post: "chairman",
    },
  ];

  const auditCommitte = [
    {
      id: 0,
      name: "mr.najeeb agarwalla",
      post: "chairperson",
    },
    {
      id: 1,
      name: "mr.zaheer h.dodhia",
      post: "member",
    },
    {
      id: 2,
      name: "mr.asim zafar",
      post: "member",
    },
  ];

  const remunirationCommitte = [
    {
      id: 0,
      name: "ms.musharaf hai",
      post: "chairperson",
    },
    {
      id: 1,
      name: "ms.jibran jamshad",
      post: "member",
    },
    {
      id: 2,
      name: "ms.sarocsh ahmed",
      post: "member",
    },
  ];

  const financialReportsData = [
    {
      id: 0,
      title: (
        <>
          <div className="flex justify-between gap-5 border-b border-green-400 mt-2 md:text-lg">
            <div>2024</div>
            <div>+</div>
          </div>
        </>
      ),
      firstQuarter: "1st quarter",
    },
    {
      id: 1,
      title: (
        <>
          <div className="flex justify-between gap-5 border-b border-green-400 mt-2 md:text-lg">
            <div>2023</div>
            <div>+</div>
          </div>
        </>
      ),
      firstQuarter: "1st quarter",
      secondQuarter: "2nd quarter",
      thirdQuarter: "3rd quarter",
      annualReport: "annual report",
    },
    {
      id: 2,
      title: (
        <>
          <div className="flex justify-between gap-5 border-b border-green-400 mt-2 md:text-lg">
            <div>2022</div>
            <div>+</div>
          </div>
        </>
      ),
      firstQuarter: "1st quarter",
      thirdQuarter: "3rd quarter",
      annualReport: "annual report",
    },
    {
      id: 3,
      title: (
        <>
          <div className="flex justify-between gap-5 border-b border-green-400 mt-2 md:text-lg">
            <div>2021</div>
            <div>+</div>
          </div>
        </>
      ),
      annualReport: "annual report",
    },
  ];

  const corporateBrifiengsData = [
    {
      id: 0,
      title: (
        <>
          <div className="flex justify-between gap-5 border-b border-green-400 mt-2 md:text-lg">
            <div>2023</div>
            <div>+</div>
          </div>
        </>
      ),
      briefing: "briefing 2023",
    },
  ];

  const noticesAndAnnouncementsData = [
    {
      id: 0,
      title: (
        <>
          <div className="flex justify-between gap-5 border-b border-green-400 mt-2 md:text-lg">
            <div>2023</div>
            <div>+</div>
          </div>
        </>
      ),
      agm: "2023",
      boardMeeting: "board meeting 2023",
      financialResults: "financial results 2023",
      disclosureInterest: "disclosure interest 18 oct 2023",
      materialInfo: "material info 10 oct 2023",
      materialInfo2: "material info 05 sep 2023",
    },
  ];

  const importantDocumentsData = [
    {
      id: 0,
      companyProfile: "company profile",
      requestLetter: "request letter for financial statements through email",
      requestLetter2: "request letter for annual report through hard copy",
      dividened: "e-devidend mandate letter",
    },
  ];

  const investorContacts = [
    {
      id: 0,
      title: "comapany secretary",
      desc: "mr.ayaz ahmed",
    },
    {
      id: 1,
      title: "address",
      desc: "56-a, street 2, khalid commercial area, phase 7 ext., dha,karachi",
    },
    {
      id: 2,
      title: "phone",
      desc: "+92 21 3517 1991",
    },
    {
      id: 3,
      title: "email",
      desc: "info@symmetrygroup.biz",
    },
  ];

  return (
    <>
      <div>
        <BlackBannerComponent aboutH2={aboutH2} aboutText={aboutText} />
        <Tabs tabsData={tabsData} slidesPerView={4} />

        <AnimationTextReversing>
          <div className="vision-div flex flex-col gap-5 lg:w-6/12 my-10">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl 2xl:text-7xl font-light pillat-normal">
                investor information
              </h2>
            </div>
            <div className="mt-10">
              {invesorsInfo.map((item, index) => (
                <>
                  <div className="border-b border-green-300 flex flex-col lg:flex-row text-center lg:text-start lg:justify-between leading-[20px] pb-5 mt-5">
                    <div className="lg:w-6/12 text-gray-600 pillat-normal">{item.title}</div>
                    <div className="lg:w-6/12 font-semibold text-black ">{item.desc}</div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
          <Lottie
              loop
              animationData={investorinformationAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />
          </div>
        </AnimationTextReversing>

        <AnimationTextReversing flexDirection="row-reverse">
          <div className="mission-div flex flex-col gap-5 lg:w-6/12">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                governance
              </h2>
              <h3 className="font-[400] mt-10 text-gray-500 text-xs md:text-sm pillat-normal">
                our governance framework is built on independence, diversity,
                and ethical practices.
              </h3>
            </div>
            <div className="text-black">
              <h3 className="font-semibold"> independent board </h3>
              <p className="text-gray-500 text-xs pillat-normal">
                the company has an independent board where five out of the total
                seven members are independent directors. These directors are all
                experienced corporate leaders or entrepreneurs and are highly
                respected. The board ensures well-rounded governance.
              </p>
            </div>
            <div className="text-black">
              <h3 className="font-semibold"> diverse board </h3>
              <p className="text-gray-500 text-xs pillat-normal">
                the company has a diverse board where the members reflect age,
                gender, industry experience, and geographic diversity.
              </p>
            </div>
            <div className="text-black">
              <h3 className="font-semibold"> board committees </h3>
              <p className="text-gray-500 text-xs pillat-normal">
                the board sub-committees, led by independent directors, enforce
                our Code of Corporate Governance.
              </p>
            </div>
            <div className="text-black">
              <h3 className="font-semibold">ISO 9001:2015 Certification</h3>
              <p className="text-gray-500 text-xs pillat-normal">
                The company has achieved this certification that demonstrates
                our commitment to high-quality management and governance.
              </p>
            </div>
            <div className="text-center mt-10">
              <h className="font-bold text-sm ">board members</h>
            </div>

            <div className="mt-1">
              {boardMembers.map((item, index) => (
                <>
                  <div className="border-b border-green-300 flex flex-col lg:flex-row text-center lg:text-start lg:justify-between leading-[20px] pb-5 mt-5">
                    <div className="lg:w-6/12 font-semibold text-sm text-black">
                      {item.name}
                    </div>
                    <div className="lg:w-6/12 text-gray-500 font-[300] text-sm pillat-normal">
                      {item.post}
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="text-center my-3 lg:mt-7">
              <h className="font-bold text-sm ">audit committee (bac)</h>
            </div>

            <div className="">
              {auditCommitte.map((item, index) => (
                <>
                  <div className="border-b border-green-300 flex flex-col lg:flex-row text-center lg:text-start lg:justify-between leading-[20px] pb-5 mt-5">
                    <div className="lg:w-6/12 font-semibold text-smm text-black">
                      {item.name}
                    </div>
                    <div className="lg:w-6/12 text-gray-500 font-[300] text-sm">
                      {item.post}
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="text-center my-3">
              <h className="font-bold text-sm ">
                hr & remuneration committee (hrrc)
              </h>
            </div>

            <div className="mt-1">
              {remunirationCommitte.map((item, index) => (
                <>
                  <div className="border-b border-green-300 flex flex-col lg:flex-row text-center lg:text-start lg:justify-between leading-[20px] pb-5 mt-5">
                    <div className="lg:w-6/12 font-semibold text-sm text-black">
                      {item.name}
                    </div>
                    <div className="lg:w-6/12 text-gray-500 font-[300] text-sm pillat-normal">
                      {item.post}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
          <Lottie
              loop
              animationData={governanceAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />          </div>
        </AnimationTextReversing>

        <AnimationTextReversing>
          <div className="vision-div flex flex-col gap-5 lg:w-6/12 my-10">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl 2xl:text-7xl font-light pillat-normal">
                financial reports
              </h2>
            </div>

            <div className="">
              <div className="text flex flex-col text-black">
                <CollapsibleComp dataArr={financialReportsData} />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
          <Lottie
              loop
              animationData={financialAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />           </div>
        </AnimationTextReversing>

        <AnimationTextReversing flexDirection="row-reverse">
          <div className="vision-div flex flex-col gap-5 lg:w-6/12 my-10">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl 2xl:text-7xl font-light pillat-normal">
                corporate briefings
              </h2>
            </div>

            <div className="">
              <div className="text flex flex-col text-black">
                <CollapsibleComp dataArr={corporateBrifiengsData} />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
          <Lottie
              loop
              animationData={corporateAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />             </div>
        </AnimationTextReversing>

        <AnimationTextReversing>
          <div className="vision-div flex flex-col gap-5 lg:w-6/12 my-10">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl 2xl:text-7xl font-light pillat-normal">
                notices & announcements
              </h2>
            </div>

            <div className="">
              <div className="text flex flex-col text-black">
                <CollapsibleComp dataArr={noticesAndAnnouncementsData} />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
          <Lottie
              loop
              animationData={noticesAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />            </div>
        </AnimationTextReversing>

        <AnimationTextReversing flexDirection="row-reverse">
          <div className="vision-div flex flex-col gap-5 lg:w-6/12 my-10">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl 2xl:text-7xl font-light pillat-normal">
                important documents
              </h2>
            </div>

            <div className="">
              <div className="text flex flex-col text-black">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 lg:gap-10  max-w-[1000px] pillat-normal">
                  {importantDocumentsData.map((item, index) => (
                    <>
                      {[
                        "companyProfile",
                        "requestLetter",
                        "requestLetter2",
                        "dividened",
                      ].map(
                        (checkItem, checkItemIndex) =>
                          item[checkItem] && (
                            <>
                              <div className=" mx-auto my-10 flex justify-center">
                                <div
                                  key={checkItemIndex}
                                  className="text-center min-w-[130px]"
                                >
                                  <div className="border border-green-400 flex flex-col justify-center items-center rounded-md py-5">
                                    <div>
                                      <Image
                                        src={pdfImg}
                                        className="w-16 sm:w-20"
                                      />
                                    </div>
                                  </div>
                                  <div className="w-36">
                                    <p className="text-sm !leading-[20px] mt-3 text-gray-600 lg:text-lg text-center pillat-normal">
                                      {item[checkItem]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </>
                          )
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
          <Lottie
              loop
              animationData={importantAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />            </div>
        </AnimationTextReversing>

        <AnimationTextReversing>
          <div className="vision-div flex flex-col gap-5 lg:w-6/12 my-10">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl 2xl:text-7xl font-light pillat-normal">
                investor contacts
              </h2>
            </div>
            <div className="mt-10">
              <div className="text-center lg:text-start mt-5 mb-12">
                <h className="font-bold text-sm lg:text-lg ">
                  shareholder's contact
                </h>
              </div>
              {investorContacts.map((item, index) => (
                <>
                  <div className="border-b border-green-300 flex flex-col lg:flex-row text-center lg:text-start lg:justify-between leading-[20px] pb-5 mt-5">
                    <div className="lg:w-6/12 text-gray-500 pillat-normal ">{item.title}</div>
                    <div className="lg:w-6/12 font-semibold">{item.desc}</div>
                  </div>
                </>
              ))}
            </div>

            <div className="mt-10">
              <div className="text-center lg:text-start mt-5 mb-12">
                <h className="font-bold text-sm lg:text-lg ">complaints</h>
              </div>
              {investorContacts.map((item, index) => (
                <>
                  <div className="border-b border-green-300 flex flex-col lg:flex-row text-center lg:text-start lg:justify-between leading-[20px] pb-5 mt-5">
                    <div className="lg:w-6/12 text-gray-500 pillat-normal">{item.title}</div>
                    <div className="lg:w-6/12 font-semibold">{item.desc}</div>
                  </div>
                </>
              ))}
            </div>

            <div className="mt-20">
              <p className="text-gray-500 pillat-normal">
                <span className="font-semibold text-black">disclaimer :</span>{" "}
                in case your complaint has not been properly redressed by us,
                you may lodge your complaint with Securities and Exchange
                Commission of Pakistan (the “SECP”). However, please note that
                SECP will entertain only those complaints which were at first
                directly requested to be redressed by the company and the
                company has failed to redress the same. Further, the complaints
                that are not relevant to SECP’s regulatory domain/competence
                shall not be entertained by the SECP.
              </p>
            </div>

            <div>
              <Image src={disclaimerImg} alt="dislaimer img" />
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
          <Lottie
              loop
              animationData={contactAnimation}
              play
              // style={{ width: 350, height: 350 }}
            />             </div>
        </AnimationTextReversing>

        <ConnectWithUs bgColor={bgColor} textColor={textColor}/>
        <Footer/>
      </div>
    </>
  );
};

export default page;
