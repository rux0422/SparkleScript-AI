"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Home } from 'lucide-react';
import { FileClock, Settings, WalletCards } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

function SideNav() {
    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/settings'
        }
    ];

    const path = usePathname();
    const router = useRouter(); // Use useRouter for navigation

    useEffect(() => {
        console.log(path);
    }, [path]);

    const handleNavigation = (path: string) => {
        router.push(path); // Navigate to the clicked path
    };

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            <div className='flex justify-center'>
                <Image src={'/img1.jpeg'} alt='logo' width={500} height={500} />
            </div>

            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <div
                        key={index}
                        className={`flex gap-2 mb-2 p-3
                            hover:bg-pink-500 hover:text-white rounded-lg
                            cursor-pointer items-center
                            ${path === menu.path && 'bg-pink-500 text-white'}
                        `}
                        onClick={() => handleNavigation(menu.path)} // Handle click to navigate
                    >
                        <menu.icon className='h-6 w-6' />
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                ))}
            </div>

            {/* Add the new image here */}
            <div className='absolute bottom-10 right-5 w-full flex justify-center'>
                <Image src="/img3.jpeg" alt="Additional Content" width={200} height={200} />
            </div>
        </div>
    );
}

export default SideNav;
