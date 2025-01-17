'use client'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'
import SlickSlider from 'react-slick';

interface productCardData {
    productImg: string | StaticImageData
    title: string
    smallTitle: string
    cardLink: string
    arrowImg: string
}

interface ProductSliderProps{
    productCardData:productCardData[]
}

const ProductSlider: React.FC<ProductSliderProps> = ({productCardData}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 3,
                }
              },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
            }
        ]
    };
  return (
    <>  
        <SlickSlider className='[&>.slick-list>.slick-track]:flex 2xl:[&>.slick-list>.slick-track]:gap-[15px] lg:[&>.slick-list>.slick-track]:gap-[11px] [&>.slick-list>.slick-track]:gap-[10px] [&>.slick-arrow]:before:hidden [&>.slick-arrow]:2xl:w-[81.46px] [&>.slick-arrow]:xl:w-[60px] [&>.slick-arrow]:md:w-[54.3px] [&>.slick-arrow]:w-[81.46px] [&>.slick-arrow]:2xl:h-[35.71px] [&>.slick-arrow]:xl:h-[26.78px] [&>.slick-arrow]:md:h-[23.8px] [&>.slick-arrow]:h-[35.71px] [&>.slick-arrow.slick-disabled]:bg-[#E2E2E2] [&>.slick-arrow]:rounded-full [&>.slick-arrow]:bg-center [&>.slick-arrow]:bg-no-repeat [&>.slick-arrow]:bg-[#3563E9] [&>.slick-arrow]:absolute [&>.slick-arrow]:md:!left-[initial] [&>.slick-arrow]:2xl:!right-[72px] [&>.slick-arrow]:xl:!right-[54px] [&>.slick-arrow]:lg:!right-[48px] [&>.slick-arrow]:!right-[20px] [&>.slick-arrow]:2xl:top-[16px] [&>.slick-arrow]:lg:top-[12px] [&>.slick-arrow]:md:top-[6px] [&>.slick-arrow]:top-0 [&>.slick-prev]:2xl:!right-[165px] [&>.slick-prev]:xl:!right-[123px] [&>.slick-prev]:lg:!right-[111px] [&>.slick-prev]:md:!right-[82px] [&>.slick-prev]:!right-[initial] [&>.slick-prev]:max-[767px]:!left-[20px] !position-initial [&>.slick-arrow]:!translate-x-0 [&>.slick-arrow]:!translate-y-0 [&>.slick-prev]:bg-[url(../images/long-prev.svg)] [&>.slick-prev.slick-disabled]:bg-[url(../images/long-prev-dark.svg)] [&>.slick-next]:bg-[url(../images/long-next.svg)] [&>.slick-next.slick-disabled]:bg-[url(../images/long-next-dark.svg)] [&>.slick-arrow]:max-[1535px]:bg-24 [&>.slick-arrow]:max-[1279px]:bg-21 [&>.slick-arrow]:max-[767px]:bg-32 max-[767px]:mt-[24px]' {...settings}>
            {productCardData.map((data, index) => (
                <div className='relative 2xl:rounded-[16px] xl:rounded-[12px] lg:px-[48px]rounded-[10px] rounded-[14px] overflow-hidden 2xl:me-[15px]'>
                    <Image className='w-full' src={data.productImg} alt='' />
                    <div className='absolute left-0 right-0 top-0 bottom-0 2xl:p-[32px] xl:p-[24px] p-[21.33px] flex flex-col justify-between'>
                        <div className='text-white'>
                            <h5 className='2xl:text-[24px] lg:text-[18px] text-base font-bold'>
                                {data.title}
                            </h5>
                            <p className='2xl:pt-[14px] lg:pt-[11px] pt-[10px] 2xl:text-[16px] lg:text-[12px] text-[11px]'>{data.smallTitle}</p>
                        </div>
                        <div>
                            <Link href={data.cardLink}><Image className='2xl:w-[25px] xl:w-[19px] w-[17px]' src={data.arrowImg} alt='' /></Link>
                        </div>
                    </div>
                </div>
            ))}
        </SlickSlider>
    </>
  )
}

export default ProductSlider