import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col  items-center justify-center min-h-screen space-y-5'>
            <h1 className='font-bold text-purple-700 text-5xl text-center'>This page is not found</h1>
            <Link href={'/'}><button className='btn btn-primary'>Back To Home</button></Link>
            
        </div>
    );
};

export default NotFound;