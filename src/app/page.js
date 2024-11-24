import Banner from "@/Components/Banner";
import DiscountSection from "@/Components/DiscountSection";
import Featured_products_section from "@/Components/Featured_products_section";
import Features_section from "@/Components/Features_section";

export default function Home() {
  return (
    <div>
      <Banner />
      <Features_section />
      <Featured_products_section />
      <DiscountSection />
    </div>
  );
}
