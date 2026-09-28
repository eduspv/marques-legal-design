export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: "Institucional" | "Internacional" | "Eventos" | "Publicações";
  coverImage: string;
  author?: string;
  imageCaption?: string;
}

import noticia1 from "@/assets/news/noticias/noticia1.jpeg";
import noticia2 from "@/assets/news/noticias/noticia2.jpeg";
import noticia3 from "@/assets/news/noticias/noticia3.jpeg";
import noticia4 from "@/assets/news/noticias/noticia4.jpeg";
import noticia5 from "@/assets/news/noticias/noticia5.jpeg";
import novaMateria from "@/assets/news/noticias/nova-materia.jpeg";
import tritucapPetrotec from "@/assets/news/noticias/tritucap-petrotec-parceria.jpg";

export const news: NewsItem[] = [
  {
    id: "tritucap-petrotec-parceria-index-rm-advogados",
    title: "Parceria estratégica para acelerar expansão da Tritucap e Petrotec no mercado",
    excerpt:
      "Index Participações e RM Advogados Associados lançam projeto que integra inteligência de negócios, governança corporativa, compliance e assessoria jurídica especializada para ampliar a competitividade das empresas nos mercados público e privado.",
    date: "2026-06-02",
    category: "Institucional",
    coverImage: tritucapPetrotec,
    author: "Institucional",
    imageCaption:
      "Parceria entre Index Participações e RM Advogados Associados reforça governança e expansão da Tritucap e Petrotec.",
    content: [
      "Empresas Index Participações e RM Advogados Associados lançam projeto que integra inteligência de negócios, governança corporativa, compliance e assessoria jurídica especializada para ampliar competitividade das empresas nos mercados público e privado.",

      "A busca por maior eficiência operacional, expansão sustentável e fortalecimento da governança corporativa levou a Tritucap e a Petrotec a iniciarem um novo ciclo de desenvolvimento estratégico por meio de uma parceria institucional com a Index Participações e a RM Advogados Associados.",

      "A iniciativa reúne duas organizações com reconhecida atuação em consultoria empresarial e assessoria jurídica estratégica, formando uma estrutura multidisciplinar capaz de apoiar desde a reorganização interna das empresas até a prospecção de novos mercados, desenvolvimento de projetos especiais, participação em licitações públicas e implantação de programas de integridade.",

      "O projeto teve início com um amplo diagnóstico organizacional das empresas, envolvendo análises dos setores administrativo, financeiro, comercial, operacional e documental, permitindo a construção de um plano de trabalho voltado ao fortalecimento da governança corporativa e ao aumento da competitividade institucional.",

      "A Index Participações assume a coordenação das atividades de inteligência empresarial, planejamento estratégico, desenvolvimento de negócios, relações institucionais e prospecção de oportunidades nos setores público e privado. Entre suas atribuições destacam-se a elaboração de estratégias comerciais, identificação de novos mercados, apoio à estruturação de Estudos Técnicos Preliminares (ETPs), análise de oportunidades em licitações públicas e construção de projetos destinados à expansão nacional das empresas.",

      "Paralelamente, a RM Advogados Associados conduz a estruturação jurídica do projeto, oferecendo consultoria especializada em Direito Empresarial, Direito Administrativo, Licitações e Contratos Públicos, Compliance e Governança Corporativa. O escritório também é responsável pela implantação do Programa de Integridade em conformidade com a Lei nº 14.133/2021, revisão de processos internos, gestão de riscos e fortalecimento da segurança jurídica das operações.",

      "“Hoje não basta possuir um excelente produto ou tecnologia. O mercado exige organizações preparadas para atuar com planejamento estratégico, governança, conformidade regulatória e capacidade de desenvolver soluções para ambientes cada vez mais complexos. Nossa missão é justamente construir essa base para um crescimento sustentável.” — Ricardo Marques, advogado e consultor empresarial",

      "Além da implantação do programa de compliance, o projeto contempla ações voltadas ao fortalecimento da cultura organizacional, melhoria dos processos internos, qualificação documental, desenvolvimento institucional e preparação das empresas para atuação em contratos de grande porte junto à Administração Pública e à iniciativa privada.",

      "A expectativa é que o modelo de consultoria integrada desenvolvido entre a Index Participações e a RM Advogados Associados se torne referência na preparação de empresas para novos ciclos de crescimento, combinando inteligência empresarial, inovação, gestão estratégica e elevada segurança jurídica.",

      "Mais do que uma parceria de consultoria, a iniciativa representa um modelo de desenvolvimento corporativo voltado à geração de valor, fortalecimento institucional e expansão sustentável, alinhado às melhores práticas nacionais de governança e gestão empresarial.",

      "Sobre a Index Participações: a empresa atua na estruturação de negócios, inteligência empresarial, planejamento estratégico, relações institucionais, desenvolvimento de mercados, consultoria para expansão empresarial e apoio à implementação de projetos de alta complexidade, conectando empresas, investidores e oportunidades de negócios.",

      "Sobre a RM Advogados Associados: o escritório é especializado em Direito Empresarial, Direito Administrativo, Licitações e Contratos Públicos, Compliance, Governança Corporativa e consultoria jurídica estratégica, oferecendo soluções preventivas voltadas à segurança jurídica, gestão de riscos e desenvolvimento institucional de organizações públicas e privadas."
    ],
  },
  {
    id: "abdi-capelli-cooperativa-recicladores-brasil",
    title: "Cooperativa de Recicladores do Brasil homenageia presidente da ABDI: reciclagem como política pública estruturante",
    excerpt:
      "A homenagem ao presidente da ABDI, Ricardo Capelli, pela Cooperativa de Recicladores do Brasil representa o reconhecimento de que política pública bem estruturada transforma realidades ambientais, sociais e econômicas.",
    date: "2026-06-19",
    category: "Institucional",
    coverImage: novaMateria,
    author: "Institucional",
    imageCaption:
      "Homenagem ao presidente da ABDI, Ricardo Capelli, pela Cooperativa de Recicladores do Brasil evidencia o papel estruturante da reciclagem como política pública.",
    content: [
      "A homenagem ao presidente da Agência Brasileira de Desenvolvimento Industrial (ABDI), Ricardo Capelli, pela Cooperativa de Recicladores do Brasil vai além de um gesto simbólico. Ela representa o reconhecimento de que política pública bem estruturada transforma realidades — ambientais, sociais e econômicas.",

      "A reciclagem deixou de ser pauta acessória. É indústria estruturante, que movimenta bilhões, gera empregos, reduz impactos ambientais e fortalece a economia circular.",

      "Quando o Estado investe na modernização das cooperativas, ele reconhece que: tecnologia aumenta produtividade e renda; equipamentos adequados reduzem riscos à saúde; gestão qualificada fortalece a governança; inovação melhora eficiência e rastreabilidade.",

      "O avanço na gestão de resíduos no Distrito Federal — com a consolidação do aterro sanitário e o encerramento do antigo Lixão da Estrutural — marcou um divisor civilizatório para a saúde pública e para o meio ambiente.",

      "Cooperativas representam organização, formalização, proteção coletiva e acesso a políticas públicas. Fortalecê-las é romper com a invisibilidade histórica dos catadores e afirmar compromisso com dignidade humana.",

      "A coleta e a triagem de resíduos envolvem riscos ocupacionais reais. Modernizar o setor é também uma medida de saúde pública.",

      "Sustentabilidade não é retórica. É planejamento, investimento, governança e integração entre indústria, municípios e órgãos de controle.",

      "O meio ambiente não é obstáculo ao crescimento. É fundamento do desenvolvimento moderno.",

      "E a reciclagem, quando tratada com seriedade, é uma das mais poderosas ferramentas de inclusão social e fortalecimento da economia brasileira."
    ],
  },
  {
  id: "william-douglas-ricardo-marques-trf2",
  title: "Desembargador Federal William Douglas recebe Ricardo Marques no TRF2 e anuncia projeto de palestra sobre saúde e superação",
  excerpt:
    "Encontro institucional no TRF2 reuniu William Douglas e Ricardo Marques em diálogo sobre espiritualidade, saúde emocional e o papel das instituições, resultando no anúncio da palestra “A Alta e Tudo!”.",
  date: "2026-02-20",
  category: "Eventos",
  coverImage: noticia4, 
  author: "Institucional",
  imageCaption:
    "Encontro no TRF2 reuniu William Douglas e Ricardo Marques para diálogo institucional e anúncio de projeto conjunto.",
  content: [
    "Na tarde do dia 12 de fevereiro, o Desembargador Federal do Tribunal Regional Federal da 2ª Região (TRF2), William Douglas — magistrado, conferencista internacional, professor e autor de mais de 50 obras — recebeu em seu gabinete o advogado, cientista político e jornalista Ricardo Marques.",

    "O encontro institucional foi marcado por um diálogo profundo sobre propósito, espiritualidade, saúde emocional e o papel das instituições na promoção do cuidado humano, evidenciando a convergência de valores e visões entre os participantes.",

    "Reconhecido nacionalmente por sua atuação na formação de candidatos e no desenvolvimento pessoal por meio da educação e da fé, William Douglas presenteou Ricardo Marques com sua mais recente obra, “Enfermaria”, relato sensível de sua experiência ao enfrentar uma cirurgia de emergência na Itália, decorrente de um quadro de apendicite.",

    "A obra descreve os dias vividos em internação hospitalar e as reflexões surgidas a partir desse período, abordando temas como a fragilidade da vida, o valor da família, a espiritualidade e a importância do cuidado humanizado nas unidades de saúde.",

    "A partir da convergência de ideias e experiências, nasceu o projeto da palestra “A Alta e Tudo!”, iniciativa que reunirá relato vivencial, reflexão institucional e abordagem motivacional, com foco na saúde mental, na valorização dos profissionais da saúde e na humanização do atendimento hospitalar.",

    "A proposta busca impactar gestores, profissionais da área da saúde e a sociedade em geral, estimulando a construção de modelos de atendimento que integrem eficiência, empatia e bem-estar.",

    "O encontro reforça a importância do diálogo entre diferentes áreas do conhecimento e evidencia o papel das lideranças institucionais na promoção de iniciativas que transcendam o campo técnico, alcançando dimensões humanas e sociais fundamentais."
  ],
},
{
  id: "rio-bonito-integridade-transparencia-ricardo-marques",
  title: "Presidente da Câmara de Rio Bonito avança em agenda de integridade e transparência com Ricardo Marques",
  excerpt:
    "Reunião entre o presidente da Câmara de Rio Bonito (RJ), Alex Santos, e o advogado Ricardo Marques discutiu a implementação de programa de integridade, governança e transparência no Legislativo municipal.",
  date: "2026-02-12",
  category: "Institucional",
  coverImage: noticia5,
  author: "Institucional",
  imageCaption:
    "Encontro institucional no Rio de Janeiro tratou da implementação de programa de integridade e fortalecimento da governança pública em Rio Bonito (RJ).",
  content: [
    "O presidente da Câmara Municipal de Rio Bonito (RJ), vereador Alex Santos, reuniu-se na manhã desta quinta-feira, no Centro do Rio de Janeiro, com o advogado e cientista político Ricardo Marques para tratar da implementação de soluções estratégicas voltadas ao fortalecimento da governança pública no Legislativo municipal.",

    "O encontro teve como pauta central a estruturação de um modelo de consultoria especializada para desenvolvimento e implantação de Programa de Integridade e Transparência no âmbito da Câmara Municipal, com perspectiva de extensão das boas práticas também ao Poder Executivo local.",

    "A iniciativa busca alinhar a gestão pública de Rio Bonito aos mais modernos mecanismos de compliance, controle interno e prevenção de riscos institucionais, consolidando práticas administrativas mais seguras, eficientes e transparentes.",

    "Ricardo Marques, presidente da RM Advogados Associados, é especialista em Compliance e possui atuação destacada em Brasília junto a Associações de Municípios, assessorando administrações públicas na implementação de programas voltados à segurança jurídica e ao aperfeiçoamento das relações institucionais entre os setores público e privado.",

    "Recentemente, Marques concluiu pós-graduação em Licitações e Contratações Públicas pelo Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa (IDP), ampliando sua atuação técnica na orientação de municípios quanto à gestão de contratos administrativos, estruturação de processos licitatórios e capacitação de equipes responsáveis pela condução dessas demandas.",

    "Durante a reunião, também foram discutidas ações de treinamento e qualificação de servidores e gestores, com foco na padronização de procedimentos, mitigação de falhas processuais e fortalecimento dos instrumentos de controle e fiscalização.",

    "Para o presidente Alex Santos, a adoção de mecanismos eficientes de integridade e controle representa prioridade para o avanço institucional do município, com o objetivo de consolidar uma gestão legislativa moderna, transparente e alinhada às exigências contemporâneas dos órgãos de controle e da sociedade.",

    "A agenda reforça o compromisso da Câmara Municipal de Rio Bonito com a construção de um ambiente público mais íntegro, eficiente e seguro, pautado pela responsabilidade administrativa, transparência ativa e boas práticas de governança."
  ],
},
  {
    id: "jantar-liderancas-comissoes-oabdf",
    title: "Jantar reúne lideranças das comissões temáticas da OAB/DF",
    excerpt:
      "Encontro promovido por Ricardo Marques reuniu representantes de diversas comissões temáticas da OAB/DF em uma noite marcada por diálogo institucional, articulação estratégica e reflexão sobre os desafios contemporâneos da advocacia.",
    date: "2025-12-21",
    category: "Institucional",
    coverImage: noticia1,
    author: "OAB/DF",
    imageCaption:
      "Jantar reuniu presidentes e representantes de comissões temáticas da OAB/DF em ambiente de diálogo e articulação institucional.",
    content: [
      "Ricardo Marques, advogado, presidente da Comissão da Advocacia do Futuro da OAB/DF, secretário-geral da Comissão da Advocacia do Futuro da OAB/RJ e integrante das Comissões de Meio Ambiente do DF e do Conselho Federal da OAB, recebeu em sua residência, ao lado de sua esposa Simone Azevedo, presidentes e representantes de diversas comissões temáticas da Ordem no Distrito Federal para um jantar marcado por diálogo qualificado e articulação institucional.",

      "O encontro reuniu lideranças das áreas de Advocacia do Futuro, Meio Ambiente e Sustentabilidade, Direito Digital, Educação, Sistema Penitenciário e Inteligência Artificial — setores que, embora distintos em suas atribuições, convergem em desafios cada vez mais complexos no cenário jurídico contemporâneo.",

      "A proposta da noite foi aproximar agendas, fortalecer conexões e promover um ambiente de reflexão transversal sobre temas estratégicos para a advocacia brasiliense. Entre os assuntos debatidos estiveram inovação e tecnologia aplicadas ao Direito, os novos rumos da profissão, a interseção entre educação e sistema prisional, além dos impactos e preparativos institucionais relacionados à COP 30 e às crescentes demandas ambientais.",

      "As conversas fluíram em clima leve e colaborativo, reforçando o papel das comissões temáticas como pilares de estudo, qualificação técnica e integração dentro da OAB/DF. O trabalho conduzido pelo presidente da Seccional, Paulo Maurício Siqueira, foi destacado pelos presentes, especialmente pela valorização do protagonismo das comissões e pela visão estratégica que tem orientado a atuação institucional.",

      "Para Ricardo Marques, a noite simbolizou mais do que um momento de confraternização: “Reunir diferentes áreas do saber jurídico em um mesmo espaço nos permite enxergar soluções conjuntas, antecipar tendências e fortalecer o compromisso da OAB/DF com uma advocacia moderna, humana e preparada para os desafios do futuro”, afirmou.",

      "O jantar encerrou-se com sentimento de unidade e propósito comum, reafirmando o papel da OAB/DF como instituição que promove conhecimento, articulação e inovação em prol da advocacia e da sociedade."
    ],
  },
  {
    id: "confraternizacoes-rio-brasilia-index",
    title: "Confraternizações Rio & Brasília | Ecossistema Index Participações",
    excerpt:
      "Encontros realizados pelo ecossistema Index Participações reuniram equipes do Rio de Janeiro e Brasília, fortalecendo vínculos, integração e alinhamento estratégico para o próximo ciclo.",
    date: "2025-12-21",
    category: "Institucional",
    coverImage: noticia2,
    author: "Index Participações",
    imageCaption:
      "Colaboradores do ecossistema Index Participações reunidos em ambiente de integração e troca institucional.",
    content: [
      "As recentes confraternizações realizadas pelo ecossistema empresarial formado pela Index Participações, SASBIO, RM Advogados Associados e ITJ – Instituto Joãosinho Trinta reuniram colaboradores dos núcleos do Rio de Janeiro e de Brasília, fortalecendo vínculos profissionais e reafirmando a cultura de integração que orienta as organizações.",

      "Na imagem registrada, é possível ver parte da equipe reunida em um ambiente descontraído, em torno de uma mesa que simboliza diálogo, parceria e construção conjunta. A presença de profissionais de diferentes áreas e cidades reforça a amplitude e a diversidade das operações conduzidas pelas empresas do ecossistema.",

      "O encontro foi proporcionado por Ricardo Marques, CVO da Index Participações e advogado sênior da RM Advogados, ao lado de sua esposa, Simone Azevedo Santos, sócia majoritária e diretora da SASBIO. Como líderes e anfitriões, promoveram momentos de troca que ultrapassaram o simples gesto de confraternizar, envolvendo conversas qualificadas, alinhamentos estratégicos e reflexões institucionais.",

      "As pautas surgiram de forma espontânea entre os colaboradores, abordando desde os avanços e desafios enfrentados em 2025 até as perspectivas de inovação, expansão e consolidação para 2026. Eventos como esse fortalecem o senso de pertencimento e intensificam a confiança mútua entre equipes que atuam em diferentes territórios.",

      "Ao encerrar este ciclo anual, fica registrado o desejo de união, prosperidade e otimismo, com votos de que 2026 seja um ano de crescimento sustentável, avanços significativos e realizações compartilhadas entre todos que constroem diariamente este ecossistema empresarial."
    ],
  },
  {
  id: "oabdf-balanco-comissoes-2025",
  title: "OAB/DF reúne Presidentes de Comissões Temáticas e apresenta balanço das atividades de 2025",
  excerpt:
    "Encontro promovido pela OAB/DF reuniu mais de 110 presidentes de comissões temáticas, destacando resultados expressivos, protagonismo institucional e avanços estratégicos ao longo de 2025.",
  date: "2026-01-20",
  category: "Institucional",
  coverImage: noticia3,
  author: "OAB/DF",
  imageCaption:
    "Reunião institucional da OAB/DF apresentou o balanço das atividades das comissões temáticas em 2025.",
  content: [
    "A Ordem dos Advogados do Brasil Seccional Distrito Federal (OAB/DF) promoveu, nesta semana, um encontro com mais de 110 presidentes das Comissões Temáticas para apresentar o balanço das atividades desenvolvidas ao longo de 2025.",

    "Conduzido pelo Presidente da Seccional, Paulo Maurício Siqueira, o evento destacou o desempenho expressivo das Comissões, que alcançaram índices superiores a 90% de assiduidade e a realização de mais de 500 reuniões ao longo do ano, consolidando o protagonismo da advocacia brasiliense nos debates jurídicos nacionais.",

    "Entre os presidentes presentes, esteve o advogado José Ricardo Marques, que preside a Comissão da Advocacia do Futuro da OAB/DF, acompanhado de sua Secretária-Geral, Dra. Valdineia Santos. A Comissão tem se destacado pela abordagem estratégica de temas emergentes, como a transformação digital na advocacia, os impactos da inteligência artificial e os desafios regulatórios do século XXI.",

    "Além de sua atuação na Seccional do Distrito Federal, José Ricardo Marques exerce papel relevante em outros espaços institucionais. É membro da Comissão do Meio Ambiente e Sustentabilidade da OAB/DF, integrante da Comissão de Meio Ambiente do Conselho Federal da OAB e Secretário-Geral da Comissão do Futuro da OAB/RJ.",

    "Sua atuação transversal, conectando inovação tecnológica, sustentabilidade e evolução institucional da advocacia, o posiciona como uma das lideranças mais influentes no diálogo entre modernização da profissão jurídica e responsabilidade socioambiental.",

    "Advogado sênior e sócio do escritório RM Advogados Associados, José Ricardo Marques lidera uma equipe altamente qualificada, com atuação integrada em Brasília, Rio de Janeiro, Maranhão e Portugal. O escritório consolidou-se como referência nacional ao aliar excelência técnica, visão estratégica e soluções jurídicas modernas.",

    "A RM Advogados Associados atua de forma sólida em áreas como Meio Ambiente e Sustentabilidade, Inteligência Artificial e Direito Digital, Saúde e Biossegurança, Direito do Consumidor, Cultura e Terceiro Setor, além de Licitações, Contratos e Gestão Pública.",

    "Em 2025, o escritório ampliou sua presença institucional, fortaleceu parcerias estratégicas e contribuiu ativamente para debates jurídicos de relevância nacional, reafirmando seu compromisso com a inovação, a ética e a responsabilidade jurídica.",

    "A participação de José Ricardo Marques no encontro promovido pela OAB/DF simboliza o alinhamento entre sua trajetória profissional e o papel institucional que exerce, evidenciando liderança, capacidade de articulação e visão estratégica voltada ao futuro da advocacia.",

    "O balanço apresentado pela OAB/DF reflete um ano de intensa produtividade das Comissões Temáticas. A atuação de lideranças comprometidas com o fortalecimento institucional reforça a importância do engajamento, da inovação e da responsabilidade no exercício da advocacia contemporânea."
  ],
},

];