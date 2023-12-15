import BusinessDivision from "./homeComponents/BusinessDivision";
import DeliveringSection from "./homeComponents/DeliveringSection";
import HeritageSection from "./homeComponents/HeritageSection";
import InteractiveMarketing from "./homeComponents/InteractiveMarketing";

export default function Home() {
  return (
    <>
      <DeliveringSection />
      <HeritageSection />
      <BusinessDivision />
      {/* <InteractiveMarketing /> */}
    </>
  );
}
