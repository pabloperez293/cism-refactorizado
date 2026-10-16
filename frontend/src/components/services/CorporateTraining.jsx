import { ArrowRight } from "lucide-react";
import { companyPrograms } from "../../data/site";
import Reveal from "../common/Reveal";
export default function CorporateTraining() {
  return (
    <Reveal className="section services" id="empresas">
      <p className="eyebrow">SOLUCIONES PARA ORGANIZACIONES</p>
      <h2>Capacitación de inglés para empresas</h2>
      <p>
        Cursos in-company o en nuestra sede. Evaluamos a cada participante y
        formamos grupos por nivel, con un máximo de cuatro personas por curso.
        Adaptamos horarios, duración y contenidos a cada empresa.
      </p>
      <p>
        Entrenamiento intensivo en conversación, comprensión auditiva,
        gramática, pronunciación y terminología profesional. Realizamos
        evaluaciones de seguimiento para medir los objetivos alcanzados.
      </p>
      <div className="service-grid">
        {companyPrograms.map((name, i) => (
          <article className="service-card" key={name}>
            <span className="service-number">0{i + 1}</span>
            <h3>{name}</h3>
            <p>Programas personalizados para equipos y profesionales.</p>
          </article>
        ))}
      </div>
      <a className="btn" href="#contacto">
        Consultar capacitación <ArrowRight size={17} />
      </a>
    </Reveal>
  );
}
