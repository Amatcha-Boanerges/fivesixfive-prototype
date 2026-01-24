import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const values = [
  "Long-term partnerships over quick fixes",
  "Values-driven transformation",
  "Evidence-based methodologies",
  "Sustainable, measurable results",
];

export function AboutSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
              <div className="absolute inset-0 gradient-hero opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <p className="font-heading text-6xl md:text-8xl font-bold mb-4">8+</p>
                  <p className="font-ui text-lg opacity-90">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="static mt-6 sm:absolute sm:-bottom-6 sm:-right-6 bg-card rounded-2xl shadow-card p-5 sm:p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-secondary font-heading font-bold text-xl">✓</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-2xl text-foreground">500+</p>
                  <p className="font-ui text-sm text-muted-foreground">Professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-ui text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Your Strategic Partner in{" "}
              <span className="gradient-text">Organizational Growth</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              We are a consultancy dedicated to helping organizations unlock their
              full potential through people-centered strategies. Our approach
              combines deep expertise with a genuine commitment to your success.
            </p>

            {/* Values List */}
            <ul className="space-y-4 mb-10">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary mt-0.5 flex-shrink-0" size={20} />
                  <span className="font-ui text-foreground">{value}</span>
                </li>
              ))}
            </ul>

            <Button size="lg">
              Learn Our Story
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
