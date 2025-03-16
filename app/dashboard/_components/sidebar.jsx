"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { LayoutDashboard, Shield, UserCircle2 } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

function SideBar() {
    const MenuList = [
        {
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/dashboard'
        },
        {
            name: 'Upgrade',
            icon: Shield,
            path: '/dashboard/upgrade'
        },
        {
            name: 'Profile',
            icon: UserCircle2,
            path: '/dashboard/profile'
        }
    ];
    const path=usePathname();
    return (
        <div className='h-screen shadow-md p-5'>
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
                <h2 className='font-bold text-2xl'>Easy Study</h2>
            </div>
            <div className='mt-10'>
            <Button className='w-full mb-4 bg-blue-500 text-white hover:bg-blue-600' variant="default">
    + Create New
</Button>

                <div className='mt-5'>
                    {MenuList.map((menu, index) => (
                        <div
                            key={index}
                            className={`flex gap-5 items-center p-3 hover:bg-slate-200 rounded-lg cursor-pointer mt-3
                                ${path==menu.path&&'bg-slate-200'}`}
                        >
                            <menu.icon />
                            <h2>{menu.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='border p-3 bg-slate-100 rounded-lg
            absolute bottom-10 w-[85%]'>
                <h2 className='text-lg mb-2'>Available Credits : 5</h2>
                <Progress value={30} className="h-2 bg-gray-300">
    <div className="h-2 bg-blue-500 rounded-full transition-all duration-300" style={{ width: "30%" }}></div>
</Progress>

                <h2 className='text-sm'>1 Out of 5 Credits Used </h2>
                <Link href={'/dashboard/upgrade'} className='text-blue-500 text-xs mt-3'>
        Upgrade to create more
      </Link>
            </div>
        </div>
    );
}

export default SideBar;

