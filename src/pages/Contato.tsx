import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const Contato = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-deep-blue pt-32 pb-20">
        <div className="container-editorial">
          <div className="gold-accent-line-wide mb-8" />
          <h1 className="heading-editorial text-cream text-4xl md:text-5xl lg:text-6xl">
            Entre em <span className="text-gold italic">Contato</span>
          </h1>
          <p className="text-cream/60 font-sans text-sm mt-6 max-w-lg leading-relaxed">
            Estamos prontos para atendê-lo. Preencha o formulário ou utilize
            nossos canais diretos de comunicação.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Form */}
            <RevealOnScroll className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground font-sans block mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground font-sans block mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground font-sans block mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground font-sans block mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      value={formData.assunto}
                      onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground font-sans block mb-2">
                    Mensagem
                  </label>
                  <textarea
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    rows={5}
                    className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    required
                  />
                </div>
                <Button variant="gold" size="lg" type="submit">
                  Enviar mensagem
                </Button>
              </form>
            </RevealOnScroll>

            {/* Contact Info */}
            <RevealOnScroll className="lg:col-span-5" delay={0.15}>
              <div className="space-y-10 lg:pt-4">
                <div className="flex gap-5">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-sans text-sm font-medium mb-1">Endereço</p>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      Av. Paulista, 1842 — 15º andar<br />
                      São Paulo — SP, 01310-200
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-sans text-sm font-medium mb-1">Telefone</p>
                    <p className="text-muted-foreground font-sans text-sm">+55 (11) 3000-0000</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-sans text-sm font-medium mb-1">E-mail</p>
                    <p className="text-muted-foreground font-sans text-sm">contato@ricadomarques.adv.br</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-sans text-sm font-medium mb-1">Horário</p>
                    <p className="text-muted-foreground font-sans text-sm">
                      Segunda a Sexta: 9h — 18h
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
