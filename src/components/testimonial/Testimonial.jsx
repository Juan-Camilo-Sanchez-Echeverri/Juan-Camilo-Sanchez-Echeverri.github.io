import React from "react";
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";
import "./testimonial.css";

const data = [
  {
    avatar: AVT1,
    name: "Maria Estrada",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores",
  },
  {
    avatar: AVT2,
    name: "Ledys Durango",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores",
  },
  {
    avatar: AVT3,
    name: "Claudia Morales",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores",
  },
  {
    avatar: AVT4,
    name: "Leidy Gonzalez",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Reseñas de personas</h5>
      <h2>Testimonios</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
