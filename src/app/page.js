import Image from "next/image";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="mx-3 my-2">
        <div className="text-[#13a772] mt-14 text-5xl sm:text-6xl">
          <h2>delivering digital experiences that make the world better</h2>
        </div>
        <div className="my-3 text-xs md:text-sm lg:border-l lg:border-white lg:pl-5">
          <p>we are reimagining the way business is done and product is consumed. we have committed ourselves to transforming business into an experience driven by data, technology, creativity and innovation</p>
        </div>
      </div>
    </>
  );
}
