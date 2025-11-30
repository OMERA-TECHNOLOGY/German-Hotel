import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import RoomsPreview from "@/components/home/RoomsPreview";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <RoomsPreview />
      <Testimonials />
      <Gallery />
      <CTASection />
    </Layout>
  );
};

export default Index;
