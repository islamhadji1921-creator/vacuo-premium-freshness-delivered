import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long do vacuum-sealed meals stay fresh?",
    a: "Our meals stay fresh for up to 10 days when stored in the refrigerator, and up to 3 months when frozen. The vacuum seal locks in flavor and nutrients.",
  },
  {
    q: "What areas do you deliver to?",
    a: "We currently deliver across all major metropolitan areas. Enter your zip code at checkout to confirm availability in your area.",
  },
  {
    q: "Are the meals suitable for dietary restrictions?",
    a: "Yes! We offer gluten-free, dairy-free, vegan, keto, and other dietary options. Every meal is clearly labeled with allergen information.",
  },
  {
    q: "How do I reheat the meals?",
    a: "Simply boil the sealed pouch for 5–8 minutes or microwave the contents for 3–4 minutes. Detailed instructions are on every package.",
  },
  {
    q: "Can I skip or cancel my subscription?",
    a: "Absolutely. You can skip a week, pause, or cancel your subscription anytime from your account dashboard — no commitments.",
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
            Got <span className="text-gradient">questions?</span>
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
