const Footer = () => (
  <footer className="bg-navy border-t border-gold/10 py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <p className="font-display text-xl font-bold text-primary-foreground mb-2">
          ZUSDA <span className="text-gold">Mission 2026</span>
        </p>
        <p className="text-primary-foreground/40 text-sm mb-6">
          "Njooni Tusemezane" — Come Now, Let Us Reason Together
        </p>
        <div className="flex justify-center gap-6 mb-6">
          {["About", "Details", "Get Involved", "Committee"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, "")}`}
              className="text-primary-foreground/50 hover:text-gold text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="border-t border-gold/10 pt-6">
          <p className="text-primary-foreground/30 text-xs">
            © 2026 ZUSDA Evangelical Mission. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
