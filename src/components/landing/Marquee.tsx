const items = [
  "AI-POWERED",
  "NO-CODE",
  "RESPONSIVE DESIGN",
  "SEO OPTIMIZED",
  "LIGHTNING FAST",
  "CUSTOM DOMAINS",
  "AUTO-DEPLOYED",
  "PIXEL PERFECT",
];

const Marquee = () => {
  return (
    <section className="py-6 border-y border-border overflow-hidden">
      <div className="flex marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 mx-6 whitespace-nowrap font-display text-sm md:text-base font-semibold tracking-widest text-muted-foreground uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
