import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { contact } from "../../data/site";
import { sendContact } from "../../services/api";
import Reveal from "../common/Reveal";
export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setBusy(true);
    setStatus("Enviando...");
    try {
      await sendContact(data);
      setStatus(
        "Consulta guardada en esta demostración. Todavía no se envió a la escuela.",
      );
      form.reset();
    } catch (err) {
      setStatus(err.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <Reveal className="contact section" id="contacto">
      <div>
        <p className="eyebrow">HABLEMOS</p>
        <h2>Tu próximo paso empieza acá</h2>
        <p>Consultanos por cursos, horarios e inscripciones.</p>
        <p>
          <MapPin size={17} /> {contact.address}
        </p>
        <p>
          Tel. {contact.phone} · WhatsApp {contact.whatsapp}
        </p>
        <p>{contact.email}</p>
      </div>
      <form onSubmit={submit}>
        <label>
          Nombre
          <input name="name" required maxLength={120} placeholder="Tu nombre" />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            placeholder="tu@email.com"
          />
        </label>
        <label>
          Consulta
          <textarea
            name="message"
            required
            maxLength={2000}
            rows="4"
            placeholder="¿En qué podemos ayudarte?"
          />
        </label>
        <button className="btn" disabled={busy}>
          Enviar consulta <ArrowRight size={17} />
        </button>
        <small role="status" aria-live="polite">
          {status ||
            "Formulario de demostración: los mensajes se guardan localmente, no se envían por correo."}
        </small>
      </form>
    </Reveal>
  );
}
