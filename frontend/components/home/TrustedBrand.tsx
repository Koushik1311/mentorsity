import { alumniWorkPlace } from "@/lib/data";
import Image from "next/image";
import React from "react";

export default function TrustedBrand() {
  return (
    <section className="mt-10 mx-[10rem]">
      {/* Heading */}
      <h1 className="text-[2.5rem] font-semibold mb-[0.6rem] text-center">
        <span className="text-yellow-500">Trusted</span>
        <span className="text-blue-950">Beands</span>
      </h1>
      <p className="text-center text-[0.978rem] text-blue-950/70 font-semibold mb-[2.2rem]">
        Trusted, Backed, And Powered By
      </p>
      <ul className="flex flex-wrap gap-[2rem] justify-center text-center">
        {/* Alumni Work Place */}
        {alumniWorkPlace.map((alumni, index) => (
          <li key={index}>
            {/* Image */}
            <Image src={alumni.imageUrl} alt="Where our Alumni Work" />
          </li>
        ))}
      </ul>
    </section>
  );
}
