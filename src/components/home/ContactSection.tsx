import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const ContactSection = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container-editorial">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-accent-line" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
              Contato
            </span>
          </div>
          <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl text-foreground max-w-2xl mb-4">
            Entre em <span className="text-gold italic">Contato</span>
          </h2>
          <p className="text-muted-foreground font-sans text-sm max-w-lg mb-16">
            Estamos à disposição para discutir como podemos auxiliar na proteção
            dos seus interesses e na construção de soluções jurídicas eficazes.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <RevealOnScroll className="lg:col-span-7" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground font-sans block mb-2">
                  Nome
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
              <div>
                <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground font-sans block mb-2">
                  Mensagem
                </label>
                <textarea
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  required
                />
              </div>
              <Button variant="gold" size="lg" type="submit" className="mt-4">
                Enviar mensagem
              </Button>
            </form>
          </RevealOnScroll>

          {/* Info */}
          <RevealOnScroll className="lg:col-span-5" delay={0.2}>
            <div className="space-y-8 lg:pl-8">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-sans text-sm font-medium">Endereço</p>
                  <p className="text-muted-foreground font-sans text-sm mt-1">
                    Av. Paulista, 1842 — 15º andar<br />
                    São Paulo — SP, 01310-200
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-sans text-sm font-medium">Telefone</p>
                  <p className="text-muted-foreground font-sans text-sm mt-1">
                    +55 (11) 3000-0000
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-sans text-sm font-medium">E-mail</p>
                  <p className="text-muted-foreground font-sans text-sm mt-1">
                    contato@ricadomarques.adv.br
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
