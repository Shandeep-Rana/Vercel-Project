import React from 'react'
import ServicesSwiperSlider from './ServicesSwiperSlider'

// images
import serviceOne from '@/src/assets/images/service-one.jpg'
import serviceTwo from '@/src/assets/images/service-two.jpg'
import serviceThree from '@/src/assets/images/service-three.jpg'

function EngineeringServices() {
  const serviceCardData = [
    {serviceImg:serviceOne,serviceActive:'service-slide'},
    {serviceImg:serviceTwo,serviceActive:'service-slide active-service'},
    {serviceImg:serviceThree,serviceActive:'service-slide'},
  ]
  return (
    <>
        <section>
            <div className='bg-[#EEF1F5] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] py-[100px]'>
                <div className='2xl:pb-[70px] xl:pb-[52px] lg:pb-[45px] pb-[40px]'>
                    <h2 className='text-center text-[#1D3157] 2xl:text-[62px] xl:text-[47px] lg:text-[41px] text-[24px] font-bold capitalize'>Product engineering services</h2>
                </div>
                <div className=''>
                  <div>
                    <h3 className='text-center text-[#1D3157] 2xl:text-[47px] xl:text-[35.16px] lg:text-[31.25px] text-base font-bold capitalize'>Product Categories</h3>
                  </div>
                  <div className='2xl:pt-[60px] relative xl:pt-[45px] pt-[40px] flex justify-center items-center 2xl:max-w-[1475px] xl:max-w-[1115px] lg:max-w-[992px] md:max-w-[740px] sm:max-w-[600px] max-[639px]:max-w-[430px] max-[450px]:max-w-[290px] mx-auto w-full [&>.service-slide]:blur-[7.7px] [&>.service-slide]:min-w-[860px] [&>.service-slide.active-service]:blur-0 [&>.service-slide.active-service]:w-[1085px] [&>.service-slide.active-service]:absolute [&>.service-slide.active-service]:left-0 [&>.service-slide.active-service]:right-0 [&>.service-slide.active-service]:mx-auto [&>.service-slide.active-service]:z-[1]'>
                    <ServicesSwiperSlider  />
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default EngineeringServices