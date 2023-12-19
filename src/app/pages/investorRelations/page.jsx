"use client";
import AnimationTextReversing from "@/app/components/animationTextReversing/AnimationTextReversing";
import BlackBannerComponent from "@/app/components/blackBannerComponent/BlackBannerComponent";
import Tabs from "@/app/components/tabs/Tabs";
import React from "react";
import Image from "next/image";
import Collapsible from "react-collapsible";
import square from "../../../../public/square-neon.png";
import pdfImg from "../../../../public/pdf-img.png";

const page = () => {
  const aboutH2 = "investors relations";
  const aboutText =
    "we are dedicated to providing timely and accurate information about our company's performance, financial health, and strategic initiatives. explore the resources here to stay informed and connected as we navigate the journey of growth together.";

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
      secondQuarter: "2nd quarter",
      thirdQuarter: "3rd quarter",
      annualReport: "annual report",
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
      secondQuarter: "2nd quarter",
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
              <h2 className="text-5xl lg:text-6xl 2xl:text-7xl font-light">
                investor information
              </h2>
            </div>
            <div className="mt-10">
              {invesorsInfo.map((item, index) => (
                <>
                  <div className="border-b border-green-300 flex flex-col lg:flex-row text-center lg:text-start lg:justify-between leading-[20px] pb-5 mt-5">
                    <div className="lg:w-6/12 ">{item.title}</div>
                    <div className="lg:w-6/12 font-semibold">{item.desc}</div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
            <Image src={square} width={200} alt="animation here" />
          </div>
        </AnimationTextReversing>

        <AnimationTextReversing flexDirection={"row-reverse"}>
          <div className="mission-div flex flex-col gap-5 lg:w-6/12">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                governance
              </h2>
              <h3 className="font-[400] mt-10 text-gray-500 text-xs">
                our governance framework is built on independence, diversity,
                and ethical practices.
              </h3>
            </div>
            <div className="text-black">
              <h3 className="font-semibold"> independent board </h3>
              <p className="text-gray-500 text-xs">
                the company has an independent board where five out of the total
                seven members are independent directors. These directors are all
                experienced corporate leaders or entrepreneurs and are highly
                respected. The board ensures well-rounded governance.
              </p>
            </div>
            <div className="text-black">
              <h3 className="font-semibold"> diverse board </h3>
              <p className="text-gray-500 text-xs">
                the company has a diverse board where the members reflect age,
                gender, industry experience, and geographic diversity.
              </p>
            </div>
            <div className="text-black">
              <h3 className="font-semibold"> board committees </h3>
              <p className="text-gray-500 text-xs">
                the board sub-committees, led by independent directors, enforce
                our Code of Corporate Governance.
              </p>
            </div>
            <div className="text-black">
              <h3 className="font-semibold">ISO 9001:2015 Certification</h3>
              <p className="text-gray-500 text-xs">
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
                    <div className="lg:w-6/12 font-semibold text-sm">
                      {item.name}
                    </div>
                    <div className="lg:w-6/12 text-gray-500 font-[300] text-sm">
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
                    <div className="lg:w-6/12 font-semibold text-sm">
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
                    <div className="lg:w-6/12 font-semibold text-sm">
                      {item.name}
                    </div>
                    <div className="lg:w-6/12 text-gray-500 font-[300] text-sm">
                      {item.post}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
            <Image src={square} width={200} alt="animation here" />
          </div>
        </AnimationTextReversing>

        <AnimationTextReversing>
          <div className="vision-div flex flex-col gap-5 lg:w-6/12 my-10">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl 2xl:text-7xl font-light">
                financial reports
              </h2>
            </div>

            <div className="">
              <div className="text flex flex-col text-black">
                {financialReportsData.map((item, index) => (
                  <>
                    <Collapsible trigger={item.title}>
                      <div className="grid grid-cols-2 gap-8 my-10 mx-10">
                        {item.firstQuarter ||
                        item.secondQuarter ||
                        item.thirdQuarter ||
                        item.annualReport ? (
                          <>
                            <div className="text-center max-w-[100px]">
                              <div className="border border-green-400 flex flex-col justify-center items-center rounded-md py-5">
                                <div>
                                  <Image src={pdfImg} className="w-14" />
                                </div>
                              </div>
                              <div>
                                <p>
                                  {item.firstQuarter ||
                                    item.secondQuarter ||
                                    item.thirdQuarter ||
                                    item.annualReport}
                                </p>
                              </div>
                            </div>
                          </>
                        ) : (
                          ""
                        )}

                        {/* {["firstQuarter", "secondQuarter", "thirdQuarter", "annualReport"].map((quarter, index) => (
        data[quarter] && (
          <div key={index} className="text-center max-w-[100px]">
            <div className="border border-green-400 flex flex-col justify-center items-center rounded-md py-5">
              <div>
                <img src={pdfImg} alt="PDF" className="w-14" />
              </div>
            </div>
            <div>
              <p>{data[quarter]}</p>
            </div>
          </div>
        )
      ))} */}

                        {/* {item.secondQuarter && (
                          <div className="border border-green-400 flex flex-col justify-center items-center rounded-md py-5">
                            <div>
                              <Image src={pdfImg} className="w-14" />
                            </div>
                            <div>
                              <p>{item.secondQuarter}</p>
                            </div>
                          </div>
                        )}
                        {item.thirdQuarter && (
                          <div className="border border-green-400 flex flex-col justify-center items-center rounded-md py-5">
                            <div>
                              <Image src={pdfImg} className="w-14" />
                            </div>
                            <div>
                              <p>{item.thirdQuarter}</p>
                            </div>
                          </div>
                        )}

                        {item.annualReport && (
                          <div className="border border-green-400 flex flex-col justify-center items-center rounded-md py-5">
                            <div>
                              <Image src={pdfImg} className="w-14" />
                            </div>
                            <div>
                              <p>{item.annualReport}</p>
                            </div>
                          </div>
                        )} */}
                      </div>
                    </Collapsible>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:mt-0 mt-10">
            <Image src={square} width={200} alt="animation here" />
          </div>
        </AnimationTextReversing>
      </div>
    </>
  );
};

export default page;
