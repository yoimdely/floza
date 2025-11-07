import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="container my-20">
          <Calculator />
        </section>
        <section className="container my-20">
          <Benefits />
        </section>
        <section className="container my-20">
          <HowItWorks />
        </section>
        <section className="container my-20">
          <FAQ />
        </section>
        <section className="container my-20">
          <Testimonials />
        </section>
        <section className="container my-20">
          <Partners />
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
