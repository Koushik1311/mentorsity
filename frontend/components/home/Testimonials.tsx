"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaRegStar, FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper and Swiper modules
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { testimonialsData } from "@/lib/testimonials";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="mt-[7rem]">
      {/* Heading */}
      <h1 className="text-[2.5rem] font-semibold mb-[2.8rem] text-center text-blue-950">
        Testimonials
      </h1>

      <div className="h-[20rem]">
        <Swiper
          modules={[Pagination]}
          slidesPerView={4}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          style={
            {
              "--swiper-pagination-color": "#FFBA08",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "6px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
              "--swiper-pagination-bullet-height": "3px",
              "--swiper-pagination-bullet-width": "18px",
              "--swiper-pagination-bullet-border-radius": "0",
            } as React.CSSProperties
          }
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="border rounded-md mb-10 px-[2.2rem] py-[2.4rem]"
            >
              <div>
                <div className="flex gap-[0.3rem] mb-[1.3rem]">
                  <FaStar className="text-orange-600 text-[1.4rem]" />
                  <FaStar className="text-orange-600 text-[1.4rem]" />
                  <FaStar className="text-orange-600 text-[1.4rem]" />
                  <FaStar className="text-orange-600 text-[1.4rem]" />
                  <FaRegStar className="text-orange-600 text-[1.4rem]" />
                </div>
                <p className="text-[1.1rem] font-semibold text-gray-600">
                  {testimonial.comment}
                </p>
                <div className="flex gap-[0.8rem] justify-center mt-[1.4rem]">
                  <Image
                    src={testimonial.image}
                    width={500}
                    height={500}
                    alt="Picture"
                    className="w-[3rem] h-[3rem] rounded-full"
                  />
                  <div className="flex flex-col justify-between py-[0.3rem]">
                    <p className="text-[0.9rem] font-semibold text-yellow-600">
                      {testimonial.name}
                    </p>
                    <p className="text-[0.9rem] font-semibold">
                      {testimonial.profession}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <div className="swiper-pagination"></div> */}
        </Swiper>
      </div>
    </section>
  );
}
