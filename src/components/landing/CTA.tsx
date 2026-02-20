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
          className="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          >
            <source src="/videos/cta-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/60 rounded-3xl" />

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
