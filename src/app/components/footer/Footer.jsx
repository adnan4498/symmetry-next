import React from "react";
import Image from "next/image";
import Link from "next/link";
import investorImg from "../../../../public/footer-investors-img.webp";
import linkdinImg from "../../../../public/footer-linkdin-img.webp";

const Footer = () => {
  return (
    <>
      {/****** Mobile  *******/}

      <div>
        <div className="mt-10 md:mx-16 lg:hidden">
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

        <div className="border-b border-green-400 lg:pb-8 pb-0">
          <div className="hidden lg:block mx-10">
            <div className="gap-4 grid grid-cols-7">
              <div className="text-black ">
                <Link href="pages/company">
                <h2 className="font-bold text-lg min-h-[70px] mb-2 footer-text-color-toggle cursor-pointer">
                  about us
                </h2>
                </Link>
                <ul className="text-gray-500 flex flex-col gap-2 pillat-thin">
                  <li className="footer-text-color-toggle cursor-pointer">company</li>
                  <li className="footer-text-color-toggle cursor-pointer">vision</li>
                  <li className="footer-text-color-toggle cursor-pointer">mission</li>
                  <li className="footer-text-color-toggle cursor-pointer">board of directors</li>
                  <li className="footer-text-color-toggle cursor-pointer">initiatives</li>
                </ul>
              </div>

              <div className="text-black">
                <Link href="pages/investorRelations">
                <h2 className="font-semibold text-lg min-h-[70px] mb-2 footer-text-color-toggle cursor-pointer ">
                  investor relations
                </h2>
                </Link>
                <ul className="text-gray-500 flex flex-col gap-2 pillat-thin ">
                  <li className="footer-text-color-toggle cursor-pointer">company information</li>
                  <li className="footer-text-color-toggle cursor-pointer">governance</li>
                  <li className="footer-text-color-toggle cursor-pointer">financial reports</li>
                  <li className="footer-text-color-toggle cursor-pointer">corporate briefings</li>
                  <li className="footer-text-color-toggle cursor-pointer">notices & annoucements</li>
                  <li className="footer-text-color-toggle cursor-pointer">important documents</li>
                  <li className="footer-text-color-toggle cursor-pointer">investor contacts</li>
                </ul>
              </div>

              <div className="text-black">
                <h2 className="font-semibold text-lg min-h-[70px] mb-2 footer-text-color-toggle cursor-pointer">
                  business divisions
                </h2>
                <ul className="text-gray-500 flex flex-col gap-2 pillat-thin">
                  <li className="footer-text-color-toggle cursor-pointer">transformation</li>
                  <li className="footer-text-color-toggle cursor-pointer">interactive marketing</li>
                  <li className="footer-text-color-toggle cursor-pointer">commerce</li>
                  <li className="footer-text-color-toggle cursor-pointer">mobility</li>
                </ul>
              </div>

              <div className="text-black">
                <Link href="pages/brands-products">
                <h2 className="font-semibold text-lg min-h-[70px] mb-2 footer-text-color-toggle cursor-pointer">
                  brands & products
                </h2>
                </Link>
                <ul className="text-gray-500 flex flex-col gap-2 pillat-thin">
                  <li className="footer-text-color-toggle cursor-pointer">symmetry digital</li>
                  <li className="footer-text-color-toggle cursor-pointer">iris digital</li>
                  <li className="footer-text-color-toggle cursor-pointer">coral</li>
                  <li className="footer-text-color-toggle cursor-pointer">coral performance</li>
                  <li className="footer-text-color-toggle cursor-pointer">appabilities</li>
                  <li className="footer-text-color-toggle cursor-pointer">survit</li>
                  <li className="footer-text-color-toggle cursor-pointer">mobits</li>
                  <li className="footer-text-color-toggle cursor-pointer">influense ai</li>
                </ul>
              </div>

              <div className="text-black">
                <Link href="pages/clients">
                <h2 className="font-semibold text-lg min-h-[70px] mb-2 footer-text-color-toggle cursor-pointer">
                  clients
                </h2>
                </Link>
                <ul className="text-gray-500 flex flex-col gap-2 pillat-thin">
                  <li className="footer-text-color-toggle cursor-pointer">telecom</li>
                  <li className="footer-text-color-toggle cursor-pointer">banking & finance</li>
                  <li className="footer-text-color-toggle cursor-pointer">fmcg</li>
                  <li className="footer-text-color-toggle cursor-pointer">real estate</li>
                  <li className="footer-text-color-toggle cursor-pointer">pharmaceutical</li>
                  <li className="footer-text-color-toggle cursor-pointer">others</li>
                </ul>
              </div>

              <div className="text-black">
                <Link href="pages/google">
                <h2 className="font-semibold text-lg min-h-[70px] mb-2 footer-text-color-toggle cursor-pointer">
                  affiliation & partnerships
                </h2>
                </Link>
                <ul className="text-gray-500 flex flex-col gap-2 pillat-thin">
                  <li className="footer-text-color-toggle cursor-pointer">google</li>
                  <li className="footer-text-color-toggle cursor-pointer">microsoft</li>
                  <li className="footer-text-color-toggle cursor-pointer">alibaba</li>
                  <li className="footer-text-color-toggle cursor-pointer">iso 9001:2015</li>
                </ul>
              </div>

              <div className="text-black">
                <Link href="pages/contact-us">
                <h2 className="font-semibold text-lg min-h-[70px] mb-2 footer-text-color-toggle cursor-pointer">
                  contact us
                </h2>
                </Link>
                <ul className="text-gray-500 flex flex-col gap-2 pillat-thin">
                  <li className="footer-text-color-toggle cursor-pointer">karachi</li>
                 <Link href="/pages/dummy?islamabad"><li>islamabad</li></Link> 
                  <li className="footer-text-color-toggle cursor-pointer">lahore</li>
                  <li className="footer-text-color-toggle cursor-pointer">general & media inquiries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="investors-div lg:block hidden mx-16 my-7">
          <div className="flex justify-between">
            <div className="flex gap-10">
              <div>
                <Image src={investorImg} alt="investors img" width={50} />
              </div>
              <div className="text-black">
                <h2 className="font-[500] text-lg">investors complaints</h2>
                <div className="flex gap-10 text-sm pillat-normal">
                  <p>+92 21 3534 0688 ext. 105</p>
                  <p>info@symmetrygroup.biz</p>
                </div>
              </div>
            </div>

            <div className="text-black">
              <h2 className="text-xl pillat-normal">follow us</h2>
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
    </>
  );
};

export default Footer;
