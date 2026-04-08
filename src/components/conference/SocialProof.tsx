import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        quote: "The Premier PA Conference completely transformed how I approach my role. I returned as a true Strategic Architect.",
        name: "Talia Smith",
        title: "Head of Product at Forma",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
        quote: "Working with the PA community felt like having an extension of our team. They understood our challenges and delivered real results.",
        name: "Jordan Johnson",
        title: "COO at Metricon",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
        quote: "From the first session, the conference brought clarity and momentum to our department. We've seen a major improvement in performance.",
        name: "Samuel Torres",
        title: "Founder at Bloomtech",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
];

const faqs = [
    {
        question: "What types of companies do you work with?",
        answer: "We work with a diverse range of organizations, from high-growth startups to established Fortune 500 companies across various industries including tech, finance, and healthcare."
    },
    {
        question: "How long does it take to see results?",
        answer: "Many of our delegates report immediate mindset shifts and actionable improvements within the first week of returning to their roles. Long-term institutional excellence builds over the subsequent 3-6 months."
    },
    {
        question: "Can I bring my entire executive support team?",
        answer: "Absolutely! We offer corporate packages for teams of 3 or more. Training your entire support staff ensures a unified approach to architecting institutional excellence."
    },
    {
        question: "Do you offer one-time consultations or ongoing support?",
        answer: "Beyond the conference, we offer post-event workshops and a 6-month mentorship program to ensure the strategies implemented at the conference are successfully sustained."
    },
    {
        question: "What does the registration include?",
        answer: "Registration includes all keynote sessions, workshops, networking brunches, a comprehensive blueprint toolkit, and access to our exclusive alumni network."
    }
];

const SocialProof = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-12 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-32">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="bg-white rounded-3xl p-8 relative shadow-sm border border-black/5"
                        >
                            <div className="mb-6">
                                <Quote className="h-10 w-10 text-[#F0B3EF]" />
                            </div>
                            <p className="text-foreground/80 text-lg leading-relaxed mb-12">
                                {t.quote}
                            </p>

                            <div className="flex items-end justify-between">
                                <div>
                                    <h4 className="font-heading font-semibold text-foreground text-lg">{t.name}</h4>
                                    <p className="text-muted-foreground text-sm">{t.title}</p>
                                </div>
                                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-md rotate-3">
                                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-heading font-semibold text-foreground mb-6 leading-[1.1]">
                            Your questions, <br />
                            answered
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-md">
                            Get quick answers to the most common questions about our platform and services.
                        </p>
                        <Button variant="default" size="sm" className="rounded-full px-6">
                            Contact us
                        </Button>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-white rounded-2xl overflow-hidden border border-black/5"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
                                >
                                    <span className="font-heading font-medium text-lg text-foreground pr-4">
                                        {faq.question}
                                    </span>
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                                        {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-8 pb-6 text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
