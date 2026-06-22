import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInvolvement } from "./InvolvementDialogs";
import sdaLogo from "@/assets/sda-logo.jpg";

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
  const { open: openDialog } = useInvolvement();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/20 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between h-24">

        {/* Logo Section */}
        <a
          href="#home"
          className="flex items-center gap-4"
        >
          <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-gold shadow-lg bg-white flex-shrink-0">
            <motion.img
              src={sdaLogo}
              alt="Seventh-day Adventist Church logo"
              className="w-full h-full object-cover"
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>

          <div className="leading-tight">
            <h1 className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
              ZUSDA
            </h1>

            <p className="text-gold text-sm md:text-base font-semibold">
              Mission 2026
            </p>

            <p className="hidden lg:block text-xs text-primary-foreground/70">
              Seventh-day Adventist Church • Zetech University
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => openDialog("give")}
            className="bg-gradient-gold text-secondary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
            Support the Mission
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-navy overflow-hidden border-t border-gold/10"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground/80 hover:text-gold py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => {
                  setOpen(false);
                  openDialog("give");
                }}
                className="bg-gradient-gold text-secondary-foreground font-semibold px-5 py-3 rounded-full text-center mt-2"
              >
                Support the Mission
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;