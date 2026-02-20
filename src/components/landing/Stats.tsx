import { motion } from "framer-motion";

const stats = [
  { value: "25K+", label: "Websites Launched" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9", label: "User Rating" },
  { value: "<2min", label: "Avg. Build Time" },
];

const Stats = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="glass-strong rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
