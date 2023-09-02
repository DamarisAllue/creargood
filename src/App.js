import "./App.css";
import { Layout } from "./components/Layout";
import banner from "./assets/imagenHERO.png";
import { home_mock } from "./mocks/home_mock";
import HomeItem from "./components/HomeItem";

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
        {home_mock.map((data, index) => <HomeItem item={data} index={index}/>)}
      </div>
    </Layout>
  );
}

export default App;
