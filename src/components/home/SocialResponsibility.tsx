import { useState } from "react";
import imgCapacitacao from "@/assets/Capacitacao/capacitacao1.png";
import imgEstagio from "@/assets/Capacitacao/capacitacao2.png";
import imgResidencia from "@/assets/Capacitacao/capacitacao3.jpeg";

const stages = [
  {
    num: "03",
    verticalTitle: "Residência",
    title: "Projetos de residência jurídica",
    text: "A residência jurídica do escritório oferece aos recém-formados uma imersão profunda na prática advocatícia. Durante 12 meses, os residentes atuam em casos reais, participam de audiências e desenvolvem competências essenciais para uma carreira de destaque.",
    image: imgResidencia,
  },
  {
    num: "02",
    verticalTitle: "Estágio",
    title: "Abertura de vagas para estagiários",
    text: "Nosso programa de estágio é reconhecido como um dos mais completos do mercado. Estudantes de Direito têm a oportunidade de vivenciar a prática jurídica em um ambiente de aprendizado real, com mentoria direta de nossos sócios e associados.",
    image: imgEstagio,
  },
  {
    num: "01",
    verticalTitle: "Capacitação",
    title: "Programas de capacitação e qualificação profissional",
    text: "Investimos no desenvolvimento contínuo de nossos profissionais através de programas internos de capacitação, workshops com especialistas e incentivo à produção acadêmica. Acreditamos que a excelência jurídica nasce do conhecimento atualizado e da formação sólida.",
    image: imgCapacitacao,
  },
];

const TAB_WIDTH = 46;
const TOTAL = stages.length;
const ACTIVE_WIDTH = `calc(100% - ${(TOTAL - 1) * TAB_WIDTH + 8}px)`;

const SocialResponsibility = () => {
  const [activeLayer, setActiveLayer] = useState(2);

const handlePanelClick = (index: number) => {
  if (index === activeLayer) return;
  setActiveLayer(index);
};

  return (
    <section
      className="bg-background"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        className="container-editorial"
        style={{
          paddingTop: "2.5rem",
          paddingBottom: "1.5rem",
          flexShrink: 0,
        }}
      >
        <div className="flex items-center gap-4 mb-3">
  <div className="gold-accent-line" />
  <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
    Responsabilidade Social
  </span>
</div>

<h2
  className="font-serif font-light"
  style={{
    fontSize: "clamp(1.8rem, 3vw, 3rem)",
    lineHeight: 1.12,
    color: "#243B52",
  }}
>
  Formação Jurídica e{" "}
  <em style={{ color: "#E7A66E", fontStyle: "italic" }}>
    Compromisso Social
  </em>
</h2>
      </div>

      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          marginLeft: "30.5rem",
          minHeight: "620px",
          border: "0.1px solid black",
        }}
      >
        {stages.map((stage, index) => {
  const isActive = index === activeLayer;
  const isLeftTab = index < activeLayer;
  const isRightTab = index > activeLayer;

  let left = "0px";
  let panelWidth = `${TAB_WIDTH}px`;
  let zIndex = index + 1;

  if (isLeftTab) {
    left = `${index * TAB_WIDTH}px`;
    panelWidth = `${TAB_WIDTH}px`;
    zIndex = index + 1;
  }

  if (isActive) {
    left = `${index * TAB_WIDTH}px`;
    panelWidth = `calc(100% - ${(TOTAL - 1) * TAB_WIDTH}px)`;
    zIndex = 20;
  }

  if (isRightTab) {
    left = `calc(100% - ${(TOTAL - index) * TAB_WIDTH}px)`;
    panelWidth = `${TAB_WIDTH}px`;
    zIndex = 30 + index;
  }

  console.log("PAINEL:", {
    stage: stage.num,
    index,
    activeLayer,
    isActive,
    isLeftTab,
    isRightTab,
    left,
    width: panelWidth,
    zIndex,
  });

  return (
    <div
      key={stage.num}
      onClick={() => handlePanelClick(index)}
      style={{
        position: "absolute",
        top: 0,
        left,
        width: panelWidth,
        height: "100%",
        zIndex,
        display: "flex",
        overflow: "hidden",
        boxSizing: "border-box",
        transition:
          "left 1.8s cubic-bezier(0.22,1,0.36,1), width 1.8s cubic-bezier(0.22,1,0.36,1)",
        cursor: isActive ? "default" : "pointer",
        borderLeft: "1px solid rgba(66,105,92,0.18)",
      }}
    >
      <div
        style={{
          width: `${TAB_WIDTH}px`,
          minWidth: `${TAB_WIDTH}px`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 0",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 200,
            fontSize: "1.8rem",
            lineHeight: 1,
            color: "#243B52",
          }}
        >
          {stage.num}
        </span>

        <span
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "0.62rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#4a5f72",
            whiteSpace: "nowrap",
          }}
        >
          {stage.verticalTitle}
        </span>
      </div>

      {isActive && (
        <div
          style={{
            flex: 1,
            display: "flex",
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "clamp(280px, 36%, 430px)",
              flexShrink: 0,
              padding: "3rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#E7A66E",
                marginBottom: "1rem",
              }}
            >
              {stage.num} — {stage.verticalTitle}
            </p>

            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.6rem, 2vw, 2.4rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "#243B52",
                marginBottom: "1rem",
              }}
            >
              {stage.title}
            </h3>

            <div
              style={{
                width: "32px",
                height: "1px",
                background: "#E7A66E",
                marginBottom: "1rem",
              }}
            />

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#4a5f72",
              }}
            >
              {stage.text}
            </p>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: 0,
              overflow: "hidden",
            }}
          >
            <img
              src={stage.image}
              alt={stage.title}
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
})}
      </div>
    </section>
  );
};

export default SocialResponsibility;