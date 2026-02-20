import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Ready to build your <span className="text-gradient font-signature text-5xl md:text-7xl">website?</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Join thousands of creators and businesses who launch stunning sites with AI. Start free — no credit card required.
            </p>
            <Button variant="hero" size="lg" className="text-base px-10 py-6">
              Get Started Free <ArrowRight className="ml-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
