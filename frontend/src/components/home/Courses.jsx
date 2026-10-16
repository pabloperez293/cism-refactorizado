import { ArrowRight } from "lucide-react";
import { courses } from "../../data/site";
import Reveal from "../common/Reveal";
export default function Courses() {
  return (
    <Reveal className="section" id="cursos">
      <div className="sectionhead">
        <div>
          <p className="eyebrow">ENCONTRÁ TU CAMINO</p>
          <h2>Un curso para cada etapa</h2>
        </div>
        <p>
          Aprendé con un enfoque práctico, en grupos reducidos y a tu ritmo.
        </p>
      </div>
      <div className="courses">
        {courses.map((c) => (
          <a href="#contacto" className="course" key={c.name}>
            <img
              src={c.image}
              alt={`Curso de inglés para ${c.name.toLowerCase()}`}
              loading="lazy"
            />
            <div className="coursebody">
              <h3>{c.name}</h3>
              <p>{c.description}</p>
              <span className="circle">
                <ArrowRight size={18} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Reveal>
  );
}
