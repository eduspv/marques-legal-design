export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Eduardo Mendes",
    role: "CEO",
    company: "Grupo Meridional",
    quote: "A expertise e o comprometimento da equipe do Ricardo Marques Advogados foram determinantes para o sucesso da nossa reestruturação societária. Um escritório que alia excelência técnica a um atendimento verdadeiramente personalizado.",
  },
  {
    id: "2",
    name: "Ana Paula Ribeiro",
    role: "Diretora Jurídica",
    company: "TechBrasil S.A.",
    quote: "Encontramos no escritório a parceria ideal para nossa adequação à LGPD. A abordagem estratégica e o profundo conhecimento da legislação nos deram a segurança necessária para operar com confiança.",
  },
  {
    id: "3",
    name: "Roberto Figueiredo",
    role: "Presidente",
    company: "Construtora Atlântica",
    quote: "Há mais de 15 anos contamos com a assessoria do escritório em todas as nossas operações imobiliárias. A confiança e a qualidade do trabalho são incomparáveis.",
  },
];
