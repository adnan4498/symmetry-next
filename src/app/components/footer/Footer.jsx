import React from "react";
import Image from "next/image";
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
                <h2 className="font-semibold text-lg min-h-[70px] mb-2">
                  about us
                </h2>
                <ul className="text-gray-500 flex flex-col gap-2">
                  <li>company</li>
                  <li>vision</li>
                  <li>mission</li>
                  <li>board of directors</li>
                  <li>initiatives</li>
                </ul>
              </div>

              <div className="text-black">
                <h2 className="font-semibold text-lg min-h-[70px] mb-2">
                  investor relations
                </h2>
                <ul className="text-gray-500 flex flex-col gap-2 ">
                  <li>company information</li>
                  <li>governance</li>
                  <li>financial reports</li>
                  <li>corporate briefings</li>
                  <li>notices & annoucements</li>
                  <li>important documents</li>
                  <li>investor contacts</li>
                </ul>
              </div>

              <div className="text-black">
                <h2 className="font-semibold text-lg min-h-[70px] mb-2">
                  business divisions
                </h2>
                <ul className="text-gray-500 flex flex-col gap-2">
                  <li>transformation</li>
                  <li>interactive marketing</li>
                  <li>commerce</li>
                  <li>mobility</li>
                </ul>
              </div>

              <div className="text-black">
                <h2 className="font-semibold text-lg min-h-[70px] mb-2">
                  brands & products
                </h2>
                <ul className="text-gray-500 flex flex-col gap-2">
                  <li>symmetry digital</li>
                  <li>iris digital</li>
                  <li>coral</li>
                  <li>coral performance</li>
                  <li>appabilities</li>
                  <li>survit</li>
                  <li>mobits</li>
                  <li>influense ai</li>
                </ul>
              </div>

              <div className="text-black">
                <h2 className="font-semibold text-lg min-h-[70px] mb-2">
                  clients
                </h2>
                <ul className="text-gray-500 flex flex-col gap-2">
                  <li>telecom</li>
                  <li>banking & finance</li>
                  <li>fmcg</li>
                  <li>real estate</li>
                  <li>pharmaceutical</li>
                  <li>others</li>
                </ul>
              </div>

              <div className="text-black">
                <h2 className="font-semibold text-lg min-h-[70px] mb-2">
                  affiliation & partnerships
                </h2>
                <ul className="text-gray-500 flex flex-col gap-2">
                  <li>google</li>
                  <li>microsoft</li>
                  <li>alibaba</li>
                  <li>iso 9001:2015</li>
                </ul>
              </div>

              <div className="text-black">
                <h2 className="font-semibold text-lg min-h-[70px] mb-2">
                  contact us
                </h2>
                <ul className="text-gray-500 flex flex-col gap-2">
                  <li>karachi</li>
                  <li>islamabad</li>
                  <li>lahore</li>
                  <li>general & media inquiries</li>
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
                <div className="flex gap-10 text-sm">
                  <p>+92 21 3534 0688 ext. 105</p>
                  <p>[email protected]</p>
                </div>
              </div>
            </div>

            <div className="text-black">
              <h2 className="text-xl">follow us</h2>
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
