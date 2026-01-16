import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { Search, Filter, FileText, Layout, Download, ChevronRight } from "lucide-react";

export default function Resources() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Leadership", "Values Systems", "Culture", "Remote Work"];

  const resources = [
    {
      title: "The 2024 Culture Report",
      type: "PDF",
      category: "Culture",
      img: "https://picsum.photos/800/600?random=20",
    },
    {
      title: "Building trust in high-growth startups",
      type: "Article",
      category: "Leadership",
      img: "https://picsum.photos/800/600?random=21",
    },
    {
      title: "Scaling your values system",
      type: "Case Study",
      category: "Values Systems",
      img: "https://picsum.photos/800/600?random=22",
    },
    {
      title: "The remote leadership handbook",
      type: "PDF",
      category: "Remote Work",
      img: "https://picsum.photos/800/600?random=23",
    },
    {
      title: "Designing culture-first spaces",
      type: "Article",
      category: "Culture",
      img: "https://picsum.photos/800/600?random=24",
    },
    {
      title: "Agile organizational design",
      type: "Case Study",
      category: "Leadership",
      img: "https://picsum.photos/800/600?random=25",
    },
  ];

  const filtered = filter === "All" ? resources : resources.filter((resource) => resource.category === filter);

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
              Downloadable research, industry insights, guides, articles, real-world case studies and tools to help you transform your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar with Search */}
        <section className="sticky top-[64px] z-40 border-b border-border bg-white/80 py-8 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search insights..."
                  className="w-full rounded-full border border-border bg-background py-4 pl-12 pr-6 font-ui text-sm transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </div>
            </div>
            <div className="no-scrollbar flex items-center space-x-4 overflow-x-auto pb-2 sm:pb-0">
              <Filter size={18} className="flex-shrink-0 text-muted-foreground" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-ui transition-all ${
                    filter === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((resource) => (
                <div
                  key={resource.title}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.img}
                      alt={resource.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                      {resource.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-3 flex items-center space-x-2 text-xs uppercase tracking-widest text-muted-foreground">
                      {resource.type === "PDF" ? (
                        <Download size={14} />
                      ) : resource.type === "Article" ? (
                        <FileText size={14} />
                      ) : (
                        <Layout size={14} />
                      )}
                      <span>{resource.type}</span>
                    </div>
                    <h3 className="mb-6 h-14 overflow-hidden font-heading text-xl leading-tight text-foreground">
                      {resource.title}
                    </h3>
                    <button className="flex items-center text-sm font-bold text-secondary transition-transform group-hover:translate-x-2">
                      {resource.type === "PDF" ? "Download PDF" : "Read Article"}
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
