import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
export default function Header({ onTest }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <a href="/#inicio" className="brand" aria-label="CISM inicio">
        <img
          className="brand-logo"
          src="/assets/cultura-inglesa-logo.png"
          alt="Cultural Inglesa San Martín"
          onError={(e) => {
            e.currentTarget.hidden = true;
            e.currentTarget.nextElementSibling.hidden = false;
          }}
        />
        <span className="brand-fallback" hidden>
          <b>CISM</b> CULTURAL INGLESA SAN MARTÍN
        </span>
      </a>
      <nav
        id="main-navigation"
        className={open ? "open" : ""}
        aria-label="Navegación principal"
      >
        <a href="/#inicio" onClick={close}>
          Inicio
        </a>
        <a href="/#cursos" onClick={close}>
          Cursos
        </a>
        <a href="/#empresas" onClick={close}>
          Empresas
        </a>
        <a href="/#traducciones" onClick={close}>
          Traducciones
        </a>
        <a href="/#contacto" onClick={close}>
          Contacto
        </a>
        <button
          className="linkbutton"
          onClick={() => {
            close();
            onTest();
          }}
        >
          Test de nivel
        </button>
      </nav>
      <a className="btn topcta" href="/#contacto">
        Inscripciones <ArrowRight size={17} />
      </a>
      <button
        className="hamburger"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-controls="main-navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
