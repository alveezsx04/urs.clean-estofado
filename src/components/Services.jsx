import {
  FaCouch,
  FaBed,
  FaChair,
  FaCar,
  FaThLarge,
} from "react-icons/fa";

import "./Services.scss";

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="services-container">

        <div className="services-intro">
          <span className="services-tag">
            NOSSOS SERVIÇOS
          </span>

          <h2>
            Limpeza completa
            <br />
            para todos os tipos
            <br />
            de estofados.
          </h2>

          <p>
            Deixamos seus estofados mais limpos,
            bonitos e livres de impurezas,
            prolongando a vida útil do seu móvel.
          </p>
        </div>

        <div className="services-grid">

          {/* SOFÁS */}
          <div className="service-card">
            <div className="service-icon">
              <FaCouch />
            </div>

            <h3>Sofás</h3>

            <p>
              De todos os tamanhos
              e modelos
            </p>
          </div>

          {/* COLCHÕES */}
          <div className="service-card">
            <div className="service-icon">
              <FaBed />
            </div>

            <h3>Colchões</h3>

            <p>
              Higienização profunda
              e remoção de manchas
            </p>
          </div>

          {/* CADEIRAS */}
          <div className="service-card">
            <div className="service-icon">
              <FaChair />
            </div>

            <h3>Cadeiras e poltronas</h3>

            <p>
              Mais conforto
              e higiene
            </p>
          </div>

          {/* AUTOMOTIVOS */}
          <div className="service-card">
            <div className="service-icon">
              <FaCar />
            </div>

            <h3>Bancos automotivos</h3>

            <p>
              Seu carro também
              merece cuidado
            </p>
          </div>

          {/* TAPETES */}
          <div className="service-card">
            <div className="service-icon">
              <FaThLarge />
            </div>

            <h3>Tapetes e outros</h3>

            <p>
              Tapetes, puff,
              cabeceiras e muito mais
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}