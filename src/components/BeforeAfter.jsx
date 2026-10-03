import "./BeforeAfter.scss";
import sofa from "../assets/sofa.jpeg";
import colchao from "../assets/colchao.jpeg";
import banco from "../assets/banco.jpeg";


const results = [
  {
    image: sofa,
    title: "Sofá",
  },
  {
    image: colchao,
    title: "Colchão",
  },
  {
    image: banco,
    title: "Banco automotivo",
  },
];

export default function BeforeAfter() {
  return (
    <section className="before-after">
      <div className="before-after-container">

        <div className="before-after-intro">
          <span>RESULTADOS REAIS</span>

          <h2>
            Antes e depois
            <br />
            que comprovam a diferença.
          </h2>

          <p>
            Veja alguns dos nossos serviços realizados e como a
            higienização transforma seus estofados.
          </p>
        </div>

        <div className="before-after-list">
          {results.map((result) => (
            <div className="result-card" key={result.title}>

              <div className="result-image">
                <img src={result.image} alt={result.title} />

                <span className="before-label">Antes</span>
                <span className="after-label">Depois</span>
              </div>

              <h3>{result.title}</h3>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}