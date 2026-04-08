import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Church, Network, ArrowRight } from "lucide-react";

const experiences = [
  {
    icon: Flame,
    title: "The Architect's Study",
    description: "Intimate, unscripted evening discussions where our faculty dives deep into the unfiltered realities of the C-Suite.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    color: "bg-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Church,
    title: "The Shepherd's Office",
    description: "A dedicated session for Church Administrators to discuss the unique architecture of managing religious institutions with Rev. Stephen Wengam.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    color: "bg-secondary/5",
    iconColor: "text-secondary",
  },
  {
    icon: Network,
    title: "Networking Blueprints",
    description: "Connect with 250 elite peers from across the sub-region, building a professional support structure that lasts a lifetime.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
    color: "bg-accent/5",
    iconColor: "text-accent",
  },
];

const BeyondClassroom = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-24 bg-[#F8F9FA]" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block border border-border text-muted-foreground font-sub text-sm tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Beyond the Classroom
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 capitalize">
            High level discourse, Practical Takeaways, Deep connections
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[380px]">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              layout
              className={`relative bg-white rounded-[2.5rem] p-6 lg:p-8 border border-border/50 shadow-sm transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between group
                ${hoveredIndex === i ? "flex-[2]" : "flex-1"}
                ${hoveredIndex !== null && hoveredIndex !== i ? "flex-1 opacity-80" : "opacity-100"}
              `}
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-muted-foreground/30 font-heading text-xl font-bold">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <div className={`p-3 rounded-2xl ${exp.color} transition-colors group-hover:bg-opacity-20`}>
                  <exp.icon className={`h-5 w-5 ${exp.iconColor}`} />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between gap-8 h-full">
                <div className="flex-1 max-w-md">
                  <h3 className="text-xl lg:text-2xl font-heading font-semibold text-foreground mb-2 leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-4">
                    {exp.description}
                  </p>
                </div>

                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9, x: 20 }}
                      transition={{ duration: 0.4 }}
                      className="hidden lg:block w-[180px] h-[180px] rounded-3xl shadow-2xl overflow-hidden relative"
                    >
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondClassroom;
