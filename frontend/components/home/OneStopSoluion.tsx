"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants for motion components
const animationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    delay: 1,
  },
};

const shapeAnimationVarients = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    delay: 0.7,
  },
};

// OneStopSolution component
export default function OneStopSoluion() {
  return (
    // Main section with a blue rounded container
    <section className="relative my-[17rem] mx-[3rem]">
      <div className="absolute top-[-2.025rem] left-[-1.777rem] border-[0.8rem] rounded-r-full border-yellow-500 h-[41rem] w-[41rem] clip-right z-10"></div>

      {/* help */}
      <div className="absolute left-[27.871rem] border-[0.13rem] border-yellow-500 bg-white w-[2.8rem] h-[2.8rem] rounded-full flex justify-center items-center z-20">
        <div className="w-[1.45rem] h-[1.45rem] bg-blue-900 rounded-full z-30"></div>
      </div>

      {/* community */}
      <div className="absolute left-[34.894rem] top-[7.188rem] border-[0.13rem] border-yellow-500 bg-white w-[2.8rem] h-[2.8rem] rounded-full flex justify-center items-center z-20">
        <div className="w-[1.45rem] h-[1.45rem] bg-blue-900 rounded-full z-30"></div>
      </div>

      {/* placement */}
      <div className="absolute left-[37.304rem] top-[17.137rem] border-[0.13rem] border-yellow-500 bg-white w-[2.8rem] h-[2.8rem] rounded-full flex justify-center items-center z-20">
        <div className="w-[1.45rem] h-[1.45rem] bg-blue-900 rounded-full z-30"></div>
      </div>

      {/* university */}
      <div className="absolute left-[34.894rem] top-[27.137rem] border-[0.13rem] border-yellow-500 bg-white w-[2.8rem] h-[2.8rem] rounded-full flex justify-center items-center z-20">
        <div className="w-[1.45rem] h-[1.45rem] bg-blue-900 rounded-full z-30"></div>
      </div>

      {/* mentor community */}
      <div className="absolute left-[27.871rem] top-[34.188rem] border-[0.13rem] border-yellow-500 bg-white w-[2.8rem] h-[2.8rem] rounded-full flex justify-center items-center z-20">
        <div className="w-[1.45rem] h-[1.45rem] bg-blue-900 rounded-full z-30"></div>
      </div>

      <div className="bg-blue-900 rounded-full h-[37rem] w-[37rem] flex flex-col justify-center items-center text-[2.56rem] font-bold">
        <p className="text-yellow-500">One-stop solution</p>
        <p className="text-white">for your</p>
        <p className="text-white">Education Need</p>
      </div>

      {/* help */}
      <motion.div
        className="absolute -top-[0.9rem] left-[30rem] border-[0.125rem] w-[5.8rem] border-yellow-500 -rotate-[30deg]"
        variants={shapeAnimationVarients}
        initial="initial"
        whileInView="animate"
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      ></motion.div>

      {/* community */}
      <motion.div
        className="absolute top-[8rem] left-[37.563rem] border-[0.125rem] w-[5.438rem] border-yellow-500 -rotate-6"
        variants={shapeAnimationVarients}
        initial="initial"
        whileInView="animate"
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      ></motion.div>

      {/* placement */}
      <motion.div
        className="absolute top-[18.438rem] left-[40.063rem] border-[0.125rem] w-[5rem] border-yellow-500"
        variants={shapeAnimationVarients}
        initial="initial"
        whileInView="animate"
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      ></motion.div>

      {/* university */}
      <motion.div
        className="absolute top-[29rem] left-[37.563rem] border-[0.125rem] w-[5.5rem] border-yellow-500 rotate-6"
        variants={shapeAnimationVarients}
        initial="initial"
        whileInView="animate"
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      ></motion.div>

      {/* mentor community */}
      <motion.div
        className="absolute top-[38.2rem] left-[29rem] border-[0.125rem] w-[6.99rem] border-yellow-500 rotate-[38deg]"
        variants={shapeAnimationVarients}
        initial="initial"
        whileInView="animate"
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      ></motion.div>

      {/* Absolute positioned elements for help, community, placement, university, and mentor community */}
      <div className="absolute h-[52rem] -top-[7rem] left-[33rem] flex flex-col justify-between">
        {/* Help */}
        <motion.div
          className="flex relative ml-[2.2rem]"
          variants={animationVariants}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <Image
            src="/icons/handshake.png"
            width={130}
            height={130}
            alt="Help"
            className="border-2 border-blue-900 rounded-full"
          />
          <p className="absolute border-2 border-blue-900 border-l-0 rounded-r-full left-[4rem] h-[8.125rem] w-[21.7rem] pl-[4.9rem] pr-[2.5rem] flex items-center font-[500] text-[1.1rem]">
            Get help in choosing the right university
          </p>
        </motion.div>
        {/* Community */}
        <motion.div
          className="relative flex ml-[10rem]"
          variants={animationVariants}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <Image
            src="/icons/diversity.png"
            width={130}
            height={130}
            alt="Community"
            className="border-2 border-blue-900 rounded-full"
          />
          <p className="absolute border-2 border-blue-900 border-l-0 rounded-r-full left-[4rem] h-[8.125rem] w-[21.7rem] pl-[4.9rem] pr-[2.5rem] flex items-center font-[500] text-[1.1rem]">
            Engage yourself with the like-minded community members
          </p>
        </motion.div>
        {/* Placement */}
        <motion.div
          className="relative flex ml-[12rem]"
          variants={animationVariants}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <Image
            src="/icons/promotion.png"
            width={130}
            height={130}
            alt="Placement"
            className="border-2 border-blue-900 rounded-full"
          />
          <p className="absolute border-2 border-blue-900 border-l-0 rounded-r-full left-[4rem] h-[8.125rem] w-[21.7rem] pl-[4.9rem] pr-[2.5rem] flex items-center font-[500] text-[1.1rem]">
            100% Placement assistance on all the programs and unlock more than
            800+ companies' network
          </p>
        </motion.div>
        {/* University */}
        <motion.div
          className="relative flex ml-[10rem]"
          variants={animationVariants}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <Image
            src="/icons/graduation.png"
            width={130}
            height={130}
            alt="University"
            className="border-2 border-blue-900 rounded-full"
          />
          <p className="absolute border-2 border-blue-900 border-l-0 rounded-r-full left-[4rem] h-[8.125rem] w-[21.7rem] pl-[4.9rem] pr-[2.5rem] flex items-center font-[500] text-[1.1rem]">
            Get assistance with your university admission process
          </p>
        </motion.div>
        {/* Mentor Community */}
        <motion.div
          className="relative flex ml-[2.2rem]"
          variants={animationVariants}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <Image
            src="/icons/mentorship.png"
            width={130}
            height={130}
            alt="Mentor Community"
            className="border-2 border-blue-900 rounded-full"
          />
          <p className="absolute border-2 border-blue-900 border-l-0 rounded-r-full left-[4rem] h-[8.125rem] w-[21.7rem] pl-[4.9rem] pr-[2.5rem] flex items-center font-[500] text-[1.1rem]">
            Explore our Fortune 500 mentor community
          </p>
        </motion.div>
      </div>
    </section>
  );
}
