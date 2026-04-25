import Navbar from '@/Components/Shared/Navbar';
import React from 'react';
import { monserrat } from '../layout';

const AuthLayout = ({children}) => {
    return (
        <div className={`${monserrat.className}`}>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayout;