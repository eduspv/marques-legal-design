import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import PracticeAreasPreview from "@/components/home/PracticeAreasPreview";
import SocialResponsibility from "@/components/home/SocialResponsibility";
import TeamSection from "@/components/home/TeamSection";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <PracticeAreasPreview />
      <SocialResponsibility />
      <TeamSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
