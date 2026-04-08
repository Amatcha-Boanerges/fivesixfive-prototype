import Navbar from "@/components/conference/Navbar";
import Hero from "@/components/conference/Hero";
import Countdown from "@/components/conference/Countdown";
import Stats from "@/components/conference/Stats";
import Speakers from "@/components/conference/Speakers";
import BeyondClassroom from "@/components/conference/BeyondClassroom";
import ExecutiveROI from "@/components/conference/ExecutiveROI";
import CTACards from "@/components/conference/CTACards";
import SocialProof from "@/components/conference/SocialProof";
import PreviousEditions from "@/components/conference/PreviousEditions";
import PartnerLogos from "@/components/conference/PartnerLogos";
import Partners from "@/components/conference/Partners";
import Footer from "@/components/conference/Footer";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Countdown />
      <Stats />
      <div id="speakers">
        <Speakers />
      </div>

      <div id="experience">
        <BeyondClassroom />
      </div>

      <div id="roi">
        <ExecutiveROI />
      </div>

      <PartnerLogos />
      <div id="partners">
        <Partners />
      </div>
      <SocialProof />
      <CTACards />
      <PreviousEditions />
      <Footer />
    </div>
  );
};

export default Events;
