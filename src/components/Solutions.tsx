import { Shield, Camera, Bell, Monitor, Cpu, Smartphone } from "lucide-react";
import securityCamera from "@/assets/security-camera.jpg";
import securityApp from "@/assets/security-app.jpg";

const Solutions = () => {
  const solutions = [
    {
      icon: Cpu,
      title: "Inteligência Artificial",
      description:
        "Sistemas de segurança com IA para detecção automática de comportamentos suspeitos e prevenção proativa de incidentes.",
    },
    {
      icon: Monitor,
      title: "Monitoramento em Tempo Real",
      description:
        "Central de monitoramento 24 horas com equipe especializada e resposta imediata a qualquer evento.",
    },
    {
      icon: Camera,
      title: "Câmeras de Alta Performance",
      description:
        "Câmeras com resolução 4K, visão noturna avançada e análise inteligente de imagens integrada.",
    },
    {
      icon: Bell,
      title: "Alarmes Monitorados",
      description:
        "Sistema de alarme com sensores de última geração e monitoramento remoto conectado à central.",
    },
    {
      icon: Shield,
      title: "Central de Supervisão Local",
      description:
        "Infraestrutura completa para gestão local de segurança com equipamentos de alta confiabilidade.",
    },
    {
      icon: Smartphone,
      title: "Aplicativo de Gestão",
      description:
        "Controle total na palma da mão. Gerencie acessos, visualize câmeras e receba alertas em tempo real.",
    },
  ];

  return (
    <section id="solucoes" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nossas Soluções</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Soluções em{" "}
            <span className="gradient-text">Segurança Eletrônica</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Proteção integrada e personalizada para cada cliente, combinando 
            tecnologia de ponta com expertise em segurança.
          </p>
        </div>

        {/* Content Grid with Image */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={securityCamera}
                alt="Câmera de segurança de alta performance"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 max-w-xs rounded-xl border border-border bg-card/90 p-4 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-accent/20 p-2">
                  <Smartphone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Controle na palma da mão</p>
                  <p className="text-sm text-muted-foreground">Gerencie tudo pelo app</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="card-glow group p-5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-3">
                  <solution.icon className="h-5 w-5 text-primary transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mb-1 font-display text-lg font-semibold">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
