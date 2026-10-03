import "./HowItWorks.scss";

import {
  FiMessageCircle,
  FiCamera,
  FiFileText,
  FiCalendar,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: <FiMessageCircle />,
      title: "Você chama",
      description: "pelo WhatsApp",
    },
    {
      number: "2",
      icon: <FiCamera />,
      title: "Envia fotos",
      description: "do estofado",
    },
    {
      number: "3",
      icon: <FiFileText />,
      title: "Recebe o",
      description: "orçamento",
    },
    {
      number: "4",
      icon: <FiCalendar />,
      title: "Marca o melhor",
      description: "horário",
    },
    {
      number: "5",
      icon: <FiStar />,
      title: "Seu estofado é",
      description: "higienizado em casa",
    },
  ];

  return (
    <section className="how-it-works" id="como-funciona">
      <div className="how-it-works-container">

        <div className="how-it-works-intro">
          <span className="section-label">COMO FUNCIONA</span>

          <h2>
            É simples, rápido
            <br />
            e sem complicação.
          </h2>

          <p>
            Do primeiro contato ao resultado final,
            tudo é pensado para facilitar a sua vida.
          </p>
        </div>

        <div className="steps">

          {steps.map((step, index) => (
            <div className="step-wrapper" key={step.number}>

              <div className="step">

                <div className="step-icon">
                  {step.icon}
                  <span className="step-number">
                    {step.number}
                  </span>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

              {index < steps.length - 1 && (
                <FiArrowRight className="step-arrow" />
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}