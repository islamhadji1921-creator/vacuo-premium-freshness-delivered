const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold text-gradient mb-3">AXION AI</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              AI-powered website studio. Describe it, build it, launch it.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Templates", "Changelog"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Press", "Blog"],
            },
            {
              title: "Support",
              links: ["Help Center", "Contact", "Documentation", "Status"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-foreground mb-4 tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Axion AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
