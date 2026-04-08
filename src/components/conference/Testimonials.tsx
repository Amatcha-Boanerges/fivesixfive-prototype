import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The Premier PA Conference completely transformed how I approach my role. I returned as a true Strategic Architect.",
    name: "Abena Mensah",
    title: "Executive Assistant, GCB Bank",
  },
  {
    quote: "The networking alone was worth the investment. I connected with peers who understand the unique challenges of the C-Suite gatekeeper.",
    name: "Kwame Asante",
    title: "Senior PA, Hollard Ghana",
  },
  {
    quote: "Every session was actionable. The speakers aren't just theorists—they are practitioners building real institutions.",
    name: "Fátima Diallo",
    title: "Chief of Staff, Access Gambia",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block border border-primary/30 text-primary font-sub text-sm tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
            Past Delegates
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Voices from the Blueprint
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-sub font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
