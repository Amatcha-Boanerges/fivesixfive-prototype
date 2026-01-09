import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Users, Video, ExternalLink } from "lucide-react";

const upcomingEvents = [
  {
    type: "Webinar",
    title: "Building Resilient Teams in 2025",
    date: "Jan 25, 2025",
    time: "2:00 PM EST",
    attendees: "124 registered",
    isLive: true,
  },
  {
    type: "Conference",
    title: "PA Annual Leadership Summit",
    date: "Feb 15-17, 2025",
    time: "All Day",
    attendees: "500+ expected",
    isLive: false,
  },
  {
    type: "Workshop",
    title: "Values Mapping Masterclass",
    date: "Mar 5, 2025",
    time: "10:00 AM EST",
    attendees: "50 spots",
    isLive: false,
  },
];

const pastWebinars = [
  { title: "Culture Change That Sticks", views: "2.4k views" },
  { title: "Leading Through Uncertainty", views: "1.8k views" },
  { title: "The Future of HR Strategy", views: "3.1k views" },
];

export function EventsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-ui text-sm font-medium mb-4">
            Events & Webinars
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Learn, Connect, <span className="gradient-text">Grow</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Join our community of forward-thinking leaders. Attend live sessions,
            access on-demand content, and network with peers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
              <Calendar className="text-primary" size={20} />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
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
                      <h4 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground font-ui">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users size={14} />
                          {event.attendees}
                        </span>
                      </div>
                    </div>
                    <Button variant={event.isLive ? "default" : "outline"} size="sm">
                      {event.isLive ? "Join Now" : "Register"}
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="ghost">
                View All Events
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          {/* Past Webinars */}
          <div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
              <Video className="text-secondary" size={20} />
              Previous Webinars
            </h3>
            <div className="space-y-3">
              {pastWebinars.map((webinar) => (
                <a
                  key={webinar.title}
                  href="#"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Video size={20} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-ui font-medium text-sm text-foreground truncate group-hover:text-primary transition-colors">
                      {webinar.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{webinar.views}</p>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="secondary" className="w-full">
                Browse Archive
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
