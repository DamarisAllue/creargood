import { useState } from "react";

const FaqItem = ({ info }) => {
  const [drop, setDrop] = useState(false);

  const dropmenu = () => {
    setDrop(!drop);
  };
  return (
    <div className="faq">
      <div className={drop ? ("faq-container faq-active"):("faq-container")}>
        <p className="dropmenu-title">{info.titulo}</p>
        {drop ? (
          <button
            onClick={dropmenu}
            className="dropmenu-button"
            style={{ transform: "rotate(180deg)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="18"
              viewBox="0 0 58 18"
              fill="none"
            >
              <path
                d="M29.223 17.3116L0.475016 1.11228L57.6601 0.572622L29.223 17.3116Z"
                fill="#FDDDAA"
              />
            </svg>
          </button>
        ) : (
          <button onClick={dropmenu} className="dropmenu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="18"
              viewBox="0 0 58 18"
              fill="none"
            >
              <path
                d="M29.223 17.3116L0.475016 1.11228L57.6601 0.572622L29.223 17.3116Z"
                fill="#FDDDAA"
              />
            </svg>
          </button>
        )}
      </div>
        <div className={drop ? ("Faq-info-container Faq-info-active") : ("Faq-info-container ")}>
          <p className="Faq-info">{info.texto}</p>
        </div>
    </div>
  );
};

export default FaqItem;
