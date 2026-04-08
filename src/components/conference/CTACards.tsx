import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTACards = () => {
    return (
        <section className="py-12 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Seat Booking Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#F0B3EF] rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[480px] shadow-card hover:shadow-card-hover transition-all duration-500 group border border-black/5"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-10 shadow-sm border border-white">
                                <Users className="h-4 w-4 text-foreground/80" />
                                <span className="text-xs font-sub font-bold tracking-wider uppercase text-foreground/80">Limited to 250 Seats</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-heading font-medium text-foreground mb-6 leading-[1.25]">
                                The Blueprint is Limited. <br />
                                Will You Be in the Room
                            </h2>
                            <p className="text-foreground/70 text-lg leading-relaxed max-w-sm font-body">
                                Don't be the professional left using a 20th-century mindset in a 2026 world. Join the elite. Master the build.
                            </p>
                        </div>
                        <div className="mt-12">
                            <Button className="bg-white text-foreground hover:bg-primary hover:text-white rounded-full px-4 sm:px-8 py-2.5 h-auto font-sub text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-[0.15em] transition-all duration-300 shadow-sm group border-none">
                                REGISTER BEFORE THE EARLY BIRD EXPIRES
                                <div className="ml-2 sm:ml-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-background flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors shrink-0">
                                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                                </div>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Sponsorship Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[hsl(171,64.6%,50.05%,0.72)] rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[480px] shadow-card hover:shadow-card-hover transition-all duration-500 group border border-black/5"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-10 shadow-sm border border-white">
                                <Users className="h-4 w-4 text-foreground/80" />
                                <span className="text-xs font-sub font-bold tracking-wider uppercase text-foreground/80">Limited number of Sponsorship Tiers</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-heading font-medium text-foreground mb-6 leading-[1.25]">
                                Unlock Sponsorship <br /> Benefits
                            </h2>
                            <p className="text-foreground/70 text-lg leading-relaxed max-w-sm font-body">
                                Align your brand with excellence. Partner with the sub-region's most influential professional gathering.
                            </p>
                        </div>
                        <div className="mt-12">
                            <Button className="bg-white text-foreground hover:bg-secondary hover:text-white rounded-full px-8 py-2.5 h-auto font-sub text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-sm group border-none">
                                Become a Sponsor
                                <div className="ml-3 w-8 h-8 rounded-full bg-background flex items-center justify-center group-hover:bg-white group-hover:text-secondary transition-colors shrink-0">
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTACards;

