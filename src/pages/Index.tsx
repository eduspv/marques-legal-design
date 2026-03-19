import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import PracticeAreasPreview from "@/components/home/PracticeAreasPreview";
import SocialResponsibility from "@/components/home/SocialResponsibility";
import TeamSection from "@/components/home/TeamSection";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";

// background não passado = usa o padrão #FAF7F2 (cream)
// Para mudar: <PageLayout background="#243B52"> ou qualquer cor CSS

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <AboutSection />
      <PracticeAreasPreview />
      <SocialResponsibility />
      <TeamSection />
      <Testimonials />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;