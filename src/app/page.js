import Footer from "./components/footer/Footer";
import AboutUs from "./homeComponents/AboutUs";
import BrandsProducts from "./homeComponents/BrandsProducts";
import BusinessDivision from "./homeComponents/BusinessDivision";
import DeliveringSection from "./homeComponents/DeliveringSection";
import HeritageSection from "./homeComponents/HeritageSection";
import InteractiveMarketing from "./homeComponents/InteractiveMarketing";

export default function Home() {
 

  return (
    <>
      <div className="">
        <DeliveringSection />
        <HeritageSection />
        <div className="md:pt-[300px]">
        <BusinessDivision />
        </div>
        {/* <InteractiveMarketing /> */}
        <BrandsProducts />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}
