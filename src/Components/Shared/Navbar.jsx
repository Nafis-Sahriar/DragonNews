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


    

 


  

    // console.log(user.name);
    return (
        <div className='flex justify-between w-[90%] mx-auto items-center mt-6'>
            <div></div>


           <ul className='flex gap-5'>
            <li> <Navlink href={"/"}>Home</Navlink> </li>
            <li> <Navlink href={"/about-us"}>About</Navlink> </li>
            <li> <Navlink href={"/career"}>Career</Navlink> </li>
           
           </ul>

           {

            isPending? <span className="loading loading-bars loading-xl"></span> : 
              user? 
              
              <div>

                <div className='flex gap-5 items-center'>

                <h2>Hi! {nam} </h2>

                <Image src={avatarImage} height={40} width={40} alt='user' ></Image>
                <button className='btn bg-black text-white'><Link href={'/login'} onClick={async()=>await authClient.signOut()}>Log out</Link></button>


                </div>


              </div> 
              
              : 
              
              <div>
                
                <button className='btn bg-black text-white'><Link href={'/login'}>Log In</Link></button>
                
            </div>
           }


          


        </div>
    );
};

export default Navbar;