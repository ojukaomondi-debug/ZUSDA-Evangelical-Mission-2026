import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const members = [
  { name: "Mission Director", role: "Overall mission coordination & vision" },
  { name: "Secretary", role: "Communication & documentation" },
  { name: "Treasurer", role: "Financial management & accountability" },
  { name: "Logistics Lead", role: "Transport, accommodation & supplies" },
  { name: "Evangelism Lead", role: "Preaching schedule & outreach programs" },
  { name: "Music Director", role: "Worship coordination & choir" },
];

const CommitteeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="committee" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-gold-dark uppercase tracking-[0.2em] text-sm font-semibold mb-3">Leadership</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Mission Committee
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A dedicated team ensuring accountability, structure, and spiritual leadership.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="bg-cream rounded-xl p-6 text-center border border-gold/5"
            >
              <div className="w-14 h-14 rounded-full bg-navy mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">
                  {m.name.charAt(0)}
                </span>
              </div>
              <h4 className="font-display font-semibold text-navy">{m.name}</h4>
              <p className="text-muted-foreground text-sm mt-1">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
