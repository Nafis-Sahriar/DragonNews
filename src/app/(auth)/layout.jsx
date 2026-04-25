import Navbar from '@/Components/Shared/Navbar';
import React from 'react';
import { monserrat } from '../layout';
import { ToastContainer } from 'react-toastify';

const AuthLayout = ({children}) => {
    return (
        <div className={`${monserrat.className}`}>
            <Navbar></Navbar>
            {children}
           
               <ToastContainer />
        </div>
    );
};

export default AuthLayout;