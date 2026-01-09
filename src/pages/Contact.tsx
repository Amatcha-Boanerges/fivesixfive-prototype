import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@apexconsulting.com",
    href: "mailto:hello@apexconsulting.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Business Avenue, Suite 100, New York, NY 10001",
    href: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    href: "#",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", company: "", subject: "", message: "" });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Ready to start your transformation journey? We'd love to hear from you. Reach out and let's discuss how
                we can help your organization thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="border-0 bg-card shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  {isSubmitted ? (
                    <div className="mt-8 rounded-lg bg-secondary/10 p-6 text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                        <Send className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-muted-foreground">Thank you for reaching out. We'll be in touch soon.</p>
                      <Button onClick={() => setIsSubmitted(false)} className="mt-4 bg-primary hover:bg-primary/90">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="John Smith"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            placeholder="Your Company"
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            placeholder="How can we help?"
                            value={formState.subject}
                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your needs..."
                          rows={5}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-foreground">
                    Contact Information
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Prefer to reach out directly? Here's how you can contact us.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <Card key={info.label} className="border-0 bg-muted shadow-sm">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                          <info.icon className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <p className="font-ui text-sm font-medium text-muted-foreground">
                            {info.label}
                          </p>
                          {info.href !== "#" ? (
                            <a href={info.href} className="mt-1 text-foreground hover:text-primary">
                              {info.value}
                            </a>
                          ) : (
                            <p className="mt-1 text-foreground">{info.value}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Book Consultation CTA */}
                <Card className="overflow-hidden border-0 gradient-bg">
                  <CardContent className="p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold">
                          Schedule a Consultation
                        </h3>
                        <p className="text-sm text-white/80">Book a free 30-minute discovery call with our team.</p>
                      </div>
                    </div>
                    <Button asChild className="mt-4 w-full bg-white text-primary hover:bg-white/90">
                      <Link to="#">Book Now</Link>
                    </Button>
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
