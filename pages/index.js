import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';

import LandingBanner from '@/components/landing_banner/LandingBanner';
import Wrapper from '@/components/wrapper/Wrapper';

import ProductCard from '@/components/prductcard/ProductCard'



export default function Home() { 

  return(
    
    <main className=''  >
      <LandingBanner />
      {/*Heading and paragraph starts */}
      <Wrapper childern={
        <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
          
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight font-oswald  '>Where Fashion Rhymes with Passion</div>
          
          <div className='text-md md:text-xl '>Welcome to Capilla,
           your ultimate destination for head-turning 
           headwear, sensational sneakers, and captivating caps.
           We've harmoniously blended the worlds of fashion and audio,
            creating a symphony for your senses</div>
          {/*grid start from here */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-15 md:px-0'>


            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            

          </div>
          {/*grid END  */}
        </div>

        
      }
      
      />
      {/*Heading and paragraph Ends */}
    </main>
  );
} 