import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-background">
      <div className="container-editorial">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-3">
            <div className="gold-accent-line" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
              O QUE DIZEM SOBRE NÓS:
            </span>
          </div>

          <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl text-foreground max-w-2xl mb-16">
            Comentários dos nossos <span className="text-gold italic">Clientes</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-16 relative">
          <div className="flex justify-end mb-8 gap-3">
            <button className="testimonials-prev w-10 h-10 flex items-center justify-center border border-black/20 text-black/50 hover:border-black hover:text-black transition-colors rounded-full">
              <ChevronLeft size={18} />
            </button>

            <button className="testimonials-next w-10 h-10 flex items-center justify-center border border-black/20 text-black/50 hover:border-black hover:text-black transition-colors rounded-full">
              <ChevronRight size={18} />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".testimonials-prev",
              nextEl: ".testimonials-next",
            }}
            pagination={{
              clickable: true,
              el: ".testimonials-pagination",
            }}
            spaceBetween={30}
            slidesPerView={2}
            speed={300}
            loop={true}
            className="testimonials-swiper !overflow-visible"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <article className="testimonial-card bg-background text-black p-8 md:p-10 min-h-[280px] md:min-h-[300px] flex flex-col justify-between transition-all duration-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-[10px] bg-gradient-to-b from-[#C8A46A]/90 via-[#E8D3AF]/25 to-white" />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 flex items-center justify-center rounded-full mb-6">
                        <Quote className="w-4 h-4 text-black/80" />
                      </div>

                      <blockquote className="font-serif text-lg md:text-xl text-black/90 font-light leading-relaxed italic">
                        "{t.quote}"
                      </blockquote>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonials-pagination flex justify-center gap-2 mt-10" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;