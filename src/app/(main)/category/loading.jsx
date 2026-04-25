import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h-[85vh] items-center justify-center'>
            <h1>Category Loading ....</h1>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default LoadingPage;