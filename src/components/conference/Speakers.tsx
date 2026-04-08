import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Award, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

import angelaImg from "@/assets/speakers/angela.jpg";
import matildaImg from "@/assets/speakers/matilda.jpg";
import chrisImg from "@/assets/speakers/chris.jpg";
import patrickImg from "@/assets/speakers/patrick.jpg";
import stephenImg from "@/assets/speakers/stephen.jpg";
import bobImg from "@/assets/speakers/bob.jpg";
import adetounImg from "@/assets/speakers/adetoun.jpg";

const speakers = [
  {
    name: "Angela Kyerematen-Jimoh",
    title: "Global Tech Executive",
    role: "The Global Tech Headline",
    tag: "Keynote",
    image: angelaImg,
    bio: "Angela Kyerematen-Jimoh is a distinguished Ghanaian business leader and technology executive. She currently serves as the Strategic Partnership Lead for Africa at Microsoft, where she drives digital transformation across the continent. Previously, she made history as the first woman and first African to serve as IBM's Regional Head for North, East, and West Africa. With over 20 years of experience in the financial and tech sectors, she is a member of the Bank of Ghana's board and a passionate advocate for women's leadership in technology.",
  },
  {
    name: "Hon. Matilda Asante-Asiedu",
    title: "2nd Deputy Governor, Bank of Ghana",
    role: "The Governance Keynote",
    tag: "Keynote",
    image: matildaImg,
    bio: "Hon. Matilda Asante-Asiedu is the Second Deputy Governor of the Bank of Ghana. She is a seasoned professional with extensive experience in governance, public policy, and financial regulation. Her career spans journalism, corporate communications, and high-level public service, where she has been instrumental in shaping policies that promote financial stability and inclusion. She is widely respected for her leadership in strengthening the regulatory framework of Ghana's banking sector.",
  },
  {
    name: "Chris Wulff-Caesar",
    title: "MD, Unilever Ghana",
    role: "The Global Machine Guest",
    tag: "Speaker",
    image: chrisImg,
    bio: "Chris Wulff-Caesar is the Managing Director of Unilever Ghana. He is an accomplished FMCG leader with a proven track record across sub-Saharan Africa. Chris has held various senior marketing and sales positions within Unilever and other global conglomerates, focusing on brand development and operational excellence. He is recognized for his strategic vision in driving business growth and his commitment to sustainable business practices in the manufacturing sector.",
  },
  {
    name: "Dr. Patrick Awuah",
    title: "President, Ashesi University",
    role: "The Systems Designer",
    tag: "Speaker",
    image: patrickImg,
    bio: "Dr. Patrick Awuah is the founder and President of Ashesi University, a premier private institution in Ghana dedicated to ethical leadership and innovation. A former program manager at Microsoft, he returned to Ghana with a vision to transform higher education. His work has earned him numerous accolades, including the MacArthur Fellowship and the WISE Prize for Education. He is a member of the Council on Foreign Relations and is widely regarded as one of Africa's leading educational visionaries.",
  },
  {
    name: "Rev. Stephen Wengam",
    title: "General Superintendent, Assemblies of God",
    role: "The Moral Foundation",
    tag: "Speaker",
    image: stephenImg,
    bio: "Rev. Stephen Wengam is the General Superintendent of the Assemblies of God, Ghana, and the Vice Chairman of the World Assemblies of God Fellowship. A highly respected spiritual leader and motivational speaker, he has spent decades in pastoral ministry and social advocacy. He is known for his dedication to moral leadership and community development, serving as the chairman of the Ghana Prisons Service Council and a voice for social justice and spiritual growth.",
  },
  {
    name: "Prof. Bob Hinson",
    title: "Branding & Marketing Expert",
    role: "The Reputation Architect",
    tag: "Speaker",
    image: bobImg,
    bio: "Professor Robert Ebo Hinson is a world-renowned expert in Marketing and Branding. He is a Professor of Marketing and the Director of the Office of Institutional Advancement at the University of Ghana. With two doctorates and numerous publications, he has consulted for leading international and local institutions across Africa. He specializes in market-oriented corporate social responsibility and service management, and sits on various boards as a strategic advisor on reputation and brand architecture.",
  },
  {
    name: "Adetoun Akinsumi",
    title: "Global EA Leader",
    role: "The Continental Chief of Staff",
    tag: "Invitee",
    image: adetounImg,
    bio: "Adetoun Akinsumi is a prominent leader in the global Executive Assistant community and a strategic 'Chief of Staff' professional. She is the founder of the Executive Assistants Network Africa and has played a pivotal role in elevating the EA profession across the continent. Her expertise lies in administrative excellence, corporate governance, and leadership support. She is a sought-after speaker and mentor, dedicated to empowering administrative professionals to become strategic partners in the business world.",
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const SpeakerCard = ({ speaker }: { speaker: typeof speakers[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div key={speaker.name} className="group flex flex-col h-full transition-all duration-300">
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-muted mb-4">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/40 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-card/90 backdrop-blur-sm text-foreground text-sm font-sub font-medium px-3 py-1.5 rounded-full shadow-sm">
          {speaker.tag === "Keynote" ? (
            <Award className="h-4 w-4 text-primary" />
          ) : (
            <Mic className="h-4 w-4 text-secondary" />
          )}
          {speaker.tag}
        </div>
      </div>
      <div className="px-1 pb-6 flex-grow flex flex-col">
        <div className="mb-4">
          <p className="text-xs font-sub font-medium text-primary uppercase tracking-wider mb-1">
            {speaker.role}
          </p>
          <h3 className="text-lg font-heading font-semibold text-foreground">
            {speaker.name}
          </h3>
          <p className="text-sm text-muted-foreground font-sub">
            {speaker.title}
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-primary font-sub text-sm font-semibold hover:opacity-80 transition-opacity mb-4"
        >
          {isExpanded ? "Show Less" : "Learn More"}
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground font-sub leading-relaxed italic">
                  {speaker.bio}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Speakers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(speakers.length / itemsPerSlide);

  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(Math.max(0, totalSlides - 1));
    }
  }, [totalSlides, currentSlide]);

  const paginate = useCallback((newDir: number) => {
    setDirection(newDir);
    setCurrentSlide((prev) => {
      const next = prev + newDir;
      const slides = Math.ceil(speakers.length / itemsPerSlide);
      if (next < 0) return slides - 1;
      if (next >= slides) return 0;
      return next;
    });
  }, [itemsPerSlide]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, [isPaused, paginate]);

  const visibleSpeakers = speakers.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block gradient-primary text-primary-foreground font-sub text-sm tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
            The Faculty of Architects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Learn from the Master Builders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            of Global and National Success
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.name} speaker={speaker} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => paginate(-1)}
            className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Previous speakers"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentSlide ? 1 : -1);
                  setCurrentSlide(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === currentSlide
                  ? "w-8 gradient-primary"
                  : "w-2.5 bg-border hover:bg-muted-foreground/30"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Next speakers"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
