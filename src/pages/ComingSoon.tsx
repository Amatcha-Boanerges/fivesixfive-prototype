import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative min-h-screen-safe flex items-center justify-center overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 gradient-hero animate-gradient opacity-95" />

          {/* Floating Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-slide-up">
                Coming Soon
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 font-body mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                We're working on something exciting. Check back soon!
              </p>
              <Link to="/">
                <Button variant="hero" size="xl" className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  <ArrowLeft size={20} className="mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
