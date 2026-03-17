import aboutImage from "@/assets/about-image.jpg";

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
    text: "Fundado em 2005, o Ricardo Marques Advogados Associados nasceu da convicção de que a advocacia de excelência se constrói com dedicação, ética e profundo conhecimento jurídico. Em pouco mais de duas décadas, consolidamos uma trajetória de resultados consistentes e relações duradouras com nossos clientes.",
    image: aboutImage,
  },
  {
    id: "visao",
    label: "Visão de futuro",
    title: "Inovação a Serviço do Direito",
    text: "Acreditamos que o futuro da advocacia está na integração entre tradição jurídica e inovação tecnológica. Investimos continuamente em ferramentas digitais, inteligência artificial aplicada ao Direito e metodologias ágeis de gestão, sem jamais perder de vista o que nos define: a excelência no atendimento ao cliente.",
    image: aboutImage,
  },
  {
    id: "atuacao",
    label: "Atuação institucional do sócio fundador",
    title: "Liderança e Compromisso Institucional",
    text: "Dr. Ricardo Marques exerce papel ativo em instituições jurídicas de relevância nacional. Membro da Comissão de Direito Constitucional da OAB Federal e conselheiro do Instituto Brasileiro de Direito Empresarial, sua atuação institucional reflete o compromisso do escritório com o aprimoramento do sistema jurídico brasileiro.",
    image: aboutImage,
  },
  {
    id: "diretriz",
    label: "Nossa diretriz",
    title: "Compromisso com Resultados e Integridade",
    text: "Nossa diretriz é clara: oferecer soluções jurídicas estratégicas, personalizadas e orientadas a resultados. Cada caso é tratado com a atenção e o rigor que merece, porque entendemos que por trás de cada processo há pessoas, empresas e histórias que dependem da nossa competência e dedicação.",
    image: aboutImage,
  },
];
