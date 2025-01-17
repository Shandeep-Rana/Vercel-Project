import React from 'react'
import AppCard from './AppCard'

// image
import imgFirst from '@/src/assets/images/app-one.jpg'
import imgSecond from '@/src/assets/images/app-two.jpg'
import imgThird from '@/src/assets/images/app-three.jpg'
import imgFourth from '@/src/assets/images/app-four.jpg'

function OurApplications() {
    const appCardData = [
        {appImg:imgFirst,appTag:'Machine Learning',cardTitle:'Energy Consumption Monitoring',appLink:'/',linkText:'Learn more'},
        {appImg:imgSecond,appTag:'Machine Learning',cardTitle:'Energy Consumption Monitoring',appLink:'/',linkText:'Learn more'},
        {appImg:imgThird,appTag:'Machine Learning',cardTitle:'Energy Consumption Monitoring',appLink:'/',linkText:'Learn more'},
        {appImg:imgFourth,appTag:'Machine Learning',cardTitle:'Energy Consumption Monitoring',appLink:'/',linkText:'Learn more'},
    ]
  return (
    <section>
        <div className='bg-[#111B40] 2xl:pt-[180px] xl:pt-[135px] lg:pt-[120px] pt-[50px] 2xl:pb-[100px] xl:pb-[75px] lg:pb-[66px] pb-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
            <div className='2xl:pb-[70px] xl:pb-[52px] lg:pb-[45px] pb-[40px]'>
                <h2 className='text-center text-white 2xl:text-[47px] xl:text-[35px] lg:text-[31px] text-[24px] font-bold'>Our IOT applications</h2>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 2xl:gap-x-[30px] xl:gap-x-[22.5px] md:gap-x-[20px] lg:gap-y-0 gap-y-[20px]'>
                <AppCard appCardData={appCardData}/>
            </div>
        </div>
    </section>
  )
}

export default OurApplications