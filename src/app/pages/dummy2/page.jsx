"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import rightChevron from "../../../../public/right-chevron.png";

const page = () => {
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

  const investorHoverInFunc = () => {};

  const investorHoverOutFunc = () => {};

  return (
    <div className="bg-black h-[100vh]">
      <div className="pt-20 pl-20">
        <div className="">
          <div className="flex gap-20 text-lg">
            <div className="bg-black">investors</div>
            <div>
              <Image src={rightChevron} width={20} />
            </div>
          </div>
          <div className="absolute left-[300px] top-[80px] flex flex-col gap-5 text-lg">
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
    </div>
  );
};

export default page;
