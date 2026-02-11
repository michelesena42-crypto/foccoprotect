import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-focco-protect.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    href: "#inicio",
    label: "Início"
  }, {
    href: "#beneficios",
    label: "Benefícios"
  }, {
    href: "#solucoes",
    label: "Soluções"
  }, {
    href: "#aplicativo",
    label: "Aplicativo"
  }, {
    href: "#controle-acesso",
    label: "Controle de Acesso"
  }, {
    href: "#monitoramento",
    label: "Monitoramento"
  }, {
    href: "#diferenciais",
    label: "Diferenciais"
  }, {
    href: "#contato",
    label: "Contato"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container-custom">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <img src={logo} alt="Focco Protect" className="h-28 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden items-center gap-4 lg:flex">
            <a target="_blank" rel="noopener noreferrer" className="btn-accent text-sm" href="https://wa.me/553135865800">
              <Phone className="h-4 w-4" />
              Falar com Especialista
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="text-foreground lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="border-t border-border bg-background pb-6 pt-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>)}
              <a href="https://wa.me/553135865800" target="_blank" rel="noopener noreferrer" className="btn-accent mt-2 text-center text-sm">
                <Phone className="h-4 w-4" />
                Falar com Especialista
              </a>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;