import React from 'react'
import ValueCard from './ValueCard'

// images
import IconOne from '@/src/assets/images/labour-issues.svg'
import IconTwo from '@/src/assets/images/increase.svg'
import IconThree from '@/src/assets/images/identification.svg'
import IconFour from '@/src/assets/images/failure.svg'
import IconFive from '@/src/assets/images/reduce-time.svg'

function OurValue() {
    const valueData = [
        {valueIcon:IconOne,cardTitle:'Address Labor Issues'},
        {valueIcon:IconTwo,cardTitle:'Unlock Hidden Capacity'},
        {valueIcon:IconThree,cardTitle:'Make data driven decisions'},
        {valueIcon:IconFour,cardTitle:'55% reduction in unexpected failures'},
        {valueIcon:IconFive,cardTitle:'50% reduction in machine downtime'},
    ]
  return (
    <>
        <section>
            <div className='bg-[#111B40] 2xl:pb-[180px] xl:pb-[135px] lg:pb-[120px] pb-[50px] 2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] pt-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
                <div className='2xl:pb-[70px] xl:pb-[52px] lg:pb-[45px] pb-[40px]'>
                    <h2 className='text-center text-white 2xl:text-[47px] xl:text-[35px] lg:text-[31px] text-[24px] font-bold'>Our Value Adds</h2>
                </div>
                <div className='grid md:grid-cols-5 grid-cols-2 items-start 2xl:gap-x-[32px] xl:gap-x-[24px] lg:gap-x-[21px] gap-x-[40px] md:gap-y-0 gap-y-[40px]'>
                    <ValueCard valueData={valueData} />
                </div>
            </div>
        </section>
    </>
  )
}

export default OurValue