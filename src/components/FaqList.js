import { Layout } from "./Layout";
import banner from "../assets/imagenHERORosa.png";
import { useState } from "react";
import { faqs_mock } from "../mocks/faqs_mock";
import FaqItem from "./FaqItem";

const Faq = () => {
  const titulo = "Preguntas Frecuentes";
  const [drop, setDrop] = useState(false);

  const dropmenu = () => {
    const dropmenu = document.querySelector(".Faq-info-container");
    const dropmenuborder = document.querySelector(".faq-container");
    if (!drop) {
      dropmenu.classList.add("Faq-info-active");
      dropmenuborder.classList.add("faq-active");
    } else {
      dropmenu.classList.remove("Faq-info-active");
      dropmenuborder.classList.remove("faq-active");
    }
    setDrop(!drop);
  };
  return (
    <Layout banner={banner} titulo={titulo}>
      {faqs_mock.map(data => (<FaqItem info={data} drop={drop} dropmenu={dropmenu}/>))}
    </Layout>
  );
};

export default Faq;
