import { Eye, Video, Wifi, MonitorPlay, Cpu, VideoIcon } from "lucide-react";
import monitoringRoom from "@/assets/monitoring-room.jpg";

const Monitoring = () => {
  const features = [
    {
      icon: Video,
      title: "CFTV Integrado",
      description: "Sistema de câmeras de alta resolução integrado a toda infraestrutura de segurança.",
    },
    {
      icon: Cpu,
      title: "Monitoramento com IA",
      description: "Análise inteligente de imagens para detecção automática de situações de risco.",
    },
    {
      icon: Eye,
      title: "Câmeras Inteligentes",
      description: "Câmeras com análise comportamental, detecção de movimento e zonas de alerta.",
    },
    {
      icon: Wifi,
      title: "Monitoramento Remoto",
      description: "Acesso às imagens de qualquer lugar pelo aplicativo ou central de monitoramento.",
    },
    {
      icon: MonitorPlay,
      title: "Tempo Real",
      description: "Visualização ao vivo de todas as câmeras com gravação contínua em nuvem.",
    },
    {
      icon: VideoIcon,
      title: "Vídeo Chamada",
      description: "Comunicação via vídeo integrada à portaria para atendimento de visitantes.",
    },
  ];

  return (
    <section id="monitoramento" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      
      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-64 w-64 translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Eye className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Monitoramento</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Monitoramento{" "}
            <span className="gradient-text">Inteligente</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Vigilância 24 horas com tecnologia de inteligência artificial 
            para proteção proativa do seu patrimônio.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Features Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card to-background p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-1 font-display text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={monitoringRoom}
                alt="Central de monitoramento com múltiplas telas"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-primary/30 bg-card/80 p-4 backdrop-blur-sm">
                <div>
                  <p className="font-semibold text-primary">Monitoramento 24/7</p>
                  <p className="text-sm text-muted-foreground">Equipe especializada sempre atenta</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-accent" />
                </div>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#contato" className="btn-primary">
            Conhecer Sistema de Monitoramento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Monitoring;
