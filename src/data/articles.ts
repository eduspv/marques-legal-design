export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image?: string;
}

export const articles: Article[] = [
  {
    id: "reforma-tributaria-2026",
    title: "Reforma Tributária 2026: Impactos Práticos para Empresas Brasileiras",
    excerpt: "Análise detalhada das mudanças na legislação tributária e os reflexos diretos na gestão fiscal empresarial.",
    content: `A reforma tributária aprovada traz consigo uma série de mudanças estruturais que impactam diretamente o planejamento fiscal das empresas brasileiras. Neste artigo, analisamos os principais pontos de atenção para gestores e diretores jurídicos.

O novo sistema de tributação sobre o consumo, baseado no IVA dual (CBS e IBS), representa uma transformação significativa na forma como as empresas calculam e recolhem seus tributos. A transição, prevista para ocorrer de forma gradual, exige atenção redobrada dos departamentos jurídico e fiscal.

Entre os principais impactos identificados, destacam-se: a unificação de tributos sobre o consumo, a criação do Comitê Gestor do IBS, as novas regras de creditamento e a implementação do sistema de cashback para população de baixa renda.

Para as empresas, o momento exige revisão completa dos processos fiscais, atualização de sistemas de gestão e, sobretudo, consultoria jurídica especializada para garantir a conformidade com as novas normas.`,
    category: "Direito Tributário",
    date: "2026-03-10",
    author: "Dr. Ricardo Marques",
  },
  {
    id: "compliance-empresarial",
    title: "Compliance Empresarial: A Nova Fronteira da Governança Corporativa",
    excerpt: "Como programas robustos de compliance estão redefinindo a gestão de riscos nas organizações brasileiras.",
    content: `O compliance empresarial deixou de ser uma tendência para se tornar uma necessidade estratégica. Empresas que investem em programas estruturados de conformidade não apenas mitigam riscos jurídicos, mas também fortalecem sua reputação institucional.

A implementação de um programa eficaz de compliance requer comprometimento da alta administração, políticas claras de integridade, canais de denúncia seguros e treinamento contínuo de colaboradores.

No cenário atual, a Lei Anticorrupção e suas regulamentações impõem responsabilidade objetiva às empresas, tornando imperativa a adoção de mecanismos de prevenção e detecção de irregularidades.`,
    category: "Direito Empresarial",
    date: "2026-02-28",
    author: "Dra. Fernanda Costa",
  },
  {
    id: "lgpd-atualizacoes",
    title: "LGPD em 2026: Novas Diretrizes da ANPD e Seus Reflexos",
    excerpt: "As recentes regulamentações da Autoridade Nacional de Proteção de Dados e o que muda para as empresas.",
    content: `A Autoridade Nacional de Proteção de Dados (ANPD) publicou novas diretrizes que ampliam significativamente as obrigações das empresas em relação ao tratamento de dados pessoais. Este artigo analisa as principais mudanças e seus impactos práticos.

Entre as novidades, destacam-se as regras mais rigorosas para transferência internacional de dados, a regulamentação do encarregado de proteção de dados (DPO) e as novas orientações sobre relatórios de impacto à proteção de dados pessoais.`,
    category: "Direito Digital",
    date: "2026-02-15",
    author: "Dr. Lucas Andrade",
  },
  {
    id: "direito-imobiliario-tendencias",
    title: "Tendências do Direito Imobiliário: Contratos Inteligentes e Tokenização",
    excerpt: "A transformação digital no mercado imobiliário e as novas possibilidades jurídicas para investidores.",
    content: `O mercado imobiliário brasileiro está passando por uma revolução tecnológica que traz consigo desafios e oportunidades jurídicas inéditas. A tokenização de ativos imobiliários e o uso de contratos inteligentes representam uma nova fronteira para o direito imobiliário.

Estas inovações permitem a fragmentação de propriedades em tokens digitais, democratizando o acesso a investimentos imobiliários e criando novos instrumentos jurídicos que demandam regulamentação específica.`,
    category: "Direito Imobiliário",
    date: "2026-01-20",
    author: "Dra. Marina Silva",
  },
  {
    id: "arbitragem-comercial",
    title: "Arbitragem Comercial Internacional: Brasil como Sede Estratégica",
    excerpt: "O crescimento do Brasil como centro de arbitragem internacional e as vantagens para empresas.",
    content: `O Brasil consolida sua posição como importante sede de arbitragem comercial internacional. Com câmaras arbitrais reconhecidas mundialmente e um marco legal robusto, o país atrai cada vez mais procedimentos arbitrais complexos envolvendo disputas comerciais internacionais.`,
    category: "Arbitragem",
    date: "2026-01-08",
    author: "Dr. Ricardo Marques",
  },
];

export const articleCategories = [
  "Todos",
  "Direito Tributário",
  "Direito Empresarial",
  "Direito Digital",
  "Direito Imobiliário",
  "Arbitragem",
];
