'use client';

import Image from 'next/image';
import React from 'react';
import SlickSlider from 'react-slick';

// images
import slideOne from '@/src/assets/images/slide-one.jpg'
import slideTwo from '@/src/assets/images/slide-two.jpg'
import slideThree from '@/src/assets/images/Slide-three.jpg'
import slideFour from '@/src/assets/images/Slide-four.jpg'
import moImgeOne from '@/src/assets/images/mobile-slide-1.jpg'
import Link from 'next/link';

const Slider: React.FC = () => {

    const sliderData = [
        {sliderImg:slideOne,mobSliderImg:moImgeOne,sliderHeading:'Digitiz﻿e your shop floor operations',slidePara:'Monitor efficiency, health and productivity of your manufacturing operations and make data-driven decisions'},
        {sliderImg:slideTwo,mobSliderImg:moImgeOne,sliderHeading:'Digitiz﻿e your shop floor operations',slidePara:'Monitor efficiency, health and productivity of your manufacturing operations and make data-driven decisions'},
        {sliderImg:slideThree,mobSliderImg:moImgeOne,sliderHeading:'Digitiz﻿e your shop floor operations',slidePara:'Monitor efficiency, health and productivity of your manufacturing operations and make data-driven decisions'},
        {sliderImg:slideFour,mobSliderImg:moImgeOne,sliderHeading:'Digitiz﻿e your shop floor operations',slidePara:'Monitor efficiency, health and productivity of your manufacturing operations and make data-driven decisions'},
    ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section>
        <div className='relative after:absolute after:left-0 after:right-0 after:top-0 after:h-[210px] after:bg-gradient-to-b after:from-black to-[rgba(0,0,0,0)]'>
        <SlickSlider className='w-full [&>.slick-dots>li>button]:p-0 [&>.slick-dots>li>button]:rounded-[16px] xl:rounded-[12px] rounded-[14px] [&>.slick-dots>li>button]:2xl:h-[6px] [&>.slick-dots>li>button]:xl:h-[4.5px] [&>.slick-dots>li>button]:md:h-[4px] [&>.slick-dots>li>button]:h-[6px] [&>.slick-dots>li>button]:before:hidden [&>.slick-dots>li]:m-0 [&>.slick-dots>li]:w-auto [&>.slick-dots>li]:h-auto [&>.slick-dots>li>button]:2xl:w-[48px] [&>.slick-dots>li>button]:xl:w-[36px] [&>.slick-dots>li>button]:md:w-[32px] [&>.slick-dots>li>button]:w-[48px] [&>.slick-dots>li>button]:bg-[rgba(255,255,255,0.4)] [&>.slick-dots]:absolute [&>.slick-dots]:left-0 [&>.slick-dots]:2xl:bottom-[39px] [&>.slick-dots]:xl:bottom-[30px] [&>.slick-dots]:md:bottom-[25.97px] [&>.slick-dots]:bottom-[18.95px] [&>.slick-dots]:gap-[8px] [&>.slick-dots]:!flex [&>.slick-dots]:justify-center [&>.slick-dots>li.slick-active>button]:bg-white [&>.slick-dots>li>button]:transition-all [&>.slick-dots>li>button]:duration-500' {...settings}>
            {sliderData.map((data, index) => (
            <div className='max-[767px]:after:hidden after:absolute after:left-0 after:top-0 after:bottom-0 after:right-0 after:bg-gradient-to-r after:from-[rgba(0,0,0,0.7)] after:to-[rgba(0,0,0,0)] relative' key={index}>
                <div className="slider-image w-full relative">
                    <div className='md:flex hidden w-full'>                        
                        <Image className='w-full' src={data.sliderImg} alt='' width={1920} height={957} />
                    </div>
                    <div className='md:hidden flex w-full'>                        
                        <Image className='w-full' src={data.mobSliderImg} alt='' width={1920} height={957} />
                    </div>
                <div className='absolute left-0 top-0 h-full flex md:items-center 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] md:pt-0 pt-[178px] max-[991px]:!top-[25px] z-[2]'>
                    <div className='w-full 2xl:max-w-[845px] xl:max-w-[632px] md:max-w-[562px] max-w-[372px]'>
                        <h1 className='text-white 2xl:text-[60px] xl:text-[45px] text-[40px] md:font-bold font-semibold 2xl:w-[550px] xl:w-[450px] md:w-[355px] mb-3 tracking-[-1.5px] max-[767px]:leading-[1.34]'>
                            {data.sliderHeading}
                        </h1>
                        <p className='text-[#F9F9FB] 2xl:text-[24px] xl:text-[18px] text-base md:leading-7 leading-[1.65] tracking-[-0.2px] 2xl:pt-[30px] xl:pt-[20px] md:pt-[15x] pt-[12px]'>
                            {data.slidePara}
                        </p>
                        <div className='2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px]'>
                            <Link className='bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[200px] xl:max-w-[153.5px] md:max-w-[136.44px] max-w-[123px] 2xl:h-[60px] xl:h-[45px] md:h-[41px] h-[48px] flex justify-center items-center py-[2px] 2xl:text-[19px] xl:text-[14.25px] text-[16px] md:text-[12.67px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-white hover:text-black' href='/'>contact us</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </SlickSlider>
        </div>
    </section>
  );
};

export default Slider;
