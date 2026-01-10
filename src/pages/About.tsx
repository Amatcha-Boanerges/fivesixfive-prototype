import { Link } from "react-router-dom";
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
    bio: "Expert in values-based culture design and employee engagement.",
  },
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center animate-slide-up">
              <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
                Partnering for <span className="gradient-text">Sustainable Growth</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
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
                  Founded over a decade ago, fivesixfive began with a simple belief: that organizations succeed when
                  their people thrive. We've since grown into a trusted partner for companies across industries, helping
                  them navigate complex challenges and unlock their full potential.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Our approach is different. We don't believe in quick fixes or one-size-fits-all solutions. Instead, we
                  take the time to deeply understand your unique context, values, and goals. We work alongside your
                  teams to build sustainable change that continues long after our engagement ends.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Today, we're proud to have served over 150 organizations, developed more than 500 leaders, and
                  maintained a 98% client satisfaction rate. But what matters most to us is the lasting impact we create
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
                <Card key={value.title} className="border-0 bg-card shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full gradient-bg">
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
        <section className="bg-background py-20 md:py-28">
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
        <section className="gradient-bg py-20">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
              Let's Work Together
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Ready to explore how we can help your organization thrive? We'd love to hear from you.
            </p>
            <Button asChild size="lg" className="mt-8 bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
