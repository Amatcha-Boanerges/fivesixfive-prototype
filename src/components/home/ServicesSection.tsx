import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, GraduationCap, Briefcase } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Users,
    title: "Organisational Culture Transformation",
    description: "Build a values-driven culture that empowers your people and drives business success. We help you define, embed, and sustain the culture you need.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Organizational Development",
    description: "Strategic consulting to align your structure, processes, and people. Create an agile organization ready for tomorrow's challenges.",
    color: "secondary",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Custom learning journeys that develop leaders and build capabilities. From executive coaching to team workshops that create lasting change.",
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "HR Services",
    description: "End-to-end HR solutions from talent acquisition to performance management. Build HR practices that attract, develop, and retain top talent.",
    color: "secondary",
  },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <>
      {/* Desktop/Tablet Horizontal Scroll */}
      <section ref={containerRef} className="hidden lg:block relative h-[300vh] bg-background">
        <div className="sticky top-0 h-screen-safe overflow-hidden flex flex-col py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-ui text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Strategic Solutions for <span className="gradient-text">Lasting Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              We don't do quick fixes. Our approach is built on deep partnerships that create sustainable transformation.
            </p>
          </div>

          <motion.div style={{ x }} className="flex gap-8 pl-[10vw] w-max">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="w-[350px] md:w-[450px] h-[400px] flex-shrink-0"
              >
                <div className="group relative p-6 h-full rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between">
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                        }`}
                    >
                      <service.icon size={24} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-primary font-ui font-medium group-hover:gap-3 transition-all duration-200 mt-8">
                    Learn more
                    <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>

                  <div
                    className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none ${service.color === "primary" ? "gradient-primary" : "bg-secondary"
                      }`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile Vertical Stack */}
      <section className="lg:hidden py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Strategic Solutions for <span className="gradient-text">Lasting Impact</span>
            </h2>
            <p className="text-muted-foreground font-body">
              Sustainable transformation for your organization.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <div key={service.title} className="p-5 sm:p-6 rounded-2xl bg-card border border-border shadow-sm">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                  }`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  Learn more <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
