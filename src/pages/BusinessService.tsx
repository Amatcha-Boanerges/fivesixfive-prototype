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
        className={`group flex items-center justify-between py-5 px-6 border-b border-white/10 last:border-0 transition-all ${active ? "bg-white/20" : "hover:bg-white/5"
            }`}
    >
        <span className={`font-heading font-medium text-lg ${active ? "text-white" : "text-white/80"}`}>{label}</span>
        <ArrowUpRight
            size={20}
            className={`text-white transition-all duration-300 ${active ? "opacity-100 rotate-45" : "opacity-40 group-hover:opacity-100 group-hover:rotate-45"}`}
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
                                <div className="bg-primary/95 rounded-2xl overflow-hidden p-0 sticky top-24 shadow-2xl border border-white/5">
                                    <div className="space-y-0">
                                        <SidebarItem label="People and Organizations" href="/services/people-and-organizations" />
                                        <SidebarItem label="Business Capabilities" href="/services/business-capabilities" active />
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
                                        Whether you are entering a new market or optimizing your back office, these processes can put a strain on you
                                        and your team and has the potential to derail your growth instead of enhancing it. We provide the specialized
                                        expertise to ensure your operations are lean and your strategy is fit-for-purpose.
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
                                            Long-term roadmap development to navigate the present and future of the industry you play in.
                                        </p>
                                    </div>

                                    {/* Section 2 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            2. Market Entry Support
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Reducing the risk of expansion with localized intelligence and structural setup.
                                        </p>
                                    </div>

                                    {/* Section 3 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            3. M&A (Mergers & Acquisitions)
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Expert guidance through the complexities of due diligence and post-merger integration. We augment this with our
                                            culture transformation to reduce the friction of 2 or more cultures clashing and reducing the impact of the
                                            talents in the new integrated organisation.
                                        </p>
                                    </div>

                                    {/* Section 4 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            4. Facilitated Sessions
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            High-impact workshops designed to break deadlocks and generate team and stakeholder alignment. Facilitation is not
                                            about talking; it is about aiding conversations that move teams and organisations towards a desired end. Our
                                            facilitators provide effective facilitations that guide discussions and groom teams to deliver their best
                                            individually and collectively.
                                        </p>
                                    </div>

                                    {/* Section 5 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            5. 3rd Party Back Office Support
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Streamlining and taking on the responsibility of your non-core functions so you can focus on your primary mission.
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
