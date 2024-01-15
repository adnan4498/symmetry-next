"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import rightChevron from "../../../../public/right-chevron.png";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";
function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    <div className="footer-text-color-toggle pillat-normal abbo">about</div>,
    "sub1",
    [
      <></>
    ]
  ),

  getItem(
    <div className="footer-text-color-toggle pillat-normal">
      investors relations{" "}
    </div>,
    "sub2",
    [
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            {" "}
            company information{" "}
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            {" "}
            governance{" "}
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            financial reports
          </div>
        </>
      ),

      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            corporate briefings
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            notices & announcements
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            important documents
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            investor contacts
          </div>
        </>
      ),
    ]
  ),

  getItem(
    <div className="footer-text-color-toggle pillat-normal">
      business divisions{" "}
    </div>,
    "sub3",
    [
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            transformation
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            interactive marketing
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            commerce
          </div>
        </>
      ),

      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            mobility
          </div>
        </>
      ),
    ]
  ),

  getItem(
    <div className="footer-text-color-toggle pillat-normal">
      brands & products
    </div>,
    "sub4",
    [
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            symmetry digital
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            iris digital
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            symmetry trade
          </div>
        </>
      ),

      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            coral
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            coral performance
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            appabilities
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            survit
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            mobit
          </div>
        </>
      ),
    ]
  ),

  getItem(
    <div className="footer-text-color-toggle pillat-normal">clients</div>,
    "sub5",
    [
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            telecom
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            banking & finance
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            fmcg
          </div>
        </>
      ),

      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            real estate
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            pharmaceutical
          </div>
        </>
      ),
      getItem(
        <>
          <div className="footer-text-color-toggle text-xl pillat-normal">
            others
          </div>
        </>
      ),
    ]
  ),

  getItem(
    <div className="footer-text-color-toggle pillat-normal abbo">affiliation & partnerships</div>,
    "sub1",
    [
      <></>
    ]
  ),

  getItem(
    <div className="footer-text-color-toggle pillat-normal abbo">careers</div>,
    "sub1",
    [
      <></>
    ]
  ),

  getItem(
    <div className="footer-text-color-toggle pillat-normal abbo">contact us</div>,
    "sub1",
    [
      <></>
    ]
  ),


];
const onClick = (e) => {
  console.log("click", e);
};

const page = () => {
  const [showMenu, setShowMenu] = useState();
  const [investerHover, setInvestorHover] = useState();

  const investorRelationsItems = [
    {
      id: 0,
      name: "company information",
    },
    {
      id: 1,
      name: "governance",
    },
    {
      id: 2,
      name: "financial reports",
    },
    {
      id: 3,
      name: "corporate briefings",
    },
    {
      id: 4,
      name: "notices & announcements",
    },
    {
      id: 5,
      name: "important documents",
    },
    {
      id: 6,
      name: "investor contacts",
    },
  ];

  const investorHoverInFunc = () => {
    setShowMenu("opacity-100 transition-all duration-500");
  };

  const investorHoverOutFunc = () => {
    setShowMenu("opacity-0 transition-all duration-500");
  };

  return (
    <div className="bg-black h-[100vh]">
      <div className="pt-20 pl-20">
        <div className="">
          <div className="flex gap-20 text-lg cursor-pointer footer-text-color-toggle">
            <div
              onMouseOver={() => investorHoverInFunc()}
              onMouseOut={() => investorHoverOutFunc()}
              className="footer-text-color-toggle"
            >
              investors
            </div>
            <div>
              <Image src={rightChevron} width={20} />
            </div>
          </div>
          <div
            className={`absolute left-[300px] top-[80px] flex flex-col gap-5 text-lg opacity-0 ${showMenu}`}
          >
            {investorRelationsItems.map((item, index) => (
              <>
                <div className="">
                  <div className="footer-text-color-toggle">{item.name}</div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 ml-10">
        <Menu
          onClick={onClick}
          style={{
            width: 256,
          }}
          mode="vertical"
          items={items}
        />
      </div>
    </div>
  );
};

export default page;
