"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import investorImg from "../../../../public/footer-investors-img.webp";
import linkdinImg from "../../../../public/footer-linkdin-img.webp";
import phoneIcon from "../../../../public/phone-footer-icon.webp";
import mailIcon from "../../../../public/mail-footer-icon.webp";
import GsapBottomAnimation from "../gsapComponent/GsapBottomAnimation";

const Footer = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const [getLink, setGetLink] = useState("");
  const [triggerBottomAnimation, setTriggerBottomAnimation] = useState(false);

  const triggerBotAnimFunc = () => {
    setTriggerBottomAnimation(true);
  };

  const footerMenuItems = [
    {
      title: "about us",
      subItems: [
        "company",
        "vision",
        "mission",
        "board of directors",
        "initiatives",
      ],
      link: "company",
    },
    {
      title: "investor relations",
      subItems: [
        "company information",
        "governance",
        "financial reports",
        "corporate briefings",
        "notices & annoucements",
        "important documents",
        "investor contacts",
      ],
      link: "investorRelations",
    },
    {
      title: "business divisions",
      subItems: [
        "transformation",
        "interactive marketing",
        "commerce",
        "mobility",
      ],
      link: null,
    },
    {
      title: "brands & products",
      subItems: [
        "symmetry digital",
        "iris digital",
        "coral",
        "coral performance",
        "appabilities",
        "survit",
        "mobits",
        "influense ai",
      ],
      link: "brands-products",
    },
    {
      title: "clients",
      subItems: [
        "telecom",
        "banking & finance",
        "fmcg",
        "real estate",
        "pharmaceutical",
        "others",
      ],
      link: "clients",
    },
    {
      title: "affiliation & partnerships",
      subItems: ["google", "microsoft", "alibaba", "iso 9001:2015"],
      link: "google",
    },
    {
      title: "contact us",
      subItems: ["karachi", "islamabad", "lahore", "general & media inquiries"],
      link: "contact-us",
    },
  ];

  return (
    <>
      <div className="relative">
        {triggerBottomAnimation && <GsapBottomAnimation getLink={getLink} />}
        <div className="bg-[#fafafa]">
          {/****** Mobile  *******/}

          <div className=" md:mx-16 lg:hidden pt-10">
            <div className="text-black flex flex-col gap-2">
              <div className="flex justify-between mx-5">
                <div>about us</div>
                <div className="text-lg font-bold">+</div>
              </div>
              <div className="flex justify-between mx-5">
                <div>investor relations</div>
                <div className="text-lg font-bold">+</div>
              </div>
              <div className="flex justify-between mx-5">
                <div>business divisions</div>
                <div className="text-lg font-bold">+</div>
              </div>
              <div className="flex justify-between mx-5">
                <div>brands & products</div>
                <div className="text-lg font-bold">+</div>
              </div>
              <div className="flex justify-between mx-5">
                <div>clients</div>
                <div className="text-lg font-bold">+</div>
              </div>
              <div className="flex justify-between mx-5">
                <div>affiliation & partnerships</div>
                <div className="text-lg font-bold">+</div>
              </div>
              <div className="flex justify-between mx-5">
                <div>contact us</div>
                <div className="text-lg font-bold">+</div>
              </div>
            </div>
          </div>

          {/****** Laptop  *******/}

          <div className="border-b border-green-400 lg:pb-8 pb-0 pt-10">
            <div className="hidden lg:block mx-10">
              <div className="gap-4 grid grid-cols-7">
                {footerMenuItems.map((item, index) => (
                  <div key={index} className="text-black">
                    {item.link ? (
                        <h2
                          onClick={() => {
                            triggerBotAnimFunc();
                            setGetLink(item.link);
                          }}
                          className="font-semibold text-lg min-h-[70px] mb-2 footer-text-color-toggle cursor-pointer"
                        >
                          {item.title}
                        </h2>
                    ) : (
                      <h2 className="font-semibold text-lg min-h-[70px] mb-2 footer-text-color-toggle cursor-pointer">
                        {item.title}
                      </h2>
                    )}
                    <ul className="text-gray-500 flex flex-col gap-2 pillat-thin">
                      {item.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="footer-text-color-toggle cursor-pointer"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="investors-div lg:block hidden mx-16 my-4">
            <div className="flex justify-between">
              <div className="flex gap-10">
                <div>
                  <Image src={investorImg} alt="investors img" width={50} />
                </div>
                <div className="text-black">
                  <h2 className="font-[500] text-lg">investors complaints</h2>
                  <div className="flex gap-10 text-sm pillat-normal">
                    <div className="flex items-center gap-3">
                      <div>
                        <Image src={phoneIcon} width={15} />
                      </div>
                      <div>+92 21 3534 0688 ext. 105</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div>
                        <Image src={mailIcon} width={15} />
                      </div>
                      <div> complaints@symmetrygroup.biz </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-black">
                <h2 className="text-xl pillat-normal !font-extrabold mb-1">
                  follow us
                </h2>
                <div className="flex justify-center items-center gap-2">
                  <div className="border border-gray-400 rounded-md">
                    <Image src={linkdinImg} width={30} />
                  </div>
                  <div className="border border-gray-400 rounded-md">
                    <Image src={linkdinImg} width={30} />
                  </div>
                  <div className="border border-gray-400 rounded-md">
                    <Image src={linkdinImg} width={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
