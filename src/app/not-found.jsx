import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 px-4'>

            <div className='text-center space-y-4 sm:space-y-6'>

                <h1 className='font-bold text-purple-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                    404
                </h1>

                <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-800'>
                    Page Not Found
                </h2>

                <p className='text-sm sm:text-base text-gray-600 max-w-md mx-auto'>
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                <Link href={'/'}>
                    <button className='btn btn-primary px-5 sm:px-6 text-sm sm:text-base shadow-md hover:scale-105 transition-transform duration-200'>
                        Back To Home
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default NotFound;