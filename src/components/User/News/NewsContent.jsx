'use client'
import React, { useRef, useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import cover from "../../../../public/Assets/user/news/cover.png"
import Link from "next/link";

const NewsContent = () => {
  const [data, setData] = useState([1, 1, 1, 1]);
  const [slideIndex, setSlideIndex] = useState(0)

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef?.slickNext();
  };
  const previous = () => {
    sliderRef?.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    beforeChange: (oldI, newI) => setSlideIndex(newI),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ],
  };

  return (
    <div className='w-full relative '>
      <div className=" mx-auto slider-container relative ">
        <Slider
          ref={slider => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {
            data?.map((item, index) => (
              <div key={index}
                onClick={() => console.log('lower')}
                className={`w-full h-[400px] sm:h-[500px] relative
                  ${index === slideIndex ? 'slide slide-active' : 'slide'}
                  `}
              >
                <Image src={cover} alt="image"
                  className="w-full h-full object-cover rounded-xl" />

                <Link
                  href={`/pages/user/news/${index}`}
                  onClick={(e) => { e.stopPropagation(); console.log('upper') }}
                  className="absolute top-0 w-full h-[400px] sm:h-[500px] flex flex-col justify-between items-center
                  p-8 ">
                  <div className="w-full flex flex-col gap-4  ">
                    <p className=" text-white font-semibold line-clamp-2 ">
                      The Spice Industry has seen progress at a rapid pace in the past
                    </p>
                    <span className="w-fit py-1 px-2 rounded-full bg-primaryColor text-sm text-white ">
                      10/12/2024
                    </span>
                  </div>

                  <p
                    className="w-full h-fit text-white text-sm font-light line-clamp-6 ">
                    The Spice Industry has seen progress at a rapid pace in the past few decades.Today, it is
                    a $3.2 billion, 1 million tons industry. The increasing awareness among world-wide
                    consumers on the wholesome goodness of spices, development of new products, processes
                    and applications have helped the industry scale new heights.
                  </p>

                </Link>

              </div>

            ))

          }

        </Slider>

      </div>

      <span className=" z-50 cursor-pointer absolute top-[200px] sm:top-[250px] left-0  " onClick={previous} >
        <FiArrowLeftCircle size={26} color="#266941" />
      </span>
      <span className=" z-50 cursor-pointer absolute top-[200px] sm:top-[250px] right-0" onClick={next} >
        <FiArrowRightCircle size={26} color="#266941" />
      </span>
    </div>

  )
}

export default NewsContent