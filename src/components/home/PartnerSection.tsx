export function PartnerSection() {
  const partners = [
    "Fortune 500",
    "Global NGOs",
    "Tech Startups",
    "Healthcare",
    "Finance",
  ];

  return (
    <section className="border-b border-border bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <p className="font-ui mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by forward-thinking organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70">
          {partners.map((partner) => (
            <span
              key={partner}
              className="font-heading text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

