import Image from 'next/image';
import React from 'react';
import avatarImage from "@/assets/user.png" 
import Link from 'next/link';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='flex justify-between w-[90%] mx-auto items-center mt-6'>
            <div></div>


           <ul className='flex gap-5'>
            <li> <Navlink href={"/"}>Home</Navlink> </li>
            <li> <Navlink href={"/about-us"}>About</Navlink> </li>
            <li> <Navlink href={"/career"}>Career</Navlink> </li>
           
           </ul>


           <div className='flex gap-5'>

                <Image src={avatarImage} height={40} width={40} alt='user' ></Image>
                <button className='btn bg-black text-white'><Link href={'/login'}>Log In</Link></button>

           </div>


        </div>
    );
};

export default Navbar;