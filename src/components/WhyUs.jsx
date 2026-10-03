import "./WhyUs.scss";
import limpeza from "../assets/limpeza.jpeg";

import {
  FiClock,
  FiShield,
  FiStar,
  FiUserCheck,
  FiHome,
} from "react-icons/fi";

export default function WhyUs() {
  const benefits = [
    {
      icon: <FiClock />,
      title: "Atendimento",
      description: "rápido e prático",
    },
    {
      icon: <FiShield />,
      title: "Produtos adequados",
      description: "para cada tecido",
    },
    {
      icon: <FiStar />,
      title: "Higienização",
      description: "profunda",
    },
    {
      icon: <FiUserCheck />,
      title: "Profissional",
      description: "especializado",
    },
    {
      icon: <FiHome />,
      title: "Atendimento",
      description: "em domicílio",
    },
  ];

  return (
    <section className="why-us" id="porque-contratar">
      <div className="why-us-container">

        <div className="why-us-image">
          <img
          src={limpeza}
          alt="Higienização de sofá"

          />
        </div>

        <div className="why-us-content">

          <span className="why-us-label">
            POR QUE CONTRATAR
          </span>

          <h2>
            Qualidade, cuidado e
            <br />
            profissionalismo em cada detalhe.
          </h2>

          <div className="why-us-benefits">
            {benefits.map((benefit, index) => (
              <div className="why-us-benefit" key={index}>

                <div className="why-us-icon">
                  {benefit.icon}
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}