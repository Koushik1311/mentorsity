"use client";

import React, { MutableRefObject, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { TiSocialLinkedin } from "react-icons/ti";
import Image from "next/image";
import { alumniProfile } from "@/lib/data";

// Import Swiper styles
import "swiper/css";

type swiperType = {
  slideNext: () => void;
  slidePrev: () => void;
};

export default function AlumniProfile() {
  const swiperRef: MutableRefObject<swiperType | undefined> = useRef();

  return (
    <section>
      {/* Heading */}
      <h1 className="text-[2.5rem] text-blue-950 font-semibold mx-11 sm:mx-32 mb-[3.8rem] text-center">
        Where Our <span className="text-yellow-500">Alumni</span> Work
      </h1>
      {/* Navigation Button */}
      <div className="relative">
        {/* Navigation Button Left */}
        <button
          className="absolute top-[5.5rem] left-0"
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slidePrev();
            }
          }}
        >
          <ChevronLeftIcon className="w-8 h-8 text-slate-500 font-extrabold" />
        </button>
        {/* Navigation Button Right */}
        <button
          className="absolute top-[5.5rem] right-0"
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slideNext();
            }
          }}
        >
          <ChevronRightIcon className="w-8 h-8 text-slate-500 font-extrabold" />
        </button>

        {/* Crowsel: Our Alumni Profiles  */}
        <div className="mx-16 sm:mx-16">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={1}
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 5,
              },
            }}
          >
            {alumniProfile.map((profile, index) => (
              <SwiperSlide
                key={index}
                className="border-gray-600 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)]"
              >
                <div className="py-3 px-6 flex flex-col justify-center items-center gap-y-3">
                  <div className="relative">
                    {/* Profile Image */}
                    <Image
                      src={profile.imageUrl}
                      alt={profile.name}
                      quality={100}
                      className="border-2 rounded-full h-16 w-16 object-cover"
                    />
                    <TiSocialLinkedin className="absolute  text-blue-700 border-none bg-black rounded-full w-6 h-6 bottom-0 right-0" />
                  </div>
                  {/* Profile Name */}
                  <p className="font-semibold text-sm">{profile.name}</p>
                  {/* Company Logo */}
                  <Image
                    src={profile.companyImageUrl}
                    alt="Company Logo"
                    className="mb-8"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
