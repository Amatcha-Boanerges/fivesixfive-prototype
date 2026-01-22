import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowUpRight, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { offerings } from "@/data/services";

const Services: React.FC = () => {

  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "fivesixfive didn't just give us a strategy; they stayed with us to ensure it became our reality. Our engagement scores increased by 40% in just 18 months.",
      name: "James T.",
      role: "CEO, InnovateCorp",
    },
    {
      id: 2,
      quote:
        "Their L&D programs are the first ones our employees actually look forward to. Truly transformative work that has reshaped our internal culture.",
      name: "Amara K.",
      role: "HR Director, GlobalTech",
    },
  ];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                The Fivesixfive Integrated Framework
              </h1>
              <p className="text-xl text-primary-foreground/80 font-body">
                True business agility requires the synchronization of four critical pillars: People, Capability, Technology, and Knowledge Exchange. We don't just offer advice; we build the infrastructure for your sustained success.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pt-12 pb-24">
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

                    <Link
                      to={`/services/${o.id}`}
                      className="flex items-center space-x-2 text-primary font-bold font-ui hover:translate-x-2 transition-transform inline-flex"
                    >
                      <span>Enquire about this service</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                  <div className="lg:w-2/5 h-64 lg:h-auto bg-muted relative">
                    <img
                      src={o.image}
                      alt={o.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-foreground/10 to-transparent"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {/* Testimonial Section */}
        <section className="bg-foreground text-primary-foreground pt-24 pb-0 px-6 md:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Static Header */}
            <div className="lg:col-span-5 space-y-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
                  What our clients say about the <span className="text-secondary">Impact</span>.
                </h2>
                <div className="h-1 w-24 bg-primary rounded-full"></div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  className="p-4 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
                >
                  <ArrowLeft size={24} strokeWidth={1.5} />
                </button>
                <button
                  onClick={next}
                  className="p-4 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
                >
                  <ArrowRight size={24} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Right Column: Animated Content */}
            <div className="lg:col-span-7 relative min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-12"
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl leading-snug font-light italic text-primary-foreground/90">
                    "{testimonials[index].quote}"
                  </p>

                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <h4 className="text-xl font-bold font-heading">{testimonials[index].name}</h4>
                      <p className="text-primary-foreground/60">{testimonials[index].role}</p>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" className="text-secondary" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
