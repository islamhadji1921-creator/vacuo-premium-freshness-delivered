import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Describe Your Vision", description: "Tell our AI what you need — style, pages, features." },
  { number: "02", title: "AI Designs & Codes", description: "Watch as a full website is generated in real time." },
  { number: "03", title: "Refine & Customize", description: "Tweak layouts, colors, and copy with simple prompts." },
  { number: "04", title: "Publish & Launch", description: "Go live in one click with hosting and a custom domain." },
];

const Process = () => {
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
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Four simple <span className="text-gradient font-signature text-5xl md:text-6xl">steps</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 rounded-full glass mx-auto flex items-center justify-center mb-6 relative z-10">
                <span className="font-display text-2xl font-bold text-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
