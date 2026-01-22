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

const ConferencesService = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const faqs = [
        {
            q: "Who should attend your conferences?",
            a: "Our conferences are designed for senior executives, industry leaders, and professionals seeking to stay ahead of market trends and build high-level connections.",
        },
        {
            q: "Can my company sponsor an event?",
            a: "Yes, we offer various sponsorship packages that provide significant brand visibility and direct access to industry decision-makers.",
        },
        {
            q: "Are the conferences available virtually?",
            a: "While we believe in the power of in-person networking, selected sessions are often made available through our digital platform for international audiences.",
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
                                    Conferences
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
                                        <SidebarItem label="Technology" href="/services/technology" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="lg:col-span-8">
                                {/* Main Image */}
                                <div className="relative rounded-2xl overflow-hidden mb-12 shadow-lg aspect-video">
                                    <img
                                        src="/pa-conf.jpg"
                                        alt="High-level Conference"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="prose prose-lg max-w-none text-muted-foreground mb-16">
                                    <p className="lead text-xl text-foreground font-medium mb-6 italic">
                                        Curating industry intelligence and high-level networking.
                                    </p>
                                    <p className="mb-6">
                                        Knowledge is the ultimate competitive advantage. Our curated conferences bring together the brightest minds to solve the industry’s most pressing challenges.
                                    </p>
                                    <p>
                                        Our conferences are not just speeches; they are masterclasses. We gather industry leaders to dissect trends, providing your team with the "intel" needed to stay ahead of the curve.
                                    </p>
                                </div>

                                {/* Key Strengths / Sections */}
                                <div className="space-y-12 mb-16">
                                    {/* Section 1 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            1. PA Conference
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Elevating administrative excellence and executive support.
                                        </p>
                                    </div>

                                    {/* Section 2 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            2. Sales Conference
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Driving revenue growth through modern methodology and networking.
                                        </p>
                                    </div>

                                    {/* Section 3 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            3. HR Conferences
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Navigating the future of work and talent management.
                                        </p>
                                    </div>

                                    {/* Section 4 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            4. IT Conference
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Exploring the cutting edge of digital transformation and security; one industry at a time.
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

export default ConferencesService;
