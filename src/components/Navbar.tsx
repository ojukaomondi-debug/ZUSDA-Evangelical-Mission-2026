import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Details", href: "#details" },
  { label: "Theme", href: "#theme" },
  { label: "Get Involved", href: "#involved" },
  { label: "Committee", href: "#committee" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="font-display text-lg font-bold text-primary-foreground tracking-wide">
          ZUSDA <span className="text-gold">Mission 2026</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#involved"
            className="bg-gradient-gold text-secondary-foreground text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Support the Mission
          </a>
        </div>
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-navy overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground/80 hover:text-gold py-2 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#involved"
                onClick={() => setOpen(false)}
                className="bg-gradient-gold text-secondary-foreground font-semibold px-5 py-2.5 rounded-full text-center mt-2"
              >
                Support the Mission
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
