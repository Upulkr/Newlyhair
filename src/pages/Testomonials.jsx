import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Customers from "@/data/HappyCustomersData";
import { Typography } from "@material-tailwind/react";

export default function Testomonials() {
  const comments = Customers.map((c) => {
    const comment = c.comment;

    return comment;
  });
  console.log(comments);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper m-2"
      >
        {" "}
        <div className="flex items-center gap-2">
          {comments.map((comment) => (
            <SwiperSlide>
              {" "}
              <Typography variant="h4">``{comment}``</Typography>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
