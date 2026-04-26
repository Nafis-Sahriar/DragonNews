"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="w-full lg:w-64 xl:w-72 px-3 sm:px-4 lg:px-2">

            <h2 className="p-2 sm:p-3 text-lg sm:text-xl lg:text-2xl font-bold">
                Login With
            </h2>

            <div className="flex flex-col gap-3 pb-2">

                <button
                    onClick={handleGoogleSignIn}
                    className="btn w-full flex items-center justify-center gap-2 border-blue-500 text-blue-700 text-sm sm:text-base"
                >
                    <FaGoogle />
                    Login with Google
                </button>

                <button
                    className="btn w-full flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                    <FaGithub />
                    Log in with GitHub
                </button>

            </div>

        </div>
    );
};

export default RightSideBar;