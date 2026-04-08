import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Speakers", href: "#speakers" },
    { label: "Partners", href: "#partners" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <span className={`font-heading font-bold text-xl ${scrolled ? "gradient-text" : "text-primary-foreground"}`}>
            fivesixfive
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-sub text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-primary-foreground/90"
                }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant={scrolled ? "default" : "hero"} size="sm" className="rounded-full px-6">
            Register Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg border-b border-border px-6 pb-8 pt-4 space-y-6 shadow-xl"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-sub text-sm font-medium text-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button variant="default" size="sm" className="w-full rounded-full">
            Register Now
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
