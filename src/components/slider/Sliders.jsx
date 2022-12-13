import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./sliders.scss";

// import required modules
import { Pagination } from "swiper";
import Slider from "./Slider";

export default function App() {
   return (
      <>
         <Swiper
            centeredSlides={true}
            breakpoints={{
               608: {
                  slidesPerView: 1,
                  spaceBetween: 20,
               },
               1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
               },
            }}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
         >
            <SwiperSlide>
               <Slider />
            </SwiperSlide>
            <SwiperSlide>
               <Slider />
            </SwiperSlide>
            <SwiperSlide>
               <Slider />
            </SwiperSlide>
         </Swiper>
      </>
   );
}
