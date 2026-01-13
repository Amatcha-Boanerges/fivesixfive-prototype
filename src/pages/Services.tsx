import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Services: React.FC = () => {
  const offerings = [
    {
      id: "culture",
      title: "Organisational Culture Transformation",
      desc: "Deep-rooted cultural change that aligns with your strategic goals.",
      features: ["Culture Audits", "Value Discovery", "Behavioral Mapping", "Leadership Alignment"],
      color: "border-primary",
    },
    {
      id: "od",
      title: "Organizational Development",
      desc: "Optimizing structure, systems, and processes for peak performance.",
      features: ["Structural Review", "Change Management", "Operating Model Design", "Strategic Planning"],
      color: "border-secondary",
    },
    {
      id: "ld",
      title: "Learning and Development",
      desc: "Custom training programs designed for the modern hybrid workplace.",
      features: ["Soft Skills Training", "Technical Upskilling", "Learning Paths", "Digital Literacy"],
      color: "border-primary",
    },
    {
      id: "hr",
      title: "HR Services",
      desc: "End-to-end human resource solutions that support business scale.",
      features: ["Talent Acquisition", "Retention Strategy", "Policy Development", "Employee Wellbeing"],
      color: "border-secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                Our Core Expertise
              </h1>
              <p className="text-xl text-primary-foreground/80 font-body">
                We provide a suite of services designed to address the complex human challenges of modern business.
                From culture to compliance, we've got you aligned.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12">
              {offerings.map((o, i) => (
                <motion.div
                  key={o.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`bg-card rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-2xl transition-all duration-500 border-l-8 ${o.color}`}
                >
                  <div className="p-10 lg:p-16 lg:w-3/5">
                    <span className="text-xs font-ui font-bold uppercase tracking-widest text-muted-foreground mb-4 block">
                      Service 0{i + 1}
                    </span>
                    <h2 className="text-3xl md:text-4xl mb-6 font-heading">{o.title}</h2>
                    <p className="text-muted-foreground text-lg mb-10 leading-relaxed">{o.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {o.features.map((f, j) => (
                        <div key={j} className="flex items-center space-x-3">
                          <CheckCircle2 size={18} className="text-secondary" />
                          <span className="text-sm text-foreground font-ui">{f}</span>
                        </div>
                      ))}
                    </div>

                    <button className="flex items-center space-x-2 text-primary font-bold font-ui hover:translate-x-2 transition-transform">
                      <span>Enquire about this service</span>
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                  <div className="lg:w-2/5 h-64 lg:h-auto bg-muted relative">
                    <img
                      src={`https://picsum.photos/800/800?random=${i + 10}`}
                      alt={o.title}
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 bg-foreground text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl mb-8 font-heading">
                  What our clients say about the <span className="text-secondary">Impact</span>.
                </h2>
                <div className="h-1 w-24 bg-primary rounded-full"></div>
              </div>
              <div className="space-y-12">
                <blockquote className="text-2xl font-light italic leading-relaxed">
                  "fivesixfive didn't just give us a strategy; they stayed with us to ensure it became our reality.
                  Our engagement scores increased by 40% in just 18 months."
                  <footer className="mt-6 text-sm not-italic font-ui">
                    <span className="text-primary font-bold">James T.</span> — CEO, InnovateCorp
                  </footer>
                </blockquote>
                <blockquote className="text-2xl font-light italic leading-relaxed">
                  "Their L&D programs are the first ones our employees actually look forward to. Truly transformative."
                  <footer className="mt-6 text-sm not-italic font-ui">
                    <span className="text-secondary font-bold">Amara K.</span> — HR Director, GlobalTech
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
