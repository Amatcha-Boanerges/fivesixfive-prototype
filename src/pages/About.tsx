import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Heart, Target, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const values = [
  {
    icon: Heart,
    title: "People First",
    description:
      "We believe that every organization's success starts with its people. We put humans at the center of everything we do.",
  },
  {
    icon: Target,
    title: "Strategic Partnership",
    description: "We're not vendors—we're partners invested in your long-term success and sustainable growth.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We continuously evolve our methods to bring you the most effective and modern approaches to organizational development.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work alongside your teams, building capability and ensuring lasting change that outlives our engagement.",
  },
];

const team = [
  {
    name: "Maame Gaisey",
    role: "Managing Partner",
    image: "/managing-partner-1.jpg",
    bio: "20+ years of experience in HR, Values and organizational transformation and leadership development.",
  },
  {
    name: "Catherine Engmann",
    role: "Managing Partner",
    image: "/managing-partner-2.jpg",
    bio: "Expert in values-based culture design and Corporate Governance.",
  },
];

export default function About() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling when page loads with hash
    if (location.hash) {
      const hash = location.hash.substring(1); // Remove the #
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                About Us
              </h1>
              <p className="text-xl text-primary-foreground/80 font-body">
                We're a values-driven consultancy dedicated to helping organizations build thriving cultures, develop
                exceptional leaders, and achieve lasting success.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative animate-slide-up">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src="/team-light.jpg"
                    alt="Our team at work"
                    className="h-full w-full object-cover brightness-80"
                  />
                </div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                  Our Story
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Founded in 2018, fivesixfive began with a simple belief: that organizations succeed when
                  their people thrive. We've since grown into a trusted partner for companies across industries, helping
                  them navigate complex challenges and unlock their full potential.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Our approach is different. We don't believe in quick fixes or one-size-fits-all solutions. Instead, we
                  take the time to deeply understand your unique context, values, and goals. We work alongside your
                  teams to build sustainable change that continues long after our engagement ends.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Today, we're proud to have served 50+ organisations, developed 500+ leaders & professionals. Our reviews are usually between 4.7 and 5.0 out of 5.0. But what matters most to us is the lasting impact we create
                  together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                Our Values
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                These principles guide everything we do and shape how we partner with our clients.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="group border-0 bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full gradient-bg transition-transform duration-300 group-hover:scale-110">
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our diverse team of experts brings decades of combined experience in organizational development.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="group text-center">
                  <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="font-ui text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden gradient-hero py-32">
          {/* Floating Images - Hidden on mobile/tablet, visible on large screens */}
          <div className="absolute inset-0 max-w-[1400px] mx-auto pointer-events-none hidden xl:block">
            {/* Left Side */}
            <div className="absolute top-16 left-8 w-40 h-52 rounded-2xl overflow-hidden shadow-2xl rotate-[-6deg] opacity-80 border-4 border-white/5">
              <img src="/team-light.jpg" alt="Team member" className="w-full h-full object-cover desaturate-[0.2]" />
            </div>
            <div className="absolute bottom-24 left-12 w-48 h-40 rounded-2xl overflow-hidden shadow-2xl rotate-3 opacity-90 border-4 border-white/5">
              <img src="/managing-partner-1.jpg" alt="Working" className="w-full h-full object-cover desaturate-[0.2]" />
            </div>

            {/* Right Side */}
            <div className="absolute top-12 right-12 w-40 h-40 rounded-2xl overflow-hidden shadow-2xl rotate-6 opacity-80 border-4 border-white/5">
              <img
                src="https://picsum.photos/800/800?random=12"
                alt="Team"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all"
              />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 w-32 h-48 rounded-2xl overflow-hidden shadow-2xl rotate-[-3deg] opacity-70 border-4 border-white/5">
              <img
                src="https://picsum.photos/800/800?random=13"
                alt="Office"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all"
              />
            </div>
            <div className="absolute bottom-8 right-24 w-44 h-44 rounded-2xl overflow-hidden shadow-2xl rotate-3 opacity-90 border-4 border-white/5">
              <img
                src="https://picsum.photos/800/800?random=14"
                alt="Meeting"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all"
              />
            </div>
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">

            <h2 className="mx-auto max-w-5xl font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-bold leading-[1.1] text-white mb-6 sm:mb-8 md:mb-10 tracking-tight">
              Let's <span className="text-secondary">Work</span> Together
            </h2>

            <p className="mx-auto max-w-2xl text-lg md:text-xl text-white/60 mb-14 font-light leading-relaxed">
              Ready to explore how we can help your organization thrive?<br className="hidden md:block" />
              We'd love to hear from you.
            </p>

            <Link to="/contact">
              <div className="inline-flex items-center gap-4 pl-8 pr-2 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-all group cursor-pointer shadow-2xl shadow-primary/20">
                <span className="font-semibold text-white text-lg tracking-wide">Get in Touch</span>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
