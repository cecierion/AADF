import React from "react";
import Card from "./Card";
import { SlideData } from "../../utils/dummyData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import "./sliderStyle.scss";

const Slider = () => {
  const Slide = SlideData.map((slide) => (
    <SwiperSlide className="z-10">
      <div className="slide-content ">
        <Card img={slide.image} />
      </div>
    </SwiperSlide>
  ));
  return (
    <Swiper
      className="container mx-auto "
      modules={[Scrollbar]}
      spaceBetween={5}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3,
        },
        1536: {
          width: 1536,
          slidesPerView: 4,
        },
      }}
      scrollbar={{
        draggable: true,
        dragSize: 360,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Slide}
    </Swiper>
  );
};

export default Slider;
