import { Shield, Cpu, Eye, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  const features = [
    { icon: Shield, label: "Segurança Eletrônica" },
    { icon: Cpu, label: "Inteligência Artificial" },
    { icon: Eye, label: "Monitoramento 24h" },
    { icon: Smartphone, label: "Controle Total" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Segurança inteligente"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-screen items-center">
        <div className="max-w-3xl py-20">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 animate-fade-in">
            <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-sm font-medium text-primary">
              Tecnologia de Ponta em Segurança
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Segurança Inteligente para{" "}
            <span className="gradient-text">Condomínios e Residências</span>{" "}
            Modernas
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-xl text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Soluções integradas em segurança eletrônica, controle de acesso e 
            monitoramento com inteligência artificial. Proteja seu patrimônio 
            com tecnologia de última geração.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="#contato" className="btn-accent">
              Solicitar Orçamento
            </a>
            <a href="#solucoes" className="btn-outline">
              Conhecer Soluções
            </a>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Role para baixo</span>
          <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
            <div className="h-2 w-full animate-pulse rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
