import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const targetDate = new Date("2026-07-15T09:00:00").getTime();

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = Math.max(0, targetDate - now);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-sub text-sm text-muted-foreground uppercase tracking-wider mb-2">
            Countdown to Conference
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            July 15, 2026 · Accra, Ghana
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 md:gap-8"
        >
          {units.map((unit) => (
            <div key={unit.label} className="text-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl gradient-primary flex items-center justify-center mb-3 shadow-glow">
                <span className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs md:text-sm font-sub font-medium text-muted-foreground uppercase tracking-wider">
                {unit.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
