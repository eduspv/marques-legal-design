import aboutImage from "@/assets/AboutSection/about-image.jpeg";
import type { ReactNode } from "react";

export interface AboutTab {
  id: string;
  label: string;
  title: string;
  text: string; 
  image: string;
}

export const aboutTabs: AboutTab[] = [
  {
    id: "tradicao",
    label: "Tradição recente",
    title: "Uma Tradição Construída com Excelência",
    text: "A RM Advogados Associados é um escritório de assessoria e consultoria jurídica fundado em 2019, com atuação estratégica no contencioso e forte vocação consultiva.",
    image: aboutImage,
  },
  {
    id: "visao",
    label: "Visão de futuro",
    title: "Inovação a Serviço do Direito",
    text: "À frente do escritório está o advogado José Ricardo Marques, pós-graduado em Licitações e Contratos Públicos, com sólida atuação institucional e participação ativa na Ordem dos Advogados do Brasil, destacando-se por sua visão inovadora sobre o futuro da advocacia e da gestão jurídica.",
    image: aboutImage,
  },
  {
    id: "atuacao",
    label: "Atuação institucional do sócio fundador",
    title: "Liderança e Compromisso Institucional",
    text: `Membro da Comissão de Meio Ambiente e Sustentabilidade do Conselho Federal da OAB
Presidente da Comissão da Advocacia do Futuro – OAB/DF
Membro da Comissão de Meio Ambiente e Sustentabilidade – OAB/DF
Secretário-Geral da Comissão da Saúde – OAB/DF
Secretário-Geral da Comissão da Advocacia do Futuro – OAB/RJ
Com atuação profissional no Distrito Federal, Rio de Janeiro, Maranhão e Lisboa (Portugal), o escritório mantém uma visão jurídica integrada, nacional e internacional.`,    image: aboutImage,
  },
  {
    id: "diretriz",
    label: "Nossa diretriz",
    title: "Compromisso com Resultados e Integridade",
    text: "Nossa diretriz é clara: oferecer soluções jurídicas estratégicas, personalizadas e orientadas a resultados. Cada caso é tratado com a atenção e o rigor que merece, porque entendemos que por trás de cada processo há pessoas, empresas e histórias que dependem da nossa competência e dedicação.",
    image: aboutImage,
  },
];