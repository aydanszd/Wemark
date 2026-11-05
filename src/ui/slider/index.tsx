"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type AboutSliderProps = {
  images: { image: string }[];
};

// Figma: aktiv şəkil 865×486 mərkəzdə, 48px aralıq, yanlarda qonşu şəkillər görünür
export default function AboutSlider({ images }: AboutSliderProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      centeredSlides
      loop
      loopAdditionalSlides={3}
      initialSlide={1}
      grabCursor
      spaceBetween={48}
      speed={500}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: { spaceBetween: 16 },
        768: { spaceBetween: 48 },
      }}
      className="mt-10 md:mt-[80px]"
      aria-label="About xSchool gallery"
    >
      {images.map((item, i) => (
        <SwiperSlide
          key={item.image}
          className="!w-[85vw] md:!w-[865px]"
        >
          <div className="relative h-[48vw] w-full overflow-hidden md:h-[486px]">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 768px) 865px, 85vw"
              className="object-cover"
              priority={i < 3}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}