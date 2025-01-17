'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa6";
import Image from 'next/image';

// images
import mobArrow from '@/src/assets/images/right-arrow.svg'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIotSolutionsOpen, setIsIotSolutionsOpen] = useState(false); 
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownDivRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleIotSolutions = () => {
    setIsIotSolutionsOpen((prev) => !prev);
    if (isServicesOpen) {
      setIsServicesOpen(false);
    }
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
    if (isIotSolutionsOpen) {
      setIsIotSolutionsOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsIotSolutionsOpen(false);
      setIsServicesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <ul className="hidden xl:flex 2xl:gap-x-[40px] xl:gap-x-[30px]">
            <li className="relative" ref={dropdownRef}>
              <button onClick={toggleIotSolutions} className="2xl:text-[18px] xl:text-[13.5px] text-base text-white flex items-center gap-3">
                Our IOT Solutions <FaChevronDown className={`w-[12px] transform transition-all duration-300 ${isIotSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isIotSolutionsOpen && (
                <div className="absolute 2xl:top-[64px] xl:top-[50px] left-0 w-48 bg-white border shadow-lg 2xl:px-[20px] xl:px-[15px] flex flex-col min-w-[275px] xl:py-3 2xl:rounded-ee-[16px] xl:rounded-ee-[12px] 2xl:rounded-es-[16px] xl:rounded-es-[12px]">
                  <Link href="/" className="text-black 2xl:text-[14px] text-[13.5px] transition-all duration-500 hover:text-[#3563E9] text-nowrap 2xl:py-2.5 xl:py-2 flex">
                    Industrial Solutions Overview
                  </Link>
                  <Link href="/" className="text-black 2xl:text-[14px] text-[13.5px] transition-all duration-500 hover:text-[#3563E9] text-nowrap 2xl:py-2.5 xl:py-2 flex">
                    OEE & Production Monitoring
                  </Link>
                  <Link href="/" className="text-black 2xl:text-[14px] text-[13.5px] transition-all duration-500 hover:text-[#3563E9] text-nowrap 2xl:py-2.5 xl:py-2 flex">
                    Machine Condition Monitoring
                  </Link>
                  <Link href="/" className="text-black 2xl:text-[14px] text-[13.5px] transition-all duration-500 hover:text-[#3563E9] text-nowrap 2xl:py-2.5 xl:py-2 flex">
                    Wireless Sensor Data Aggregation
                  </Link>
                  <Link href="/" className="text-black 2xl:text-[14px] text-[13.5px] transition-all duration-500 hover:text-[#3563E9] text-nowrap 2xl:py-2.5 xl:py-2 flex">
                    Energy Consumption Monitoring
                  </Link>
                </div>
              )}
            </li>

            <li className="relative" ref={dropdownRef}>
              <button onClick={toggleServices} className="2xl:text-[18px] xl:text-[13.5px] text-base text-white flex items-center gap-3">
                Our Services <FaChevronDown className={`w-[12px] transform transition-all duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute 2xl:top-[64px] xl:top-[50px] left-0 w-48 bg-white border shadow-lg 2xl:px-[20px] xl:px-[15px] flex flex-col min-w-[275px] xl:py-3 2xl:rounded-ee-[16px] xl:rounded-ee-[12px] 2xl:rounded-es-[16px] xl:rounded-es-[12px]">
                  <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] text-nowrap 2xl:py-2.5 xl:py-2 flex">
                    Software Development
                  </Link>
                  <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] text-nowrap 2xl:py-2.5 xl:py-2 flex">
                    Consulting
                  </Link>
                  <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] text-nowrap 2xl:py-2.5 xl:py-2 flex">
                    System Integration
                  </Link>
                  <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] text-nowrap 2xl:py-2.5 xl:py-2 flex">
                    Training Services
                  </Link>
                </div>
              )}
            </li>
            <li><Link href="/about" className="2xl:text-[18px] xl:text-[13.5px] text-base text-white">About Us</Link></li>
            <li><Link href="/work" className="2xl:text-[18px] xl:text-[13.5px] text-base text-white">Our Work</Link></li>
            <li><Link href="/work" className="2xl:text-[18px] xl:text-[13.5px] text-base text-white">Media</Link></li>
          </ul>

          <button className="xl:hidden text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="h-[32px] w-[32px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden bg-white w-full absolute left-0 top-[69px] min-h-[calc(100vh_-_69px)] flex flex-col justify-between">
            <ul className="flex flex-col">
              <li className="relative">
                <button
                  onClick={toggleIotSolutions}
                  className="py-[18px] flex items-center justify-between w-full text-black font-normal text-base border-t border-t-[#E5E5E5] px-[20px] focus:text-[#3563E9]"
                >
                  Our IOT Solutions <FaChevronDown className={`ml-2 transform transition-all duration-300 ${isIotSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isIotSolutionsOpen && (
                  <div className="flex flex-col mb-3">
                    <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]">
                      Industrial Solutions Overview
                    </Link>
                    <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]">
                      OEE & Production Monitoring
                    </Link>
                    <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]">
                      Machine Condition Monitoring
                    </Link>
                    <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]">
                      Wireless Sensor Data Aggregation
                    </Link>
                    <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]">
                      Energy Consumption Monitoring
                    </Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button onClick={toggleServices} className="py-[18px] flex items-center justify-between w-full text-black font-normal text-base border-t border-t-[#E5E5E5] px-[20px] focus:text-[#3563E9]">
                  Our Services <FaChevronDown className={`ml-2 transform transition-all duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="flex flex-col mb-3">
                    <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]">
                      Software Development
                    </Link>
                    <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]">
                      Consulting
                    </Link>
                    <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]">
                      System Integration
                    </Link>
                    <Link href="/" className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]">
                      Training Services
                    </Link>
                  </div>
                )}
              </li>
              <li><Link href="/about" className="py-[18px] text-base text-black flex items-center justify-between border-t border-t-[#E5E5E5] px-[20px] focus:text-[#3563E9]">About Us <span><Image src={mobArrow} alt='' /></span></Link></li>
              <li><Link href="/work" className="py-[18px] text-base text-black flex items-center justify-between border-t border-t-[#E5E5E5] px-[20px] focus:text-[#3563E9]">Our Work <span><Image src={mobArrow} alt='' /></span></Link></li>
              <li><Link href="/work" className="py-[18px] text-base text-black flex items-center justify-between border-t border-t-[#E5E5E5] px-[20px] focus:text-[#3563E9] border-b border-b-[#E5E5E5]">Media <span><Image src={mobArrow} alt='' /></span></Link></li>
            </ul>
            <div className='px-[20px] lg:pt-10 md:pt-7 pt-6 pb-5 md:w-auto w-full'>
            <Link className='bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[200px] xl:max-w-[153.5px] lg:max-w-[136.44px] md:max-w-[123px] 2xl:h-[60px] xl:h-[45px] md:h-[41px] h-[48px] flex justify-center items-center py-[2px] 2xl:text-[19px] xl:text-[14.25px] text-[16px] md:text-[12.67px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white md:max-w-auto max-w-full' href='/'>contact us</Link>
        </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;