import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, Wallet, Radio, Truck, Utensils, Crown } from "lucide-react";

const departments = [
  {
    icon: Crown,
    name: "Mission Chairman",
    role: "General Oversight",
    leaders: ["Gregory Daghe"],
    accent: true,
  },
  {
    icon: Megaphone,
    name: "Evangelism / PM",
    role: "Preaching & spiritual coordination",
    leaders: ["Pastor Moses Kariuki", "Leah Monchari"],
  },
  {
    icon: Wallet,
    name: "Finance",
    role: "Stewardship & accountability",
    leaders: ["Branol Joseph", "Gregory Njeka"],
  },
  {
    icon: Radio,
    name: "Media & Communication",
    role: "Outreach, publicity & documentation",
    leaders: ["Eld. Jim Carson", "Hellen Juma"],
  },
  {
    icon: Truck,
    name: "Transport & Logistics",
    role: "Movement, accommodation & supplies",
    leaders: ["Eld. Robert Carlos", "Eric Ntongai"],
  },
  {
    icon: Utensils,
    name: "Food & Catering",
    role: "Meals & hospitality",
    leaders: ["Deborah Keira", "Ann Maroa"],
  },
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
            Five sub-departments working under one chairman — each entrusted with a vital part of the mission.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {departments.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl p-6 border transition-shadow hover:shadow-elevated ${
                d.accent
                  ? "bg-gradient-to-br from-navy to-navy-light border-gold/30 text-primary-foreground sm:col-span-2 lg:col-span-3"
                  : "bg-cream border-gold/10"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    d.accent ? "bg-gradient-gold" : "bg-navy"
                  }`}
                >
                  <d.icon className={d.accent ? "text-secondary-foreground" : "text-primary-foreground"} size={22} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-display font-bold text-lg ${d.accent ? "text-primary-foreground" : "text-navy"}`}>
                    {d.name}
                  </h4>
                  <p className={`text-sm mb-3 ${d.accent ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {d.role}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {d.leaders.map((l) => (
                      <span
                        key={l}
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          d.accent
                            ? "bg-primary-foreground/10 text-primary-foreground border border-gold/20"
                            : "bg-background text-navy border border-gold/20"
                        }`}
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
