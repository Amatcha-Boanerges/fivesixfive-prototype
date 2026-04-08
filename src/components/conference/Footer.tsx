import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="font-heading font-bold text-xl gradient-text">fivesixfive</span>
            <p className="text-background/60 mt-4 leading-relaxed">
              Strategic Partner for Organizational Growth. We make your people tick.
            </p>
          </div>

          <div>
            <h4 className="font-sub font-semibold text-background mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#speakers" className="block text-background/60 hover:text-background transition-colors text-sm">Speakers</a>
              <a href="#schedule" className="block text-background/60 hover:text-background transition-colors text-sm">Schedule</a>
              <a href="#partners" className="block text-background/60 hover:text-background transition-colors text-sm">Partners</a>
            </div>
          </div>

          <div>
            <h4 className="font-sub font-semibold text-background mb-4">Contact</h4>
            <div className="space-y-3 text-background/60 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Labadi Beach Hotel, Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="https://fivesixfive.co" className="hover:text-background transition-colors">fivesixfive.co</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-sm">
            © 2026 fivesixfive. 6th Premier PA Conference. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
