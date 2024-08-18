"use client"; // Mark this file as a Client Component

import { UserProfile } from '@clerk/nextjs';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react'; // Import an icon for the back button

function Settings() {
    const router = useRouter();

    const handleBack = () => {
        router.push('/dashboard/'); // Navigate to the home page
    };

    return (
        <div className='relative flex flex-col items-center justify-center h-full'>
            <button
                onClick={handleBack}
                className='absolute top-4 left-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300'
            >
                <ArrowLeft className='w-6 h-6' />
            </button>
            <div className='flex items-center justify-center mt-10'>
                <UserProfile />
            </div>
        </div>
    );
}

export default Settings;
