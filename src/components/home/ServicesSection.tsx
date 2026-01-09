import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, GraduationCap, Briefcase } from "lucide-react";

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
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-ui text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Strategic Solutions for{" "}
            <span className="gradient-text">Lasting Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            We don't do quick fixes. Our approach is built on deep partnerships
            that create sustainable transformation in your organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  service.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                <service.icon size={28} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-primary font-ui text-sm font-medium group-hover:gap-3 transition-all duration-200">
                Learn more
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </div>

              {/* Hover Gradient Effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none ${
                  service.color === "primary" ? "gradient-primary" : "bg-secondary"
                }`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg">
            Explore All Services
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
