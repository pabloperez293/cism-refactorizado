
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import "./Header.css";

export default function Header({ onTest }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <a
        href="/#inicio"
        className="brand"
        aria-label="CISM - Inicio"
        onClick={close}
      >
        <img
          className="brand-logo"
          src="/assets/cismLogo.jpg"
          alt="Cultural Inglesa San Martín"
          width="160"
          height="70"
        />
      </a>

      <nav
        id="main-navigation"
        className={open ? "open" : ""}
        aria-label="Navegación principal"
      >
        <a href="/#inicio" onClick={close}>Inicio</a>
        <a href="/#cursos" onClick={close}>Cursos</a>
        <a href="/#empresas" onClick={close}>Empresas</a>
        <a href="/#traducciones" onClick={close}>Traducciones</a>
        <a href="/#contacto" onClick={close}>Contacto</a>

        <button
          type="button"
          className="linkbutton"
          onClick={() => {
            close();
            onTest?.();
          }}
        >
          Test de nivel
        </button>
      </nav>

      <a className="btn topcta" href="/#contacto">
        Inscripciones <ArrowRight size={17} />
      </a>

    <button
  type="button"
  className="hamburger"
  aria-label={open ? "Cerrar menú" : "Abrir menú"}
  aria-controls="main-navigation"
  aria-expanded={open}
  onClick={() => setOpen((prev) => !prev)}
>
  {open ? <X size={24} /> : <Menu size={24} />}
</button>
    </header>
  );
}
