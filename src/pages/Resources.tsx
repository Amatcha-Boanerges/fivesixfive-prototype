import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, Download, Video, Image } from "lucide-react";

const blogPosts = [
  {
    title: "5 Signs Your Organization Needs a Culture Refresh",
    excerpt: "Learn to recognize the early warning signs that your organizational culture may be holding you back.",
    category: "Culture",
    readTime: "6 min read",
    date: "Jan 5, 2025",
  },
  {
    title: "The ROI of Leadership Development",
    excerpt: "Understanding the tangible and intangible returns on investing in your leaders.",
    category: "Leadership",
    readTime: "8 min read",
    date: "Dec 28, 2024",
  },
  {
    title: "Remote Work and Team Cohesion: A New Framework",
    excerpt: "Practical strategies for building strong team bonds in a distributed workplace.",
    category: "Teams",
    readTime: "5 min read",
    date: "Dec 15, 2024",
  },
];

const downloads = [
  { title: "Culture Transformation Playbook", type: "PDF Guide", size: "2.4 MB" },
  { title: "Leadership Assessment Template", type: "Excel Template", size: "156 KB" },
  { title: "Employee Engagement Survey Questions", type: "PDF Document", size: "890 KB" },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                Resources
              </h1>
              <p className="text-xl text-primary-foreground/80 font-body">
                Insights, guides, and tools to help you transform your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24 bg-background" id="blog">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground flex items-center gap-3">
                  <BookOpen className="text-primary" size={28} />
                  Latest Articles
                </h2>
                <Button variant="ghost">
                  View All
                  <ArrowRight size={16} />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <article
                    key={post.title}
                    className="group rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 overflow-hidden"
                  >
                    <div className="aspect-video gradient-hero" />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-ui font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body line-clamp-2">
                        {post.excerpt}
                      </p>
                      <p className="text-xs text-muted-foreground mt-4">{post.date}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-24 bg-muted/30" id="downloads">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 flex items-center gap-3">
                <Download className="text-secondary" size={28} />
                Free Downloads
              </h2>
              <div className="space-y-4">
                {downloads.map((download) => (
                  <div
                    key={download.title}
                    className="flex items-center justify-between gap-4 p-5 rounded-xl bg-card border border-border hover:border-secondary/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">{download.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {download.type} • {download.size}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download size={16} />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Gallery Teaser */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Video size={28} />
              </div>
              <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                <Image size={28} />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Videos & Photos
            </h2>
            <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
              Explore our media gallery featuring event highlights, behind-the-scenes content, and more.
            </p>
            <Button size="lg">
              Browse Gallery
              <ArrowRight size={16} />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
