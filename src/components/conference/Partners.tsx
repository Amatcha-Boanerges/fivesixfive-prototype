import { motion } from "framer-motion";
import { Users, Layers, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const zones = [
  {
    icon: Users,
    title: "Direct Access",
    description: "Engage face-to-face with the decision-makers who manage the supply chains and office ecosystems for global giants like Unilever and national institutions like the Bank of Ghana.",
  },
  {
    icon: Layers,
    title: "Brand Integration",
    description: "Move beyond a logo on a screen and become part of the \"Architectural Journey\" at the Labadi Beach Hotel.",
  },
  {
    icon: Award,
    title: "Market Authority",
    description: "Align your brand with our heavyweight faculty, including global tech leaders and institutional governors.",
  },
];

const Partners = () => {
  return (
    <section className="py-12 md:py-24 gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block border border-primary/30 text-primary font-sub text-sm tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
            The Partner Pavilion
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Become a Pillar of the Executive Office
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Feature your solutions in the room where decisions are made. Direct access to 250 decision-makers managing supply chains for global giants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {zones.map((zone, i) => (
            <motion.div
              key={zone.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border text-center hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <zone.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {zone.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {zone.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="default" size="lg" className="rounded-full px-8">
            Download Sponsorship Prospectus
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8">
            Book an Exhibitor Booth
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
