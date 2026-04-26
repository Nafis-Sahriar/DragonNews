"use client"

import Image from 'next/image';
import React from 'react';
import avatarImage from "@/assets/user.png" 
import Link from 'next/link';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const {data : session, isPending} = authClient.useSession();
    console.log(session);

    const user = session?.user;
    console.log(user);

    const nam = user?.name;
    console.log(nam);

    return (
        <div className='w-[95%] sm:w-[90%] mx-auto mt-4 sm:mt-6 flex flex-col lg:flex-row items-center justify-between gap-4'>
            
            {/* Left Empty Space */}
            <div className='hidden lg:block'></div>

            {/* Nav Links */}
            <ul className='flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-5 text-sm sm:text-base'>
                <li><Navlink href={"/"}>Home</Navlink></li>
                <li><Navlink href={"/about-us"}>About</Navlink></li>
                <li><Navlink href={"/career"}>Career</Navlink></li>
            </ul>

            {/* Right Section */}
            <div className='flex items-center justify-center lg:justify-end w-full lg:w-auto'>

                {
                    isPending ? (
                        <span className="loading loading-bars loading-lg sm:loading-xl"></span>
                    ) : user ? (
                        <div className='flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-5 text-sm sm:text-base'>

                            <h2 className='text-center lg:text-left'>Hi! {nam}</h2>

                            <Image
                                src={avatarImage}
                                height={40}
                                width={40}
                                alt='user'
                                className='w-8 h-8 sm:w-10 sm:h-10 rounded-full'
                            />

                            <button className='btn bg-black text-white text-sm sm:text-base px-3 sm:px-4'>
                                <Link href={'/login'} onClick={async()=>await authClient.signOut()}>
                                    Log out
                                </Link>
                            </button>

                        </div>
                    ) : (
                        <div className='flex justify-center lg:justify-end w-full lg:w-auto'>
                            <button className='btn bg-black text-white text-sm sm:text-base px-3 sm:px-4 w-full sm:w-auto'>
                                <Link href={'/login'}>Log In</Link>
                            </button>
                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default Navbar;