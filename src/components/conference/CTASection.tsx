import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 mb-8 backdrop-blur-sm">
            <Clock className="h-4 w-4 text-primary-foreground/80" />
            <span className="text-primary-foreground/90 font-sub text-sm">
              Limited to 250 Seats
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            The Blueprint is Limited.
            <br />
            <span className="italic">Will You Be in the Room?</span>
          </h2>

          <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Don't be the professional left using a 20th-century mindset in a 2026 world.
            Join the elite. Master the build.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-10 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Register Before Early Bird Expires
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
              Sponsorship Opportunities
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
