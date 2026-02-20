import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the AI build my website?",
    a: "You describe what you want in plain language. Our AI generates the design, layout, and production-ready code — all in real time. You can refine anything with follow-up prompts.",
  },
  {
    q: "Can I use my own domain?",
    a: "Yes! Connect any custom domain with one click. We handle SSL certificates, DNS configuration, and hosting automatically.",
  },
  {
    q: "What tech stack do you use?",
    a: "Every site is built with React, TypeScript, and Tailwind CSS — modern, maintainable, and blazing fast. You can export the code anytime.",
  },
  {
    q: "Is there a free plan?",
    a: "Absolutely. Start building for free with generous daily credits. Upgrade anytime for more capacity, custom domains, and priority support.",
  },
  {
    q: "Can I edit the code myself?",
    a: "Yes. Export your project to GitHub or edit directly in the built-in code editor. You own 100% of your code, always.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Got <span className="text-gradient font-signature text-5xl md:text-6xl">questions?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="font-display text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
