"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {

    const pathName = usePathname();

    let isActive = href===pathName;

    

    

    return (
        
            <Link href={href} className={`${isActive? "border-b-2  font-bold" : ""}`}>

                {children}

            </Link>
       
    );
};

export default Navlink;