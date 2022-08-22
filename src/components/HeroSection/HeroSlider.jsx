import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import "../../index.css";
import "swiper/css";
import "./swiperStyle.scss";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HeroData } from "../../utils/dummyData";
import { swiperBullet } from "../../utils/enum";
import Mission from "./Mission";

const HeroSlider = () => {
  const Slide = HeroData.map((slide) => (
    <SwiperSlide className="relative h-full flex  flex-col   items-center md:items-start pb-20">
      <div className="container mx-auto md:my-72 flex flex-col justify-center  md:justify-start">
        <img className="flex md:hidden" src={slide.minimg} alt={slide.title} />
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-7xl font-bold text-[#9C1858] text-center pb-4">
            {slide.title}
          </h2>
          <p className="text-lg md:text-2xl text-center md:text-left font-light text-[#9C1858] mb-36">
            {slide.description}
          </p>
        </div>
        <div className="hidden md:flex absolute top-0 right-0 w-1/3 xl:w-1/2">
          <img
            className="object-contain object-top"
            src={slide.bigimage}
            alt={slide.title}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center ">
          <p className="text-[#D72655] text-sm font-light inline-block pr-16 ">
            <span className="font-bold">{slide.toparticle}</span>{" "}
            {slide.article}
          </p>

          <div className="flex items-center ">
            <a href="/" class="pr-2 py-2  text-[#D72655] text-sm font-bold">
              Read more
            </a>
            <BsArrowRight className="text-sm font-bold" />
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        className="w-full swiper-overflow-container"
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function(index, className) {
              return '<span style=background:'+ swiperBullet[index] +' class="'+ swiperBullet[index] + ' ' + className + '"></span>';
          }
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Slide}
        <div className="container mx-auto swiper-container relative">
          <div className="swiper-buttons">
            <div class="swiper-button-next" />
            <div class="swiper-button-prev" />
          </div>
          <div className="swiper-pagination"/>
        </div>
      </Swiper>
      <Mission />
    </>
  );
};

export default HeroSlider;
