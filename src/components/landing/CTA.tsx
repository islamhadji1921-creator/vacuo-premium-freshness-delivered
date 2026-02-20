import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden isolate">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
      >
        <source src="/videos/cta-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to build your <span className="text-gradient font-signature text-5xl md:text-7xl">website?</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Join thousands of creators and businesses who launch stunning sites with AI. Start free — no credit card required.
          </p>
          <Button variant="hero" size="lg" className="text-base px-10 py-6">
            Get Started Free <ArrowRight className="ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
