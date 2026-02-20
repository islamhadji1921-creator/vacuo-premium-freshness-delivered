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
        className="absolute inset-0 w-full h-full object-cover scale-[2]"
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
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Your vision, our engine
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Let's bring your <br className="hidden md:block" />
            <span className="text-gradient font-signature text-5xl md:text-7xl lg:text-8xl">next idea</span> to life
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            From concept to launch in minutes — not months. <br className="hidden sm:block" />
            No code. No complexity. Just results.
          </p>
          <Button variant="hero" size="lg" className="text-base px-10 py-6">
            Start Building — It's Free <ArrowRight className="ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
