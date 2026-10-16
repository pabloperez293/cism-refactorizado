import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { photos } from "../../data/site";
import "swiper/css";
import "swiper/css/pagination";
export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        loop
        aria-label="Imágenes de estudiantes"
      >
        {[photos.hero, photos.adults, photos.teens].map((url, i) => (
          <SwiperSlide key={url}>
            <div
              className="heroimage"
              role="img"
              aria-label={`Estudiantes de inglés ${i + 1}`}
              style={{
                backgroundImage: `linear-gradient(90deg,rgba(247,250,255,.97) 0%,rgba(247,250,255,.91) 35%,rgba(247,250,255,.05) 78%),url(${url})`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-content">
        <p className="eyebrow">APRENDÉ INGLÉS EN SAN MARTÍN</p>
        <h1>
          Tu futuro
          <br />
          empieza en inglés
        </h1>
        <p className="lead">
          Aprendé inglés a tu ritmo, con profesores que te acompañan.
        </p>
        <div className="actions">
          <a className="btn" href="#cursos">
            Conocé nuestros cursos <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
