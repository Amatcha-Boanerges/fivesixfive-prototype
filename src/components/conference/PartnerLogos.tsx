import { motion } from "framer-motion";

const partners = [
    { name: "GCB Bank", color: "text-[#D4AF37]" },
    { name: "Hollard", color: "text-[#EF3E33]" },
    { name: "Tullow Oil", color: "text-[#005288]" },
    { name: "Labadi Beach", color: "text-[#8B7355]" },
    { name: "Stanbic Bank", color: "text-[#0033A0]" },
    { name: "Enterprise", color: "text-[#CC0000]" },
    { name: "Vodafone", color: "text-[#E60000]" },
    { name: "MTN Business", color: "text-[#FFCC00]" },
];

const PartnerLogos = () => {
    return (
        <section className="py-4 md:py-8 overflow-hidden">

            <div className="flex overflow-hidden group">
                <div className="flex gap-20 md:gap-32 items-center w-max animate-marquee-slow hover:[animation-play-state:paused]">
                    {/* First set of logos */}
                    {partners.map((partner, i) => (
                        <div
                            key={`partner-${i}`}
                            className={`font-heading text-xl md:text-3xl font-bold tracking-tight grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer ${partner.color}`}
                        >
                            {partner.name}
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {partners.map((partner, i) => (
                        <div
                            key={`partner-dup-${i}`}
                            className={`font-heading text-xl md:text-3xl font-bold tracking-tight grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer ${partner.color}`}
                        >
                            {partner.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
