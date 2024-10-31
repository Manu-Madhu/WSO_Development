'use client'
import React, { useEffect } from "react";
import { motion } from 'framer-motion'

const ScrollLogo = () => {
  const marqueeAnimation = {
    x: ['-100%', '0%'],
    transition: {
      duration: 6,
      ease: 'linear',
      repeat: Infinity,
    }
  }

  const imgs = [
    'Assets/user/home/Logo/1.png',
    'Assets/user/home/Logo/2.png',
    'Assets/user/home/Logo/3.png',
    'Assets/user/home/Logo/4.png',
    'Assets/user/home/Logo/5.png',
  ];

  return (
    <div className="w-full overflow-hidden mt-10 ">
      <h1 className="mb-5 lg:mb-10 text-2xl font-[400]">Our Members</h1>
      <div className="containerMarquee">
        <motion.div animate={marqueeAnimation} className="marquee">
          {imgs.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Image ${index + 1}`}
              className="brand "
            />
          ))}
        </motion.div>
        <motion.div animate={marqueeAnimation} className="marquee">
          {imgs.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Image ${index + 1}`}
              className="brand"
            />
          ))}
        </motion.div>
        <motion.div animate={marqueeAnimation} className="marquee">
          {imgs.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Image ${index + 1}`}
              className="brand"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollLogo;
