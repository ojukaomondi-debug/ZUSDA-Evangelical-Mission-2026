import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Copy } from "lucide-react";
import { toast } from "sonner";
import { useInvolvement } from "./InvolvementDialogs";

const BudgetSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { open } = useInvolvement();

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied`);
  };

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gold rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 border border-gold/30 rounded-2xl p-6 mb-6 text-left"
          >
            <p className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-center">Payment Details</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => copy("247247", "Paybill")}
                className="group bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-gold/20 rounded-xl p-4 text-left transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-primary-foreground/50 text-xs uppercase tracking-wider">Paybill</p>
                  <Copy className="text-gold/60 group-hover:text-gold" size={14} />
                </div>
                <p className="font-display text-2xl font-bold text-primary-foreground">247247</p>
              </button>
              <button
                onClick={() => copy("593021", "Account number")}
                className="group bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-gold/20 rounded-xl p-4 text-left transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-primary-foreground/50 text-xs uppercase tracking-wider">Account No.</p>
                  <Copy className="text-gold/60 group-hover:text-gold" size={14} />
                </div>
                <p className="font-display text-2xl font-bold text-primary-foreground">593021</p>
              </button>
            </div>
            <button
              onClick={() => open("give")}
              className="w-full mt-4 bg-gradient-gold text-secondary-foreground font-semibold py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Give Now
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-display italic text-gold-light text-base md:text-lg leading-relaxed"
          >
            "Every shilling contributed is a seed sown in the Kingdom of God."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetSection;
