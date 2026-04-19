import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, BookOpen, Users } from "lucide-react";
import helpingHands from "@/assets/helping-hands.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold-dark uppercase tracking-[0.2em] text-sm font-semibold mb-3">About the Mission</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
            A Faith-Driven Outreach Initiative
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Grounded in the Great Commission (Matthew 28:19), the ZUSDA Evangelical Mission 2026
            seeks to spread the Gospel, reach souls, and demonstrate God's love through evangelism
            and service in Kinungi, Naivasha.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: BookOpen, title: "Spread the Word", desc: "Sharing the Gospel message of hope, restoration, and God's unconditional love with the community." },
            { icon: Heart, title: "Transform Lives", desc: "Through personal encounters and acts of service, we aim to bring lasting transformation and hope." },
            { icon: Users, title: "Build Community", desc: "Uniting believers across regions to work together in purpose, prayer, and fellowship." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-background rounded-2xl p-8 shadow-soft text-center group hover:shadow-elevated transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                <item.icon className="text-gold-dark" size={26} />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-elevated relative group"
        >
          <img
            src={helpingHands}
            alt="Believers reaching out to help one another at sunset"
            loading="lazy"
            className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent flex items-end">
            <p className="font-display italic text-primary-foreground text-xl md:text-2xl p-8 max-w-2xl">
              "Bear one another's burdens, and so fulfill the law of Christ." — Galatians 6:2
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
