import { Layout } from "./Layout";
import banner from "../assets/imagenHERORosa.png";
import { faqs_mock } from "../mocks/faqs_mock";
import FaqItem from "./FaqItem";

const Faq = () => {
  const titulo = "Preguntas Frecuentes";
  
  return (
    <Layout banner={banner} titulo={titulo}>
      {faqs_mock.map(data => (<FaqItem key={data.id} info={data}/>))}
    </Layout>
  );
};

export default Faq;

