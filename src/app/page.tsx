import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Product from "./product/page";
import Banner from "@/components/common/Banner";
import AdSection from "@/components/common/AdSection";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      <AdSection/>

      {/* Products */}
      {/* <Product /> */}

      {/* Footer */}
      <Footer />
    </>
  );
}
