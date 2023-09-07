import "./App.css";
import { Layout } from "./components/Layout";
import banner from "./assets/imagenHERO.png";
import { home_mock } from "./mocks/home_mock";
import HomeItem from "./components/HomeItem";
import { products_mock } from "./mocks/products_mock";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

function App() {
  const [slides, setSlides] = useState(products_mock);
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
        {home_mock.map((data, index) => <HomeItem item={data} index={index} />)}
        <div className="home-products-container">
          <p className="home-products-title">PRODUCTOS</p>
          <div className="home-products">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true} //botones 
              grabCursor={true}
              loop={true}
              breakpoints={{
                900: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1250: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {products_mock.map(data => (
                <SwiperSlide>
                  <img src={data[0].img} />
                </SwiperSlide>))
              }
            </Swiper>
          </div>
          <button className="home-more-btn">VER MÁS</button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
