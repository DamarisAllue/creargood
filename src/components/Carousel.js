import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = ({ items}) => {
  const {categoria} = items[0]

  return (
    <div className="carousel-container">
      <p className="carousel-title">{categoria}</p>
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1900: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {items.map((data) => (
          <SwiperSlide>
            <img src={data.img} className="carousel-img" alt="product-img"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default Carousel;
