import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h2 className='p-3 text-xl font-bold '>Login With</h2>

            <div className='flex flex-col pb-2 gap-3'>
                <button className='btn border-blue-500 text-blue-700 '> <FaGoogle />Login with Google</button>
            <button className='btn  ' > <FaGithub />Log in with GitHub</button>
            </div>

            
        </div>
    );
};

export default RightSideBar;