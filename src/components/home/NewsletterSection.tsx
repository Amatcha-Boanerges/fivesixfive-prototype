import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus("loading");

      // Simulate API call
      setTimeout(() => {
        setStatus("success");
        setEmail("");
      }, 1500);
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative gradient-hero rounded-[2rem] p-8 md:p-16 overflow-hidden">

          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />

          {/* Centered Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-heading font-bold leading-tight text-primary-foreground"
            >
              Stay ahead with our <br /> monthly insights.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-primary-foreground/80 text-lg font-body"
            >
              Join 5,000+ professionals receiving the latest business trends and exclusive consulting tips.
            </motion.p>

            <div className="mt-8">
              {status === "success" ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-primary-foreground/20 backdrop-blur-md p-6 rounded-2xl text-center border border-primary-foreground/30"
                >
                  <p className="font-heading font-semibold text-xl text-primary-foreground">Check your inbox! 🚀</p>
                  <p className="text-sm text-primary-foreground/80 mt-1 font-body">We've sent a confirmation link your way.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative group max-w-lg mx-auto">
                  <Input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full bg-primary-foreground text-foreground px-6 py-5 rounded-2xl outline-none focus:ring-4 focus:ring-primary/50 transition-all placeholder:text-muted-foreground font-body h-auto pr-32 md:pr-36"
                  />
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-4 md:mt-0 md:absolute md:right-2 md:top-2 md:bottom-2 h-auto"
                  >
                    {status === "loading" ? "Joining..." : "Subscribe"}
                    {status !== "loading" && <ArrowRight size={18} className="ml-2" />}
                  </Button>
                </form>
              )}
              <p className="mt-4 text-xs text-primary-foreground/60 text-center font-ui">
                We care about your data. Read our <span className="underline cursor-pointer hover:text-primary-foreground transition-colors">Privacy Policy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
