import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnerSection } from "@/components/home/PartnerSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { EventsSection } from "@/components/home/EventsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PartnerSection />
        <ServicesSection />
        <AboutSection />
        <EventsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
