import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
                Insights, guides, and tools to help you transform your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Header */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="max-w-xl">
                <h1 className="font-heading text-5xl mb-4 text-foreground">Knowledge Base</h1>
                <p className="text-muted-foreground">
                  Downloadable research, industry insights, and real-world case studies from our team.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="text"
                    placeholder="Search insights..."
                    className="w-full rounded-full border-transparent bg-background py-4 pl-12 pr-6 font-ui text-sm transition-all focus:border-secondary focus:ring-0 md:w-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-[64px] z-40 border-b border-border bg-white/80 py-8 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        {/* Newsletter Signup */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="rounded-2xl border-2 border-dashed border-border p-12 md:p-16">
              <h2 className="mb-4 font-heading text-3xl text-foreground">Stay Aligned</h2>
              <p className="mx-auto mb-10 max-w-md text-muted-foreground">
                Get monthly insights on culture, leadership, and growth delivered straight to your inbox.
              </p>
              <form className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Work email address"
                  className="flex-grow rounded-full border-none bg-background px-6 py-4 font-ui text-sm focus:ring-2 focus:ring-primary"
                  required
                />
                <button className="rounded-full bg-primary px-8 py-4 font-ui font-bold text-white transition-all hover:shadow-xl">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
