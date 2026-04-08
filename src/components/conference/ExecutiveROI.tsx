import { motion } from "framer-motion";
import { TrendingUp, Zap, Building2 } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Bridge the Talent Gap",
    description: "Equip your staff with the AI, Data, and Ethical skills expected in 2026.",
  },
  {
    icon: Zap,
    title: "Architect Agility",
    description:
      "Ensure your office can manage up and across different African corporate cultures with ease.",
  },
  {
    icon: Building2,
    title: "Institutional Growth",
    description:
      "A trained EA is an investment in your own focus and your institution's legacy.",
  },
];

const ExecutiveROI = () => {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block gradient-primary text-primary-foreground font-sub text-sm tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              The Executive ROI
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Executives Must Invest in Their Strategic Architects
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Executives, your PA is the "Strategic Filter" of your professional life. A PA who is a Strategic Architect doesn't just take instructions—they predict needs based on your corporate strategy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex items-start gap-5 bg-card rounded-xl p-6 shadow-card border border-border"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveROI;
