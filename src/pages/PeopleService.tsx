import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { offerings } from "@/data/services";

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
        className={`group flex items-center justify-between py-5 px-6 border-b border-white/10 last:border-0 transition-all ${active ? "bg-secondary" : "hover:bg-white/5"
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

const PeopleService = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const faqs = [
        {
            q: "What services does your business consultant company offer?",
            a: "Our business consultant company offers a comprehensive range of services, including strategic planning, market research, process optimization, financial analysis, and organizational development. We tailor our services to address the specific needs and goals of each client, ensuring a customized approach to drive success.",
        },
        {
            q: "How can your business consultants assist in improving operational efficiency?",
            a: "We analyze your current workflows, identify bottlenecks, and recommend process improvements or technology integrations that streamline operations, reduce costs, and enhance overall productivity.",
        },
        {
            q: "What is the typical process for developing a growth strategy with your consultants?",
            a: "Our process begins with a deep dive into your current state, market analysis, and goal setting. We then collaboratively design a roadmap, define KPIs, and support implementation to ensure sustainable growth.",
        },
        {
            q: "How do your consultants assist in creating a strong digital presence for businesses?",
            a: "We help you define your digital identity, optimize your online channels, and leverage data-driven marketing strategies to increase brand visibility and engagement with your target audience.",
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
                                    People and <br />
                                    <span className="text-primary-foreground">Organizations</span>
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
                                <div className="bg-primary/95 rounded-2xl overflow-hidden p-0 sticky top-24 shadow-2xl">
                                    <div className="space-y-0">
                                        <SidebarItem label="People and Organizations" href="/services/people-and-organizations" active />
                                        <SidebarItem label="Business Capabilities" href="/services/business-capabilities" />
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
                                        src={offerings.find(o => o.id === "people-and-organizations")?.image || "/diverse-business-team-collaboration-meeting.jpg"}
                                        alt="Strategic Meeting"
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                {/* Text Content */}
                                <div className="prose prose-lg max-w-none text-muted-foreground mb-16">
                                    <p className="lead text-xl text-foreground font-medium mb-6 italic">
                                        Empowering your greatest asset through structural and cultural excellence.
                                    </p>
                                    <p className="mb-6">
                                        Your organisation is only as strong as its culture and the systems that support its people.
                                        You worry about ‘the how things are done here’. You observe that they do not align with the
                                        values and you want the team members to embody.
                                    </p>
                                    <p>
                                        We help you move from a collection of individuals to a high-performing ecosystem by having
                                        deeper conversations about values and why they are the core of growth you seek.
                                    </p>
                                </div>

                                {/* Key Strengths / Sections */}
                                <div className="space-y-12 mb-16">
                                    {/* Section 1 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            1. Organizational Culture Transformation
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Your stress of wanting a culture that works to deliver your strategy ends with us in your corner.
                                            We partner with you for comprehensive <strong>Change Management</strong> initiatives that align your workforce with your mission.
                                        </p>
                                    </div>

                                    {/* Section 2 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            2. Organizational Development
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Data-driven growth through <strong>HR Strategy</strong>, rigorous <strong>HR Audits</strong>, and contextual professional <strong>People Advisory</strong> services.
                                        </p>
                                    </div>

                                    {/* Section 3 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                                            3. Learning and Development (L&D)
                                        </h2>
                                        <div className="text-muted-foreground leading-relaxed space-y-4">
                                            <p>
                                                We don’t just "train"—we transform. We <strong>develop custom learning programmes</strong> and build training flows based on
                                                <strong>proprietary research</strong> suited specifically to your client profile and industry demands.
                                            </p>
                                            <p>
                                                Our learning sessions will leave your teams wanting more. Our learning sessions are no talk shows; they are
                                                work sessions that deliver on your expected outcomes. The sessions are engaging, fun and filled with true learning.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Section 4 */}
                                    <div className="">
                                        <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">
                                            4. Managed HR Services
                                        </h2>
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-lg font-heading font-bold mb-2 text-foreground flex items-center gap-2">
                                                    <CheckCircle2 size={18} className="text-primary" />
                                                    Recruitment
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed pl-7">
                                                    Our hiring processes speak to wider talent management conversations that address your needs.
                                                    We don’t just find you people to fill your vacancies, we respond to the need of sustainability.
                                                    The high-impact talent acquisition process is not an activity for us; it is a driver to your growth as an enterprise.
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-lg font-heading font-bold mb-2 text-foreground flex items-center gap-2">
                                                    <CheckCircle2 size={18} className="text-primary" />
                                                    3rd Party HR Business Partner
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed pl-7">
                                                    We act as your external HR department, managing the entire lifecycle: <strong>Hiring, Onboarding,</strong>
                                                    <strong>Performance Management, Policy Development, Disciplinary</strong> and <strong>Exit Management.</strong>
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-lg font-heading font-bold mb-2 text-foreground flex items-center gap-2">
                                                    <CheckCircle2 size={18} className="text-primary" />
                                                    Assessment Centres
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed pl-7">
                                                    Objective, expert-led evaluation of leadership and talent potential – both for new hires and existing team members.
                                                </p>
                                            </div>
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

export default PeopleService;
