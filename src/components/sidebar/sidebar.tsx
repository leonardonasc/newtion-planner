'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { Logout } from '../logout';
import { ArrowLeft, Menu, Settings, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import { LayoutDashboard, Folder } from 'lucide-react';
import SettingsButton from '../settings';

export default function Sidebar() {

    const navItemsPrimary = [
        {
            label: 'Dashboard',
            href: '/dashboard',
            icon: LayoutDashboard,
        },
        {
            label: 'Projects',
            href: '/projects',
            icon: Folder,
        },
    ];

    const navItemsSecondary = [
        {
            label: 'Settings',
            href: '/settings',
            icon: Settings,
        },
    ];


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobile = useIsMobile();

    return (
        <div className={`${isMenuOpen ? 'w-64' : 'w-20'} h-screen flex flex-col justify-between bg-secondary p-4`}>

            <div className='flex flex-col items-center justify-center gap-y-2 w-full'>
                <div className='flex items-center justify-between w-full'>
                    <h2 className={`text-lg font-bold ${isMenuOpen ? '' : 'hidden'}`}>Menu</h2>
                    <Button variant="outline" onClick={() => setIsMenuOpen(!isMenuOpen)} className={isMenuOpen ? '' : 'w-full'}>
                        {!isMenuOpen ? <Menu className="size-4" /> : <ArrowLeft className="size-4" />}
                    </Button>
                </div>

                <div className='flex flex-col items-start justify-start w-full mt-4 gap-y-6'>
                    <div className='flex flex-col items-start justify-start w-full gap-y-1'>
                        <span className={`text-xs font-bold items-start mb-2 justify-start w-full text-muted-foreground ${isMenuOpen ? '' : 'hidden'}`}>Navigation</span>
                        {navItemsPrimary.map((item, index) => (
                            <a key={index} href={item.href} className='w-full'>
                                <Button variant='ghost' className={`flex hover:border-muted-foreground items-center ${isMenuOpen ? 'justify-start' : 'w-full'} w-full hover:bg-secondary/80`}>
                                    <item.icon className={isMenuOpen ? 'size-4 ' : 'size-4'} />
                                    {isMenuOpen && <span className='ml-2'>{item.label}</span>}
                                </Button>
                            </a>
                        ))}
                    </div>

                    <div className='flex flex-col items-start justify-start w-full gap-y-1'>
                        <span className={`text-xs font-bold items-start mb-2 justify-start w-full text-muted-foreground ${isMenuOpen ? '' : 'hidden'}`}>Secondary</span>
                        {navItemsSecondary.map((item, index) => (
                            <a key={index} href={item.href} className='w-full'>
                                <Button variant='ghost' className={`flex hover:border-muted-foreground items-center ${isMenuOpen ? 'justify-start' : 'w-full'} w-full hover:bg-secondary/80`}>
                                    <item.icon className={isMenuOpen ? 'size-4 ' : 'size-4'} />
                                    {isMenuOpen && <span className='ml-2'>{item.label}</span>}
                                </Button>
                            </a>
                        ))}
                    </div>

                </div>
            </div>

            <div className='flex flex-col items-end gap-y-2'>
                <SettingsButton isMenuOpen={isMenuOpen} />
                <Logout isMenuOpen={isMenuOpen} />
            </div>

        </div >
    )
}
