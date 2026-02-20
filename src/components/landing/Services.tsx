import { motion } from "framer-motion";
import { Globe, Paintbrush, Code, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full Websites",
    description: "Landing pages, portfolios, SaaS sites — generated end-to-end from a single prompt.",
  },
  {
    icon: Paintbrush,
    title: "Custom Design",
    description: "Unique layouts, fonts, and color palettes tailored to your brand identity automatically.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Production-ready React, Tailwind, and TypeScript — no spaghetti, just elegance.",
  },
  {
    icon: Zap,
    title: "Instant Deploy",
    description: "One click to publish. Your site goes live with hosting, SSL, and a custom domain.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Built for <span className="text-gradient font-signature text-5xl md:text-6xl">brilliance</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 group hover:glow-primary transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
