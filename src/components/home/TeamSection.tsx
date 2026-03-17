import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teamMembers } from "@/data/team";
import teamGroupImg from "@/assets/team-group.jpg";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const TeamSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 320;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-accent-line" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
              Nosso Time
            </span>
          </div>
          <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl text-foreground max-w-2xl mb-12">
            Nossa <span className="text-gold italic">Equipe</span>
          </h2>
        </RevealOnScroll>

        {/* Group photo */}
        <RevealOnScroll>
          <div className="aspect-[2.5/1] overflow-hidden mb-16">
            <img
              src={teamGroupImg}
              alt="Equipe Ricardo Marques Advogados"
              className="w-full h-full object-cover"
            />
          </div>
        </RevealOnScroll>

        {/* Carousel controls */}
        <div className="flex justify-end gap-3 mb-8">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-10 h-10 flex items-center justify-center border border-foreground/20 text-foreground/60 hover:border-gold hover:text-gold transition-colors disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-10 h-10 flex items-center justify-center border border-foreground/20 text-foreground/60 hover:border-gold hover:text-gold transition-colors disabled:opacity-30"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex-shrink-0 w-[280px] group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden relative mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-deep-blue-dark/0 group-hover:bg-deep-blue-dark/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-cream text-xs font-sans leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
              <h4 className="font-serif text-lg text-foreground">{member.name}</h4>
              <p className="text-muted-foreground text-xs font-sans tracking-wide mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
