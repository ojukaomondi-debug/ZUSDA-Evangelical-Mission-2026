import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp } from "lucide-react";

const BudgetSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-2xl mx-auto text-center"
        >
          <TrendingUp className="text-gold mx-auto mb-4" size={32} />
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">Mission Budget</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            KSH 416,000
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-8">
            Every contribution is an investment in eternity.
          </p>
          <div className="bg-primary-foreground/5 border border-gold/10 rounded-2xl p-6 text-primary-foreground/70 text-sm leading-relaxed">
            Your generous and consistent giving ensures the mission has the resources it needs —
            from logistics and materials to community outreach programs. Together, we can make
            this mission a reality.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetSection;
