"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "https://media.istockphoto.com/id/1339686801/photo/cloud-computing.jpg?s=2048x2048&w=is&k=20&c=NKi1-84KT0XpLKfN1-a6XX7Lp_mS54yz6n8KIrkCrko=",
  "https://media.istockphoto.com/id/1339687717/photo/cloud-computing.jpg?s=2048x2048&w=is&k=20&c=atvV-VUEvwhh3ZXQvY_lvzSpVY6mM7o_-Ev3k-cSqTo=",
  "https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=2048x2048&w=is&k=20&c=2uD4INqGY-TZBheerIQ5Q9674-pvWOtWdQy4vEZm29Y=",
  "https://media.istockphoto.com/id/616011554/photo/ponte-de-sai-van-bridge-in-macau-at-night.jpg?s=2048x2048&w=is&k=20&c=kevofG-bGwXagOysA-YQiywVRNvZG5ZC2A-23MIhKcc=",
  "https://media.istockphoto.com/id/482491738/photo/guangzhous-landmark-at-night.jpg?s=2048x2048&w=is&k=20&c=mXbbGe4VMn4yFdLhpwwvDjK1o5dcRmWP1L-BKr3vvsI=",
];

const variants = {
  enter: (direction: any) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: any) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const ImageSlider = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const loadNext = () => {
    setActiveIndex([
      activeIndex + 1 === IMAGES.length ? 0 : activeIndex + 1,
      1,
    ]);
  };

  const loadPrevious = () => {
    setActiveIndex([
      activeIndex - 1 < 0 ? IMAGES.length - 1 : activeIndex - 1,
      -1,
    ]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      loadNext();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [activeIndex]);

  return (
    <div className="w-[900px] m-auto">
      <h1 className="text-center text-xl py-4 font-bold">
        Image Slider/Carousel
      </h1>
      <section>
        <div className="flex justify-center items-center gap-4">
          <div
            className="cursor-pointer hover:scale-125 transition-all ease-linear"
            onClick={loadPrevious}
          >
            <LeftArrow />
          </div>
          <div className="h-[400px] w-[900px] flex justify-center items-center bg-slate-400 relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="absolute w-full h-full"
              >
                <Image
                  src={IMAGES[activeIndex]}
                  alt={`Wallpaper - ${activeIndex}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div
            className="cursor-pointer hover:scale-125 transition-all ease-linear"
            onClick={loadNext}
          >
            <RightArrow />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageSlider;

const LeftArrow = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="-5 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.546.57.698 10.994l-.09.08c-.363.35-.576.813-.608 1.364l.002.185c.03.49.243.954.664 1.354l-.005-.008 10.885 10.462a2.06 2.06 0 0 0 2.845 0 1.964 1.964 0 0 0 0-2.844l-9.403-9.03 9.403-9.144a1.964 1.964 0 0 0 0-2.844 2.06 2.06 0 0 0-2.845 0"
        fill="#1C1C1F"
      />
    </svg>
  );
};

const RightArrow = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="-5 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m3.454.57 10.848 10.424.09.08c.363.35.576.813.608 1.364l-.002.185c-.03.49-.243.954-.664 1.354l.005-.008L3.454 24.431a2.06 2.06 0 0 1-2.845 0 1.964 1.964 0 0 1 0-2.844l9.403-9.03L.609 3.413a1.964 1.964 0 0 1 0-2.844 2.06 2.06 0 0 1 2.845 0"
        fill="#1C1C1F"
      />
    </svg>
  );
};
