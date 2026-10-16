import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, X, CheckCircle2 } from "lucide-react";
import { getQuestions, sendAssessment } from "../../services/api";
const initialProfile = {
  name: "",
  email: "",
  age: "",
  course: "Curso regular",
};
export default function PlacementTest({ onClose }) {
  const [questions, setQuestions] = useState([]),
    [step, setStep] = useState(-1),
    [answers, setAnswers] = useState({}),
    [profile, setProfile] = useState(initialProfile),
    [status, setStatus] = useState(""),
    [result, setResult] = useState(null);
  useEffect(() => {
    let live = true;
    getQuestions()
      .then((data) => {
        if (live) setQuestions(data.questions);
      })
      .catch((e) => {
        if (live) setStatus(e.message);
      });
    return () => {
      live = false;
    };
  }, []);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  async function submit() {
    setStatus("Enviando...");
    try {
      const data = await sendAssessment({ profile, answers });
      setResult(data);
      setStatus("");
    } catch (e) {
      setStatus(e.message);
    }
  }
  const q = questions[step];
  return (
    <div className="overlay" role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="placement-title"
      >
        <div className="modalhead">
          <strong id="placement-title">
            CISM <span>| Test de nivel</span>
          </strong>
          <button aria-label="Cerrar evaluación" onClick={onClose}>
            <X />
          </button>
        </div>
        {result ? (
          <div className="modalbody">
            <CheckCircle2 size={45} color="#1260df" />
            <h2>¡Evaluación completada!</h2>
            <p>
              Respuestas correctas:{" "}
              <b>
                {result.score} de {result.total}
              </b>
              . El resultado es orientativo y CISM confirmará tu nivel mediante
              su proceso académico.
            </p>
            <button className="btn" onClick={onClose}>
              Volver al inicio
            </button>
          </div>
        ) : step === -1 ? (
          <div className="modalbody">
            <p className="eyebrow">EMPEZÁ TU EVALUACIÓN</p>
            <h2>Descubrí tu nivel de inglés</h2>
            <p>
              Son 60 preguntas: 40 de gramática y 20 de vocabulario. Tus
              resultados son orientativos y serán revisados por CISM.
            </p>
            <form
              className="profile"
              onSubmit={(e) => {
                e.preventDefault();
                if (questions.length) setStep(0);
              }}
            >
              <label>
                Nombre
                <input
                  required
                  maxLength={120}
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
              </label>
              <label>
                Correo electrónico
                <input
                  type="email"
                  required
                  maxLength={200}
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </label>
              <label>
                Edad
                <input
                  type="number"
                  min="5"
                  max="110"
                  required
                  value={profile.age}
                  onChange={(e) =>
                    setProfile({ ...profile, age: e.target.value })
                  }
                />
              </label>
              <label>
                Tipo de curso
                <select
                  value={profile.course}
                  onChange={(e) =>
                    setProfile({ ...profile, course: e.target.value })
                  }
                >
                  {[
                    "Curso regular",
                    "Curso intensivo",
                    "Curso de conversación",
                    "Preparación de examen internacional",
                    "Fines específicos",
                    "Otros",
                  ].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <button className="btn" disabled={!questions.length}>
                Comenzar <ArrowRight size={17} />
              </button>
            </form>
            {status && <p role="status">{status}</p>}
          </div>
        ) : q ? (
          <div className="modalbody">
            <div className="progressmeta">
              <span>
                Pregunta {step + 1} de {questions.length}
              </span>
              <span>{Math.round((step / questions.length) * 100)}%</span>
            </div>
            <div className="progress">
              <div style={{ width: `${(step / questions.length) * 100}%` }} />
            </div>
            <p className="eyebrow">
              SECCIÓN {step < 40 ? "1" : "2"} | {q.section.toUpperCase()}
            </p>
            <h2 className="question">{q.prompt}</h2>
            <div className="options">
              {q.options.map((option, i) => (
                <button
                  type="button"
                  key={i}
                  className={answers[q.id] === i ? "option selected" : "option"}
                  aria-pressed={answers[q.id] === i}
                  onClick={() => setAnswers({ ...answers, [q.id]: i })}
                >
                  <span className="radio" />
                  {option}
                </button>
              ))}
            </div>
            <div className="modalactions">
              <button
                className="btn secondary"
                disabled={step === 0}
                onClick={() => setStep(step - 1)}
              >
                <ArrowLeft size={17} /> Anterior
              </button>
              <button
                className="btn"
                disabled={
                  answers[q.id] === undefined || status === "Enviando..."
                }
                onClick={() =>
                  step === questions.length - 1 ? submit() : setStep(step + 1)
                }
              >
                {step === questions.length - 1 ? "Finalizar" : "Siguiente"}{" "}
                <ArrowRight size={17} />
              </button>
            </div>
            {status && <p role="status">{status}</p>}
          </div>
        ) : (
          <div className="modalbody">Cargando preguntas...</div>
        )}
      </div>
    </div>
  );
}
