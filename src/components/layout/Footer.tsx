import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Culture Transformation", href: "/services#culture" },
    { label: "Organizational Development", href: "/services#org-dev" },
    { label: "Learning & Development", href: "/services#learning" },
    { label: "HR Services", href: "/services#hr" },
  ],
  resources: [
    { label: "Blog", href: "/resources#blog" },
    { label: "Webinars", href: "/events#webinars" },
    { label: "Case Studies", href: "/resources#case-studies" },
    { label: "Downloads", href: "/resources#downloads" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src="/fivesixfive-logo.svg"
                alt="fivesixfive logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-background/70 font-body text-sm leading-relaxed mb-6 max-w-sm">
              We make your people tick. We make your company work. Partner with us for strategic, values-driven organizational development.
            </p>
            <SocialIcons 
              variant="primary" 
              iconSize="sm"
            />
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-background">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary text-sm font-ui transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-background">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary text-sm font-ui transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-background">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary text-sm font-ui transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-wrap gap-8 text-sm text-background/70">
            <a href="mailto:maame.gaisey@fivesixfive.co" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} />
              maame.gaisey@fivesixfive.co
            </a>
            <a href="tel:+233244054973" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} />
              +233 24 405 4973
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Office No. 2 Nii Amon Link, Accra, Greater Accra
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© 2025 fivesixfive. All rights reserved.</p>
            <div className="flex gap-6 font-ui">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
