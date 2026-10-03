import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiMessageCircle,
} from "react-icons/fi";

import "./Header.scss";
import logo from "../assets/logo.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <a href="#inicio" className="logo" onClick={closeMenu}>
          <img src={logo} alt="URS Clean Estofado" />
        </a>

        {/* MENU DESKTOP */}
        <nav className="navigation">
          <a href="#inicio">Início</a>

          <a href="#servicos">Serviços</a>

          <a href="#atendimento">
            Área de Atendimento
          </a>

          <a
            href="https://wa.me/5511987502837"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-button"
          >
            <FiMessageCircle />
            <span>Fale Conosco</span>
          </a>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <a href="#inicio" onClick={closeMenu}>
          Início
        </a>

        <a href="#servicos" onClick={closeMenu}>
          Serviços
        </a>

        <a href="#atendimento" onClick={closeMenu}>
          Área de Atendimento
        </a>

        <a
          href="https://wa.me/5511987502837"
          target="_blank"
          rel="noreferrer"
          className="mobile-whatsapp"
          onClick={closeMenu}
        >
          <FiMessageCircle />
          Fale Conosco
        </a>

      </div>
    </header>
  );
}