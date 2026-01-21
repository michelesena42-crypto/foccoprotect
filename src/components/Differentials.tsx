import { Cpu, Puzzle, TrendingDown, Wrench, HeadphonesIcon, Expand } from "lucide-react";
const Differentials = () => {
  const differentials = [{
    icon: Cpu,
    title: "Tecnologia com IA",
    description: "Inteligência artificial para detecção proativa de riscos e automação de processos."
  }, {
    icon: Puzzle,
    title: "Soluções Integradas",
    description: "Todos os sistemas de segurança trabalhando em conjunto para máxima eficiência."
  }, {
    icon: TrendingDown,
    title: "Redução de Custos",
    description: "Otimização de recursos e redução de custos operacionais com tecnologia."
  }, {
    icon: Wrench,
    title: "Projetos Personalizados",
    description: "Cada projeto é desenvolvido sob medida para atender suas necessidades específicas."
  }, {
    icon: HeadphonesIcon,
    title: "Atendimento Profissional",
    description: "Equipe técnica especializada com suporte dedicado e atendimento humanizado."
  }, {
    icon: Expand,
    title: "Segurança Escalável",
    description: "Infraestrutura preparada para crescer junto com as demandas do seu condomínio."
  }];
  return <section id="diferenciais" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
            <span className="text-sm font-medium text-accent">Por que escolher a Focco Protect?</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Nossos{" "}
            <span className="gradient-text">Diferenciais</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Combinamos tecnologia de última geração com expertise em segurança 
            para entregar soluções que realmente protegem.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => <div key={index} className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
              <div className="shrink-0">
                <div className="rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 p-3 transition-colors group-hover:from-accent/30 group-hover:to-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Differentials;