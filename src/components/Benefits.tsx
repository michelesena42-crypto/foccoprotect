import { 
  TrendingDown, 
  Shield, 
  LayoutGrid, 
  Rocket, 
  Heart, 
  Clock, 
  Eye, 
  Wifi,
  Building2,
  Users
} from "lucide-react";

const Benefits = () => {
  const condominiumBenefits = [
    { icon: TrendingDown, label: "Redução de custos operacionais" },
    { icon: Shield, label: "Mais segurança e controle" },
    { icon: LayoutGrid, label: "Gestão centralizada" },
    { icon: Rocket, label: "Infraestrutura para o futuro" },
  ];

  const residentBenefits = [
    { icon: Heart, label: "Mais segurança para a família" },
    { icon: Clock, label: "Acessos rápidos e confiáveis" },
    { icon: Eye, label: "Monitoramento em tempo real" },
    { icon: Wifi, label: "Internet de alta qualidade" },
  ];

  return (
    <section id="beneficios" className="section-padding relative overflow-hidden bg-card">
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
            <span className="text-sm font-medium text-accent">BENEFÍCIOS</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Vantagens para{" "}
            <span className="gradient-text">todos</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Para o Condomínio */}
          <div className="rounded-2xl border border-border bg-background p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 p-4">
                <Building2 className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold">Para o Condomínio</h3>
            </div>
            
            <div className="space-y-6">
              {condominiumBenefits.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="rounded-xl bg-accent/10 p-3">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-lg text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Para os Moradores */}
          <div className="rounded-2xl border border-border bg-background p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 p-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold">Para os Moradores</h3>
            </div>
            
            <div className="space-y-6">
              {residentBenefits.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
