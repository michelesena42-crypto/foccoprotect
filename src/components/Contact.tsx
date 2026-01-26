import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const contactInfo = [{
    icon: Phone,
    title: "Telefone",
    value: "(31) 99484-7724",
    href: "tel:+5531994847724"
  }, {
    icon: Mail,
    title: "E-mail",
    value: "contato@foccoprotect.com.br",
    href: "mailto:contato@foccoprotect.com.br"
  }, {
    icon: MapPin,
    title: "Localização",
    value: "Belo Horizonte, MG",
    href: "#"
  }];
  return <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
            <MessageCircle className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Fale Conosco</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Solicite um{" "}
            <span className="gradient-text">Orçamento Personalizado</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Entre em contato com nossa equipe de especialistas e descubra 
            a solução ideal para a segurança do seu condomínio.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Nome Completo
                </label>
                <input type="text" id="name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Seu nome" required />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    E-mail
                  </label>
                  <input type="email" id="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="seu@email.com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Telefone
                  </label>
                  <input type="tel" id="phone" value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="(00) 00000-0000" required />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Mensagem
                </label>
                <textarea id="message" value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} rows={4} className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Como podemos ajudar?" required />
              </div>

              <button type="submit" className="btn-accent w-full">
                <Send className="h-4 w-4" />
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8 space-y-6">
              {contactInfo.map((item, index) => <a key={index} href={item.href} className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <div className="rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </a>)}
            </div>

            {/* WhatsApp Button */}
            <a target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30" href="https://wa.me/5531994847724">
              <MessageCircle className="h-6 w-6" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;