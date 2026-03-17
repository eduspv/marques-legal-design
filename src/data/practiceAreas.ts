export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "direito-empresarial",
    title: "Direito Empresarial",
    shortDescription: "Assessoria completa em governança corporativa, fusões e aquisições, e reestruturação societária.",
    description: "Oferecemos assessoria jurídica integral para empresas de todos os portes, desde a constituição até operações complexas de M&A, passando por governança corporativa, compliance e reestruturação societária.",
    icon: "Building2",
  },
  {
    id: "direito-tributario",
    title: "Direito Tributário",
    shortDescription: "Planejamento fiscal estratégico, contencioso tributário e consultoria em obrigações acessórias.",
    description: "Atuamos no planejamento tributário preventivo e no contencioso fiscal, buscando sempre a otimização da carga tributária dentro dos limites legais.",
    icon: "Calculator",
  },
  {
    id: "direito-civil",
    title: "Direito Civil",
    shortDescription: "Contratos, responsabilidade civil, direito de família e sucessões com abordagem personalizada.",
    description: "Nossa equipe de Direito Civil atua em questões contratuais, responsabilidade civil, direito de família e sucessões, sempre com abordagem personalizada e foco na resolução eficiente de conflitos.",
    icon: "Scale",
  },
  {
    id: "direito-trabalhista",
    title: "Direito Trabalhista",
    shortDescription: "Consultoria preventiva, contencioso trabalhista e negociações sindicais estratégicas.",
    description: "Assessoramos empresas e executivos em todas as questões trabalhistas, desde a consultoria preventiva até o contencioso judicial, incluindo negociações sindicais e gestão de crises.",
    icon: "Users",
  },
  {
    id: "direito-imobiliario",
    title: "Direito Imobiliário",
    shortDescription: "Transações imobiliárias, incorporações, locações comerciais e regularização fundiária.",
    description: "Atuamos em operações imobiliárias complexas, incluindo incorporações, loteamentos, locações comerciais de grande porte e regularização fundiária.",
    icon: "Home",
  },
  {
    id: "direito-digital",
    title: "Direito Digital e LGPD",
    shortDescription: "Proteção de dados pessoais, compliance digital e assessoria em tecnologia da informação.",
    description: "Oferecemos consultoria especializada em proteção de dados pessoais, adequação à LGPD, contratos de tecnologia e questões relacionadas ao ambiente digital.",
    icon: "Shield",
  },
  {
    id: "arbitragem",
    title: "Arbitragem e Mediação",
    shortDescription: "Resolução alternativa de disputas comerciais nacionais e internacionais.",
    description: "Representamos clientes em procedimentos arbitrais perante as principais câmaras do país e do exterior, além de atuar em mediações empresariais complexas.",
    icon: "Gavel",
  },
  {
    id: "direito-administrativo",
    title: "Direito Administrativo",
    shortDescription: "Licitações, contratos públicos, regulação e contencioso administrativo.",
    description: "Assessoramos empresas em suas relações com o poder público, incluindo licitações, contratos administrativos, processos regulatórios e contencioso administrativo.",
    icon: "Landmark",
  },
];

export const featuredAreas = practiceAreas.slice(0, 4);
