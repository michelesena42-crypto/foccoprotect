import { Building, Building2, Home, Briefcase } from "lucide-react";
const TargetAudience = () => {
  const audiences = [{
    icon: Building,
    title: "Condomínios Residenciais",
    description: "Soluções completas de segurança para condomínios de todos os portes."
  }, {
    icon: Building2,
    title: "Condomínios Empresariais",
    description: "Controle de acesso e monitoramento para edifícios comerciais."
  }, {
    icon: Home,
    title: "Residências de Alto Padrão",
    description: "Sistemas exclusivos de proteção para residências e casas."
  }, {
    icon: Briefcase,
    title: "Empresas",
    description: "Segurança corporativa com tecnologia e gestão inteligente."
  }];
  return <section className="section-padding relative overflow-hidden bg-card">
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
            Para Quem é a{" "}
            <span className="gradient-text">Focco Protect</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Atendemos clientes que valorizam segurança e tecnologia, oferecendo 
            soluções personalizadas para cada necessidade.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item, index) => <div key={index} className="group rounded-xl border border-border bg-background p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <div className="mx-auto mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TargetAudience;