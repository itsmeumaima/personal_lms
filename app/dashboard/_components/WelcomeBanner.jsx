"use client"
import React from 'react';
import { useUser } from '@clerk/nextjs';

function WelcomeBanner() {
    const {user}=useUser();
    return (
      <div className='p-5 bg-blue-500 w-full text-white rounded-lg flex items-center gap-6'>
        <img src="http://pngimg.com/uploads/laptop/laptop_PNG101815.png" 
             alt="laptop" 
             width="100" 
             height="100" />
             <div>
                <h2 className='font-bold text-3xl'>
                    Hello, {user?.fullName}
                </h2>
                <p className='text-'>
                    Welcome Back, It's time to get back and start learning new course
                </p>
             </div>
      </div>

    );
}

export default WelcomeBanner;
