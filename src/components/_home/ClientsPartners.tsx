'use client'
import React from 'react'
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
  

// images
import logoOne from '@/src/assets/images/partner-1.png'
import logoTwo from '@/src/assets/images/partner-2.png'
import logoThree from '@/src/assets/images/partner-3.png'
import logoFour from '@/src/assets/images/partner-4.png'
import logoFive from '@/src/assets/images/partner-5.png'
import logoSix from '@/src/assets/images/partner-6.png'
import logoSeven from '@/src/assets/images/partner-7.png'
import logoEight from '@/src/assets/images/partner-8.png'
import logoNine from '@/src/assets/images/partner-9.png'
import logoTen from '@/src/assets/images/partner-10.png'

const ClientsPartners: React.FC = () => {
    const clientData = [
        {partnerLogo:logoOne},
        {partnerLogo:logoTwo},
        {partnerLogo:logoThree},
        {partnerLogo:logoFour},
        {partnerLogo:logoFive},
        {partnerLogo:logoSix},
        {partnerLogo:logoSeven},
        {partnerLogo:logoEight},
        {partnerLogo:logoNine},
        {partnerLogo:logoTen},
    ]
  return (
    <>
        <section>
            <div className='2xl:py-[75px] xl:py-[66px] py-[40px] px-[25px]'>
                <div className='xl:mb-[45px] mb-[40px]'>
                    <h5 className='text-black font-bold xl:text-[18px] lg:text-base text-[24px] text-center'>
                        Our Clients &amp; partners
                    </h5>
                </div>
                <div className='md:grid hidden grid-cols-5 2xl:gap-[48px] xl:gap-[42px]'>
                    {clientData.map((data,index)=>(
                        <div key={index}>
                            <Image src={data.partnerLogo} alt='' width={240} height={80} />
                        </div>
                    ))}
                </div>
                <div className='md:hidden'>
                <Carousel opts={{ align: "start",loop: true, }} plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
                    <CarouselContent>
                        {clientData.map((data,index)=>(
                            <CarouselItem key={index} className="min-[576px]:basis-1/3 basis-1/2 max-[420px]:basis-full">
                                <div className='flex justify-center'>
                                    <Image src={data.partnerLogo} alt='' width={240} height={80} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                </div>
            </div>
        </section>
    </>
  )
}

export default ClientsPartners