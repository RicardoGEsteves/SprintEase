"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { images } from "../constants/constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = (): React.ReactNode => {
  return (
    <div className="py-10 h-full w-full bg-white">
      <Swiper
        navigation
        pagination={{ dynamicBullets: true }}
        modules={[Navigation, Pagination]}
        className="h-96 w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              className=" relative object-contain"
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
