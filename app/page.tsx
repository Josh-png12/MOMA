import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MeatMarquee from "@/components/MeatMarquee";
import Carnes from "@/components/Carnes";
import ComoFunciona from "@/components/ComoFunciona";
import Precios from "@/components/Precios";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MeatMarquee />
        <Carnes />
        <ComoFunciona />
        <Precios />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
