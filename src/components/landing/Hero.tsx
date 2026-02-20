import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster=""
      >
        <source
          src="/videos/bg-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-body text-foreground/80">
              AI-powered websites, built in minutes
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6" style={{ textShadow: '0 2px 20px hsl(220 20% 4% / 0.6)' }}>
            <span className="text-foreground">Build with</span>
            <br />
            <span className="text-gradient font-signature text-6xl md:text-8xl lg:text-9xl">Intelligence.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10" style={{ textShadow: '0 1px 12px hsl(220 20% 4% / 0.5)' }}>
            Our AI studio designs, codes, and launches stunning websites in minutes — not months. Just describe your vision, and watch it come to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Start Building <ArrowRight className="ml-1" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
              <Play className="mr-1" /> See It In Action
            </Button>
          </div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-14 flex items-center justify-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-display font-bold text-muted-foreground"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-display font-semibold text-foreground">
                25,000+ websites launched
              </p>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-sm">★</span>
                ))}
                <span className="text-xs text-muted-foreground ml-1">4.9/5</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
