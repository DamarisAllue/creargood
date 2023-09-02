import "./App.css";
import { Layout } from "./components/Layout";
import banner from "./assets/imagenHERO.png";
import imagen from "./assets/home1.png";

function App() {
  return (
    <Layout banner={banner}>
      <div className="home">
        <div className="home-title-container">
          <div className="home-title">
            <p className="souvenir">Souvenir</p>
            <p className="print">3D Print</p>
          </div>
          <p className="fiestas">para fiestas y eventos </p>
          <p className="diseños">
            Diseños creativos a medida de tus necesidades
          </p>
        </div>
        <div className="row my-5">
          <div className="col-sm-6 ">
            <img src={imagen} alt="Producto 1" style={{objectFit:"cover", width:"100%"}}/>
          </div>
          <div className="col-sm-6 home-item-info">
            <p className="home-item-title my-2">Servicio de Diseño y modelado 3D</p>
            <p className="home-item-texto my-3">Diseñamos de acuerdo a tus necesidades y el tema que estés buscando, empleando la digitalización y programas 3D para crear soluciones personalizadas. Además, te mantendremos involucrado en todo el proceso.</p>
            <button className="home-item-btn my-3">CONSULTAR</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
