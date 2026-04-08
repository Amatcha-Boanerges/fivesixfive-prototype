import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const imagesRow1 = [
    "https://images.unsplash.com/photo-1540575861501-7ce0e1d1aa99?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1591115765373-520b7a2d765f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
];

const imagesRow2 = [
    "https://images.unsplash.com/photo-1475721027187-4024733923f9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1528605248644-14dd04cb11c7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1523580494863-6f30312248fd?auto=format&fit=crop&q=80&w=800",
];

const MarqueeRow = ({ images, reverse = false }: { images: string[]; reverse?: boolean }) => {
    return (
        <div className="flex overflow-hidden">
            <div className={`flex gap-6 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee-slow'}`}>
                {/* First set of images */}
                {images.map((src, i) => (
                    <motion.div
                        key={`img-${i}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                        className="w-[180px] md:w-[280px] aspect-square rounded-[2rem] overflow-hidden flex-shrink-0 shadow-xl border-4 border-white/20"
                    >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                ))}
                {/* Duplicate set for seamless loop */}
                {images.map((src, i) => (
                    <div
                        key={`img-dup-${i}`}
                        className="w-[180px] md:w-[280px] aspect-square rounded-[2rem] overflow-hidden flex-shrink-0 shadow-xl border-4 border-white/20"
                    >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

const PreviousEditions = () => {
    return (
        <section className="relative overflow-hidden py-12 md:py-24 gradient-primary">
            {/* Gallery Section */}
            <div className="flex flex-col gap-8 mb-12 md:mb-24 relative z-10">
                <MarqueeRow images={imagesRow1} />
                <MarqueeRow images={imagesRow2} reverse />
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Decorative Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-[3rem] font-heading font-semibold text-white mb-8 leading-[1.25] capitalize">
                        PA Conference <br />
                        Growth, Value, Impact
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl font-body max-w-2xl mx-auto mb-12">
                        Join 250+ elite professionals this July at the Labadi Beach Hotel.
                        Secure your legacy, master the build, and walk away with the blueprint for institutional influence.
                    </p>

                    <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-2.5 h-auto font-sub text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-sm group border-none">
                        Secure your Seat
                        <div className="ml-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-primary/90 transition-colors shrink-0">
                            <ArrowRight className="h-4 w-4" />
                        </div>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default PreviousEditions;
