import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Clock, Sun } from "lucide-react";

const details = [
  { icon: MapPin, label: "Location", value: "Kinungi, Naivasha, Nakuru County" },
  { icon: Calendar, label: "Dates", value: "13th – 27th December 2026" },
  { icon: Clock, label: "Duration", value: "15 Days of Evangelism" },
  { icon: Sun, label: "Season", value: "December – Time of Reflection" },
];

const DetailsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="details" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">Mission Details</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
            When & Where
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i }}
              className="bg-primary-foreground/5 backdrop-blur border border-gold/10 rounded-2xl p-6 text-center"
            >
              <d.icon className="text-gold mx-auto mb-4" size={28} />
              <p className="text-primary-foreground/50 text-sm uppercase tracking-wider mb-1">{d.label}</p>
              <p className="text-primary-foreground font-semibold">{d.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
