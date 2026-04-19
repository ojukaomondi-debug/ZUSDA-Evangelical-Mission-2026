import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ThemeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="theme" className="py-24 bg-cream">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold-dark uppercase tracking-[0.2em] text-sm font-semibold mb-3"
          >
            Theme & Message
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-navy mb-6 italic"
          >
            "Njooni Tusemezane"
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10"
          >
            Come Now, Let Us Reason Together
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-background rounded-2xl p-8 md:p-12 shadow-soft border border-gold/10 mb-12"
          >
            <p className="font-display text-lg md:text-xl text-navy leading-relaxed italic">
              "Come now, and let us reason together," says the Lord, "Though your sins are like scarlet,
              they shall be as white as snow; though they are red like crimson, they shall be as wool."
            </p>
            <cite className="block mt-4 text-gold-dark font-semibold not-italic">— Isaiah 1:18 (NKJV)</cite>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            {[
              { title: "God's Invitation", desc: "A personal call from the Creator to every heart" },
              { title: "Restoration", desc: "Forgiveness and renewal for all who respond" },
              { title: "Relationship", desc: "A deeper, personal walk with God" },
              { title: "Transformation", desc: "Hope and new beginnings through His grace" },
            ].map((item) => (
              <div key={item.title} className="text-left p-4">
                <h4 className="font-display font-semibold text-navy mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 bg-navy/5 rounded-xl"
          >
            <p className="text-sm text-muted-foreground mb-1">Key Hymn</p>
            <p className="font-display text-lg font-semibold text-navy">Hymn 170 (NZK)</p>
            <p className="text-muted-foreground text-sm mt-1">Reinforcing our spiritual invitation and reflective worship</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
