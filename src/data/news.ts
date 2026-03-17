export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

export const news: NewsItem[] = [
  {
    id: "premio-excelencia-2026",
    title: "Ricardo Marques Advogados recebe prêmio de excelência jurídica",
    excerpt: "O escritório foi reconhecido pela Chambers & Partners como referência em direito empresarial no Brasil.",
    date: "2026-03-12",
    category: "Institucional",
  },
  {
    id: "parceria-internacional",
    title: "Nova parceria com escritório europeu amplia atuação internacional",
    excerpt: "Acordo de cooperação com firma em Lisboa fortalece assessoria a empresas com operações em Portugal.",
    date: "2026-03-05",
    category: "Internacional",
  },
  {
    id: "seminario-tributario",
    title: "Seminário sobre Reforma Tributária reúne especialistas",
    excerpt: "Evento promovido pelo escritório reuniu mais de 200 profissionais para debater os impactos da reforma.",
    date: "2026-02-20",
    category: "Eventos",
  },
  {
    id: "expansao-equipe",
    title: "Escritório anuncia expansão da equipe de Direito Digital",
    excerpt: "Novos especialistas em proteção de dados e direito digital integram o time de advogados.",
    date: "2026-02-10",
    category: "Institucional",
  },
  {
    id: "publicacao-livro",
    title: "Dr. Ricardo Marques lança obra sobre Direito Constitucional",
    excerpt: "Livro aborda temas contemporâneos do constitucionalismo brasileiro e já é referência acadêmica.",
    date: "2026-01-25",
    category: "Publicações",
  },
  {
    id: "programa-estagio",
    title: "Programa de estágio 2026 abre inscrições",
    excerpt: "Vagas para estudantes de Direito com interesse em diversas áreas de atuação do escritório.",
    date: "2026-01-15",
    category: "Institucional",
  },
];
