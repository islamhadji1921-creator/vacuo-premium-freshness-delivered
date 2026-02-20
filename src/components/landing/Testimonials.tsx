import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "I described my startup idea and had a polished landing page live in under 3 minutes. This is the future of web design.",
    name: "Sarah M.",
    role: "Startup Founder",
  },
  {
    text: "As a developer, I was blown away by the code quality. Clean React, proper Tailwind — it's like having a senior engineer on speed dial.",
    name: "David K.",
    role: "Software Engineer",
  },
  {
    text: "We replaced our entire agency workflow with Axion AI. Our clients get sites faster, and we focus on strategy instead of pixels.",
    name: "Priya L.",
    role: "Creative Director",
  },
];

const Testimonials = () => {
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
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
            What people <span className="text-gradient font-signature text-5xl md:text-6xl">say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="font-body text-foreground/90 leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
