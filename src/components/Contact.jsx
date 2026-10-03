import "./Contact.scss";

import {
  FiMapPin,
  FiMessageCircle,
  FiInstagram,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section className="contact-section" id="atendimento">

      <div className="contact-area">

        {/* ÁREA DE ATENDIMENTO */}
        <div className="contact-service-area">

          <div className="contact-service-title">
            <FiMapPin />

            <h2>Área de atendimento</h2>
          </div>

          <h3>
            Atendemos em toda a região!
          </h3>

          <p>
            Consulte seu bairro pelo WhatsApp.
          </p>

          <div className="contact-locations">
            <span>Brasilândia</span>
            <span>Cachoeirinha</span>
            <span>Vila Itaberaba</span>
            <span>Jardim Paulistano</span>
            <span>Vila Terezinha</span>
            <span>Jaraguá</span>
            <span>Jardim Elisa Maria</span>
            <span>e região</span>
          </div>

        </div>

        {/* ENTRE EM CONTATO */}
        <div className="contact-action">

          <div className="contact-action-icon">
            <FiMessageCircle />
          </div>

          <div className="contact-action-content">

            <h2>
              Entre em contato agora mesmo!
            </h2>

            <p>
              Tire suas dúvidas, peça seu orçamento
              <br />
              e agende seu horário.
            </p>

            <a
              href="https://wa.me/5511987502837"
              target="_blank"
              rel="noreferrer"
              className="contact-whatsapp-button"
            >
              Fale pelo WhatsApp

              <FiArrowRight />
            </a>

          </div>

          <div className="contact-information">

            <div className="contact-information-item">
              <FiMessageCircle />

              <span>
                (11) 98750-2837
              </span>
            </div>

            <div className="contact-information-item">
              <FiInstagram />

              <span>
                @urscleanestofado
              </span>
            </div>

            <div className="contact-information-item">
              <FiClock />

              <span>
                Segunda a sábado
                <br />
                8h às 18h
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}