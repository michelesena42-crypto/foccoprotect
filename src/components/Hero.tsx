import { Shield, Cpu, Eye, Smartphone, MessageCircle, ArrowRight, CheckCircle, Users, Building, Clock } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";
import logo from "@/assets/logo-focco-protect.png";

const Hero = () => {
  const features = [
    { icon: Shield, label: "Segurança Eletrônica" },
    { icon: Cpu, label: "Inteligência Artificial" },
    { icon: Eye, label: "Monitoramento 24h" },
    { icon: Smartphone, label: "Controle Total" },
  ];

  const stats = [
    { icon: Building, value: "50+", label: "Condomínios" },
    { icon: Users, value: "10.000+", label: "Moradores" },
    { icon: Clock, value: "99.9%", label: "Uptime" },
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
          {/* Logo */}
          <div className="mb-6 animate-fade-in">
            <img src={logo} alt="Focco Protect" className="h-24 w-auto sm:h-28 lg:h-32" />
          </div>

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 animate-fade-in" style={{ animationDelay: "0.05s" }}>
            <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-sm font-medium text-primary">
              🏆 Líder em Segurança Inteligente
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Segurança Inteligente para{" "}
            <span className="text-primary">Condomínios e Residências</span>{" "}
            Modernas
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-xl text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Soluções integradas em segurança eletrônica, controle de acesso e 
            monitoramento com inteligência artificial. Proteja seu patrimônio 
            com tecnologia de última geração.
          </p>

          {/* Trust Badge */}
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Orçamento gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Resposta em até 2h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Sem compromisso</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="https://wa.me/553135865800" target="_blank" rel="noopener noreferrer" className="btn-accent group relative overflow-hidden px-8 py-4 text-lg animate-cta-pulse">
              <MessageCircle className="h-5 w-5" />
              <span className="font-bold">Solicitar Orçamento</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#solucoes" className="btn-outline px-8 py-4 text-lg">
              Conhecer Soluções
            </a>
          </div>

          {/* Social Proof Stats */}
          <div className="mb-8 flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "0.35s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
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
