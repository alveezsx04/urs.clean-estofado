import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay">

        <div className="hero-container">

          <div className="hero-content">

            <span className="hero-tag">
              HIGIENIZAÇÃO PROFISSIONAL
            </span>

            <h1>
              Seu estofado
              <span> limpo, renovado</span>
              <br />
              e livre de sujeira.
            </h1>

            <p>
              Higienização profunda de sofás, colchões e outros estofados,
              deixando seu ambiente mais limpo, confortável e renovado.
            </p>

            <a
              href="https://wa.me/5511987502837"
              target="_blank"
              rel="noreferrer"
              className="hero-button"
            >
              <span></span>
              Solicitar orçamento
            </a>

          </div>

          <div className="hero-benefits">

            <div className="benefit">
              <span className="benefit-icon">✓</span>

              <div>
                <strong>Higienização profunda</strong>
                <small>Limpeza completa do estofado</small>
              </div>
            </div>

            <div className="benefit">
              <span className="benefit-icon">✓</span>

              <div>
                <strong>Produtos profissionais</strong>
                <small>Mais cuidado e segurança</small>
              </div>
            </div>

            <div className="benefit">
              <span className="benefit-icon">✓</span>

              <div>
                <strong>Atendimento de qualidade</strong>
                <small>Seu estofado em boas mãos</small>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}