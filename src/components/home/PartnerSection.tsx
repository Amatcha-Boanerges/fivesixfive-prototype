export function PartnerSection() {
  const partners = [
    "Fortune 500",
    "Global NGOs",
    "Tech Startups",
    "Healthcare",
    "Finance",
  ];

  // Repeat partners to avoid gaps in the ticker loop
  const repeatedPartners = Array.from({ length: 3 }, () => partners).flat();

  return (
    <section className="bg-background py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="font-ui mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by forward-thinking organizations
        </p>
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Ticker container */}
          <div className="overflow-hidden">
            <div className="flex w-max flex-nowrap items-center gap-8 md:gap-12 opacity-70 animate-ticker">
              {repeatedPartners.map((partner, index) => (
                <span
                  key={`${partner}-${index}`}
                  className="font-heading text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-muted-foreground whitespace-nowrap flex-shrink-0"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

