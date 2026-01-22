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

const BusinessService = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const faqs = [
        {
            q: "What types of business strategies do you help develop?",
            a: "We help develop comprehensive strategies ranging from market entry and expansion to operational efficiency and digital transformation. Our focus is on actionable, data-driven plans that deliver measurable results.",
        },
        {
            q: "Do you support startups or only established enterprises?",
            a: "We work with organizations of all sizes. For startups, we focus on scalability and market fit, while for enterprises, we emphasize optimization, innovation, and sustainable growth.",
        },
        {
            q: "How does the M&A advisory process work?",
            a: "Our M&A advisory covers the entire lifecycle, from target identification and due diligence to valuation and post-merger integration, ensuring value maximization and cultural alignment.",
        },
        {
            q: "What are facilitated sessions?",
            a: "Facilitated sessions are structured workshops designed to solve complex problems, align leadership teams, or spark innovation. We use proven methodologies to ensure productive outcomes.",
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
                                    Business <br />
                                    <span className="text-primary-foreground">Capabilities</span>
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
                                        <SidebarItem label="People and Organizations" href="/services/people" />
                                        <SidebarItem label="Business Capabilities" active />
                                        <SidebarItem label="Technology" href="/services/technology" />
                                        <SidebarItem label="Conferences" href="/services/conferences" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="lg:col-span-8">
                                {/* Main Image */}
                                <div className="relative rounded-2xl overflow-hidden mb-12 shadow-lg aspect-video">
                                    <img
                                        src="/professional-business-consulting-team-in-modern-of.jpg"
                                        alt="Business Strategy Meeting"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="prose prose-lg max-w-none text-muted-foreground mb-16">
                                    <p className="lead text-xl text-foreground font-medium mb-6 italic">
                                        Hard-hitting strategic support for growth and operational stability.
                                    </p>
                                    <p className="mb-6">
                                        Whether you are entering a new market or optimizing your back office, we provide the specialized expertise to ensure your operations are lean and your strategy is fit-for-purpose.
                                    </p>
                                    <p>
                                        Our approach combines rigorous analysis with practical implementation support, ensuring that strategic initiatives translate into tangible bottom-line results.
                                    </p>
                                </div>

                                {/* Key Strengths / Sections */}
                                <div className="space-y-12 mb-16">
                                    {/* Section 1 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            1. Business Strategy
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            We define clear pathways to competitive advantage. From <strong>corporate strategy</strong> to business unit planning, we help you make the hard choices that drive long-term value.
                                        </p>
                                    </div>

                                    {/* Section 2 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            2. Market Entry Support
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Expanding into new territories requires more than specific ambition. We provide <strong>market research, regulatory guidance,</strong> and <strong>go-to-market strategies</strong> to de-risk your expansion.
                                        </p>
                                    </div>

                                    {/* Section 3 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            3. M&A Advisory
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            We support you through the complexities of <strong>Mergers and Acquisitions</strong>. Our services include target screening, commercial due diligence, and post-merger integration to realize deal synergies.
                                        </p>
                                    </div>

                                    {/* Section 4 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            4. Facilitated Sessions
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Unlock the collective intelligence of your team. Our <strong>Facilitated Sessions</strong> are designed to solve critical problems, align stakeholders, and generate innovative solutions in a structured environment.
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

export default BusinessService;
