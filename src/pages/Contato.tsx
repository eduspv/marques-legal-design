import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import headerImage from "@/assets/contato/hero.png";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const destinatario = "rmadv@rmadvassociados.com.br";
    const assunto = encodeURIComponent(
      `Novo contato do site - ${formData.nome}`
    );
    const corpo = encodeURIComponent(
      `Olá, tudo bem?\n\n` +
        `Meu nome é: ${formData.nome}\n` +
        `Meu e-mail é: ${formData.email}\n\n` +
        `Mensagem:\n${formData.mensagem}`
    );

    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section
        className="relative pt-60 pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-deep-blue/65 to-deep-blue/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/50 via-transparent to-transparent" />

        <div className="relative container-editorial">
          <div className="gold-accent-line-wide mb-8" />
          <h1 className="heading-editorial text-cream text-4xl md:text-5xl lg:text-6xl">
            Entre em <span className="text-gold italic">Contato</span>
          </h1>
        </div>
      </section>

      <section className="section-padding bg-background transition-colors duration-700">
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
              Estamos à disposição para discutir como podemos auxiliar na
              proteção dos seus interesses e na construção de soluções jurídicas
              eficazes.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <RevealOnScroll className="lg:col-span-7" delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-sm hover:border-gold/40"
              >
                <div>
                  <label className="text-xs uppercase text-muted-foreground mb-2 block">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm focus:outline-none focus:border-gold"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs uppercase text-muted-foreground mb-2 block">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm focus:outline-none focus:border-gold"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs uppercase text-muted-foreground mb-2 block">
                    Mensagem
                  </label>
                  <textarea
                    value={formData.mensagem}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mensagem: e.target.value,
                      })
                    }
                    rows={5}
                    className="w-full bg-transparent border-b border-foreground/20 py-3 text-sm focus:outline-none focus:border-gold resize-none"
                    required
                  />
                </div>

                <Button variant="gold" size="lg" type="submit">
                  Enviar mensagem
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </RevealOnScroll>

            <RevealOnScroll className="lg:col-span-5" delay={0.2}>
              <div className="space-y-5 lg:pl-8">
                <a
                  href="https://maps.app.goo.gl/AgbwZgwdeQkJMbkcA"
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-gold/40"
                >
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-gold mt-1" />
                    <div>
                      <p className="text-sm font-medium">Brasília</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        SCN, Quadra 1, Bloco F, Ed. America Office Tower sala
                        317 asa norte
                        <br />
                        BRASÍLIA - DF
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/AgbwZgwdeQkJMbkcA"
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-gold/40"
                >
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-gold mt-1" />
                    <div>
                      <p className="text-sm font-medium">Rio de Janeiro</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        RUA DO ACRE, 83, 11º ANDAR, SALA 1106 - CENTRO
                        <br />
                        RIO DE JANEIRO - RJ
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+556135266972"
                  className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-gold/40"
                >
                  <div className="flex gap-4">
                    <Phone className="w-5 h-5 text-gold mt-1" />
                    <div>
                      <p className="text-sm font-medium">Telefone</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        +55 (61) 3526-6972
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:rmadv@rmadvassociados.com.br"
                  className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-gold/40"
                >
                  <div className="flex gap-4">
                    <Mail className="w-5 h-5 text-gold mt-1" />
                    <div>
                      <p className="text-sm font-medium">E-mail</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        rmadv@rmadvassociados.com.br
                      </p>
                    </div>
                  </div>
                </a>
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