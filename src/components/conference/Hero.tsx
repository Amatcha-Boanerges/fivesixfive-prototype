import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroVideo from "@/assets/PA CONF WEBSITE BANNER VIDEO.mp4";

const speakers = [
  { name: "Dr. Ama Serwaa", role: "Keynote", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face" },
  { name: "Prof. Kwame Asante", role: "Facilitator", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" },
  { name: "Nana Esi Mensah", role: "Panelist", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face" },
  { name: "Richard Adjei", role: "Speaker", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-[1.05]"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Decorative shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[8%] hidden lg:block"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M40 0C40 22.09 22.09 40 0 40C22.09 40 40 57.91 40 80C40 57.91 57.91 40 80 40C57.91 40 40 22.09 40 0Z" fill="hsl(318 62% 48% / 0.15)" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[28%] right-[8%] hidden lg:block"
      >
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="45"
              cy="45"
              rx="8"
              ry="30"
              transform={`rotate(${angle} 45 45)`}
              fill="hsl(172 65% 39% / 0.12)"
            />
          ))}
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 md:pt-32 pb-8 md:pb-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-tag inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2.5 mb-8 shadow-card"
        >
          <CalendarDays className="h-4 w-4 text-primary" />
          <span className="font-sub text-sm text-white font-medium">
            July 2026
          </span>
          <span className="text-white/40">•</span>
          <MapPin className="h-4 w-4 text-primary" />
          <span className="font-sub text-sm text-white font-medium">
            Labadi Beach Hotel, Accra
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] mb-6 max-w-4xl"
        >
          The Strategic <br />
          <span className="gradient-text italic">Architect</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-body"
        >
          Are you just managing or architecting an organization? Join us at the iconic Labadi Beach Hotel to dismantle outdated workflows
          and rebuild your career on a foundation of Influence, Tech, and
          Institutional Excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-20 hero-buttons"
        >
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground font-sub font-semibold shadow-glow hover:opacity-90 transition-all duration-300 rounded-full text-base px-8 py-6 gap-3"
          >
            Secure Your Blueprint – Register Now
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            className="rounded-full text-base px-8 py-6 font-sub font-medium gap-3 border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-card"
          >
            Download Brochure
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Speaker photos row */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full flex justify-center items-end gap-0 -mb-4 px-4"
      >
        {speakers.map((speaker, i) => {
          const rotations = [-6, -2, 2, 6];
          const mobileRotations = [-12, -4, 4, 12];
          const offsets = [40, 0, 0, 40];
          const mobileOffsets = [30, 0, 0, 30];
          return (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              animate={{
                opacity: 1,
                y: window.innerWidth < 768 ? mobileOffsets[i] : offsets[i],
                rotate: window.innerWidth < 768 ? mobileRotations[i] : rotations[i]
              }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
              className="relative -mx-2 sm:-mx-4 md:-mx-2 group"
            >
              <div className="w-28 h-40 sm:w-32 sm:h-44 md:w-52 md:h-64 lg:w-60 lg:h-72 rounded-xl sm:rounded-2xl overflow-hidden bg-card shadow-card-hover border-2 sm:border-4 border-background transition-transform duration-300 group-hover:scale-105">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-3 py-1 shadow-card whitespace-nowrap">
                <span className="font-sub text-xs font-medium text-foreground">
                  {speaker.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;
