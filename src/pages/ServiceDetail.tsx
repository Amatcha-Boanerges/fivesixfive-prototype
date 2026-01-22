import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { offerings } from "@/data/services";
import { useState } from "react";

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

const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const service = offerings.find((o) => o.id === id);
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    // Generic FAQs for now, could be moved to data if specific ones needed
    const faqs = [
        {
            q: `What is included in ${service?.title || "this service"}?`,
            a: "Our services are comprehensive and tailored. We begin with a detailed assessment of your needs, followed by strategy development and execution support.",
        },
        {
            q: "How do you measure success?",
            a: "We define clear KPIs at the start of the engagement and track progress rigorously to ensure we meet and exceed your expectations.",
        },
        {
            q: "Can this service be customized?",
            a: "Absolutely. We understand that every organization is unique, and we adapt our methodology to fit your specific context and culture.",
        },
    ];

    if (!service) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-heading font-bold mb-4">Service Not Found</h1>
                        <Link to="/services" className="text-primary hover:underline">Return to Services</Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

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
                                    {service.title}
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
                                        {offerings
                                            .filter(o => o.id !== service.id)
                                            .map(o => (
                                                <SidebarItem
                                                    key={o.id}
                                                    label={o.title}
                                                    href={`/services/${o.id === 'people' ? 'people' : o.id}`} // Ensure 'people' links to its specific route if preferred, though generic works if people uses general format too. But for sidebar uniqueness logic, people is separate.
                                                />
                                            ))}
                                    </div>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="lg:col-span-8">
                                {/* Main Image */}
                                <div className="relative rounded-2xl overflow-hidden mb-12 shadow-lg aspect-video">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="prose prose-lg max-w-none text-muted-foreground mb-16">
                                    <p className="lead text-xl text-foreground font-medium mb-6 italic">
                                        {service.desc}
                                    </p>
                                    <p className="mb-6">
                                        We bring a depth of expertise in {service.title.toLowerCase()} to help your organization thrive.
                                        Our approach is grounded in proven methodologies and a commitment to delivery excellence.
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="space-y-12 mb-16">
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            Key Capabilities
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                                                    <span className="font-ui text-foreground/80 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
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

export default ServiceDetail;
