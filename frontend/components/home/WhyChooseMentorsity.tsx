import Image from "next/image";
import React from "react";

export default function WhyChooseMentorsity() {
  return (
    <section className="mt-[6.5rem]">
      <h1 className="text-[2.5rem] text-blue-950 font-semibold mb-[0.2rem] ml-[5.3rem]">
        Why Choose
        <span className="text-yellow-500"> Mentorsity</span>?
      </h1>
      <p className="text-[0.978rem] ml-[5.3rem] text-blue-950/70 font-semibold mb-[2.2rem]">
        Trusted, Backed, And Powered By
      </p>
      <div className="mx-[5.3rem] grid grid-cols-7 grid-rows-2 gap-[1.86rem]">
        {/* Unmatched Mentorship */}
        <div className="relative col-span-4 h-[17rem] overflow-hidden rounded-2xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <div className="-mt-[4.5rem]">
            <Image
              src="/why-choose-mentorsity/mentorship.jpg"
              width={700}
              height={700}
              alt="Unmatched Mentorship"
            />
          </div>
          <div className="absolute bottom-[1.4rem] bg-gradient-to-r from-cyan-50 from-10% via-cyan-50 via-40% py-[1.6rem]">
            <h2 className="ml-[2.9rem] text-[1.09rem] font-bold mb-[0.2rem]">
              Unmatched Mentorship
            </h2>
            <p className="ml-[2.9rem] text-[0.81rem] font-[500] w-[20rem]">
              An invaluable resource for individuals looking to ace their
              interviews and land their dream jobs.{" "}
            </p>
          </div>
        </div>

        {/* Direct interview scheduling */}
        <div className="relative col-span-3 row-span-2 h-[36rem] overflow-hidden rounded-2xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <Image
            src="/why-choose-mentorsity/interview.jpg"
            width={900}
            height={900}
            alt="Direct interview scheduling"
            className="h-[36rem] w-[36rem] object-cover"
          />
          <div className="absolute bottom-[1.4rem] bg-gradient-to-r from-sky-300/90 from-10% via-sky-300/90 via-90% py-[1.6rem]">
            <h2 className="ml-[2.9rem] text-[1.09rem] font-bold mb-[0.2rem]">
              Direct interview scheduling
            </h2>
            <p className="ml-[2.9rem] text-[0.81rem] font-[500] w-[20rem]">
              By using direct interview scheduling, employers can save time and
              effort by automating the process of finding available time slots,
              sending out invitations, and manag...
            </p>
          </div>
        </div>

        {/* Wide Range of Courses */}
        <div className="relative col-span-2 overflow-hiden rounded-2xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <div className="">
            <Image
              src="/why-choose-mentorsity/courses.jpg"
              width={900}
              height={900}
              alt="Wide Range of Courses"
              className="h-[16rem] w-[20rem]"
            />
          </div>
          <div className="absolute bottom-[0.8rem] bg-gradient-to-r from-white from-10% via-white via-40% py-[0.7rem]">
            <h2 className="ml-[1.5rem] text-[1.09rem] font-bold mb-[0.2rem]">
              Wide Range of Courses
            </h2>
            <p className="ml-[1.5rem] text-[0.81rem] font-[500] w-[16rem]">
              Choose from a variety of courses in different domains to enhance
              your knowledge and skills
            </p>
          </div>
        </div>

        {/* University Partnerships */}
        <div className="relative col-span-2 overflow-hiden rounded-2xl ">
          <div className="">
            <Image
              src="/why-choose-mentorsity/partnership.jpg"
              width={900}
              height={900}
              alt="University Partnerships"
              className="h-[16rem] w-[20rem]"
            />
          </div>
          <div className="absolute bottom-[0.8rem] bg-gradient-to-r from-indigo-200 from-10% via-indigo-200 via-40% py-[0.7rem]">
            <h2 className="ml-[1.5rem] text-[1.09rem] font-bold mb-[0.2rem]">
              University Partnerships
            </h2>
            <p className="ml-[1.5rem] text-[0.81rem] font-[500] w-[16rem]">
              Our partnerships with top universities ensure that you receive
              quality education and recognized certifications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
