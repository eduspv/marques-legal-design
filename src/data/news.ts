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

export const news: NewsItem[] = [
  {
    id: "jantar-liderancas-comissoes-oabdf",
    title: "Jantar reúne lideranças das comissões temáticas da OAB/DF",
    excerpt:
      "Encontro promovido por Ricardo Marques reuniu representantes de diversas comissões temáticas da OAB/DF em uma noite marcada por diálogo institucional, articulação estratégica e reflexão sobre os desafios contemporâneos da advocacia.",
    date: "2026-01-21",
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
    date: "2026-01-21",
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