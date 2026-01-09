import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-8">
            <Mail size={32} className="text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-lg text-primary-foreground/80 font-body mb-10">
            Get insights on leadership, culture transformation, and organizational
            development delivered to your inbox monthly.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <CheckCircle2 className="text-secondary" size={24} />
              <span className="font-ui font-medium text-primary-foreground">
                Thanks for subscribing! Check your inbox soon.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 px-6 rounded-xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40 font-body"
              />
              <Button type="submit" variant="hero" size="xl" className="flex-shrink-0">
                Subscribe
                <ArrowRight size={18} />
              </Button>
            </form>
          )}

          <p className="mt-4 text-sm text-primary-foreground/50 font-ui">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
