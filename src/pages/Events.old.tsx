import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Users, Video, MapPin, ExternalLink } from "lucide-react";

const upcomingEvents = [
  {
    type: "Webinar",
    title: "Building Resilient Teams in 2025",
    description: "Learn practical strategies for developing team resilience in uncertain times.",
    date: "Jan 25, 2025",
    time: "2:00 PM EST",
    attendees: "124 registered",
    isLive: true,
  },
  {
    type: "Conference",
    title: "PA Annual Leadership Summit",
    description: "Our flagship event bringing together leaders from around the world.",
    date: "Feb 15-17, 2025",
    time: "All Day",
    location: "New York, NY",
    attendees: "500+ expected",
    isLive: false,
  },
  {
    type: "Workshop",
    title: "Values Mapping Masterclass",
    description: "A hands-on workshop for HR leaders on implementing values-based culture.",
    date: "Mar 5, 2025",
    time: "10:00 AM EST",
    attendees: "50 spots",
    isLive: false,
  },
];

const pastWebinars = [
  { title: "Culture Change That Sticks", date: "Dec 12, 2024", views: "2.4k views", duration: "58 min" },
  { title: "Leading Through Uncertainty", date: "Nov 20, 2024", views: "1.8k views", duration: "45 min" },
  { title: "The Future of HR Strategy", date: "Nov 5, 2024", views: "3.1k views", duration: "62 min" },
  { title: "Building High-Performance Teams", date: "Oct 18, 2024", views: "2.2k views", duration: "52 min" },
  { title: "Values-Driven Leadership", date: "Oct 3, 2024", views: "1.9k views", duration: "48 min" },
  { title: "Organizational Agility Essentials", date: "Sep 20, 2024", views: "2.7k views", duration: "55 min" },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                Events & Webinars
              </h1>
              <p className="text-xl text-primary-foreground/80 font-body">
                Join our community of forward-thinking leaders. 
                Attend live sessions, access on-demand content, and connect with peers.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Event */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-2xl bg-gradient-primary p-1 text-primary-foreground shadow-elevated">
              <div className="group relative flex flex-col items-center gap-12 overflow-hidden rounded-[22px] bg-foreground p-8 md:p-12 lg:flex-row">
                <div
                  className="pointer-events-none absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="relative z-10 flex-1">
                  <span className="mb-6 inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                    Upcoming Conference
                  </span>
                  <h2 className="mb-6 font-heading text-4xl font-semibold md:text-5xl">
                    PA Annual Conference 2025
                  </h2>
                  <p className="mb-8 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
                    Join 500+ culture leaders and HR professionals for two days of inspiration, networking, and strategic
                    development in the heart of London.
                  </p>
                  <div className="mb-10 flex flex-wrap gap-8 text-sm font-ui text-primary-foreground/70">
                    <div className="flex items-center space-x-2">
                      <Calendar size={18} className="text-secondary" />
                      <span>March 14-15, 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={18} className="text-secondary" />
                      <span>The Barbican, London</span>
                    </div>
                  </div>
                  <Button size="lg" className="bg-white text-foreground hover:bg-secondary hover:text-white">
                    Register Interest Now
                  </Button>
                </div>

                <div className="relative z-10 lg:w-1/3">
                  <div className="relative aspect-square">
                    <img
                      src="/pa-conf.jpg"
                      alt="Conference attendees"
                      className="h-full w-full rotate-3 rounded-2xl object-cover transition-transform duration-500 group-hover:rotate-0"
                    />
                    <div className="absolute inset-0 -z-10 -rotate-3 rounded-2xl border-4 border-primary transition-transform duration-500 group-hover:rotate-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 flex items-center gap-3">
                <Calendar className="text-primary" size={28} />
                Upcoming Events
              </h2>
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.title}
                    className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-ui font-medium ${
                            event.isLive 
                              ? "bg-secondary/10 text-secondary" 
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {event.type}
                          </span>
                          {event.isLive && (
                            <span className="flex items-center gap-1.5 text-secondary text-xs font-medium">
                              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                              Live Soon
                            </span>
                          )}
                        </div>
                        <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground font-body mb-4">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-ui">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {event.time}
                          </span>
                          {event.location && (
                            <span className="flex items-center gap-1.5">
                              <MapPin size={14} />
                              {event.location}
                            </span>
                          )}
                          <span className="flex items-center gap-1.5">
                            <Users size={14} />
                            {event.attendees}
                          </span>
                        </div>
                      </div>
                      <Button variant={event.isLive ? "default" : "outline"} size="lg">
                        {event.isLive ? "Join Now" : "Register"}
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-24 bg-muted/30" id="webinars">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 flex items-center gap-3">
                <Video className="text-secondary" size={28} />
                Previous Webinars
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastWebinars.map((webinar) => (
                  <a
                    key={webinar.title}
                    href="#"
                    className="group flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-secondary/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-20 h-20 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <Video size={28} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-secondary transition-colors mb-1">
                        {webinar.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-ui mb-2">{webinar.date}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{webinar.views}</span>
                        <span>•</span>
                        <span>{webinar.duration}</span>
                      </div>
                    </div>
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button variant="secondary" size="lg">
                  View All Recordings
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
