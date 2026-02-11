import { Shield, Camera, BarChart3, Megaphone, CalendarDays, Cloud, Rocket, Smartphone, Lock, QrCode, Users, Car, ClipboardList, Eye, MonitorSmartphone, Bell, FileText, MessageSquare, Clock, KeyRound, Receipt, CalendarCheck, Server, ShieldCheck } from "lucide-react";

const AppSection = () => {
  const categories = [
    {
      icon: Lock,
      emoji: "🔐",
      title: "Controle de Acesso Inteligente",
      items: [
        { icon: Smartphone, text: "Liberação de portões e portas diretamente pelo aplicativo" },
        { icon: QrCode, text: "Convites digitais para visitantes com QR Code, chave virtual ou reconhecimento facial" },
        { icon: Users, text: "Cadastro antecipado de moradores, visitantes e prestadores de serviço" },
        { icon: Car, text: "Registro completo de entradas e saídas de pessoas e veículos" },
        { icon: ClipboardList, text: "Histórico detalhado de acessos para auditoria e segurança" },
      ],
    },
    {
      icon: Camera,
      emoji: "🎥",
      title: "Integração com Câmeras de Segurança",
      items: [
        { icon: Eye, text: "Visualização de câmeras em tempo real pelo aplicativo" },
        { icon: MonitorSmartphone, text: "Monitoramento integrado ao controle de acesso" },
        { icon: ShieldCheck, text: "Mais segurança com registros visuais vinculados aos acessos" },
        { icon: Users, text: "Apoio total à portaria presencial, remota ou virtual" },
      ],
    },
    {
      icon: BarChart3,
      emoji: "📊",
      title: "Gestão Completa do Condomínio",
      items: [
        { icon: ClipboardList, text: "Painel de controle para gestão de pessoas, veículos e equipamentos" },
        { icon: BarChart3, text: "Relatórios detalhados de acessos e movimentações" },
        { icon: Bell, text: "Controle de entregas com registro e notificação ao morador" },
        { icon: Shield, text: "Registro de ocorrências e alertas de emergência" },
        { icon: Clock, text: "Gestão de turnos e rotinas da portaria" },
      ],
    },
    {
      icon: Megaphone,
      emoji: "📢",
      title: "Comunicação Rápida e Eficiente",
      items: [
        { icon: MessageSquare, text: "Mural de avisos digital para comunicados importantes" },
        { icon: Bell, text: "Envio de notificações em tempo real para moradores" },
        { icon: FileText, text: "Compartilhamento de documentos do condomínio" },
        { icon: ClipboardList, text: "Registro de pedidos, solicitações e manifestações pelo app" },
      ],
    },
    {
      icon: CalendarDays,
      emoji: "📅",
      title: "Serviços e Conveniência para Moradores",
      items: [
        { icon: CalendarCheck, text: "Agendamento de áreas comuns com controle automático de acesso" },
        { icon: KeyRound, text: "Autorizações temporárias para visitas e prestadores" },
        { icon: Receipt, text: "Segunda via de boletos e documentos" },
        { icon: Clock, text: "Organização de eventos e controle de acesso por data e horário" },
      ],
    },
    {
      icon: Cloud,
      emoji: "☁️",
      title: "Tecnologia, Segurança e Confiabilidade",
      items: [
        { icon: Cloud, text: "Plataforma 100% em nuvem" },
        { icon: Lock, text: "Dados criptografados e protegidos" },
        { icon: ShieldCheck, text: "Conformidade com a LGPD" },
        { icon: Smartphone, text: "Acesso seguro via aplicativo para Android e iOS" },
        { icon: Server, text: "Sistema estável, moderno e escalável" },
      ],
    },
  ];

  return (
    <section id="aplicativo" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Smartphone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Aplicativo</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Aplicativo de{" "}
            <span className="gradient-text">Gestão Completa</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Tenha o controle total do seu condomínio na palma da mão. Uma plataforma integrada 
            de segurança, controle de acesso e gestão condominial.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card-glow group p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex rounded-xl bg-primary/10 p-3">
                  <category.icon className="h-6 w-6 text-primary transition-colors group-hover:text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-card to-accent/10 p-8 text-center md:p-12">
          <div className="mb-4 inline-flex rounded-full bg-accent/20 p-3">
            <Rocket className="h-8 w-8 text-accent" />
          </div>
          <h3 className="mb-4 font-display text-2xl font-bold sm:text-3xl">
            Muito Mais do que Câmeras.{" "}
            <span className="gradient-text">Uma Solução Completa.</span>
          </h3>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ao contratar a FocoProtect, o condomínio não recebe apenas um sistema de câmeras, 
            mas sim uma solução integrada de segurança, controle de acesso e gestão, elevando 
            o padrão do empreendimento e trazendo tranquilidade para todos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
