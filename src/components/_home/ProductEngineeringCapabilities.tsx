'use client'
import React from 'react'
import ProductSlider from './ProductSlider'

// images
import productOne from '@/src/assets/images/product-one.jpg'
import productTwo from '@/src/assets/images/product-two.jpg'
import productThree from '@/src/assets/images/product-three.jpg'
import productFour from '@/src/assets/images/product-four.jpg'
import productFive from '@/src/assets/images/product-five.jpg'
import productSix from '@/src/assets/images/product-six.jpg'
import productSeven from '@/src/assets/images/product-seven.jpg'
import arrowImage from '@/src/assets/images/long-arrrow.svg'

function ProductEngineeringCapabilities() {
    const productCardData = [
        {productImg:productOne,title:'Embedded Hardware Design',smallTitle:'Build and scale generative AI applications with foundation models (FMs)',cardLink:'/',arrowImg:arrowImage},
        {productImg:productTwo,title:'Embedded Hardware Design',smallTitle:'Build and scale generative AI applications with foundation models (FMs)',cardLink:'/',arrowImg:arrowImage},
        {productImg:productThree,title:'Embedded Software Development',smallTitle:'Build and scale generative AI applications with foundation models (FMs)',cardLink:'/',arrowImg:arrowImage},
        {productImg:productFour,title:'Wireless Systems Development',smallTitle:'Build and scale generative AI applications with foundation models (FMs)',cardLink:'/',arrowImg:arrowImage},
        {productImg:productFive,title:'Technology Consulting',smallTitle:'Build and scale generative AI applications with foundation models (FMs)',cardLink:'/',arrowImg:arrowImage},
        {productImg:productSix,title:'Mechanical & Industrial Design',smallTitle:'Build and scale generative AI applications with foundation models (FMs)',cardLink:'/',arrowImg:arrowImage},
        {productImg:productSeven,title:'Manufacturing Support',smallTitle:'Build and scale generative AI applications with foundation models (FMs)',cardLink:'/',arrowImg:arrowImage},
    ]
  return (
    <>
        <section>
            <div className='bg-[#EEF1F5] 2xl:pt-[100px] xl:pt-[70px] lg:pt-[60px] md:pt-[0px] pt-[15px] overflow-hidden'>
                <div className='relative'>
                    <div className='2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
                        <h2 className='text-[#1D3157] 2xl:text-[47px] xl:text-[35px] lg:text-[31px] text-[24px] font-bold'>Our Product Engineering Capabilities</h2>
                    </div>
                    <div className='2xl:pt-[60px] xl:pt-[45px] pt-[40px] max-[767px]:relative max-[767px]:mt-[40px]'>
                        <ProductSlider productCardData={productCardData} />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductEngineeringCapabilities