import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const SidebarItem = ({
    label,
    active = false,
    href = "#",
}: {
    label: string;
    active?: boolean;
    href?: string;
}) => (
    <Link
        to={href}
        className="group flex items-center justify-between py-5 px-6 border-b border-white/20 transition-all hover:bg-white/5"
    >
        <span className="font-heading font-medium text-white/90 text-lg">{label}</span>
        <ArrowUpRight
            size={20}
            className={`text-white transition-all duration-300 ${active ? "opacity-100 rotate-45" : "opacity-70 group-hover:opacity-100 group-hover:rotate-45"}`}
        />
    </Link>
);

const AccordionItem = ({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) => (
    <div className="border-b border-border last:border-0">
        <button
            onClick={onClick}
            className="w-full flex items-center justify-between py-6 text-left group"
        >
            <span className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                {question}
            </span>
            <span
                className={`p-2 rounded-full border transition-all duration-300 ${isOpen
                    ? "bg-primary border-primary text-primary-foreground rotate-180"
                    : "border-border text-muted-foreground group-hover:border-primary group-hover:text-primary"
                    }`}
            >
                <ChevronDown size={16} />
            </span>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="pb-6 text-muted-foreground leading-relaxed">
                        {answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const TechnologyService = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const faqs = [
        {
            q: "How can technology accelerate my business?",
            a: "Technology automates routine tasks, provides data for better decision-making, and opens new channels for customer engagement, directly impacting speed and profitability.",
        },
        {
            q: "What types of IT audits do you perform?",
            a: "We perform comprehensive audits covering security, infrastructure, compliance, and process efficiency, providing you with a clear roadmap for optimization.",
        },
        {
            q: "How secure will our new systems be?",
            a: "Security is built-in from the ground up. We use industry-standard best practices and rigorous testing to ensure your data and operations are protected against threats.",
        },
        {
            q: "Can you integrity new solutions with our legacy systems?",
            a: "Yes, IT integration is a core strength. We specialize in connecting modern platforms with existing legacy systems to maintain continuity while enabling new capabilities.",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-40 pb-20 gradient-hero text-primary-foreground relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm font-ui font-medium mb-6">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    Service Detail
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                                    Technology
                                </h1>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Main Content Layout */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Sidebar */}
                            <div className="lg:col-span-4 space-y-8">
                                <div className="bg-primary/90 rounded-none p-0 sticky top-24">
                                    <div className="space-y-0 border-t border-white/20">
                                        <SidebarItem label="People and Organizations" href="/services/people-and-organizations" />
                                        <SidebarItem label="Business Capabilities" href="/services/business-capabilities" />
                                        <SidebarItem label="Conferences" href="/services/conferences" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="lg:col-span-8">
                                {/* Main Image */}
                                <div className="relative rounded-2xl overflow-hidden mb-12 shadow-lg aspect-video">
                                    <img
                                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                                        alt="Modern Technology"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="prose prose-lg max-w-none text-muted-foreground mb-16">
                                    <p className="lead text-xl text-foreground font-medium mb-6 italic">
                                        Building the digital backbone of your enterprise.
                                    </p>
                                    <p className="mb-6">
                                        Technology should be an accelerator, not a bottleneck. Your stress about technology may not be due to the potency of what you have or do not have. It is from its fit in the bigger eco-system the technology is deployed in.
                                    </p>
                                    <p className="mb-6">
                                        We ensure your digital infrastructure is secure, integrated, and scalable.
                                    </p>
                                    <p>
                                        We offer a deep-tissue scan of your tech stack to prevent data breaches and identify redundant software costs.
                                    </p>
                                </div>

                                {/* Key Strengths / Sections */}
                                <div className="space-y-12 mb-16">
                                    {/* Section 1 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            1. IT Audits
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Comprehensive risk assessments to ensure compliance and identify performance gaps.
                                        </p>
                                    </div>

                                    {/* Section 2 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            2. Web Development
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Crafting high-performance digital interfaces that drive engagement and conversions.
                                        </p>
                                    </div>

                                    {/* Section 3 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            3. IT Integrations
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Connecting disparate systems to ensure a "single source of truth" across your organization.
                                        </p>
                                    </div>
                                </div>

                                {/* FAQ / Accordion */}
                                <div>
                                    <h3 className="text-2xl font-heading font-bold mb-8">Frequently Asked Questions</h3>
                                    <div className="space-y-2">
                                        {faqs.map((faq, index) => (
                                            <AccordionItem
                                                key={index}
                                                question={faq.q}
                                                answer={faq.a}
                                                isOpen={openAccordion === index}
                                                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TechnologyService;
