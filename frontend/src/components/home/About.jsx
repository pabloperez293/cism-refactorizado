import { CheckCircle2 } from "lucide-react";
import Reveal from "../common/Reveal";
export default function About() {
  return (
    <Reveal className="about section" id="historia">
      <div
        className="aboutphoto"
        role="img"
        aria-label="Referencias culturales británicas"
      />
      <div>
        <p className="eyebrow">UNA ESCUELA CON HISTORIA</p>
        <h2>Formación de calidad, con proyección al mundo</h2>
        <p>
          En CISM acompañamos a generaciones de estudiantes con una enseñanza
          cercana y práctica.
        </p>
        <div className="features">
          {[
            "Grupos reducidos",
            "Enfoque comunicativo",
            "Preparación internacional",
          ].map((t) => (
            <span key={t}>
              <CheckCircle2 />
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
