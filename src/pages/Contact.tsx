import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "values@fivesixfive.co",
    href: "mailto:values@fivesixfive.co",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 24 405 4973",
    href: "tel:+233244054973",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Office No. 2 Nii Amon Link, Accra, Greater Accra",
    href: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM GMT",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Consultation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-primary-foreground/80 font-body">
                Ready to start your transformation journey? We'd love to hear from you. Reach out and let's discuss how
                we can help your organization thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 items-start">
                {/* Contact Info */}
                <div className="space-y-12">
                  <div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Whether you're looking for a full cultural transformation or just some advice on organizational
                      design, our experts are here to help.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-6 group">
                      <div className="p-4 bg-white rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="font-ui font-bold text-foreground">Email us</h4>
                        <p className="text-muted-foreground">{contactInfo[0].value}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6 group">
                      <div className="p-4 bg-white rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-ui font-bold text-foreground">Call us</h4>
                        <p className="text-muted-foreground">{contactInfo[1].value}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6 group">
                      <div className="p-4 bg-white rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-ui font-bold text-foreground">Visit us</h4>
                        <p className="text-muted-foreground">{contactInfo[2].value}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats/Social Proof */}
                  <div className="pt-8 grid grid-cols-2 gap-8">
                    <div>
                      <span className="block text-4xl font-heading text-primary">98%</span>
                      <span className="text-xs font-ui text-muted-foreground uppercase tracking-widest">
                        Client Satisfaction
                      </span>
                    </div>
                    <div>
                      <span className="block text-4xl font-heading text-secondary">150+</span>
                      <span className="text-xs font-ui text-muted-foreground uppercase tracking-widest">
                        Transformations
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl relative">
                  <div className="absolute top-0 right-12 w-12 h-1 bg-primary rounded-full"></div>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send size={40} />
                      </div>
                      <h3 className="text-2xl font-heading mb-2 text-foreground">Message Sent!</h3>
                      <p className="text-muted-foreground">We'll get back to you within 24 business hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-ui font-semibold text-muted-foreground">Your Name</label>
                          <input
                            type="text"
                            required
                            className="w-full px-5 py-3 bg-muted border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-0 transition-all text-sm"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-ui font-semibold text-muted-foreground">Work Email</label>
                          <input
                            type="email"
                            required
                            className="w-full px-5 py-3 bg-muted border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-0 transition-all text-sm"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-ui font-semibold text-muted-foreground">
                          What can we help with?
                        </label>
                        <div className="relative">
                          <select
                            className="w-full px-5 py-3 bg-muted border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-0 transition-all text-sm appearance-none cursor-pointer"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          >
                            <option>Consultation</option>
                            <option>Culture Audit</option>
                            <option>Learning & Development</option>
                            <option>General Enquiry</option>
                          </select>
                          <ChevronDown
                            size={18}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-ui font-semibold text-muted-foreground">Your Message</label>
                        <textarea
                          rows={5}
                          required
                          className="w-full px-5 py-3 bg-muted border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-0 transition-all text-sm resize-none"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>

                      <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-6">
                        <input
                          type="checkbox"
                          required
                          className="rounded border-border text-primary focus:ring-primary"
                        />
                        <span>I agree to the privacy policy and data processing terms.</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-primary text-white rounded-full font-ui font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                      >
                        <span>Send Message</span>
                        <Send size={18} />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Schedule a Consultation CTA - Full Width */}
              <div className="mt-16 lg:col-span-2">
                <Card className="overflow-hidden border-0 gradient-bg">
                  <CardContent className="p-8 md:p-12 text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
                          <Calendar className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="font-heading text-2xl md:text-3xl font-semibold">Schedule a Consultation</h3>
                          <p className="text-base text-white/80 mt-2">
                            Book a free 30-minute discovery call with our team to discuss your organizational needs.
                          </p>
                        </div>
                      </div>
                      <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">
                        <Link to="#">Book Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 w-full bg-muted relative overflow-hidden">
          <img
            src="https://picsum.photos/1920/600?random=30"
            alt="Office location map"
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 bg-white rounded-full shadow-2xl animate-pulse">
              <MapPin size={32} className="text-primary" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
