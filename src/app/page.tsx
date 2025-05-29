import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Product from "./product/page";
import Banner from "@/components/common/Banner";
import AdSection from "@/components/common/AdSection";
import Subscribe from "@/components/common/Subscribe";
import TrendingProduct from "@/components/common/TrendingProduct";
import Deal from "@/components/common/Deal";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      <AdSection />

      <TrendingProduct />

      <Deal />

      {/* Products */}
      <Product />

      {/* Subscribe */}
      <Subscribe />

      {/* Footer */}
      <Footer />
    </>
  );
}
