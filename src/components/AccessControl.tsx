import { ScanFace, Car, Phone, KeyRound, Users, Building } from "lucide-react";
import accessControlImage from "@/assets/access-control.jpg";
import smartGateImage from "@/assets/smart-gate.jpg";

const AccessControl = () => {
  const features = [
    {
      icon: ScanFace,
      title: "Reconhecimento Facial",
      description: "Identificação biométrica de alta precisão para acesso seguro e sem contato.",
    },
    {
      icon: Car,
      title: "Leitura de Placas (LPR)",
      description: "Liberação automática de veículos cadastrados com tecnologia de reconhecimento de placas.",
    },
    {
      icon: Phone,
      title: "Interfone Digital",
      description: "Comunicação via aplicativo com vídeo chamada para liberar visitantes remotamente.",
    },
    {
      icon: KeyRound,
      title: "Tag Veicular",
      description: "Acesso rápido e prático para moradores com tags de identificação veicular.",
    },
    {
      icon: Users,
      title: "Gestão de Visitantes",
      description: "Controle completo de entrada e saída de visitantes e prestadores de serviço.",
    },
    {
      icon: Building,
      title: "Portaria Inteligente",
      description: "Portaria virtual, assistida ou autônoma adaptada à necessidade do seu condomínio.",
    },
  ];

  const benefits = [
    "Mais segurança",
    "Mais controle",
    "Menos falhas humanas",
    "Redução de custos",
  ];

  return (
    <section id="controle-acesso" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={smartGateImage}
          alt="Entrada inteligente de condomínio"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
              <KeyRound className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Controle de Acesso</span>
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Controle Total de{" "}
              <span className="gradient-text">Acessos</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Gerencie quem entra e sai do seu condomínio com tecnologia de ponta. 
              Reconhecimento facial, leitura de placas e muito mais em uma única solução integrada.
            </p>

            {/* Benefits */}
            <div className="mb-8 flex flex-wrap gap-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
                >
                  ✓ {benefit}
                </div>
              ))}
            </div>

            <a href="#contato" className="btn-primary">
              Solicitar Demonstração
            </a>
          </div>

          {/* Right - Image + Grid */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={accessControlImage}
                alt="Sistema de controle de acesso com reconhecimento facial"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-lg border border-accent/30 bg-card/80 p-3 backdrop-blur-sm">
                  <p className="text-sm font-medium text-accent">Reconhecimento Facial Avançado</p>
                  <p className="text-xs text-muted-foreground">Identificação em menos de 1 segundo</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {features.slice(0, 4).map((feature, index) => (
                <div
                  key={index}
                  className="card-glow group p-4 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-2 inline-flex rounded-lg bg-accent/10 p-2">
                    <feature.icon className="h-4 w-4 text-accent" />
                  </div>
                  <h3 className="mb-1 font-display text-sm font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessControl;
