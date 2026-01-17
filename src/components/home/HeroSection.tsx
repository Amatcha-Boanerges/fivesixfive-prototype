import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const words = ["Tick.", "Stick.", "Work.", "Grow."];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-hero animate-gradient opacity-95" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-14 pb-10 sm:pt-16 sm:pb-12 md:pt-20 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 sm:mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-primary-foreground/90 font-ui text-sm">
              Strategic Partner for Organizational Growth
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground mb-4 sm:mb-5 animate-slide-up leading-tight">
            We Make Your People
            <span className="block mt-2 h-[1.2em] relative overflow-visible">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-block relative"
                >
                  {words[index]}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-secondary" />
                  </svg>
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Subheadline
          <p
            className="text-base sm:text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-6 sm:mb-8 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            We make your company work. Partner with us for values-driven organizational development that transforms culture and drives sustainable growth.
          </p> */}

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button variant="hero" size="xl">
              Start Your Journey
              <ArrowRight size={20} />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play size={18} className="mr-1" />
              Watch Our Story
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className="mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-6 border-t border-primary-foreground/10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-primary-foreground/50 font-ui text-sm uppercase tracking-wider mb-6">
              Trusted by forward-thinking organizations
            </p>
            <div className="relative overflow-hidden">
              {/* Ticker container */}
              <div className="overflow-hidden">
                <div className="flex w-max flex-nowrap items-center gap-8 md:gap-12 opacity-70 animate-ticker mx-auto">
                  {Array.from({ length: 3 }, () => ["Fortune 500", "Global NGOs", "Tech Startups", "Healthcare", "Finance"]).flat().map((partner, index) => (
                    <span
                      key={`${partner}-${index}`}
                      className="text-primary-foreground/60 font-heading font-semibold text-lg transition-colors hover:text-primary-foreground/80 whitespace-nowrap flex-shrink-0"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center items-center animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
