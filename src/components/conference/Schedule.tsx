import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Coffee } from "lucide-react";

const schedule = [
  {
    day: "Day 1",
    date: "July 15, 2026",
    events: [
      { time: "08:00", title: "Registration & Welcome Coffee", icon: Coffee },
      { time: "09:30", title: "Opening Keynote — Angela Kyerematen-Jimoh", icon: CalendarDays },
      { time: "11:00", title: "Governance Panel — Asante-Asiedu & Patience Akyianu", icon: CalendarDays },
      { time: "14:00", title: "The Global Machine — Chris Wulff-Caesar", icon: CalendarDays },
      { time: "16:00", title: "Design Thinking Workshop — Dr. Patrick Awuah", icon: CalendarDays },
      { time: "19:00", title: "The Architect's Study — Fireside Chat", icon: Clock },
    ],
  },
  {
    day: "Day 2",
    date: "July 16, 2026",
    events: [
      { time: "09:00", title: "Ethics & Integrity — Rev. Stephen Wengam", icon: CalendarDays },
      { time: "10:30", title: "Branding from Within — Prof. Bob Hinson", icon: CalendarDays },
      { time: "12:00", title: "The Shepherd's Office — Church Admin Roundtable", icon: CalendarDays },
      { time: "14:00", title: "Pan-African Blueprint — Adetoun Akinsumi", icon: CalendarDays },
      { time: "16:00", title: "Closing Keynote & Awards Ceremony", icon: CalendarDays },
      { time: "18:00", title: "Networking Gala Dinner", icon: Clock },
    ],
  },
];

const Schedule = () => {
  return (
    <section className="py-24 bg-background" id="schedule">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block gradient-primary text-primary-foreground font-sub text-sm tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
            The Blueprint
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Conference Schedule
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {schedule.map((day, di) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: di * 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="gradient-primary rounded-xl px-4 py-2">
                  <span className="font-heading font-bold text-primary-foreground">{day.day}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="font-sub text-sm">{day.date}</span>
                </div>
              </div>

              <div className="space-y-3">
                {day.events.map((event, ei) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: di * 0.2 + ei * 0.05, duration: 0.4 }}
                    className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300"
                  >
                    <span className="font-sub font-semibold text-sm text-primary min-w-[52px]">
                      {event.time}
                    </span>
                    <div className="w-px h-8 bg-border" />
                    <p className="text-sm text-foreground font-medium">{event.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
