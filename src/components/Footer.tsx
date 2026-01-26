import { Shield } from "lucide-react";
import logo from "@/assets/logo-focco-protect.png";

const Footer = () => {
  const links = {
    solutions: [
      { label: "Segurança Eletrônica", href: "#solucoes" },
      { label: "Controle de Acesso", href: "#controle-acesso" },
      { label: "Monitoramento", href: "#monitoramento" },
      { label: "Portaria Eletrônica", href: "#solucoes" },
    ],
    company: [
      { label: "Sobre Nós", href: "#" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Contato", href: "#contato" },
      { label: "Trabalhe Conosco", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="mb-4 inline-block">
              <img src={logo} alt="Focco Protect" className="h-24 w-auto" />
            </a>
            <p className="mb-4 max-w-md text-muted-foreground">
              Segurança inteligente para condomínios e residências modernas. 
              Tecnologia de ponta, controle total e proteção efetiva para seu patrimônio.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <Shield className="h-4 w-4" />
              <span>Tecnologia em Segurança</span>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Soluções</h4>
            <ul className="space-y-2">
              {links.solutions.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Empresa</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Focco Protect. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
