import { Layout } from "./Layout";
import banner from "../assets/imagenHERORosa.png";
import dropmenu from "../assets/Polygon 1.png";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useState } from "react";

const Faq = () => {
  const titulo = "Preguntas Frecuentes";
  const [drop, setDrop] = useState(false);

  const dropmenu = () => {
    setDrop(!drop);
  };
  return (
    <Layout banner={banner} titulo={titulo}>
      <div className="faq-container">
        <p className="dropmenu-title">
          ¿Cuáles son los materiales utilizados en la impresión 3D?
        </p>
        {drop ? (
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
        ) : (
          <button onClick={dropmenu} className="dropmenu-button" style={{transform: 'rotate(180deg)'}}>
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
    </Layout>
  );
};

export default Faq;
