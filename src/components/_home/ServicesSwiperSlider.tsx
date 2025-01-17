'use client';
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
// images
import slideOneDesktop from '@/src/assets/images/service-one.jpg';
import slideTwoDesktop from '@/src/assets/images/service-two.jpg';
import slideThreeDesktop from '@/src/assets/images/service-three.jpg';

import slideOneMobile from '@/src/assets/images/service-mob-one.jpg';
import slideTwoMobile from '@/src/assets/images/service-mob-two.jpg';
import slideThreeMobile from '@/src/assets/images/service-mob-three.jpg';

import Image from "next/image";

const desktopImages = [
  { slideImg: slideOneDesktop },
  { slideImg: slideTwoDesktop },
  { slideImg: slideThreeDesktop },
];

const mobileImages = [
  { slideImg: slideOneMobile },
  { slideImg: slideTwoMobile },
  { slideImg: slideThreeMobile },
];

export default function CircularSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Check if the device is mobile
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // Use the correct image set based on the device type
  const images = isMobile ? mobileImages : desktopImages;

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col justify-center items-center relative w-full m-auto overflow-hidden 2xl:h-[590px] xl:h-[445px] lg:h-[397px] md:h-[330px] sm:h-[870px] max-[639px]:h-[560px] max-[450px]:h-[410px]">
      <div className={`relative flex w-full h-full`}>
        {images.map((image, index) => {
          const position = (index - activeIndex + images.length) % images.length;

          let style: React.CSSProperties = {
            left: "50%",
            transform: "translateX(-50%)",
          };

          if (position === 0) {
            // Active slide in the center
            style = {
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              filter: "blur(0)",
            };
          } else if (position === 1) {
            // Slide to the right of the active
            style = {
              left: "100%",
              transform: "translateX(-91%) scale(0.8)",
              zIndex: 5,
              filter: "blur(7px)",
            };
          } else if (position === images.length - 1) {
            // Slide to the left of the active
            style = {
              left: "0%",
              transform: "translateX(-8%) scale(0.8)",
              zIndex: 5,
              filter: "blur(7px)",
            };
          } else {
            // Hidden slides (optional)
            style = {
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0,
              zIndex: 0,
              filter: "blur(0)",
            };
          }

          return (
            <div key={index}>
              <Image
                src={image.slideImg}
                alt={`Slide ${index + 1}`}
                className='absolute transition-all duration-500 2xl:rounded-[24px] xl:rounded-[18px] md:rounded-[16px] rounded-[18.45px] 2xl:max-w-[1085px] xl:max-w-[815px] lg:max-w-[725px] md:max-w-[615px] sm:max-w-[505px] max-[639px]:max-w-[320px] max-[450px]:max-w-[230px]'
                style={style}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center 2xl:gap-[8px] xl:gap-[6px] md:gap-[5.33px] gap-[8px]">
        {images.map((_, index) => (
          <button
            key={index}
            className={`2xl:w-[48px] 2xl:h-[6px] xl:w-[36px] xl:h-[4.5px] md:w-[32px] md:h-[4px] w-[48px] h-[6px] rounded-full ${
              index === activeIndex ? "bg-[#3563E9]" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
