
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = ({ items, onImageClick }) => {
  const { categoria } = items[0];

  return (
    <div className="carousel-container">
      <p className="carousel-title">{categoria}</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
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
          },
        }}
        className="mySwiper"
      >
        {items.map((data, index) => (
          <SwiperSlide key={index}>
            <img
              src={data.img}
              className="carousel-img"
              alt={`Product ${index}`}
              onClick={() => onImageClick(data)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
