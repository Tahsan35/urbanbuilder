import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Topbar from "@/components/Topbar";
import Faq from "@/components/Faq";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
