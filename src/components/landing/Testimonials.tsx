import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "VACUO completely changed how I eat. The freshness is unreal — it genuinely tastes like it was just cooked.",
    name: "Sarah M.",
    role: "Fitness Coach",
  },
  {
    text: "I was skeptical about vacuum-sealed meals until I tried VACUO. Now it's the only meal delivery I use.",
    name: "David K.",
    role: "Software Engineer",
  },
  {
    text: "The quality and convenience are unmatched. My family loves the variety and I love how easy it is.",
    name: "Priya L.",
    role: "Working Parent",
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
            What people <span className="text-gradient">say</span>
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
