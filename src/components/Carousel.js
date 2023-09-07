import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = ({ items}) => {
  const [slides, setSlides] = useState(items);

  const {categoria} = items[0]

  /* const slideTo = (index) => {
          swiperRef.slideTo(index - 1, 0);
        }; */

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
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {slides.map((data) => (
          <SwiperSlide>
            <img src={data.img} className="carousel-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default Carousel;
