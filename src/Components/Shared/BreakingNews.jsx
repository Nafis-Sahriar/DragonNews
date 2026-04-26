import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='text-center py-6 sm:py-8 md:py-10 lg:py-12 space-y-2 sm:space-y-3 px-3 max-w-5xl mx-auto'>

           <Image
             src={logo}
             width={300}
             height={200}
             alt='logo'
             className='mx-auto w-36 sm:w-48 md:w-60 lg:w-72 h-auto'
           />

           <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-600'>
             Journalism without Fear or Favour
           </p>

           <p className='text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-500'>
             {format(new Date(), "EEEE, MMM, dd , yyyy")}
           </p>

        </div>
    );
};

export default Header;